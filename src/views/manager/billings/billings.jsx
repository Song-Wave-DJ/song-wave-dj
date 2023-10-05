import { useState } from "react";
import {
  BillingHistory,
  BilllingAction,
  HeaderView,
  LiveBilling,
  MoveTable,
  Payment,
  ViewBill,
} from "./components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { dataLive, pastLive } from "./constants";

export const Billings = () => {
  // State
  const [tableData, setTableData] = useState(null);
  const [orderSummary, setOrderSummary] = useState(null);
  const [isLive, setIsLive] = useState(true);
  const [data, setData] = useState(dataLive);
  const [showQR, setShowQR] = useState(false);
  const [isMoveTable, setIsMoveTable] = useState(false);

  // Hooks
  const location = useLocation();
  const search = useMemo(
    () => location?.search?.split("=")[1] ?? "",
    [location]
  );

  // Method
  const handleSearch = ({ target }) => {
    const { value } = target;
    if (value) {
      setData((prev) => {
        const prevObj = structuredClone(prev);
        const filterData = prevObj.filter((item) => {
          const queryTabel = item.table.toString();

          const query = value.toLowerCase();
          return queryTabel.includes(query);
        });
        return filterData;
      });
    } else {
      setData(isLive ? dataLive : pastLive);
    }
  };

  const onClickBottomDrawer = (table) => {
    setTableData(table);
  };
  const onCloseDrawer = () => {
    setTableData(null);
  };

  const onViewBillings = () => {
    setOrderSummary("new");
  };

  const onViewCancel = () => {
    setOrderSummary(null);
  };

  const handleShowQR = () => {
    setShowQR(true);
    if (showQR) {
      onCloseDrawer();
    }
  };

  const handleCanelShowQR = () => {
    setShowQR(false);
  };

  const onMoveTable = () => {
    setIsMoveTable((prev) => !prev);
  };

  const onUpdateTable = ({ table }) => {
    setData((prev) => {
      const prevObj = structuredClone(prev);
      const idx = prevObj?.findIndex((el) => el.id === tableData?.id);
      if (idx !== -1) {
        const payload = {
          ...tableData,
          table,
        };
        prevObj.splice(idx, 1, payload);
      }
      return prevObj;
    });
    setIsMoveTable(false);
  };

  // Effect
  useEffect(() => {
    if (search === "active") {
      setIsLive(false);
      setData(pastLive);
    } else if (search === "inActive") {
      setData(dataLive);
      setIsLive(true);
    }
  }, [search]);

  return (
    <main className="mx-4 p-4">
      {/* Header */}
      <HeaderView data={data} onChange={handleSearch} />

      {/* body */}
      <div className="border-t py-4 justify-center flex gap-4 flex-wrap">
        {!isLive ? (
          <BillingHistory />
        ) : (
          <LiveBilling data={data} onClickBottomDrawer={onClickBottomDrawer} />
        )}
      </div>

      {/* Billings Actions */}
      <BilllingAction
        onViewBillings={onViewBillings}
        tableNo={tableData?.table ?? ""}
        onCloseDrawer={onCloseDrawer}
        handleShowQR={handleShowQR}
        onMoveTable={onMoveTable}
      />
      {/* Move table */}
      <MoveTable
        isMoveTable={isMoveTable}
        onMoveTable={onMoveTable}
        tableNo={tableData?.table ?? ""}
        onUpdateTable={onUpdateTable}
      />

      {/* Print and take pyament */}
      <Payment handleShowQR={handleCanelShowQR} showQR={showQR} />

      {/* View Billings */}
      <ViewBill orderSummary={orderSummary} onViewCancel={onViewCancel} />
    </main>
  );
};

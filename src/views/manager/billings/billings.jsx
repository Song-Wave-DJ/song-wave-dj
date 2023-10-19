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
import { getMethod } from "../../../services";
import { Spin } from "antd";

export const Billings = ({ isEmployee = false }) => {
  // State
  const [tableData, setTableData] = useState(null);
  const [orderSummary, setOrderSummary] = useState(null);
  const [isLive, setIsLive] = useState(true);
  const [data, setData] = useState(dataLive);
  const [showQR, setShowQR] = useState(false);
  const [isMoveTable, setIsMoveTable] = useState(false);
  const [dateRange, setDateRange] = useState(null);
  const [loading, setLoading] = useState(true);

  // Hooks
  const location = useLocation();
  const search = useMemo(
    () => location?.search?.split("=")[1] ?? "",
    [location]
  );

  const initBillingHistory = async () => {
    const resp = await getMethod("live-billing-history");
    console.log(resp);

    if (resp.message === "ok") {
      const { data = [] } = resp;
      setData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    initBillingHistory();
  }, []);

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
  const onDateRangeFilter = (val) => {
    console.log(val);
    setDateRange(val);
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

  if (loading)
    return (
      <div className="h-screen grid content-center">
        {" "}
        <Spin />
      </div>
    );

  return (
    <main className="mx-4 p-4">
      {/* Header */}
      <HeaderView
        data={data}
        onChange={handleSearch}
        onDateRangeFilter={onDateRangeFilter}
        dateRange={dateRange}
        isLive={isLive}
      />

      {/* body */}
      <div className="border-t py-4 justify-center flex gap-4 flex-wrap">
        {!isLive ? (
          <BillingHistory isEmployee={isEmployee} />
        ) : (
          <LiveBilling
            data={[
              {
                billNo: "123456",
                time: "123456",
                waiterPhone: "123456789",
                table: "23456",
                isActive: true,
              },
            ]}
            onClickBottomDrawer={onClickBottomDrawer}
          />
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

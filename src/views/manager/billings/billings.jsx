import { useState } from "react";
import {
  BillingHistory,
  BilllingAction,
  HeaderView,
  LiveBilling,
  ViewBill,
} from "./components";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { dataLive, pastLive } from "./constants";
import ModalComp from "@/components/modal";
import { QRCode, Space } from "antd";

export const Billings = () => {
  const [tableNo, setTableNo] = useState(null);
  const [orderSummary, setOrderSummary] = useState(null);
  const [isLive, setIsLive] = useState(true);
  const [data, setData] = useState(dataLive);
  const [showQR, setShowQR] = useState(false);

  const navigation = useNavigate();
  const location = useLocation();
  const search = useMemo(
    () => location?.search?.split("=")[1] ?? "",
    [location]
  );

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

  const onClickBottomDrawer = (tableNo) => {
    setTableNo(tableNo);
  };
  const onCloseDrawer = () => {
    setTableNo(null);
  };

  const onViewBillings = () => {
    if (!isLive) {
      navigation(`/dashboard/billings/${tableNo}`);
      return;
    }
    setOrderSummary("new");
  };

  const onViewCancel = () => {
    setOrderSummary(null);
  };

  const handleShowQR = () => {
    setShowQR((prev) => !prev);
  };

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
      <div className="border-t py-4 flex gap-4 flex-wrap">
        {!isLive ? (
          <BillingHistory />
        ) : (
          <LiveBilling data={data} onClickBottomDrawer={onClickBottomDrawer} />
        )}
      </div>

      {/* Billings Actions */}
      <BilllingAction
        onViewBillings={onViewBillings}
        tableNo={tableNo}
        onCloseDrawer={onCloseDrawer}
        isLive={isLive}
        handleShowQR={handleShowQR}
      />

      {/* Print and take pyament */}
      <ModalComp open={showQR} handleCancel={handleShowQR}>
        <Space direction="vertical" align="center">
          <QRCode value={"'https://ant.design/'" || "-"} />
          <h1 className="text-3xl font-semibold">Pay: 400</h1>
        </Space>
      </ModalComp>

      {/* View Billings */}
      <ViewBill orderSummary={orderSummary} onViewCancel={onViewCancel} />
    </main>
  );
};

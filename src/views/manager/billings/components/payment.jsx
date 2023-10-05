import { WalletIcon } from "@/assets/images";
import { Button } from "@/components";
import ModalComp from "@/components/modal";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { QRCode, Space, Tooltip } from "antd";
import { useCallback, useMemo, useState } from "react";

const PaymentType = [
  {
    label: "Pay with QR",
    value: "qr",
  },
  {
    label: "Pay on Cash",
    value: "cash",
  },
];
export const Payment = ({ showQR, handleShowQR }) => {
  const [navigate, setNavigate] = useState("PaymentChoose");
  const [selectedMethod, setSelectedMethod] = useState("qr");

  const onChooseMethod = (id) => {
    setSelectedMethod(id);
  };

  const onNextPage = useCallback(() => {
    switch (selectedMethod) {
      case "cash":
        return setNavigate("Cash");
      case "qr":
        return setNavigate("QR");
      default:
        return <></>;
    }
  }, [selectedMethod]);

  const qrBody = useMemo(
    () => (
      <>
        <Tooltip
          placement="bottom"
          title="Back"
          className="w-14 cursor-pointer"
        >
          <div
            className="bg-[#FAFAFA] px-4 py-2 rounded-md"
            onClick={() => setNavigate("PaymentChoose")}
          >
            <ArrowLeftOutlined />
          </div>
        </Tooltip>
        <Space direction="vertical" align="center">
          <QRCode value={"'https://ant.design/'" || "-"} />
          <h1 className="text-3xl font-semibold">Pay: 400</h1>
        </Space>
      </>
    ),
    []
  );

  const cashAccepted = () => {
    handleShowQR();
    setSelectedMethod("qr");
    setNavigate("PaymentChoose");
  };

  const chooseBody = useMemo(
    () => (
      <div className="">
        <h1 className="text-lg font-semibold mb-4">Choose Payment Method</h1>
        <div className="flex flex-col gap-4">
          {PaymentType.map((item) => {
            const checked = selectedMethod === item.value;
            return (
              <div
                onClick={() => onChooseMethod(item.value)}
                key={item.label}
                className="border flex cursor-pointer gap-2 text-lg items-center font-semibold p-2  rounded-md"
                style={{
                  borderColor: checked ? "#43D396" : "",
                }}
              >
                <input type="radio" checked={checked} />
                <p>{item.label} </p>
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 mt-8">
          <Button
            isLoading={false}
            label="Cancel"
            styles="bg-white border-danger rounded-lg w-full"
            lableStyles="!text-black"
            onClick={handleShowQR}
          />
          <Button
            isLoading={false}
            label="Next"
            onClick={onNextPage}
            styles="rounded-lg w-full"
          />
        </div>
      </div>
    ),
    [selectedMethod, handleShowQR, onNextPage]
  );

  const cashBody = useMemo(
    () => (
      <>
        <Tooltip
          placement="bottom"
          title="Back"
          className="w-14 cursor-pointer"
        >
          <div
            className="bg-[#FAFAFA] px-4 py-2 rounded-md"
            onClick={() => setNavigate("PaymentChoose")}
          >
            <ArrowLeftOutlined />
          </div>
        </Tooltip>
        <div className="flex justify-center gap-5 items-center flex-col">
          <img src={WalletIcon} alt="Cash" className="w-20 object-contain" />
          <h1 className="text-3xl font-semibold">Pay: 400</h1>
          <Button
            isLoading={false}
            label="Accepted"
            styles="rounded-lg w-full"
            onClick={cashAccepted}
          />
        </div>
      </>
    ),
    []
  );

  const renderBody = useMemo(() => {
    switch (navigate) {
      case "Cash":
        return cashBody;
      case "QR":
        return qrBody;
      default:
        return chooseBody;
    }
  }, [cashBody, chooseBody, navigate, qrBody]);

  return (
    <ModalComp open={showQR} handleCancel={handleShowQR} title="Choose">
      {renderBody}
    </ModalComp>
  );
};

import { EmptyIcon } from "../../assets";
import { FoodLoader } from "../../assets/images";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import {
  AddPaymentCard,
  CollapseCard,
  MenuDrawer,
  MenuHeader,
} from "./components";
import ModalComp from "../../components/modal";
import { Button } from "../../components";
import { QRCode, Space, Tooltip } from "antd";
import { useMenuOrder } from "./hooks";

const PaymentType = [
  {
    label: "Pay with QR",
    value: "QR",
  },
  {
    label: "Pay with Card",
    value: "CARD",
  },
  {
    label: "UPI",
    value: "UPI",
  },
];

export const Menu = ({ fromEmployee = false }) => {
  const {
    selectedMethod,
    onChooseMethod,
    onOpenPayment,
    onNextPage,
    setNavigate,
    navigate,
    handlePayNow,
    loaded,
    contextHolder,
    categories,
    isBar,
    onChangeVegNonVeg,
    filterItem,
    onChangeSearch,
    onClose,
    carts,
    isPlacedOrder,
    onPlacedOrder,
    isPaynow,
    setCarts,
    handleRemoveToCart,
    handleAddCart,
    selectQuantity,
    open,
  } = useMenuOrder();

  const chooseBody = useMemo(
    () => (
      <>
        <h1 className="text-lg font-semibold mb-4">Choose Payment Method</h1>
        <div className="flex flex-col gap-4">
          {PaymentType.map((item) => {
            const checked = selectedMethod === item.value;
            return (
              <div
                onClick={() => onChooseMethod(item.value)}
                key={item.label}
                className="border flex cursor-pointer gap-2 text-x items-center font-semibold p-2  rounded-md"
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
            onClick={onOpenPayment}
          />
          <Button
            isLoading={false}
            label="Next"
            onClick={onNextPage}
            styles="rounded-lg w-full"
          />
        </div>
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedMethod]
  );

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
    [setNavigate]
  );

  const renderChooseMethod = useMemo(() => {
    switch (navigate) {
      case "Card":
        return (
          <div className="">
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
            <AddPaymentCard handlePayNow={handlePayNow} />
          </div>
        );
      case "QR":
        return qrBody;
      default:
        return chooseBody;
    }
  }, [chooseBody, handlePayNow, navigate, qrBody, setNavigate]);

  if (loaded) {
    return (
      <div className="flex mt-60 justify-center items-center">
        <img
          src={
            "https://assets-v2.lottiefiles.com/a/05359890-1164-11ee-9f09-d76ef2ed5f8e/RGv5qDO9hu.gif"
          }
          alt=""
          className="mix-blend-darken w-44 object-contain"
        />
      </div>
    );
  }

  return (
    <div className="py-2 px-4 bg-[#171819] min-h-screen">
      {contextHolder}
      <div className="flex sm:w-[600px] w-full m-auto mt-2 flex-col flex-wrap items-center justify-center md:gap-4">
        <MenuHeader
          isBar={isBar}
          onChangeVegNonVeg={onChangeVegNonVeg}
          filterItem={filterItem}
          onChangeSearch={onChangeSearch}
          onClose={onClose}
          carts={carts}
          isPlacedOrder={isPlacedOrder}
          onOpenPayment={onOpenPayment}
        />

        {!categories?.length && (
          <div className="flex h-screen justify-center bg-[#171819] flex-col items-center">
            <img className="w-40 object-contain" alt="" src={EmptyIcon} />
            <p className="text-lg text-white">No data available!</p>
          </div>
        )}
        {/* Body */}
        {!isBar ? (
          categories.map((item, index) => (
            <CollapseCard
              key={item.id}
              {...item}
              index={index}
              menus={item.menus}
              handleAddCart={handleAddCart}
              handleRemoveToCart={handleRemoveToCart}
              carts={carts}
            />
          ))
        ) : (
          <div className="w-full">
            {categories.map((item, idx) => (
              <CollapseCard
                key={idx}
                index={idx}
                {...item}
                menus={item.menus}
                handleAddCart={handleAddCart}
                handleRemoveToCart={handleRemoveToCart}
                carts={carts}
                formDrink
                selectQuantity={selectQuantity}
              />
            ))}
          </div>
        )}
      </div>

      <MenuDrawer
        onClose={onClose}
        open={open}
        carts={carts}
        setCarts={setCarts}
        onPlacedOrder={onPlacedOrder}
        fromEmployee={fromEmployee}
      />

      <ModalComp open={isPaynow} handleCancel={onOpenPayment}>
        <div className="max-h-96">{renderChooseMethod}</div>
      </ModalComp>
    </div>
  );
};

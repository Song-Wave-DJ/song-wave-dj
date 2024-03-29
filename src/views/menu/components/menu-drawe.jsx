/* eslint-disable react/prop-types */
import { EmptyIcon } from "../../../assets";
import { Button } from "../../../components";
import DrawerComp from "../../../components/drawer";
import ModalComp from "../../../components/modal";
import { useEffect, useMemo, useState } from "react";
import { CartMenuCard } from "./cart-menu";
import { OrderSummary } from "./order-summary";
import { Form } from "antd";
import { TextInput } from "../../../components";
import { orderFieldSet } from "../../auth/sign-up/fieldsData";

export const MenuDrawer = ({
  onClose,
  open,
  carts = [],
  setCarts,
  onPlacedOrder,
  fromEmployee,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tax] = useState(10);
  const [gst] = useState(20);
  const [offer] = useState(5);

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onFinish = () => {
    handleCancel();
  };
  const total = useMemo(() => {
    const response = carts.reduce((next, curr) => {
      return next + parseInt(curr?.price) * curr?.qty;
    }, 0);
    return response;
  }, [carts]);

  const renderBody = useMemo(() => {
    return (
      <OrderSummary
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        carts={carts}
        gst={gst}
        tax={tax}
        offer={offer}
        total={total}
        onPlacedOrder={onPlacedOrder}
      />
    );
  }, [carts, gst, isModalOpen, offer, onPlacedOrder, tax, total]);

  useEffect(() => {
    if (!carts?.length) {
      setIsModalOpen(false);
    }
  }, [carts]);

  return (
    <>
      <DrawerComp
        width={350}
        title="Your added cart menu"
        open={open}
        showDrawer={onClose}
        isBorderShow
      >
        {carts?.length > 0 ? (
          <>
            <div className="flex flex-wrap gap-4 mt-4 md:gap-4">
              {carts.map((item) => (
                <CartMenuCard {...item} key={item.id} setCarts={setCarts} />
              ))}
            </div>
            {fromEmployee && (
              <Form
                name="login"
                requiredMark={false}
                layout="vertical"
                className="mt-4"
                onFinish={onFinish}
              >
                <TextInput name="name" {...orderFieldSet.name} />
                <TextInput name="email" {...orderFieldSet.email} />
                <TextInput name="phone" {...orderFieldSet.phone} />
                <TextInput name="restaurantId" {...orderFieldSet.restaurant} />
                <TextInput name="tableId" {...orderFieldSet.tableNo} />
                <Form.Item className="mt-10">
                  <Button label="Proceed" />
                </Form.Item>
              </Form>
            )}

            {!fromEmployee && (
              <div className="mt-10 w-full ">
                <Button
                  onClick={handleCancel}
                  label="Proceed"
                  styles="w-full rounded-lg"
                />
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center">
            <img className="w-40 object-contain" src={EmptyIcon} />
            <p className="text-lg">Your cart is empty</p>
            <div className="mt-8 w-full">
              <Button
                onClick={onClose}
                label="Add Menu"
                styles="w-full rounded-lg"
              />
            </div>
          </div>
        )}
      </DrawerComp>

      <ModalComp width={1024} open={isModalOpen} handleCancel={handleCancel}>
        {renderBody}
      </ModalComp>
    </>
  );
};

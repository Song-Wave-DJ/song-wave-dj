import React, { useEffect, useMemo, useState } from "react";
import DrawerComp from "../../../components/drawer";
import { EmptyIcon } from "../../../assets";
import ModalComp from "../../../components/modal";
import { Button } from "../../../components";
import { Summary } from "./summary";
import { CartMenuCard } from "./cart-menu";

const MenuDrawer = ({ onClose, open, carts, setCarts, onFinish }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tax, _] = useState(10);
  const [gst, __] = useState(20);
  const [offer, ___] = useState(5);

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const total = useMemo(() => {
    const response = carts.reduce((next, curr) => {
      return next + parseInt(curr?.price) * curr?.qty;
    }, 0);
    return response;
  }, [carts]);

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
            <div className="mt-8 w-full">
              <Button
                onClick={handleCancel}
                label="Proceed"
                styles="bg-gradient-to-r from-purple-600 to-purple-400 w-full"
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <img className="w-40 object-contain" src={EmptyIcon} />
            <p className="text-lg">Your cart is empty</p>
            <div className="mt-8 w-full">
              <Button
                onClick={onClose}
                label="Add Menu"
                styles="bg-gradient-to-r from-purple-600 to-purple-400 w-full"
              />
            </div>
          </div>
        )}
      </DrawerComp>

      <ModalComp
        open={isModalOpen}
        handleOk={() => null}
        handleCancel={handleCancel}
      >
        <>
          <h2 className="text-s">Order Summary</h2>
          <div className="my-4 flex justify-between">
            <span className=" text-xs font-semibold">Name</span>
            <span className=" text-xs font-semibold">Quantity</span>
            <span className=" text-xs font-semibold">Price</span>
          </div>

          <Summary
            carts={carts}
            tax={tax}
            gst={gst}
            offer={offer}
            total={total}
          />
          <div className="mt-8 w-full">
            <Button
              label="Order Now"
              styles="bg-gradient-to-r from-purple-600 to-purple-400 w-full"
              onClick={onFinish}
            />
          </div>
        </>
      </ModalComp>
    </>
  );
};

export default MenuDrawer;

import { useEffect, useMemo, useState } from "react";
import { MenuCard } from "./components/menu-card";
import { ShoppingCartOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { CartMenuCard } from "./components/cart-menu";
import { Button } from "../../components";
import DrawerComp from "../../components/drawer";
import ModalComp from "../../components/modal";
import { Link } from "react-router-dom";
import { EmptyIcon } from "../../assets";
import { useNotification } from "../../hooks";

const dummyData = [
  {
    id: "1",
    title: "Burger Recipe",

    price: 234,
  },
  {
    id: "2",
    title: "Burger Recipe",
    price: 234,
  },
  {
    id: "3",
    title: "Burger Recipe",
    price: 234,
  },
];
export const Menu = () => {
  const [open, setOpen] = useState(false);
  const [carts, setCarts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tax, _] = useState(10);
  const [gst, __] = useState(20);
  const [offer, ___] = useState(5);

  const { openNotificationWithIcon, contextHolder } = useNotification();
  const onClose = () => {
    setOpen((prev) => !prev);
  };

  const handleAddCart =
    ({ id, title, url, price }) =>
    () => {
      setCarts((prev) => [
        ...prev,
        {
          id,
          title,
          price,
          url,
          qty: 1,
        },
      ]);
    };

  const handleRemoveToCart =
    ({ id }) =>
    () => {
      setCarts((prev) => {
        const prvObj = structuredClone(prev);
        const filterData = prvObj.filter((item) => item.id !== id);
        return filterData;
      });
    };

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const total = useMemo(() => {
    const response = carts.reduce((next, curr) => {
      return next + parseInt(curr?.price) * curr?.qty;
    }, 0);
    return response;
  }, [carts]);

  const onFinish = (paylaod) => {
    openNotificationWithIcon({
      message: "Order Placed",
      description: "Your placed successfully!",
      type: "success",
    });
    handleCancel();
    onClose();
    setCarts([]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-2 min-h-screen sm:w-[500px] w-full m-auto px-2 relative">
      {contextHolder}
      <div className="flex mt-2 m-auto justify-between items-center">
        <Link to="/menu">
          <ArrowLeftOutlined />
          <span className="px-1">Back</span>
        </Link>
        <div
          onClick={onClose}
          className="text-2xl cursor-pointer border flex relative justify-center w-10 h-10 p-2 rounded-full"
        >
          <ShoppingCartOutlined />
          {carts?.length > 0 ? (
            <div className="bg-gradient-to-r absolute top-[-6px] right-[-4px] from-purple-600 to-purple-400 flex items-center justify-center rounded-full w-4 h-4">
              <span className="text-x">{carts?.length}</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex m-auto flex-col flex-wrap gap-4 relative mt-4 items-center justify-center md:gap-4">
        {dummyData.map((item) => (
          <MenuCard
            carts={carts}
            {...item}
            key={item.id}
            handleAddCart={handleAddCart}
            handleRemoveToCart={handleRemoveToCart}
          />
        ))}
      </div>

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
          {carts.map((el) => (
            <div className="my-4 flex justify-between" key={el.id}>
              <span className="text-xxs">{el.title}</span>
              <span className="text-xxs flex-[.4]">{el.qty}</span>
              <span className="text-xxs">${el.price}</span>
            </div>
          ))}
          {/* Tax */}
          <div className="my-4 flex justify-between">
            <span className="text-xxs">Tax</span>
            <span className="text-xxs">${tax}</span>
          </div>
          {/* GST */}
          <div className="my-4 flex justify-between">
            <span className="text-xxs">GST</span>
            <span className="text-xxs">${gst}</span>
          </div>
          <div className="my-4 flex justify-between">
            <span className="text-xxs">Offer</span>
            <span className="text-xxs">${offer}</span>
          </div>
        </>
        <div className="border-y py-4 flex justify-between">
          <span className=" text-lg">Total</span>
          <span className="text-lg">${total + gst + tax - offer}</span>
        </div>

        <div className="mt-8 w-full">
          <Button
            label="Order Now"
            styles="bg-gradient-to-r from-purple-600 to-purple-400 w-full"
            onClick={onFinish}
          />
        </div>
      </ModalComp>
    </div>
  );
};

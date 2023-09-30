import { useMemo } from "react";
import { VegIcon, NonVegIcon } from "../../../assets";
import { DrinkIcon } from "../../../assets/images";

export const CartMenuCard = ({ id, title, type, qty, price, setCarts }) => {
  const renderIcon = useMemo(() => {
    switch (type?.toLowerCase()) {
      case "veg":
        return VegIcon;
      case "non-veg":
        return NonVegIcon;
      default:
        return DrinkIcon;
    }
  }, [type]);

  const handleDecrease = () => {
    setCarts((prev) => {
      const prevObj = structuredClone(prev);
      return prevObj.map((item) => {
        if (item.id === id && item.qty > 1) {
          return {
            ...item,
            qty: qty - 1,
          };
        } else
          return {
            ...item,
          };
      });
    });
  };

  const handleIncrease = () => {
    setCarts((prev) => {
      const prevObj = structuredClone(prev);
      return prevObj.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: qty + 1,
          };
        } else
          return {
            ...item,
          };
      });
    });
  };

  const onChangeQty = (e) => {
    const { value } = e.target;
    if (!value) return;
    setCarts((prev) => {
      const prevObj = structuredClone(prev);
      return prevObj.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: value?.trim(),
          };
        } else
          return {
            ...item,
          };
      });
    });
  };

  const handleRemoveToCart = () => {
    setCarts((prev) => {
      const prvObj = structuredClone(prev);
      const filterData = prvObj.filter((item) => item.id !== id);
      return filterData;
    });
  };

  return (
    <div className="p-2 relative flex w-full justify-between border-b  rounded-md ">
      <div className="p-1">
        <img src={renderIcon} className="w-4 h-4 object-contain" />
        <h3 className="text-xs">{title}</h3>
        <p className="text-x text-light">&#x20B9;{price}</p>
      </div>
      <div className="flex justify-center px-1 gap-2 items-center">
        {qty === 1 ? (
          <div
            className="rounded-full border cursor-pointer h-6 w-6 flex justify-center items-center"
            onClick={handleRemoveToCart}
          >
            <span className="text-xs text-red-90 mb-1 font-semibold">x</span>
          </div>
        ) : (
          <div
            className="rounded-full border cursor-pointer h-6 w-6 flex justify-center items-center"
            onClick={handleDecrease}
          >
            <span className="text-xl mb-2 font-semibold">-</span>
          </div>
        )}

        <input
          onChange={onChangeQty}
          type="text"
          value={qty}
          className="border text-center w-10 rounded-full"
        />
        {/* <p className="text-xxs">{qty}</p> */}

        <div
          className="rounded-full border cursor-pointer h-6 w-6 flex justify-center items-center"
          onClick={handleIncrease}
        >
          <span className="text-xl mb-1 font-semibold">+</span>
        </div>
      </div>
    </div>
  );
};

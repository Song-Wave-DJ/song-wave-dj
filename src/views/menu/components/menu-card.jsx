/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { DrinkIcon, NonVegIcon, VegIcon } from "../../../assets";
import ViewMenu from "../../manager/menus/view-menu";
import { useCallback } from "react";

const prices = [
  {
    price: 123,
    ml: 30,
  },
  {
    price: 1234,
    ml: 60,
  },
  {
    price: 1223,
    ml: 90,
  },
];

export const MenuCard = ({
  id,
  title,
  price,
  url,
  handleAddCart,
  carts = [],
  handleRemoveToCart,
  menus,
  type,
  formDrink,
  available = true,
  selectQuantity,
}) => {
  const [isVisibleData, setIsVisible] = useState(null);
  const [defaultMl, setDefaultML] = useState(30);

  const defaultMlSelect = useMemo(
    () => (formDrink ? defaultMl : null),
    [formDrink, defaultMl]
  );

  const isExistMenu = useMemo(
    () => carts.some((el) => el.id === id),
    [carts, id]
  );

  const defaultPrice = useMemo(
    () => (formDrink ? prices[0]?.price : price),
    [price, formDrink]
  );

  const handleCancelModal = () => {
    setIsVisible(null);
  };

  const handleView = (id) => {
    const data = menus?.find((el) => el.id === id);
    setIsVisible(data);
  };

  const handleMlChoose = useCallback(
    (el) => {
      if (!available) return;
      selectQuantity(el, id);
      setDefaultML(el.ml);
    },
    [id, selectQuantity, available]
  );

  const renderIcon = useMemo(() => {
    switch (type?.toLowerCase()) {
      case "veg":
        return VegIcon;
      case "non-veg":
        return NonVegIcon;
      case "drink":
        return DrinkIcon;
      default:
        return null;
    }
  }, [type]);

  const qunatity = useCallback(
    (el) => {
      const checked = available ? defaultMl === el.ml : false;
      return (
        <div className="flex gap-3 py-2" onClick={() => handleMlChoose(el)}>
          <div className="flex gap-1 cursor-pointer">
            <input type="radio" checked={checked} />
            <span className="text-xs text-light font-sans">{el.ml}ml</span>
          </div>
        </div>
      );
    },
    [handleMlChoose, defaultMl, available]
  );

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="p-2">
          {renderIcon && (
            <img src={renderIcon} className="w-4 h-4 object-contain" />
          )}
          <h3 className="text-sm font-sans capitalize">{title}</h3>
          <div className="flex items-center gap-2">
            {formDrink ? (
              prices.map((el, idx) => (
                <div key={el.ml}>
                  {qunatity(el)}
                  <p className="text-sm text-light font-sans">
                    {idx === 0 ? <span>&#x20B9;</span> : ""}
                    {el.price} {idx !== prices.length - 1 ? "/" : ""}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-light font-sans">&#x20B9;{price}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-20 h-20 shadow-md shadow-gray-900  rounded-lg">
            <img
              src={url}
              alt=""
              className="rounded-lg w-full h-full cursor-pointer"
              onClick={() => handleView(id)}
            />
            {!isExistMenu ? (
              !available ? (
                <button
                  className="px-1 cursor-not-allowed py-[.5px] absolute text-x bottom-[-10px] left-[1px] 
                bg-danger rounded-lg text-white"
                >
                  Not available
                </button>
              ) : (
                <button
                  className="px-3 py-0 absolute text-x bottom-[-10px] left-5 
               bg-primary rounded-lg text-white"
                  onClick={handleAddCart({
                    id,
                    title,
                    price: defaultPrice,
                    type,
                    ml: defaultMlSelect,
                  })}
                >
                  Add
                </button>
              )
            ) : (
              <button
                className="px-3 py-0 absolute text-x bottom-[-10px] left-2 
                bg-danger rounded-lg text-white"
                onClick={handleRemoveToCart({ id })}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
      <ViewMenu
        isVisible={!!isVisibleData}
        handleCancelModal={handleCancelModal}
        {...isVisibleData}
        category={title}
      />
    </>
  );
};

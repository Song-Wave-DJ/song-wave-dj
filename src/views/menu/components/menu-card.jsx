/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { DrinkIcon, NonVegIcon, VegIcon } from "../../../assets";
import ViewMenu from "../../manager/menus/view-menu";

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
}) => {
  const [isVisibleData, setIsVisible] = useState(null);

  const isExistMenu = useMemo(
    () => carts.some((el) => el.id === id),
    [carts, id]
  );

  const handleCancelModal = () => {
    setIsVisible(null);
  };

  const handleView = (id) => {
    const data = menus?.find((el) => el.id === id);
    setIsVisible(data);
  };

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

  const qunatity = useMemo(() => {
    return (
      <div className="flex gap-3 py-2">
        <div className="flex gap-1 cursor-pointer">
          <input type="radio" />
          <span className="text-xs text-light font-sans">30ml</span>
        </div>
        <div className="flex gap-1 cursor-pointer">
          <input type="radio" />
          <span className="text-xs text-light font-sans">60ml</span>
        </div>
        <div className="flex gap-1 cursor-pointer">
          <input type="radio" />
          <span className="text-xs text-light font-sans">90ml</span>
        </div>
      </div>
    );
  }, []);

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="p-2">
          {renderIcon && (
            <img src={renderIcon} className="w-4 h-4 object-contain" />
          )}
          <h3 className="text-sm font-sans capitalize">{title}</h3>
          {formDrink && <div className="flex">{qunatity}</div>}
          {formDrink ? (
            <p className="text-sm text-light font-sans">
              &#x20B9; {price}/{price}/{price}
            </p>
          ) : (
            <p className="text-sm text-light font-sans">&#x20B9;{price}</p>
          )}
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
                  onClick={handleAddCart({ id, title, price, type })}
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

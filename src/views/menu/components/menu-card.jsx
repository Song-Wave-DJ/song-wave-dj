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
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="p-2">
          {renderIcon && (
            <img src={renderIcon} className="w-4 h-4 object-contain" />
          )}
          <h3 className="text-sm font-sans capitalize">{title}</h3>
          <p className="text-sm text-light font-sans">&#x20B9;{price}</p>
        </div>
        <div className="flex justify-center items-center">
          {!isExistMenu ? (
            <div className="relative w-20 h-20 shadow-md shadow-gray-900  rounded-lg">
              <img
                src={url}
                alt=""
                className=" rounded-lg w-full h-full cursor-pointer"
                onClick={() => handleView(id)}
              />
              <button
                className="px-3 py-1 absolute top-16 left-5 
                text-purple-100 text-x rounded-lg bg-gradient-to-r from-purple-600 to-purple-400"
                onClick={handleAddCart({ id, title, price, type })}
              >
                Add
              </button>
            </div>
          ) : (
            <div className="relative w-20 h-20 shadow-md shadow-gray-900  rounded-lg">
              <img src={url} alt="" className=" rounded-lg w-full h-full" />
              <button
                className="text-x text-center absolute top-16  left-3 px-2 py-1 text-red-100 rounded-lg bg-gradient-to-r from-red-600 to-red-400"
                onClick={handleRemoveToCart({ id })}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
      <ViewMenu
        isVisibleData={!!isVisibleData}
        handleCancelModal={handleCancelModal}
        {...isVisibleData}
      />
    </>
  );
};

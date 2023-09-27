import { useMemo } from "react";
import { VegIcon, NonVegIcon } from "../../../assets";

export const MenuCard = ({
  id,
  title,
  price,
  handleAddCart,
  carts = [],
  handleRemoveToCart,
  isFormDrink,
}) => {
  const isExistMenu = useMemo(
    () => carts.some((el) => el.id === id),
    [carts, id]
  );

  return (
    <div className="p-2 flex justify-between mb-4 w-full border-b">
      <div className="p-2">
        {isFormDrink && (
          <img src={VegIcon} className="w-4 h-4 object-contain" />
        )}
        <h3 className="text-xs">{title}</h3>
        <p className="text-x text-light">${price}</p>
      </div>
      <div className="flex justify-center items-center">
        {!isExistMenu ? (
          <button
            className="px-4 py-1 text-purple-100 text-x rounded-full bg-gradient-to-r from-purple-600 to-purple-400"
            onClick={handleAddCart({ id, title, price })}
          >
            Add
          </button>
        ) : (
          <button
            className="text-x text-center px-4 py-1 text-red-100 rounded-full bg-gradient-to-r from-red-600 to-red-400"
            onClick={handleRemoveToCart({ id })}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

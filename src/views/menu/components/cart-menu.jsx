import { VegIcon, NonVegIcon } from "../../../assets";

export const CartMenuCard = ({ id, title, qty, price, setCarts }) => {
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

  const handleRemoveToCart =
    ({ id }) =>
    () => {
      setCarts((prev) => {
        const prvObj = structuredClone(prev);
        const filterData = prvObj.filter((item) => item.id !== id);
        return filterData;
      });
    };

  return (
    <div className="p-2 relative flex w-full justify-between border-b  rounded-md ">
      <div className="p-1">
        <img src={NonVegIcon} className="w-4 h-4 object-contain" />
        <h3 className="text-xs">{title}</h3>
        <p className="text-x text-light">${price}</p>
      </div>
      <div className="flex justify-center px-1 gap-2 items-center">
        <div
          className="rounded-full border cursor-pointer h-6 w-6 flex justify-center items-center"
          onClick={handleDecrease}
        >
          <span className="text-xl  mb-1 font-semibold">-</span>
        </div>
        <p className="text-xxs">{qty}</p>

        <div
          className="rounded-full border cursor-pointer h-6 w-6 flex justify-center items-center"
          onClick={handleIncrease}
        >
          <span className="text-xl mb-1 font-semibold">+</span>
        </div>
      </div>
      {/* <div
        className="absolute right-[-8px] cursor-pointer top-[-10px] w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r from-red-600 to-red-400"
        onClick={handleRemoveToCart({ id })}
      >
        <span className="text-white mb-1">x</span>
      </div> */}
    </div>
  );
};

/* eslint-disable react/prop-types */
import { RadioButton, Searching } from "@/components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ChefIcon } from "../../../assets";

export const MenuHeader = ({
  isBar,
  onChangeVegNonVeg,
  filterItem,
  onChangeSearch,
  onClose,
  carts = [],
  isPlacedOrder,
  onOpenPayment,
}) => {
  return (
    <div className="bg-white z-10 w-full sticky top-0 items-center">
      {/* Running order */}
      {isPlacedOrder && (
        <div className="flex items-center justify-between bg-white z-10 gap-4 p-2 w-full border rounded-lg ">
          <div className="flex gap-3 items-center">
            <img src={ChefIcon} alt="" />
            <p className="text-lg">Your food is being prepaired</p>
          </div>
          <div
            className="text-right whitespace-nowrap text-white cursor-pointer px-2 py-1 rounded-full bg-primary"
            onClick={onOpenPayment}
          >
            Pay Now
          </div>
        </div>
      )}
      {/* Search */}
      <div className="flex my-4 bg-white items-center justify-between gap-2">
        {!isBar ? (
          <RadioButton
            OPTIONS={["All", "Veg", "Non-Veg"]}
            onChange={onChangeVegNonVeg}
            value={filterItem}
          />
        ) : (
          <div className="flex gap-2 items-center">
            <input type="radio" checked />
            <p className="text-lg md:w-60 w-20 font-semibold">Bar</p>
          </div>
        )}
        <Searching styles="py-2  flex-1" onChange={onChangeSearch} />
        <div
          onClick={onClose}
          className="text-2xl cursor-pointer border flex relative justify-center w-10 h-10 p-2 rounded-full"
        >
          <ShoppingCartOutlined />
          {carts?.length > 0 ? (
            <div className="bg-gradient-to-r absolute top-[-6px] right-[-4px] from-purple-600 to-purple-400 flex items-center justify-center rounded-full w-4 h-4">
              <span className="text-x text-white">{carts?.length}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

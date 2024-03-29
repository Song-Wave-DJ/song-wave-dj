/* eslint-disable react/prop-types */
import { RadioButton, Searching } from "../../../components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ChefIcon } from "../../../assets";
import { Link } from "react-router-dom";

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
    <div className="bg-[#000] z-10 w-full sticky top-3 items-center">
      {/* Running order */}
      {isPlacedOrder && (
        <div className="flex mb-4 items-center justify-between  z-10 gap-4 p-2 w-full border rounded-lg ">
          <div className="flex gap-3 items-center">
            <img src={ChefIcon} alt="" />
            <p className="text-lg text-white">Your food is being prepaired</p>
          </div>
          <Link to="/order-history/234" className="flex gap-2">
            <div className="text-right whitespace-nowrap text-white cursor-pointer px-2 py-1 rounded-full bg-primary">
              View Order
            </div>
            <div
              className="text-right whitespace-nowrap text-white cursor-pointer px-2 py-1 rounded-full bg-primary"
              onClick={onOpenPayment}
            >
              Pay Now
            </div>
          </Link>
        </div>
      )}
      {/* Search */}
      <div className="border  border-none flex items-center  p-2 flex-1 bg-[#242424] rounded-lg">
        <input
          type="text"
          className="bg-[#242424] w-full text-white outline-none"
          placeholder="Search food hear..."
          onChange={onChangeSearch}
        />
      </div>
      <div className="flex my-4 items-center justify-between gap-2">
        {!isBar ? (
          <RadioButton
            OPTIONS={["All", "Veg", "Non-Veg"]}
            onChange={onChangeVegNonVeg}
            value={filterItem}
          />
        ) : (
          <div className="flex gap-2 items-center">
            <input type="radio" checked />
            <p className="text-lg md:w-60 w-20 text-[#E4C290] font-semibold">
              Bar
            </p>
          </div>
        )}

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

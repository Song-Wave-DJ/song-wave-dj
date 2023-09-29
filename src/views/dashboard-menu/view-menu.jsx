import React from "react";

import { Modal } from "../../components";
import { NonVegIcon, VegIcon } from "../../assets";

const ViewMenu = ({
  id,
  name = "",
  category = "",
  price = 0,
  isVisible,
  handleCancelModal,
  description = "",
}) => {
  return (
    <>
      <Modal open={isVisible} handleCancel={handleCancelModal}>
        <div className="flex flex-col justify-center  items-center p-2">
          <div className="w-40 h-40 rounded-full p-2">
            <img
              className="w-full h-full rounded-full object-cover"
              src={
                "https://media.istockphoto.com/id/508345848/photo/grilled-chicken-legs.jpg?s=612x612&w=0&k=20&c=udlSRhW1K7kprBSxSjZ9HoO5YeCYUNOHqY3-BTGpXWI="
              }
              alt=""
            />
          </div>
          {/* desc */}
          <div className="px-4 py-2 text-lg flex flex-col gap-1 items-center">
            <h1 className="text-xl">{name}</h1>
            <p className="text-lg">{category}</p>
            <div className="flex flex-wrap items-center gap-1">
              <img
                src={"veg" === "veg" ? VegIcon : NonVegIcon}
                className="w-3 h-3 object-contain"
              />
              <span className="text-x">
                {"veg" === "veg" ? "Veg" : "Non-Veg"}
              </span>
            </div>
            <p className="text-lg">&#x20B9;{price}</p>
            <p className="text-center text-xs">{description}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewMenu;
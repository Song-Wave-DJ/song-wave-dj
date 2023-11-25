/* eslint-disable react/prop-types */
import { NonVegIcon, VegIcon } from "../../../assets";
import { Modal } from "../../../components";

const ViewMenu = ({
  title = "",
  name = "",
  category = "",
  price = 0,
  isVisible,
  handleCancelModal,
  url = "",
  description = "NA",
  type,
}) => {
  return (
    <>
      <Modal open={isVisible} handleCancel={handleCancelModal}>
        <div className="flex flex-col justify-center  items-center p-2">
          <div className="w-40 h-40 rounded-full p-2">
            <img
              className="w-full h-full rounded-full object-cover"
              src={url}
              alt=""
            />
          </div>
          {/* desc */}
          <div className="px-4 py-2 text-lg flex flex-col gap-1 items-center">
            <h1 className="text-xl text-center">{name ?? title}</h1>
            <p className="text-lg">{category}</p>
            <div className="flex flex-wrap items-center gap-1">
              <img
                alt=""
                src={type?.toLowerCase() === "veg" ? VegIcon : NonVegIcon}
                className="w-3 h-3 object-contain"
              />
              <span className="text-xs">
                {type?.toLowerCase() === "veg" ? "Veg" : "Non-Veg"}
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

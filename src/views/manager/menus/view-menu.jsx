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
  description = "I respectfully disagree - component state is an excellent place to store data that is specific to the UI of a component, that has no relevance to the app as a whole, for example. Without being able to potentially pass default values as props in some instances,",
  type,
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
            <h1 className="text-xl text-center">{name ?? title}</h1>
            <p className="text-lg">{category}</p>
            <div className="flex flex-wrap items-center gap-1">
              <img
                src={type === "veg" ? VegIcon : NonVegIcon}
                className="w-3 h-3 object-contain"
              />
              <span className="text-xs">
                {type === "veg" ? "Veg" : "Non-Veg"}
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

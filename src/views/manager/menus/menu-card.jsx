/* eslint-disable react/prop-types */
import { Tooltip } from "antd";
import {
  DeleteIcon,
  EditIcon,
  NonVegIcon,
  VegIcon,
  ViewIcon,
} from "../../../assets";
import { DuplicateIcon } from "../../../assets/images";
import { MyImage } from "../../../components";

export const MenuCard = ({
  handleView,
  handleDelete,
  handleEdit,
  handleDulicate,
  name,
  price,
  category,
  type,
  imageUrl = "https://media.istockphoto.com/id/508345848/photo/grilled-chicken-legs.jpg?s=612x612&w=0&k=20&c=udlSRhW1K7kprBSxSjZ9HoO5YeCYUNOHqY3-BTGpXWI=",
  id,
}) => {
  return (
    <div className="w-[300px] sm:w-[350px] h-[350px] px-4 shadow-lg hover:shadow-xl  ring-1 ring-gray-100 rounded-md">
      <div className="w-36 h-36 m-auto p-2">
        <MyImage
          src={imageUrl}
          alt={name}
          styles="w-full h-full rounded-full object-cover"
        />
      </div>
      {/* desc */}
      <div className="flex flex-col gap-1 my-3 items-center">
        <h1 className="text-center overflow-hidden truncate text-lg font-semibold w-[280px] sm:w-[330px]">
          {name}
        </h1>
        <p className="">{category}</p>
        <div className="flex items-center gap-1">
          <img
            src={type === "veg" ? VegIcon : NonVegIcon}
            className="w-3 h-3 object-contain"
          />
          <span className="text-x mt-0">
            {type?.toLowerCase() === "veg" ? "Veg" : "Non-Veg"}
          </span>
        </div>
        <p>&#x20B9;{price}</p>
      </div>
      {/* icons */}
      <div className="flex flex-wrap w-[90%] gap-4 justify-between m-4">
        <Tooltip placement="bottom" title="View">
          <div
            className="w-10 h-10 flex shadow-md justify-center  items-center cursor-pointer rounded-full  bg-red-50"
            onClick={() => handleView(id)}
          >
            <ViewIcon />
          </div>
        </Tooltip>

        <Tooltip placement="bottom" title="Edit">
          <div
            className="w-10 h-10 flex shadow-md justify-center  items-center cursor-pointer rounded-full  bg-red-50"
            onClick={() => handleEdit(id)}
          >
            <EditIcon />
          </div>
        </Tooltip>
        <Tooltip placement="bottom" title="Delete">
          <div
            className="w-10 h-10 flex shadow-md justify-center  items-center cursor-pointer rounded-full  bg-red-50"
            onClick={() => handleDelete(id)}
          >
            <DeleteIcon />
          </div>
        </Tooltip>

        <Tooltip placement="bottom" title="Duplicate">
          <div
            className="w-10 h-10 flex shadow-md justify-center  items-center cursor-pointer rounded-full  bg-red-50"
            onClick={() => handleDulicate(id)}
          >
            <img className="w-6 object-contain" src={DuplicateIcon} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

import { Tooltip } from "antd";
import {
  DeleteIcon,
  EditIcon,
  NonVegIcon,
  VegIcon,
  ViewIcon,
} from "../../assets";
import { DuplicateIcon } from "../../assets/images";

export const DashbordMenuCard = ({
  handleView,
  handleDelete,
  handleEdit,
  handleDulicate,
  name,
  price,
  category,
  type,
  imageUrl,
  id,
}) => {
  return (
    <div className="w-96 h-[400px] flex flex-col items-center shadow-lg rounded-md relative p-2">
      <div className="w-40 h-40 rounded-full p-2">
        <img
          className="w-full h-full rounded-full object-cover"
          src={imageUrl}
          alt=""
        />
      </div>
      {/* desc */}
      <div className="absolute px-4 py-2 text-lg  bottom-0 flex flex-col gap-1 items-center">
        <h1 className="text-center">{name}</h1>
        <p className="">{category}</p>
        <div className="flex flex-wrap items-center gap-1">
          <img
            src={type === "veg" ? VegIcon : NonVegIcon}
            className="w-4 h-4 object-contain"
          />
          <span>{type === "veg" ? "Veg" : "Non-Veg"}</span>
        </div>
        <p>&#x20B9;{price}</p>

        {/* icons */}
        <div className="flex flex-wrap gap-4 justify-between my-4">
          <Tooltip placement="bottom" title="View">
            <div
              className="w-12 h-12 flex   justify-center  items-center cursor-pointer rounded-full  bg-red-50"
              onClick={() => handleView(id)}
            >
              <ViewIcon />
            </div>
          </Tooltip>

          <Tooltip placement="bottom" title="Edit">
            <div
              className="w-12 h-12 flex   justify-center  items-center cursor-pointer rounded-full  bg-red-50"
              onClick={() => handleEdit(id)}
            >
              <EditIcon />
            </div>
          </Tooltip>
          <Tooltip placement="bottom" title="Delete">
            <div
              className=" w-12 h-12 flex   justify-center  items-center cursor-pointer rounded-full  bg-red-50"
              onClick={() => handleDelete(id)}
            >
              <DeleteIcon />
            </div>
          </Tooltip>

          <Tooltip placement="bottom" title="Duplicate">
            <div
              className="w-12 h-12 flex justify-center  items-center cursor-pointer rounded-full  bg-red-50"
              onClick={() => handleDulicate(id)}
            >
              <img className="w-6 object-contain" src={DuplicateIcon} />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
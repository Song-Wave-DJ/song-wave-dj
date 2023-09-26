import React, { useMemo } from "react";
import { Card } from "antd";
import { StarIcon, CancelIcon } from "@/assets/svg";
import MyImage from "../image";
import { Link } from "react-router-dom";
import { AddIcon } from "@/assets";

const MenuCard = ({ onAddMenu, onRemoveMenu, selectedMenu, ...props }) => {
  const { price, name, dish_image, id, rating, description } = props;

  const isExist = useMemo(
    () => selectedMenu?.some(({ id }) => id === props.id),
    [selectedMenu]
  );

  return (
    <div className="p-2 relative">
      <Card style={{ height: 240 }}>
        <div className="relative flex flex-col items-center justify-center">
          <div className=" flex w-9 rounded-3xl justify-center items-center absolute top-[-15px] right-[-10px] bg-grey-secondarylight">
            <StarIcon />
            <p>{props.rating || 4}</p>
          </div>
          <Link
            to="/singlemenu"
            state={{
              data: {
                dish_image,
                id,
                name,
                rating,
                price,
                description,
              },
            }}
            className="w-28 h-28 rounded-full"
          >
            <MyImage
              height={112}
              width={112}
              src={props.dish_image}
              styles="rounded-full object-cover h-28 w-28"
            />
          </Link>
          <h1 className="text-lg mt-2 w-full whitespace-nowrap text-ellipsis text-center overflow-hidden font-serif font-bold ">
            {props.name}
          </h1>
          <h3 className="font-sansfont-xss">{props.price} AED</h3>

          <button onClick={onAddMenu(props)}>
            <img
              className={`${
                !isExist ? "h-6 w-6 mt-2 cursor-pointer" : "hidden"
              }`}
              src={AddIcon}
              alt=""
            />
          </button>
          <button
            onClick={onRemoveMenu(props.id)}
            className={`${isExist ? "h-6 w-6 mt-2 cursor-pointer" : "hidden"}`}
          >
            <CancelIcon />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default MenuCard;

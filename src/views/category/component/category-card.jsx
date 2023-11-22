/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const CategoryCard = ({
  name,
  imageUrl,
  type,
  tableId,
  resturantId,
}) => {
  console.log({ resturantId });
  return (
    <Link
      to={`/menu?category=${type}?restaurantId=${resturantId}&tableId=
      ${tableId}`}
      className="shadow-lg bg-[#fff] rounded-lg min-h-[208px] w-full md:w-72"
    >
      <div className="h-40 w-full">
        <img
          loading="lazy"
          className="bg-contain rounded-t h-full w-full bg-no-repeat"
          src={imageUrl}
          alt=""
        />
        <div className="text-2xl font-bold my-2 mt-3">
          <h1 className="text-center uppercase text-[#B59410] ">{name}</h1>
        </div>
      </div>
    </Link>
  );
};

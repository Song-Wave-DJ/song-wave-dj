/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const MenuCategoryCard = ({ name, imageUrl, type }) => {
  return (
    <Link
      to={`/employee/menu?category=${type}`}
      className="shadow-lg min-h-[280px] w-full md:w-72"
    >
      <div className="h-56 w-full">
        <img
          loading="lazy"
          className="bg-contain rounded-t h-full w-full bg-no-repeat"
          src={imageUrl}
        />
        <div className="text-2xl font-bold my-2 mt-3">
          <h1 className="text-center uppercase">{name}</h1>
        </div>
      </div>
    </Link>
  );
};

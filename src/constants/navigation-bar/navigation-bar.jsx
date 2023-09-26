import { Link } from "react-router-dom";
import { MobileNavigation, Navigation } from "../../constants";
import { Drawers } from "../../@storybook/drawer";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

export const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="py-2 bg-black sticky top-0 z-20">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-white py-4">3 Hours</h1>
      </div>
      <div className="md:block  hidden transition">
        <ul className="flex justify-center gap-8 pb-4">
          {Navigation.map((el) => (
            <Link
              to={el.path}
              key={el.id}
              className="text-white cursor-pointer hover:underline text-xl"
            >
              {el.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="md:hidden block">
        <ul className="flex justify-center items-center  gap-4 pb-2  ">
          {MobileNavigation.map((el) => (
            <Link
              to={el.path}
              key={el.id}
              className="text-white cursor-pointer hover:underline text-lg"
            >
              {el.label}
            </Link>
          ))}
          <h1
            className="text-white text-end absolute top-9 right-4"
            onClick={onClose}
          >
            <MenuOutlined />
          </h1>
        </ul>
      </div>

      <Drawers open={open} onClose={onClose}>
        <ul className="flex flex-col gap-4 pb-2 ml-4 mt-8 ">
          {Navigation.map((el) => (
            <Link
              to={el.path}
              key={el.id}
              className="cursor-pointer hover:underline text-xl"
            >
              {el.label}
            </Link>
          ))}
        </ul>
      </Drawers>
    </nav>
  );
};

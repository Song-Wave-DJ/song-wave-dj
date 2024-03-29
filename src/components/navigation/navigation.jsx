import { useState } from "react";
import { MobileNavigation, Navigation } from "./constants";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import DrawerComp from "../drawer";

export const Naviagtion = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`pb-2 border-white shadow-lg ${
        isDark ? "bg-[#000]" : "bg-white"
      }`}
    >
      {/* Naviagtion */}
      <div className="sm:hidden block">
        <ul className="flex justify-center py-2 gap-6">
          {MobileNavigation.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className={`${isDark ? "text-white" : ""} text-sm`}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="sm:block hidden py-3">
        <ul className="flex justify-center gap-6">
          {Navigation.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className={`${isDark ? "text-white" : ""} text-sm`}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
      <div
        className="sm:hidden block humburger--menu absolute top-3 right-2"
        onClick={openDrawer}
      >
        <MenuOutlined />
      </div>
      <DrawerComp width={300} showDrawer={openDrawer} open={isOpen}>
        <div className="">
          <ul className="flex flex-col  pl-6 gap-6">
            {Navigation.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                className="text-sm"
                onClick={openDrawer}
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
      </DrawerComp>
    </div>
  );
};

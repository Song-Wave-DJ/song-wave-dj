import React, { useState } from "react";
import { DashboardNavigation } from "./constants";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import DrawerComp from "../drawer";

export const DashboardNaviagtion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="py-2 px-4 mb-1 shadow-xl gap-2 items-center flex justify-between">
      <h1 className="text-2xl text-center py-2">Song Wave</h1>
      <div className="py-3">
        <ul className="flex justify-center gap-6">
          {DashboardNavigation.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className="text-lg hidden md:flex hover:underline"
            >
              {item.label}
            </Link>
          ))}
          <div className="cursor-pointer block md:hidden" onClick={openDrawer}>
            <MenuOutlined />
          </div>
        </ul>
        <DrawerComp width={300} showDrawer={openDrawer} open={isOpen}>
          <div className="">
            <ul className="flex flex-col  pl-6 gap-6">
              {DashboardNavigation.map((item) => (
                <Link
                  to={item.path}
                  key={item.id}
                  onClick={openDrawer}
                  className="text-xs"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
        </DrawerComp>
      </div>
    </div>
  );
};

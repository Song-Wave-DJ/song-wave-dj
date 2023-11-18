import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { MobileNavigation, Navigation } from "../../constants";
import DrawerComp from "../../components/drawer";

export const Naviagtion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="pb-2">
      <div className="sm:hidden block">
        <ul className="flex justify-center pt-4 py-2 gap-6">
          {MobileNavigation.map((item) => (
            <Link to={item.path} key={item.id} className="text-white text-2xl">
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="sm:block hidden">
        <ul className="flex pt-10 justify-center gap-6">
          {Navigation.map((item) => (
            <Link to={item.path} key={item.id} className="text-white text-2xl">
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
      <div
        className="sm:hidden block humburger--menu absolute top-5 right-2"
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
                className="text-xs"
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

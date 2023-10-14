import { useMemo, useState } from "react";
import { AdminNavigation as AdminNavigations } from "./constants";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import DrawerComp from "../drawer";

export const AdminNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const pathname = useMemo(
    () => location.pathname.split("/")[2] ?? "dashboard",
    [location]
  );

  const openDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="py-2 px-4 mb-1 shadow-lg gap-2 items-center flex justify-between">
      <Link to="/admin-dashboard">
        <h1 className="text-2xl text-center py-2">Song Wave</h1>
      </Link>
      <div className="py-3">
        <ul className="flex justify-center gap-6">
          {AdminNavigations.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className="text-lg hidden md:flex hover:underline hover:text-primary"
              style={{
                color:
                  pathname.toUpperCase() === item.label.toUpperCase()
                    ? "#43D396"
                    : "",
              }}
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
              {AdminNavigations.map((item) => (
                <Link
                  to={item.path}
                  key={item.id}
                  onClick={openDrawer}
                  className="text-xs"
                  style={{
                    color: pathname === item.path ? "#43D396" : "",
                  }}
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

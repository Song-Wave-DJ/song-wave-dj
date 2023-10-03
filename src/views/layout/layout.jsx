import { Outlet } from "react-router-dom";
import { Naviagtion } from "../../components";

export const Layout = () => {
  return (
    <>
      <Naviagtion />
      <Outlet />
    </>
  );
};

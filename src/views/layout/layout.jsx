import { Outlet } from "react-router-dom";
import { Naviagtion } from "../../components";

export const Layout = ({ isDark = false }) => {
  return (
    <>
      <Naviagtion isDark={isDark} />
      <Outlet />
    </>
  );
};

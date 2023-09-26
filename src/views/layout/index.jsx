import { Outlet } from "react-router-dom";
import { Naviagtion } from "../../components";

const Layout = () => {
  return (
    <main>
      <Naviagtion />
      <Outlet />
    </main>
  );
};

export default Layout;

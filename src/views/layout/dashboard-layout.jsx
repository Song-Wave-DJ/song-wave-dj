import { Outlet } from "react-router-dom";
import { ManagerNaviagtion } from "../../components/navigation";

export const DashboardLayout = () => {
  return (
    <>
      <ManagerNaviagtion />
      <Outlet />
    </>
  );
};

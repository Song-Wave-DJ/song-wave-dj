import { Outlet } from "react-router-dom";
import { DashboardNaviagtion } from "../../components/navigation";

export const DashboardLayout = () => {
  return (
    <>
      <DashboardNaviagtion />
      <Outlet />
    </>
  );
};

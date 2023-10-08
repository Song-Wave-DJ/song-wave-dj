import { Outlet } from "react-router-dom";
import { ManagerNaviagtion } from "../../components/navigation";

export const ManagerLayout = ({ isEmployee = false }) => {
  return (
    <>
      <ManagerNaviagtion isEmployee={isEmployee} />
      <Outlet />
    </>
  );
};

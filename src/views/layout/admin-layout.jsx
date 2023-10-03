import { Outlet } from "react-router-dom";
import { AdminNavigation } from "../../components/navigation";

export const AdminLayout = () => {
  return (
    <>
      <AdminNavigation />
      <Outlet />
    </>
  );
};

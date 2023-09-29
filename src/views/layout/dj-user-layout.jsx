import { Outlet } from "react-router-dom";
import { DJUserNaviagtion } from "../../components/navigation/dj-user-navigation";

export const DJUserLayout = () => {
  return (
    <>
      <DJUserNaviagtion />
      <Outlet />
    </>
  );
};

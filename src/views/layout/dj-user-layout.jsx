import { Outlet } from "react-router-dom";
import { DJUserNaviagtion } from "../../components/navigation";

export const DJUserLayout = () => {
  return (
    <>
      <DJUserNaviagtion />
      <Outlet />
    </>
  );
};

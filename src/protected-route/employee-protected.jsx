import { Navigate } from "react-router-dom";
import { UserType } from "../constants";

// eslint-disable-next-line react/prop-types
export const ProtectedEmployeeRoute = ({ children }) => {
  const role = "WAITER";

  if (role === UserType.Waiter) return <>{children} </>;
  else return <Navigate to="/login" />;
};

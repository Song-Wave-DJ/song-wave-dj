import { Navigate } from "react-router-dom";
import { UserType } from "../constants";

// eslint-disable-next-line react/prop-types
export const ProtectedEmployeeRoute = ({ children }) => {
  const role = "EMPLOYEE";

  if (role === UserType.Employee) return <>{children} </>;
  else return <Navigate to="/login" />;
};

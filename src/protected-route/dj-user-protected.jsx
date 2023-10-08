import { Navigate } from "react-router-dom";
import { UserType } from "../constants";

// eslint-disable-next-line react/prop-types
export const ProtectedDJUserRoute = ({ children }) => {
  const role = "DJUSER";

  if (role === UserType.DJUSer) return <>{children} </>;
  else return <Navigate to="/login" />;
};

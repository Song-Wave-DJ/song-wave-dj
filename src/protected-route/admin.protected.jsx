import { Navigate } from "react-router-dom";
import { UserType } from "../constants";

// eslint-disable-next-line react/prop-types
export const ProtectedAdminRoute = ({ children }) => {
  const role = "ADMIN";

  if (role === UserType.Manager) return <>{children} </>;
  else return <Navigate to="/login" />;
};

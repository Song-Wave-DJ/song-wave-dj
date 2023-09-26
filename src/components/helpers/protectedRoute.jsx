import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "@/context";
import CircleLoader from "../circle-loader";
import { UserType } from "@/constant";
import { getToken } from "../../helper";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const token = getToken();

  if (!token) return <Navigate to="/login" />;

  if (!user) return <CircleLoader />;

  if (user?.role === UserType.Employee || user?.role === UserType.Restaurant)
    return <>{children} </>;
  else return <Navigate to="/login" />;
};

export default ProtectedRoute;

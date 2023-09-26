import React from "react";
import { DashboardNavigation } from "./constants";
import { Link } from "react-router-dom";

export const DashboardNaviagtion = () => {
  return (
    <div className="py-2 px-4 mb-1 shadow-xl gap-2 items-center flex justify-between">
      <h1 className="text-2xl text-center py-2">3 Hours</h1>
      <div className="py-3">
        <ul className="flex justify-center gap-6">
          {DashboardNavigation.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className="text-lg hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

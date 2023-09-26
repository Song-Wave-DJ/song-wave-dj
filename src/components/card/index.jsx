import React from "react";
import { Card } from "antd";
import { Skeleton } from "antd";

const CardLayout = ({ children, name, total, icon, isLoading }) => (
  <div className="p-4">
    <Card
      style={{ width: 320, height: 160 }}
      className="shadow	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) font-sans"
    >
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <p className="text-base text-[#717171]">{name} </p>
          <h1 className="font-semibold text-2xl my-3">{total || 0}</h1>

          <div className="flex justify-between items-center">
            <div>{children}</div>
            <img
              src={icon}
              loading="lazy"
              className="h-10 object-cover opacity-30"
            />
          </div>
        </>
      )}
    </Card>
  </div>
);

export default CardLayout;

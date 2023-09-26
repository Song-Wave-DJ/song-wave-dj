import React from "react";
import { Card, Skeleton } from "antd";

const MenuCardLoader = () => (
  <Card style={{ height: 240 }} className="flex justify-center w-full ">
    <Skeleton.Image
      active
      style={{ width: 110, borderRadius: "100%", height: 110 }}
    />
    <br />
    <br />
    <p className="bg-[#E4E4E4] h-[10px] w-full rounded-3xl mb-2"></p>
    <p className="bg-[#E4E4E4] h-[10px] w-full rounded-3xl mb-2"></p>
    <p className="bg-[#E4E4E4] h-[10px] w-full rounded-3xl mb-2"></p>
    <p className="bg-[#E4E4E4] h-[10px] w-full rounded-3xl mb-2"></p>
  </Card>
);

export default MenuCardLoader;

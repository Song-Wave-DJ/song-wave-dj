import React from "react";
import { Tabs } from "antd";

const Tab = ({ items }) => (
  <Tabs defaultActiveKey="1" className="w-full font-sans" items={items} />
);

export default Tab;

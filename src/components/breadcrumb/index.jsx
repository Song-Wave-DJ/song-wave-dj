import React from "react";
import { Breadcrumb } from "antd";

const BreadcrumbComponent = ({ items }) => (
  <Breadcrumb items={items} separator="|" className="font-sans" />
);

export default BreadcrumbComponent;

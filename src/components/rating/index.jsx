import React from "react";
import { Rate } from "antd";

const Rating = ({ defaultValue }) => (
  <Rate disabled defaultValue={defaultValue} />
);

export default Rating;

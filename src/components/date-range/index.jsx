import React from "react";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const DateRange = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
  </Space>
);

export default DateRange;

import React, { useState } from "react";
import { Form, Select } from "antd";
import "../style.css";

const SelectComp = ({
  options = [],
  disabled = false,
  placeholder = "Select",
  style,
  ...rest
}) => {
  return (
    <>
      <Form.Item hasFeedback={false} {...rest}>
        <Select
          disabled={disabled}
          placeholder={placeholder}
          options={options}
          style={style}
        />
      </Form.Item>
    </>
  );
};

export default SelectComp;

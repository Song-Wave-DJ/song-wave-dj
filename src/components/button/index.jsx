/* eslint-disable react/prop-types */
import React from "react";
import { Button as AndButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Button = ({
  label,
  onClick,
  htmlType = "submit",
  isLoading,
  styles = "w-full",
  icon = false,
}) => {
  return (
    <AndButton
      loading={isLoading}
      disabled={isLoading}
      htmlType={htmlType}
      onClick={onClick}
      className={`bg-green-500 flex justify-center font-sans items-center p-5 rounded-lg 
      hover:opacity-60  hover:transition-all ${styles}`}
    >
      {icon && <PlusOutlined />}
      <p className="text-lg text-white">{label}</p>
    </AndButton>
  );
};

export default Button;

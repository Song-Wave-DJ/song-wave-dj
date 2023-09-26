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
      type="primary"
      className={`bg-[#000D11] flex justify-center font-sans items-center p-5 rounded-full 
      hover:!bg-[#000D11] hover:opacity-60 ${styles}`}
    >
      {icon && <PlusOutlined />}
      {label}
    </AndButton>
  );
};

export default Button;

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
      className={`bg-purpal flex !hover:bg-[#916E99] justify-center font-sans items-center p-5 rounded-full 
      hover:opacity-60  hover:transition-all ${styles}`}
    >
      {icon && <PlusOutlined />}
      <p className="text-lg">{label}</p>
    </AndButton>
  );
};

export default Button;

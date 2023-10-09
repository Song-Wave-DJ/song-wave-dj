/* eslint-disable react/prop-types */
import { Button as AndButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Button = ({
  label,
  onClick,
  htmlType = "submit",
  isLoading,
  styles = "w-full",
  icon = false,
  lableStyles = "",
  disabled = false,
}) => {
  return (
    <AndButton
      loading={isLoading}
      disabled={disabled}
      htmlType={htmlType}
      onClick={onClick}
      className={`bg-primary flex justify-center font-sans items-center p-5 rounded-lg 
      hover:opacity-60  hover:transition-all ${styles}`}
    >
      {icon && <PlusOutlined />}
      <p className={`text-lg text-white ${lableStyles}`}>{label}</p>
    </AndButton>
  );
};

export default Button;

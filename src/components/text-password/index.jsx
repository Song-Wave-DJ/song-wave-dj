import { Form, Input } from "antd";
import "./style.css";

const TextPassword = ({
  className,
  labelCol,
  rules,
  label,
  inputClassName,
  placeholder,
  name = "password",
  ...rest
}) => {
  return (
    <Form.Item
      name={name}
      className={className}
      labelCol={labelCol}
      rules={rules}
      label={label}
      {...rest}
    >
      <Input.Password
        type="password"
        placeholder={placeholder}
        className={inputClassName}
      />
    </Form.Item>
  );
};

export default TextPassword;

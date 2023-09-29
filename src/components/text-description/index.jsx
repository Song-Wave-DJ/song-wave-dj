import { MailOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
const { TextArea } = Input;

export const TextDescription = ({
  label,
  labelCol,
  rules,
  suffix = true,
  disabled,
  placeholder,
  inputClassName = "",
  name,
  className,
  rows = 6,
}) => {
  return (
    <Form.Item
      name={name}
      validateStatus="success"
      hasFeedback={false}
      label={label}
      labelCol={labelCol}
      rules={rules}
      className={className}
    >
      <TextArea
        disabled={disabled}
        prefix={false}
        placeholder={placeholder}
        className={inputClassName}
        suffix={suffix && <MailOutlined />}
        rows={rows}
      />
    </Form.Item>
  );
};

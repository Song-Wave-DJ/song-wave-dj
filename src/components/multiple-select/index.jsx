import React from "react";
import { Select, Tag } from "antd";

const tagRender = (props) => {
  const { label, value, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={false}
      onClose={onClose}
    >
      <span className="text-[#000]">{label}</span>
    </Tag>
  );
};

const MultipleSelect = ({
  onChange,
  OPTIONS,
  placeholder = "Filter by Category",
}) => {
  return (
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      defaultValue={[]}
      className="mx-0 md:mx-4 my-2 w-full md:w-72 md:my-0"
      options={OPTIONS}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default MultipleSelect;

import { Select } from "antd";
import React from "react";

const Dropdown = ({
  onChange,
  placeholder = "Filter by Category",
  OPTIONS = [],
  selectedItems,
  width = 250,
}) => {
  return (
    <Select
      placeholder={placeholder}
      value={selectedItems}
      onChange={onChange}
      style={{
        width: width,
      }}
      className="mx-4 py-1 w-full"
      options={OPTIONS.filter((o) => !selectedItems.includes(o)).map(
        (item) => ({
          value: item,
          label: item,
        })
      )}
    />
  );
};

export default Dropdown;

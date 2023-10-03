/* eslint-disable react/prop-types */
import { Select } from "antd";

const Dropdown = ({
  onChange,
  placeholder = "Filter by Category",
  OPTIONS = [],
  selectedItems,
  width = 250,
  optionalClassName,
}) => {
  return (
    <Select
      placeholder={placeholder}
      value={selectedItems}
      onChange={onChange}
      style={{
        width: width,
      }}
      className={`mx-4 py-1 w-full ${optionalClassName}`}
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

import React from "react";
import { Radio } from "antd";

const RadioButton = ({ onChange, value, OPTIONS }) => {
  return (
    <Radio.Group onChange={onChange} value={value}>
      {OPTIONS.map((item) => (
        <Radio
          style={{
            borderColor: "red !important",
          }}
          key={item}
          value={item}
          className="font-sans text-[#E4C290]"
        >
          {item}
        </Radio>
      ))}
    </Radio.Group>
  );
};
export default RadioButton;

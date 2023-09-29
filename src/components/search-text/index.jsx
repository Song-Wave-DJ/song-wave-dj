import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

let DELAY = 500;

const Searching = ({ onChange, styles }) => {
  // delay thr search when typing keyboard
  const debounceFn = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func?.apply(context, args);
      }, DELAY);
    };
  };

  return (
    <Input
      placeholder="Search here..."
      onChange={debounceFn(onChange)}
      className={`rounded-lg text-xxs ${styles}`}
      prefix={
        <SearchOutlined
          style={{
            color: "#717171",
            fontSize: 14,
          }}
        />
      }
    />
  );
};

export default Searching;

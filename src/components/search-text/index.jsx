import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

let DELAY = 500;

const Searching = ({ onChange, styles, placeholder = "Search here..." }) => {
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
      placeholder={placeholder}
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

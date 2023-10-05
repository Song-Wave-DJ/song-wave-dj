import { Switch } from "antd";
import "./style.css";

const SwitchComp = ({
  onChange,
  className,
  value,
  prefixName = "INACTIVE",
  suffixName = "ACTIVE",
  disabled,
}) => {
  return (
    <div className="w-full flex gap-1">
      <span className="text-xs text-green">{prefixName}</span>
      <Switch
        defaultChecked={value}
        onChange={onChange}
        className={className}
        disabled={disabled}
      />
      <span className="text-xs  text-red">{suffixName}</span>
    </div>
  );
};

export default SwitchComp;

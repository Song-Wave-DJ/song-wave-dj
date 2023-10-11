import { useState } from "react";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const DateRange = ({ onChangeDateRange, dateRange }) => {
  const [dates, setDates] = useState(null);

  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        value={dates || dateRange}
        onCalendarChange={(val) => {
          setDates(val);
        }}
        onChange={(val) => {
          onChangeDateRange(val);
        }}
        onOpenChange={onOpenChange}
        changeOnBlur
        className="py-2"
      />
    </Space>
  );
};

export default DateRange;

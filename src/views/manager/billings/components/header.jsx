/* eslint-disable react/prop-types */
import { Searching, Button } from "@/components";
import { useNavigate } from "react-router-dom";
import { DateRange } from "../../../../components";

export const HeaderView = ({
  data = [],
  onChange,
  onDateRangeFilter,
  dateRange,
  isLive = false,
}) => {
  const navigation = useNavigate();

  const onPastView = () => {
    navigation("?isPast=active");
  };

  const onLiveView = () => {
    navigation("?isPast=inActive");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between mb-4 items-center gap-4">
      <p className="bg-[#FAFAFA] w-full md:w-auto  px-4 py-2 rounded-sm text-lg">
        Total Live Billings: {"   "}
        <span className="text-primary text-lg">{data?.length}</span>
      </p>
      <p className="bg-[#FAFAFA] w-full md:w-auto px-4 py-2 rounded-sm text-lg">
        Total Post Billings: {"   "}
        <span className="text-primary text-lg">{data?.length}</span>
      </p>
      <div className="flex flex-col-reverse w-full md:w-auto  md:flex-row flex-1 justify-end gap-4">
        <Button
          isLoading={false}
          label="Live Billings"
          styles="rounded-lg bg-white  border-grey-90"
          lableStyles="!text-black"
          onClick={onLiveView}
        />
        <Button
          isLoading={false}
          label="Billing History"
          styles="rounded-lg"
          onClick={onPastView}
        />
        <Searching onChange={onChange} styles="flex-[.9] md:flex-[.2] py-2" />
        {!isLive && (
          <DateRange
            onChangeDateRange={onDateRangeFilter}
            dateRange={dateRange}
          />
        )}
      </div>
    </div>
  );
};

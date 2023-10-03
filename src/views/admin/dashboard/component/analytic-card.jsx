/* eslint-disable react/prop-types */
import { Title as TextTitle } from "@/components";

export const AnalyticCard = ({ label, total, color, icon, percentage }) => {
  return (
    <div className="w-full md:w-[16.5rem] rounded-lg p-4 hover:shadow-md h-[12rem] bg-white">
      <TextTitle label={label} styles="text-lg" />

      <div className="flex justify-between items-center">
        <TextTitle label={total} styles="mb-0" />
        <div
          className="h-14 w-14 flex justify-center items-center rounded-lg mt-2"
          style={{
            background: color,
          }}
        >
          <img src={icon} className="object-contain h-8 w-8" alt="" />
        </div>
      </div>

      <div className="w-full bg-[#C7CBD3] rounded-full h-2.5 mt-8">
        <div className="w-full h-3 mb-4 bg-[#C7CBD3] rounded-full ">
          <div
            className="h-3 rounded-full"
            style={{ width: percentage, background: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

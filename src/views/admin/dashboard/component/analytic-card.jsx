/* eslint-disable react/prop-types */
import { Title as TextTitle } from "@/components";
import ProgressLine from "./progresss-line";

export const AnalyticCard = ({ label, total, color, icon, percentage }) => {
  return (
    <div className="w-full md:w-[16.5rem] rounded-lg p-4 hover:shadow-md h-[9rem] bg-white">
      <TextTitle label={label} styles="text-lg" />

      <div className="flex justify-between items-center">
        <TextTitle label={total} styles="!mb-0" />
        <div
          className="h-10 w-10 flex justify-center items-center rounded-lg mt-1"
          style={{
            background: color,
          }}
        >
          <img src={icon} className="object-contain h-6 w-6" alt="" />
        </div>
      </div>
      <ProgressLine
        backgroundColor={color}
        visualParts={[
          {
            percentage: percentage,
            color: "tan",
          },
        ]}
      />
    </div>
  );
};

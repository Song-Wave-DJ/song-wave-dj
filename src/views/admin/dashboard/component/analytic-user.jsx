import { AnalyticCard } from "./analytic-card";
import { DoughnutChart } from "./dougnut-chart";
import {
  ApprovedIcon,
  HandIcon,
  RequestIcon,
  OrderIconss,
  FeedbackIcon,
  UserIcon,
} from "../../../../assets";
import { Title as TextTitle } from "../../../../components";

const LabelData = [
  {
    label: "Total Menu Clicked",
    total: 500,
    icon: HandIcon,
    color: "#FF4B4B",
    percentage: "40%",
  },
  {
    label: "Total Category Clicked",
    total: 500,
    icon: HandIcon,
    color: "#05BBC9",
    percentage: "90%",
  },
  {
    label: "Total Songs Clicked",
    total: 500,
    icon: HandIcon,
    color: "#FE721C",
    percentage: "54%",
  },
  {
    label: "Total Order",
    total: 500,
    icon: OrderIconss,
    color: "#158DF7",
    percentage: "50%",
  },
  {
    label: "Total Music Request",
    total: 500,
    icon: RequestIcon,
    color: "#43D396",
    percentage: "20%",
  },
  {
    label: "Total Music Played",
    total: 500,
    icon: ApprovedIcon,
    color: "#876CFE",
    percentage: "80%",
  },
  {
    label: "Total Music Decline",
    total: 500,
    icon: ApprovedIcon,
    color: "#8ced36",
    percentage: "80%",
  },
  {
    label: "Total Feedback",
    total: 200,
    icon: FeedbackIcon,
    color: "#f8d75dc1",
    percentage: "80%",
  },
  {
    label: "Total User",
    total: 160,
    icon: UserIcon,
    color: "#f31aa0ec",
    percentage: "20%",
  },
];
export const AnalyticUser = () => {
  return (
    <div className="flex my-4 gap-4 md:flex-row flex-col">
      <div className="bg-white hover:shadow-md min-h-[30rem] md:h-[30rem] p-2 w-full md:w-[26rem] rounded-lg">
        <TextTitle label="Total User" styles="text-lg" />
        <DoughnutChart />
        <div className="flex justify-between mt-2">
          <p className="text-x">Manager</p>
          <p className="text-x font-semibold">200</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-x">DJ User</p>
          <p className="text-x font-semibold">200</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-x">Waiter</p>
          <p className="text-x font-semibold">200</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-x">User</p>
          <p className="text-x font-semibold">200</p>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        {LabelData.map((item) => (
          <AnalyticCard key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

import { PieChart } from "./component/pie-chart";
import { BarChart } from "./component/bar-chart";
import { Button, Title } from "../../../components";

export const Weeklydata = {
  labels: ["Monday", "Tuesday", "Wed", "Thu", "Firday", "Sturady", "Sunday"],
  datasets: [
    {
      label: "Category of Sell",
      data: [15, 14, 11, 5, 12, 13, 20],
      backgroundColor: [
        "#FE873D",
        "#6299FF",
        "#2AC5D1",
        "#9881FE",
        "#26D3A5",
        "#EA4B4E",
        "#FFDBC6",
      ],
      borderColor: [
        "#FE873D",
        "#6299FF",
        "#2AC5D1",
        "#9881FE",
        "#26D3A5",
        "#EA4B4E",
        "#FFDBC6",
      ],
      borderWidth: 1,
    },
  ],
};

export const PerDaydata = {
  labels: [
    "1am-4am",
    "4am-8am",
    "8am-12am",
    "12pm-16pm",
    "16pm-20pm",
    "20pm-24pm",
  ],

  datasets: [
    {
      label: "Category of Sell",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#FE873D",
        "#6299FF",
        "#2AC5D1",
        "#9881FE",
        "#26D3A5",
        "#EA4B4E",
      ],
      borderColor: [
        "#FE873D",
        "#6299FF",
        "#2AC5D1",
        "#9881FE",
        "#26D3A5",
        "#EA4B4E",
      ],
      borderWidth: 1,
    },
  ],
};

const DailyLabels = [
  "1am-4am",
  "4am-8am",
  "8am-12am",
  "12pm-16pm",
  "16pm-20pm",
  "20pm-24pm",
];
const WeeklyLabels = [
  "Monday",
  "Tuesday",
  "Wed",
  "Thu",
  "Firday",
  "Sturady",
  "Sunday",
];
const MonthlyLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Dashboard = () => {
  return (
    <div className="p-4">
      <Title label="Category" styles="px-2" />
      <div className="p-4 flex gap-6 flex-wrap">
        <div className="m-auto md:m-1 w-[440px] min-h-96 flex justify-center  shadow-lg hover:shadow-xl p-4 rounded border-red-500">
          <PieChart data={PerDaydata} />
        </div>
        <div className="m-auto md:m-1 w-[440px] min-h-96 flex justify-center hover:shadow-xl shadow-lg p-4 rounded">
          <PieChart data={Weeklydata} />
        </div>

        <div className="m-auto md:m-1 w-[400px] md:w-[500px] min-h-96  shadow-lg p-4 hover:shadow-xl rounded">
          <BarChart
            title="Monthly Category"
            label="Categories"
            labels={MonthlyLabels}
          />
        </div>
      </div>

      {/* Menu */}
      <Title label="Menu" styles="px-2" />
      <div className="p-4 flex gap-6   flex-wrap">
        <div className="m-auto md:m-1 w-[440px] min-h-96 flex justify-center  shadow-lg hover:shadow-xl p-4 rounded border-red-500">
          <PieChart data={PerDaydata} />
        </div>
        <div className="m-auto md:m-1 w-[440px] min-h-96 flex justify-center hover:shadow-xl shadow-lg p-4 rounded">
          <PieChart data={Weeklydata} />
        </div>

        <div className="m-auto md:m-1 w-[400px] md:w-[500px] min-h-96  shadow-lg p-4 hover:shadow-xl rounded">
          <BarChart title="Monthly Menu" labels={MonthlyLabels} />
        </div>
      </div>

      {/* Revenus */}
      <Title label="Revenus" styles="px-2" />
      <div className="p-4 flex gap-6 flex-wrap">
        <div className="m-auto md:m-1 w-[400px] md:w-[500px] min-h-96  shadow-lg p-4 hover:shadow-xl rounded">
          <BarChart
            label="Revenus"
            title="Daily Revenus"
            labels={DailyLabels}
          />
        </div>
        <div className="m-auto md:m-1 w-[400px] md:w-[500px] min-h-96  shadow-lg p-4 hover:shadow-xl rounded">
          <BarChart
            label="Revenus"
            title="Weekly Revenus"
            labels={WeeklyLabels}
            backgroundColor="#9881FE"
          />
        </div>
        <div className="m-auto md:m-1 w-[400px] md:w-[500px] min-h-96  shadow-lg p-4 hover:shadow-xl rounded">
          <BarChart
            label="Revenus"
            title="Monthly Revenus"
            labels={MonthlyLabels}
            backgroundColor="#26D3A5"
          />
        </div>
      </div>
      <div className="p-4">
        <Title label="Top 5 Menus" />
        <div className="flex gap-4 flex-wrap">
          <Button label="Chicken" styles="min-w-[100px] bg-[#9881FE]" />
          <Button label="Chease" styles="min-w-[100px] bg-[#9881FE]" />
          <Button label="12" styles="min-w-[100px] bg-[#9881FE]" />
          <Button label="12" styles="min-w-[100px] bg-[#9881FE]" />
          <Button label="12" styles="min-w-[100px] bg-[#9881FE]" />
        </div>
      </div>
      <div className="p-4">
        <Title label="Top 5 Drinks" />
        <div className="flex gap-4 flex-wrap">
          <Button label="Votka" styles="min-w-[100px] bg-[#28C3CF]" />
          <Button label="Beer" styles="min-w-[100px] bg-[#28C3CF]" />
          <Button label="Wisky" styles="min-w-[100px] bg-[#28C3CF]" />
          <Button label="Rum" styles="min-w-[100px] bg-[#28C3CF]" />
          <Button label="Cider" styles="min-w-[100px] bg-[#28C3CF]" />
        </div>
      </div>
    </div>
  );
};

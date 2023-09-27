import React from "react";
import { PieChart } from "./component/pie-chart";
import { BarChart } from "./component/bar-chart";
import { Button, Title } from "../../components";

export const Weeklydata = {
  labels: ["Monday", "Tuesday", "Wed", "Thu", "Firday", "Sturady", "Sunday"],

  datasets: [
    {
      label: "Category of Sell",
      data: [15, 14, 11, 5, 12, 13, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "#54ec0d",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "#54ec0d",
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
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const Dashboard = () => {
  return (
    <div className="p-4">
      <Title label="Category" styles="px-2" />
      <div className="p-4 flex gap-6   flex-wrap">
        <div className="m-auto w-[440px] min-h-96 flex justify-center  shadow-lg hover:shadow-xl p-4 rounded border-red-500">
          <PieChart data={PerDaydata} />
        </div>
        <div className="m-auto w-[440px] min-h-96 flex justify-center hover:shadow-xl shadow-lg p-4 rounded">
          <PieChart data={Weeklydata} />
        </div>

        <div className="m-auto md:m-1 w-[400px] md:w-[500px] min-h-96  shadow-lg p-4 hover:shadow-xl rounded">
          <BarChart />
        </div>
      </div>

      {/* Menu */}

      <Title label="Menu" styles="px-2" />
      <div className="p-4 flex gap-6   flex-wrap">
        <div className="m-auto w-[440px] min-h-96 flex justify-center  shadow-lg hover:shadow-xl p-4 rounded border-red-500">
          <PieChart data={PerDaydata} />
        </div>
        <div className="m-auto w-[440px] min-h-96 flex justify-center hover:shadow-xl shadow-lg p-4 rounded">
          <PieChart data={Weeklydata} />
        </div>

        <div className="m-auto md:m-1 w-[400px] md:w-[500px] min-h-96  shadow-lg p-4 hover:shadow-xl rounded">
          <BarChart />
        </div>
      </div>

      <div className="p-4">
        <Title label="Top 5 Menu" />
        <div className="flex gap-4 flex-wrap">
          <Button label="Chicken" styles="min-w-[100px]" />
          <Button label="Chease" styles="min-w-[100px]" />
          <Button label="12" styles="min-w-[100px]" />
          <Button label="12" styles="min-w-[100px]" />
          <Button label="12" styles="min-w-[100px]" />
        </div>
      </div>
      <div className="p-4">
        <Title label="Top 5 Drinks" />
        <div className="flex gap-4 flex-wrap">
          <Button label="Votka" styles="min-w-[100px]" />
          <Button label="Beer" styles="min-w-[100px]" />
          <Button label="Wisky" styles="min-w-[100px]" />
          <Button label="Rum" styles="min-w-[100px]" />
          <Button label="Cider" styles="min-w-[100px]" />
        </div>
      </div>
    </div>
  );
};

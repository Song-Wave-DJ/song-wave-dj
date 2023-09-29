import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Menu",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#1fdf18",
    },
  ],
};

export function BarChart({ title }) {
  const options = {
    responsive: true,

    barPercentage: 0.7,

    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return <Bar options={options} data={data} height={260} />;
}

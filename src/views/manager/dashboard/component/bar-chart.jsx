/* eslint-disable react/prop-types */
import { useMemo } from "react";
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

export function BarChart({
  title,
  labels = [],
  label = "Menu",
  backgroundColor = "#FC863C",
}) {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true, // Set this to false to hide horizontal grid lines
        },
      },
      x: {
        grid: {
          display: false, // You can control vertical grid lines here if needed
        },
      },
    },
    responsive: true,
    barPercentage: 0.4,
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

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label,
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor,
          borderRadius: 5,
        },
      ],
    }),
    [labels, label, backgroundColor]
  );

  return <Bar options={options} data={data} height={260} />;
}

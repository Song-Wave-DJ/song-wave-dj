import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = [
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
const options = {
  barPercentage: 0.6,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "",
    },
  },

  scales: {
    x: {
      grid: {
        display: false, // Set this to false to hide horizontal grid lines
      },
    },
    y: {
      grid: {
        display: true, // You can control vertical grid lines here if needed
      },
    },
  },
};
const data = {
  labels,
  datasets: [
    {
      type: "bar",
      label: "Menu",
      backgroundColor: "#05BBC9",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 5,
    },
    {
      type: "bar",
      label: "Bar",
      backgroundColor: "#158DF7",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderWidth: 1,
      borderRadius: 5,
    },
  ],
};

export function CompersionChart() {
  return <Chart type="bar" data={data} height={160} options={options} />;
}

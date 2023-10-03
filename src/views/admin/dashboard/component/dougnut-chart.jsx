import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Manager", "DJ User", "Waiter", "User"],
  datasets: [
    {
      label: "Total User",
      data: [12, 19, 3, 5],
      backgroundColor: ["#43D396", "#876CFE", "#05BBC9", "#FE721C"],
      borderColor: ["#43D396", "#876CFE", "#05BBC9", "#FE721C"],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom",
      fontSize: 20,
    },
  },
  responsive: true,
};

export function DoughnutChart() {
  return <Doughnut data={data} options={options} height={60} />;
}

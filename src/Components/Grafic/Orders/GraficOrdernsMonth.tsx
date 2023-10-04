import React, { useState, useEffect } from "react";
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
import api from "../../../Services/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

export function GraficOrdernsMonth() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Dataset 1",
        data: [],
        backgroundColor: "#393C56",
        borderColor: "#393C56",
        borderWidth: 5,
        borderRadius: 2,
      },
    ],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/sells-per-month");
        const sellsData = response.data;

        const labels = sellsData.map(
          (item: { month: number }) => `Month ${item.month}`,
        );
        const dataset1Data = sellsData.map(
          (item: { value: number }) => item.value,
        );
        setData((prevState) => ({
          ...prevState,
          labels,
          datasets: [
            {
              ...prevState.datasets[0],
              data: dataset1Data,
              backgroundColor: "#393C56",
              borderColor: "#393C56",
              borderWidth: 2,
              borderRadius: 2,
            },
          ],
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return <Bar options={options} data={data} />;
}

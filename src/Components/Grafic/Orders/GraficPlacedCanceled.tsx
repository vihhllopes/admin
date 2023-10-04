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

export function GraficPlacedCanceled() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Realizados",
        data: [],
        backgroundColor: "#109E8E",
      },
      {
        label: "Cancelados",
        data: [],
        backgroundColor: "#F18F7F",
      },
    ],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response1 = await api.get("/orders-per-month");
        const sellsData1 = response1.data;

        const labels = sellsData1.map(
          (item: { month: number }) => `Month ${item.month}`,
        );
        const dataset1Data = sellsData1.map(
          (item: { value: number }) => item.value,
        );

        const response2 = await api.get("/canceled-orders-per-month");
        const sellsData2 = response2.data;

        const dataset2Data = sellsData2.map(
          (item: { value: number }) => item.value,
        );

        setData({
          labels,
          datasets: [
            {
              label: "Realizados",
              data: dataset1Data,
              backgroundColor: "#109E8E",
            },
            {
              label: "Cancelados",
              data: dataset2Data,
              backgroundColor: "#F18F7F",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return <Bar options={options} data={data} />;
}

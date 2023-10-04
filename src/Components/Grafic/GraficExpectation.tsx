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
import api from "../../Services/api";

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

export function GraficExpectation() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Realizados",
        data: [],
        backgroundColor: "#9FD8D5",
      },
      {
        label: "Cancelados",
        data: [],
        backgroundColor: "#F78899",
      },
    ],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response1 = await api.get("/profit-per-month");
        const sellsData1 = response1.data;

        const labels = sellsData1.map(
          (item: { month: number }) => `Month ${item.month}`,
        );
        const dataset1Data = sellsData1.map(
          (item: { value: number }) => item.value,
        );

        const response2 = await api.get("/profit-expectation-per-month");
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
              backgroundColor: "#9FD8D5",
            },
            {
              label: "Cancelados",
              data: dataset2Data,
              backgroundColor: "#F78899",
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

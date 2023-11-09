"use client";

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
// import { faker } from "@faker-js/faker";
// console.log(faker.number.int({ min: 0, max: 1000 }));

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "2022",
      //   data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
      data: [200, 500, 600, 200, 500, 600, 200, 500, 600, 200, 500, 900],
      backgroundColor: "rgba(234, 100, 43,1)",
    },
    {
      label: "2023",
      //   data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      data: [200, 500, 600, 200, 500, 600, 200, 500, 600, 200, 500, 600],
      backgroundColor: "rgba(234, 100, 43,.5)",
    },
  ],
};

export function ChartJSVertical() {
  return <Bar options={options} data={data} className="max-w-full" />;
}

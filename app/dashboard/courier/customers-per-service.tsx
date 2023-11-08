"use client";

import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// import { BarChartComponent } from "../charts/barchat";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  {
    date: "Shop Online",
    "2022": 45,
    "2023": 78,
  },
  {
    date: "Home Services",
    "2022": 52,
    "2023": 71,
  },
  {
    date: "Pharmacy",
    "2022": 48,
    "2023": 80,
  },
  {
    date: "Delivery",
    "2022": 61,
    "2023": 65,
  },
  {
    date: "Food",
    "2022": 55,
    "2023": 58,
  },
  {
    date: "Others",
    "2022": 67,
    "2023": 62,
  },
];

const data = [
  {
    name: "Shop Online",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Home Services",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Pharmacy",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Delivery",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Food",
    uv: 1890,
    pv: 4800,
  },
];

function CustomersPerService() {
  // return (
  //   <div className="bg-background-custom shadow-md rounded">
  //     <BarChartComponent
  //       title={"customers per service"}
  //       info={""}
  //       data={chartData}
  //     />
  //   </div>
  // );

  return (
    <Card>
      <CardHeader className="flex-row gap-2 items-end justify-between p-4">
        <CardTitle className="capitalize text-base self-start text-foreground-custom/80">
          Customers Per Service
        </CardTitle>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Yearly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yearly">Yearly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="p-3">
        <ResponsiveContainer height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="pv" />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="pv" fill="#ea642b" />
            <Bar dataKey="uv" fill="rgba( 234, 100, 43,.5)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default CustomersPerService;

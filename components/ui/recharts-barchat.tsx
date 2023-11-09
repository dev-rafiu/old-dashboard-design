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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TRechart } from "@/lib/definitions";

// const chartData = [
//   {
//     date: "Shop Online",
//     "2022": 45,
//     "2023": 78,
//   },
//   {
//     date: "Home Services",
//     "2022": 52,
//     "2023": 71,
//   },
//   {
//     date: "Pharmacy",
//     "2022": 48,
//     "2023": 80,
//   },
//   {
//     date: "Delivery",
//     "2022": 61,
//     "2023": 65,
//   },
//   {
//     date: "Food",
//     "2022": 55,
//     "2023": 58,
//   },
//   {
//     date: "Others",
//     "2022": 67,
//     "2023": 62,
//   },
// ];

// const data = [
//   {
//     name: "Shop Online",
//     uv: 4000,
//     pv: 2400,
//   },
//   {
//     name: "Home Services",
//     uv: 3000,
//     pv: 1398,
//   },
//   {
//     name: "Pharmacy",
//     uv: 2000,
//     pv: 9800,
//   },
//   {
//     name: "Delivery",
//     uv: 2780,
//     pv: 3908,
//   },
//   {
//     name: "Food",
//     uv: 1890,
//     pv: 4800,
//   },
// ];

// const data = [
//   {
//     date: "Jan",
//     "2022": 45,
//     "2023": 78,
//   },
//   {
//     date: "Feb",
//     "2022": 52,
//     "2023": 71,
//   },
//   {
//     date: "Mar",
//     "2022": 48,
//     "2023": 80,
//   },
//   {
//     date: "Apr",
//     "2022": 61,
//     "2023": 65,
//   },
//   {
//     date: "May",
//     "2022": 55,
//     "2023": 58,
//   },
//   {
//     date: "Jun",
//     "2022": 67,
//     "2023": 62,
//   },
//   {
//     date: "Jul",
//     "2022": 60,
//     "2023": 54,
//   },
//   {
//     date: "Aug",
//     "2022": 72,
//     "2023": 49,
//   },
//   {
//     date: "Sep",
//     "2022": 65,
//     "2023": 52,
//   },
//   {
//     date: "Oct",
//     "2022": 68,
//     "2023": 58,
//   },
//   {
//     date: "Nov",
//     "2022": 74,
//     "2023": 64,
//   },
//   {
//     date: "Dec",
//     "2022": 71,
//     "2023": 61,
//   },
// ];

type Props = {
  title: string;
  info?: string;
  data: TRechart[];
};

function RechartsBarchart({ title, data }: Props) {
  //   console.log(data);

  return (
    <Card>
      <CardHeader className="flex-row gap-2 items-end justify-between p-4">
        <CardTitle className="font-normal text-base text-foreground-custom/80">
          {title}
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

      <CardContent className="p-3 border border-red-500">
        <ResponsiveContainer height={320}>
          <BarChart
            className="border border-red-500"
            data={data}
            barSize={25}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="rf" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#ea642b" />
            <Bar dataKey="uv" fill="rgba( 234, 100, 43,.5)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default RechartsBarchart;

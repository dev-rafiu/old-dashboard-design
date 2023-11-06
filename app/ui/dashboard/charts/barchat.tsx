"use client";

import { useState } from "react";
import { BarChart, Card, Title } from "@tremor/react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartdata3 = [
  {
    date: "Jan",
    "2022": 45,
    "2023": 78,
  },
  {
    date: "Feb",
    "2022": 52,
    "2023": 71,
  },
  {
    date: "Mar",
    "2022": 48,
    "2023": 80,
  },
  {
    date: "Apr",
    "2022": 61,
    "2023": 65,
  },
  {
    date: "May",
    "2022": 55,
    "2023": 58,
  },
  {
    date: "Jun",
    "2022": 67,
    "2023": 62,
  },
  {
    date: "Jul",
    "2022": 60,
    "2023": 54,
  },
  {
    date: "Aug",
    "2022": 72,
    "2023": 49,
  },
  {
    date: "Sep",
    "2022": 65,
    "2023": 52,
  },
  {
    date: "Oct",
    "2022": 68,
    "2023": 58,
  },
  {
    date: "Nov",
    "2022": 74,
    "2023": 64,
  },
  {
    date: "Dec",
    "2022": 71,
    "2023": 61,
  },
];

type TBarchart = {
  title: string;
  info: string;
  data?: any;
};

export const BarChartComponent = ({ title, info, data }: TBarchart) => {
  const [value, setValue] = useState(null);

  return (
    <>
      <Card>
        <header className="flex items-center justify-between">
          <Title className="capitalize">{title}</Title>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Yearly" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Yearly</SelectItem>
              <SelectItem value="dark">Monthly</SelectItem>
              <SelectItem value="system">Weekly</SelectItem>
            </SelectContent>
          </Select>
        </header>

        <p>{info}</p>

        <BarChart
          className="mt-6 w-full h-80"
          data={data ? data : chartdata3}
          index="date"
          categories={["2022", "2023"]}
          colors={["orange"]}
          yAxisWidth={30}
          showLegend={false}
          //   onValueChange={(v) => setValue(v)}
        />
      </Card>
    </>
  );
};

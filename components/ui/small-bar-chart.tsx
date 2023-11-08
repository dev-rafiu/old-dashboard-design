"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, Title } from "@tremor/react";

const data = [
  {
    name: "Mon",
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 800,
    amt: 2290,
  },
  {
    name: "Thu",
    uv: 2780,
    pv: 2908,
    amt: 2000,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 3800,
    amt: 2181,
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    uv: 2490,
    pv: 4300,
    amt: 1100,
  },
];

function SmallBarChart() {
  return (
    <Card>
      <header className="flex-row gap-2 items-end justify-between p-4">
        <Title className="capitalize text-base self-start text-foreground-custom/80">
          new riders
        </Title>
      </header>

      <ResponsiveContainer className="" height={300}>
        <BarChart
          data={data}
          maxBarSize={10}
          className="text-base"
          width={500}
          height={300}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="pv" />
          {/* <Tooltip /> */}
          <Bar
            dataKey="pv"
            stackId="a"
            fill="#ea642b"
            // radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="uv"
            stackId="a"
            fill="rgba( 234, 100, 43,.5)"
            // radius={[5, 5, 10, 10]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default SmallBarChart;

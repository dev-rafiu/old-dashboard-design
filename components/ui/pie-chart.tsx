"use client";

import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#0055FE"];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

type Data = {
  name: string;
  value: number;
};

type Props = {
  title: string;
  data: Data[];
};

export default function CustomPieChart({ title, data }: Props) {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="flex-row gap-2 items-end justify-between p-4">
        <CardTitle className="font-normal text-base text-foreground-custom/80 capitalize">
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

      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={400} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              //   label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              legendType="circle"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

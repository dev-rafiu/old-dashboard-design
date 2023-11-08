"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Card, DonutChart, Legend, Title } from "@tremor/react";

const data = [
  {
    name: "Online",
    sales: 9800,
  },
  {
    name: "On Trip",
    sales: 4567,
  },
  {
    name: "Active",
    sales: 3908,
  },
  {
    name: "Inactive",
    sales: 2400,
  },
];

function Riders() {
  return (
    <div className="bg-background-custom xl:col-span-2 rounded-md">
      <Card>
        <header className="flex items-center justify-between">
          <Title className="capitalize text-foreground-custom/80">riders</Title>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Online" />
            </SelectTrigger>
            <SelectContent>
              {data.map((item) => {
                return (
                  <SelectItem value={item.name} key={item.name}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </header>

        <div className=" flex flex-col items-center justify-center">
          <DonutChart
            data={data}
            category="sales"
            variant="donut"
            index="name"
            label="1212 Total Riders"
            showLabel={false}
            // valueFormatter={valueFormatter}
            colors={["orange", "amber", "blue", "cyan"]}
            className="mt-6"
          />
          <Legend
            categories={data.map((city) => city.name)}
            colors={["orange", "amber", "blue", "cyan"]}
            className="mt-6 gap-4 items-center text-sm justify-center flex-wrap"
          />
        </div>
      </Card>
    </div>
  );
}

export default Riders;

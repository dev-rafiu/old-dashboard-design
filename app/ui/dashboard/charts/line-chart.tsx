import { Card, LineChart, Title } from "@tremor/react";
import React from "react";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const data = [
  {
    date: "01",
    "2022": 0,
    "2023": 10,
  },
  {
    date: "02",
    "2022": 0,
    "2023": 10,
  },
  {
    date: "03",
    "2022": 0,
    "2023": 10,
  },
  {
    date: "04",
    "2022": 0,
    "2023": 10,
  },
  {
    date: "05",
    "2022": 0,
    "2023": 10,
  },
  {
    date: "06",
    "2022": 0,
    "2023": 10,
  },
];

type Props = {
  title: string;
  lineType: string;
  //   info: string;
};

export const LineChartComponent = ({ title, lineType }: Props) => {
  //   const [value, setValue] = React.useState(null);

  return (
    <>
      <Card>
        <header className="flex items-center justify-between">
          <Title className="capitalize text-foreground-custom/80">
            {title}
          </Title>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="2022" />
            </SelectTrigger>
            <SelectContent>
              {data.map((item) => {
                return (
                  <SelectItem value={item.date} key={item.date}>
                    {item.date}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </header>

        <LineChart
          className="mt-6 w-full"
          data={data}
          index="date"
          categories={["2022", "2023"]}
          colors={["neutral", "indigo"]}
          yAxisWidth={30}
          //   onValueChange={(v) => setValue(v)}
          connectNulls={true}
          curveType={lineType == "monotone" ? "monotone" : "linear"}
        />
      </Card>
    </>
  );
};

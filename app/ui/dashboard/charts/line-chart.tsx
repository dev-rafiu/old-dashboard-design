import { Card, LineChart, Title } from "@tremor/react";
import React from "react";

const chartdata2 = [
  {
    date: "01",
    "2022": 45,
    "2023": 78,
  },
  {
    date: "02",
    "2022": 52,
    "2023": 71,
  },
  {
    date: "03",
    "2022": 48,
    "2023": 80,
  },
  {
    date: "04",
    "2022": 61,
    "2023": 65,
  },
  {
    date: "05",
    "2022": 55,
    "2023": 58,
  },
  {
    date: "06",
    "2022": 67,
    "2023": 62,
  },
];

type TLinechart = {
  title: string;
  //   info: string;
};

export const LineChartComponent = ({ title }: TLinechart) => {
  //   const [value, setValue] = React.useState(null);

  return (
    <>
      <Card>
        <Title>{title}</Title>
        <LineChart
          className="mt-6 w-full h-80"
          data={chartdata2}
          index="date"
          categories={["2022", "2023"]}
          colors={["neutral", "indigo"]}
          yAxisWidth={30}
          //   onValueChange={(v) => setValue(v)}
          connectNulls={true}
        />
      </Card>
      {/* <pre>{JSON.stringify(value)}</pre> */}
    </>
  );
};

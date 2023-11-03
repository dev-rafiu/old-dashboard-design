import { Card, LineChart, Title } from "@tremor/react";
import React from "react";

const chartdata2 = [
  {
    date: "01",
    "2022": 0,
    "2023": 10,
  },
  {
    date: "02",
    "2022": 40,
    "2023": 20,
  },
  {
    date: "03",
    "2022": 0,
    "2023": 80,
  },
  {
    date: "04",
    "2022": 60,
    "2023": 30,
  },
  {
    date: "05",
    "2022": 0,
    "2023": 58,
  },
  {
    date: "06",
    "2022": 30,
    "2023": 20,
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
          curveType={lineType == "monotone" ? "monotone" : "linear"}
        />
      </Card>
      {/* <pre>{JSON.stringify(value)}</pre> */}
    </>
  );
};

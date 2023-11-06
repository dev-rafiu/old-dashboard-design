import {
  Card,
  Metric,
  Text,
  Flex,
  BadgeDelta,
  DeltaType,
  Grid,
} from "@tremor/react";
import { GoArrowUpRight } from "react-icons/go";

type Props = {
  title: string;
  metric: string;
  // metricPrev: string,
  delta: string;
  deltaType: string;
  value: number;
};

const colors = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

const categories = [
  {
    title: "Sales",
    metric: "$ 12,699",
    metricPrev: "$ 9,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Profit",
    metric: "$ 40,598",
    metricPrev: "$ 45,564",
    delta: "10.9%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Customers",
    metric: "1,072",
    metricPrev: "856",
    delta: "25.3%",
    deltaType: "moderateIncrease",
  },
];

function KPICard({ title, metric, deltaType, delta, value }: Props) {
  return (
    <Grid
      numItemsSm={2}
      numItemsLg={3}
      className="gap-6 bg-background-custom rounded"
    >
      <Card className="space-y-4">
        <Flex className="flex-row gap-2 items-end justify-between">
          <Text className="capitalize text-base text-foreground-custom/80 self-start">
            {title}
          </Text>

          <BadgeDelta
            deltaType={deltaType}
            className="text-background-custom rounded-full w-8 aspect-square flex items-center justify-center"
          />
        </Flex>

        <Flex className="space-x-2">
          <Flex justifyContent="start" className="space-x-1 truncate">
            <Text
              color={deltaType === "moderateIncrease" ? "emerald" : "rose"}
              className="text-sm"
            >
              {delta}
            </Text>
            <Text className="truncate text-sm">to previous month</Text>
          </Flex>
        </Flex>

        <Text className="text-2xl font-semibold text-foreground-custom">
          {value}
        </Text>
      </Card>
    </Grid>
  );
}

export default KPICard;

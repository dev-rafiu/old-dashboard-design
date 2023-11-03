import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { GoArrowUpRight } from "react-icons/go";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

type Props = {
  title: string;
  percentageInfo: string;
  percentageDiff: string;
  value: number;
};

function InfoCard({ title, percentageInfo, percentageDiff, value }: Props) {
  return (
    // <div className="bg-gray-400 animate-pulse shadow-md h-40 rounded"></div>
    <Card>
      <CardHeader className="flex-row gap-4 items-end justify-between p-4">
        <CardTitle className="capitalize text-lg self-start text-foreground-custom/80">
          {title}
        </CardTitle>
        <span className="border p-2 rounded-full bg-secondary-custom/20 text-secondary-custom">
          <GoArrowUpRight className="text-lg" />
        </span>
      </CardHeader>
      <CardContent>
        <p className="text-foreground-muted-custom flex items-center gap-2">
          {percentageDiff == "up" ? (
            <span className="text-[rgba(133,237,218,1)]">
              <FaArrowTrendUp />
            </span>
          ) : (
            <span className="text-[rgba(255,0,48,1)]">
              <FaArrowTrendDown />
            </span>
          )}
          {percentageInfo}
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-2xl font-semibold text-foreground-custom">{value}</p>
      </CardFooter>
    </Card>
  );
}

export default InfoCard;

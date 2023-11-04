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
  percentageInfo?: string;
  percentageDiff?: string;
  value: number;
};

function InfoCard({ title, percentageInfo, percentageDiff, value }: Props) {
  return (
    // <div className="bg-gray-400 animate-pulse shadow-md h-40 rounded"></div>
    <Card>
      <CardHeader className="flex-row gap-2 items-end justify-between p-4">
        <CardTitle className="capitalize text-base self-start text-foreground-custom/80">
          {title}
        </CardTitle>

        {percentageInfo ? (
          <span className="flex items-center justify-center p-2 w-8 aspect-square rounded-full bg-secondary-custom/20 text-secondary-custom">
            <GoArrowUpRight />
          </span>
        ) : (
          <span></span>
        )}
      </CardHeader>

      <CardContent className="p-3">
        {percentageDiff && (
          <p className="text-foreground-muted-custom flex gap-2 text-base">
            {percentageDiff == "up" ? (
              <span className="text-[rgba(133,237,218,1)] self-start">
                <FaArrowTrendUp />
              </span>
            ) : (
              <span className="text-[rgba(255,0,48,1)]">
                <FaArrowTrendDown />
              </span>
            )}
            {percentageInfo}
          </p>
        )}
      </CardContent>

      <CardFooter className="p-3">
        <p className="text-2xl font-semibold text-foreground-custom">{value}</p>
      </CardFooter>
    </Card>
  );
}

export default InfoCard;

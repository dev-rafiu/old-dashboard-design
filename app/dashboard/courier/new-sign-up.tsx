import { BarChartComponent } from "@/app/ui/dashboard/charts/barchat";
import SmallBarChart from "@/components/ui/small-bar-chart";

function NewSignUp() {
  return (
    <div className="bg-background-custom shadow-md rounded">
      <SmallBarChart />
      {/* <BarChartComponent info="" title="try" data={[]} /> */}
    </div>
  );
}

export default NewSignUp;

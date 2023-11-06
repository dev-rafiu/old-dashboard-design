import { BarChartComponent } from "../../ui/dashboard/charts/barchat";

function Revenue() {
  return (
    <div className="bg-background shadow-md lg:col-span-3 rounded-md">
      <BarChartComponent title="revenue" info="2.1% vs last year" />
    </div>
  );
}

export default Revenue;

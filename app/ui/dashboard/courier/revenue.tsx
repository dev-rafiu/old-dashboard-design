import { BarChartComponent } from "../charts/barchat";

function Revenue() {
  return (
    <div className="bg-background shadow-md lg:col-span-3 rounded-md">
      <BarChartComponent title="revenue" />
    </div>
  );
}

export default Revenue;

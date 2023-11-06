import { BarChartComponent } from "../../ui/dashboard/charts/barchat";

function CompletedTrips() {
  return (
    <div className="bg-background-custom shadow-md xl:col-span-3 rounded-md">
      <BarChartComponent
        title="Completed Trips"
        info="Jun is the busiest month"
      />
    </div>
  );
}

export default CompletedTrips;

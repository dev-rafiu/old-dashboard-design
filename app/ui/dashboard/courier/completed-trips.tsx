import { BarChartComponent } from "../charts/barchat";

function CompletedTrips() {
  return (
    <div className="bg-background-custom animate-pulse shadow-md xl:col-span-3 rounded-md">
      <BarChartComponent
        title="Completed Trips"
        info="Jun is the busiest month"
      />
    </div>
  );
}

export default CompletedTrips;

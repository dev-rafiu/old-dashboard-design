import { TremorBarchart } from "../../ui/dashboard/charts/tremor-barchat";

function CompletedTrips() {
  return (
    <div className="bg-background-custom shadow-md xl:col-span-3 rounded-md">
      <TremorBarchart title="Completed Trips" info="Jun is the busiest month" />
    </div>
  );
}

export default CompletedTrips;

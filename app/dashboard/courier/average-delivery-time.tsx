import { LineChartComponent } from "../../ui/dashboard/charts/line-chart";

function AverageDeliveryTime() {
  return (
    <div className="bg-background-custom shadow-md rounded">
      <LineChartComponent title="Average Delivery Time" lineType="linear" />
    </div>
  );
}

export default AverageDeliveryTime;

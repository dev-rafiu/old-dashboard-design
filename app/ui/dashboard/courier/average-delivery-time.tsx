import { LineChartComponent } from "../charts/line-chart";

function AverageDeliveryTime() {
  return (
    <div className="bg-background-custom shadow-md rounded">
      <LineChartComponent title="Average Delivery Time" />
    </div>
  );
}

export default AverageDeliveryTime;

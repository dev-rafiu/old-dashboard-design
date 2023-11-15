import { LineChartComponent } from "../../../components/ui/line-chart";

function CustomerSatisfaction() {
  return (
    <div className="bg-background-custom shadow-md rounded">
      <LineChartComponent title="Custmer Satisfaction" lineType="monotone" />
    </div>
  );
}

export default CustomerSatisfaction;

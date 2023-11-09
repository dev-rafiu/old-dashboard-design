import { ChartJSVertical } from "@/components/ui/chartjs2-barchart";
import RechartsBarchart from "@/components/ui/recharts-barchat";
// import { BarChartComponent } from "../../ui/dashboard/charts/tremor-barchat";

const data = [
  {
    name: "Jan",
    uv: 45,
    pv: 40,
    rf: 55,
  },
  {
    name: "Feb",
    uv: 52,
    pv: 71,
    rf: 55,
  },
  {
    name: "Mar",
    uv: 48,
    pv: 80,
    rf: 55,
  },
  {
    name: "Apr",
    uv: 61,
    pv: 65,
    rf: 55,
  },
  {
    name: "May",
    uv: 55,
    pv: 58,
    rf: 55,
  },
  {
    name: "Jun",
    uv: 67,
    pv: 62,
    rf: 55,
  },
  {
    name: "Jul",
    uv: 60,
    pv: 54,
    rf: 55,
  },
  {
    name: "Aug",
    uv: 72,
    pv: 49,
    rf: 55,
  },
  {
    name: "Sep",
    uv: 65,
    pv: 52,
    rf: 55,
  },
  {
    name: "Oct",
    uv: 68,
    pv: 58,
    rf: 55,
  },
  {
    name: "Nov",
    uv: 74,
    pv: 64,
    rf: 55,
  },
  {
    name: "Dec",
    uv: 71,
    pv: 61,
    rf: 55,
  },
];

function Revenue() {
  return (
    <div className="bg-background shadow-md lg:col-span-3 rounded-md">
      {/* <BarChartComponent title="revenue" info="2.1% vs last year" /> */}
      {/* <RechartsBarchart title="Revenue" data={data} /> */}
      <ChartJSVertical />
    </div>
  );
}

export default Revenue;

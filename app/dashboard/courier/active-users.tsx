import CustomPieChart from "@/components/ui/pie-chart";

const data = [
  { name: "Delivery", value: 400 },
  { name: "Shp Online", value: 300 },
  { name: "Food", value: 300 },
  { name: "Home Services", value: 100 },
  { name: "Others", value: 100 },
];

function ActiveUsers() {
  return (
    <div className="bg-background-custom shadow-md rounded">
      <CustomPieChart title="active users" data={data} />
    </div>
  );
}

export default ActiveUsers;

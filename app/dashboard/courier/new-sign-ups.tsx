import CustomPieChart from "@/components/ui/pie-chart";

const data = [
  { name: "Accra", value: 400 },
  { name: "Kumasi", value: 200 },
  { name: "Eastern", value: 300 },
  { name: "Tamale", value: 200 },
  { name: "Cape Coast", value: 100 },
];

function NewSignUps() {
  return (
    <div className="bg-background-custom shadow-md rounded">
      <CustomPieChart title="new sign ups" data={data} />
    </div>
  );
}

export default NewSignUps;

import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const ThreatPieChart = () => {
  const threats = [
    { label: "Critical", value: 40, color: "#dc2626" }, 
    { label: "High", value: 30, color: "#f97316" },     
    { label: "Medium", value: 20, color: "#facc15" },   
    { label: "Low", value: 10, color: "#4ade80" },      
  ];

  return (
    <div className="flex-1 bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-white">Threat Severity</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={threats}
          dataKey="value"
          nameKey="label"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {threats.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ThreatPieChart;

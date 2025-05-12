function StatsCards() {
  const stats = [
    { title: "Total Alerts", value: "1,250", color: "bg-teal-600" },
    { title: "Critical Threats", value: "45", color: "bg-red-600" },
    { title: "Active Sessions", value: "12", color: "bg-orange-500" },
  ];

  return (
    <>
      {stats.map((stat, idx) => (
        <div key={idx} className={`p-6 rounded-lg shadow-md ${stat.color}`}>
          <h2 className="text-lg font-semibold">{stat.title}</h2>
          <p className="text-2xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </>
  );
}

export default StatsCards;

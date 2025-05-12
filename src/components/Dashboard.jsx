function Dashboard() {
  const alerts = [
    { ip: "192.168.1.2", type: "Sinkhole", severity: "Critical" },
    { ip: "10.0.0.5", type: "Blackhole", severity: "High" },
    { ip: "172.16.0.8", type: "DIS Flooding ", severity: "Medium" },
    { ip: "192.168.1.10", type: "Version Number Attack", severity: "Low" },
  ];

  const severityColors = {
    Critical: "text-red-400",
    High: "text-orange-400",
    Medium: "text-yellow-400",
    Low: "text-green-400",
  };

  return (
    <div className="flex-1 bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dashboard - Top Intrusions</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="px-4 py-2">IP Address</th>
              <th className="px-4 py-2">Attack Type</th>
              <th className="px-4 py-2">Severity</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, idx) => (
              <tr key={idx} className="border-t border-gray-700">
                <td className="px-4 py-2">{alert.ip}</td>
                <td className="px-4 py-2">{alert.type}</td>
                <td className={`px-4 py-2 ${severityColors[alert.severity]}`}>
                  {alert.severity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;

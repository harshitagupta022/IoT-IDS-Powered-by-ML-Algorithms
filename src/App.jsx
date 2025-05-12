import Dashboard from './components/Dashboard';
import StatsCards from './components/StatsCards';
import ThreatPieChart from './components/ThreatPieChart';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-8">Intrusion Detection System Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <StatsCards />
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mt-10">
        <Dashboard />
        <ThreatPieChart />
      </div>
    </div>
  );
}

export default App;

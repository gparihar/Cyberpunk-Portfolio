import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <div className="flex h-screen bg-black/80 backdrop-blur-sm">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default Home;
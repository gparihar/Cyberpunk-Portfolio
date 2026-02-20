import GithubStats from "../components/GithubStats";
import { ReactTyped } from "react-typed";

function Dashboard() {
  return (
    <div className="flex-1 bg-black/80 text-green-400 p-10 backdrop-blur-sm">
      <ReactTyped
        strings={["SYSTEM DASHBOARD", "ACCESS GRANTED", "WELCOME DEVELOPER"]}
        typeSpeed={80}
        backSpeed={40}
        loop
        className="text-3xl mb-8 tracking-widest block"
      />

      <div className="grid grid-cols-3 gap-6 mt-6">
        {["Projects", "Skills", "Stats"].map((item) => (
          <div
            key={item}
            className="border border-green-500 p-6 hover:shadow-[0_0_25px_#22c55e] hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl">{item}</h2>
            <p className="mt-2 text-sm opacity-70">Module Loaded ✔</p>
          </div>
        ))}
      </div>

      <GithubStats />

      <div className="mt-10 text-sm opacity-70 space-y-1 font-mono">
        <p>[SYS] React modules loaded...</p>
        <p>[SYS] UI initialized...</p>
        <p>[SYS] Developer authenticated...</p>
        <p>[SYS] All systems operational ✔</p>
      </div>
    </div>
  );
}

export default Dashboard;
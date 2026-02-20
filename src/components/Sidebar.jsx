import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-black text-green-400 p-5 border-r border-green-600">
      <h2 className="text-xl mb-8 tracking-widest text-green-400 drop-shadow-[0_0_8px_#22c55e]">
        DEVVAULT
      </h2>

      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-green-300 transition">
            ▸ Dashboard
          </Link>
        </li>

        <li>
          <Link to="/projects" className="hover:text-green-300 transition">
            ▸ Projects
          </Link>
        </li>

        <li>
          <Link to="/skills" className="hover:text-green-300 transition">
            ▸ Skills
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
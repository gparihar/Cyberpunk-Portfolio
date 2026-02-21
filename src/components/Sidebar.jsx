import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 text-green-400 text-2xl"
      >
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-black text-green-400 p-5 border-r border-green-600 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Close Button (mobile) */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl mb-8 tracking-widest drop-shadow-[0_0_8px_#22c55e]">
          DEVVAULT
        </h2>

        <ul className="space-y-4">
          <li>
            <Link onClick={() => setOpen(false)} to="/">▸ Dashboard</Link>
          </li>

          <li>
            <Link onClick={() => setOpen(false)} to="/projects">▸ Projects</Link>
          </li>

          <li>
            <Link onClick={() => setOpen(false)} to="/skills">▸ Skills</Link>
          </li>

          <li>
            <Link onClick={() => setOpen(false)} to="/stats">▸ GitHub Stats</Link>
          </li>

          <li>
            <Link onClick={() => setOpen(false)} to="/contact">▸ Contact</Link>
          </li>
        </ul>

        {/* Resume */}
        <a
          href="/Gaurav_Parihar_Frontend_Developer_Resume.pdf"
          download
          className="block border border-green-500 px-3 py-2 mt-6 hover:bg-green-500 hover:text-black transition"
        >
          ⬇ Download Resume
        </a>
      </div>
    </>
  );
}

export default Sidebar;
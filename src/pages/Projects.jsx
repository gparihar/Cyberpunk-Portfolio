import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

import devvaultImg from "../assets/devvault.png";
import ecommerceImg from "../assets/ecommerce.png";

function Projects() {
  const projects = [
    {
      name: "DevVault",
      tech: "React + Tailwind + Vite",
      desc: "Cyberpunk portfolio dashboard with Matrix effect",
      link: "https://github.com/gparihar/devvault",
      demo: "https://cyberpunk-portfolio-black.vercel.app",
      img: devvaultImg,
    },
    {
      name: "E-Commerce",
      tech: "JavaScript + AJAX + XML",
      desc: "Dynamic product loading with XML data",
      link: "https://github.com/gparihar/ecommerce",
      demo: "https://cyberpunk-portfolio-black.vercel.app",
      img: ecommerceImg,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-screen bg-black text-green-400"
    >
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl mb-8 tracking-widest">
          PROJECT MODULE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="relative overflow-hidden border border-green-500 p-6 hover:shadow-[0_0_40px_#22c55e] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-xs border border-green-500 px-2 py-0.5 mb-2 inline-block">
                LIVE
              </span>

              <div className="overflow-hidden rounded mb-4">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <h2 className="text-xl mb-2">{project.name}</h2>

              <p className="text-sm opacity-70 mb-2">
                {project.tech}
              </p>

              <p className="text-sm opacity-60 mb-3">
                {project.desc}
              </p>

              <div className="flex gap-4 mt-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-green-500 px-3 py-1 hover:bg-green-500 hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-green-500 px-3 py-1 hover:bg-green-500 hover:text-black transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
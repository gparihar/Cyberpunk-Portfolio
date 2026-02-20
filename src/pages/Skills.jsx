import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Java", level: 75 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="flex h-screen bg-black text-green-400"
    >
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl mb-8 tracking-widest">
          SKILL MATRIX
        </h1>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-green-900/30 h-3 rounded">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 bg-green-500 rounded shadow-[0_0_15px_#22c55e]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
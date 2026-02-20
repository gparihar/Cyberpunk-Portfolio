import { useEffect, useState } from "react";

const lines = [
  "Booting DevVault OS...",
  "Loading React Modules...",
  "Authenticating User...",
  "Access Granted ✔",
];

function Terminal({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < lines.length) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      setTimeout(onFinish, 1000);
    }
  }, [index]);

  return (
    <div className="h-screen bg-black text-green-500 font-mono p-10">
      {lines.slice(0, index).map((line, i) => (
        <p key={i}>{"> " + line}</p>
      ))}
    </div>
  );
}

export default Terminal;
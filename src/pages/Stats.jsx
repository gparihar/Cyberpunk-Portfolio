import Sidebar from "../components/Sidebar";

function Stats() {
  return (
    <div className="flex min-h-screen bg-black text-green-400">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl mb-10 tracking-widest">
          GITHUB MODULE
        </h1>

        <div className="flex flex-col items-center gap-10">

          {/* GitHub Profile Stats */}
          <iframe
            title="github-stats"
            src="https://github-readme-stats.vercel.app/api?username=gparihar&show_icons=true&theme=tokyonight"
            className="w-full max-w-2xl h-52 border-none"
          />

          {/* GitHub Streak */}
          <iframe
            title="github-streak"
            src="https://streak-stats.demolab.com?user=gparihar&theme=tokyonight"
            className="w-full max-w-2xl h-52 border-none"
          />

          {/* Top Languages */}
          <iframe
            title="top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gparihar&layout=compact&theme=tokyonight"
            className="w-full max-w-2xl h-52 border-none"
          />

        </div>
      </div>
    </div>
  );
}

export default Stats;
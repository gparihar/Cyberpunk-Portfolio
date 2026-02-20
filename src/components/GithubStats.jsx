import { useEffect, useState } from "react";

function GithubStats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/gparihar")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p>Loading GitHub Data...</p>;

  return (
    <div className="border border-green-500 p-6 mt-6 hover:shadow-[0_0_20px_#22c55e] transition-all duration-300">
      <h2 className="text-xl mb-3">GitHub Stats</h2>
      <p>Public Repos: {data.public_repos}</p>
      <p>Followers: {data.followers}</p>
      <p>Following: {data.following}</p>
    </div>
  );
}

export default GithubStats;
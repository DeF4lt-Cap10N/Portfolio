import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LeetcodeStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/leetcode")
      .then((res) => res.json())
      .then(setStats)
      .catch(console.error);
  }, []);

  if (!stats) {
    return <p className="text-center text-white">Loading LeetCode Stats...</p>;
  }

  const solved = stats.submitStats.acSubmissionNum;
  const totalSolved = solved.find((d) => d.difficulty === "All").count;
  const easy = solved.find((d) => d.difficulty === "Easy").count;
  const medium = solved.find((d) => d.difficulty === "Medium").count;
  const hard = solved.find((d) => d.difficulty === "Hard").count;
  const rank = stats.profile.ranking.toLocaleString();

  return (
    <>
      {/* bg-white/90 shadow-xl backdrop-blur
       */}
      <p className="text-2xl py-2 text-gray-400">Leetcode statistics</p>
      <section className="p-3">
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="relative overflow-hidden rounded-2xl p-6 
  bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] 
  text-white shadow-2xl hover:scale-[1.02] transition-transform duration-300 
  border border-white/10 
  after:absolute after:inset-0 after:bg-gradient-to-br after:from-cyan-400/10 after:to-violet-400/5 after:rounded-2xl after:blur-sm after:z-[-1]"
          >
            <h3 className="text-2xl font-bold mb-4"> Problems Solved</h3>
            <div className="flex items-center gap-8">
              <div className="w-24 h-24">
                <CircularProgressbar
                  value={totalSolved}
                  maxValue={2000}
                  text={`${totalSolved}`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#ffffff",
                    trailColor: "rgba(255,255,255,0.2)",
                  })}
                />
              </div>
              <div className="space-y-1 text-lg font-medium ">
                <p>
                  Easy: <span className="text-green-400 ">{easy}</span>
                </p>
                <p>
                  Medium: <span className="text-yellow-200">{medium}</span>
                </p>
                <p>
                  Hard: <span className="text-red-200">{hard}</span>
                </p>
              </div>
            </div>
          </div>

          {/*  Rank Card */}
          <div
            className="relative overflow-hidden rounded-2xl p-6 
  bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] 
  text-white shadow-2xl hover:scale-[1.02] transition-transform duration-300 
  border border-white/10 
  after:absolute after:inset-0 after:bg-gradient-to-br after:from-cyan-400/10 after:to-violet-400/5 after:rounded-2xl after:blur-sm after:z-[-1]"
          >
            <h3 className="text-2xl font-bold mb-4"> Global Ranking</h3>
            <p className="text-4xl font-bold animate-pulse">#{rank}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeetcodeStats;

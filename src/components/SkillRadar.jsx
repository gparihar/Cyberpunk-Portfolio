import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  { skill: "React", value: 80 },
  { skill: "JS", value: 85 },
  { skill: "HTML", value: 90 },
  { skill: "CSS", value: 85 },
  { skill: "Java", value: 75 },
];

function SkillRadar() {
  return (
    <RadarChart width={400} height={300} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="skill" stroke="#22c55e" />
      <PolarRadiusAxis stroke="#22c55e" />
      <Radar
        dataKey="value"
        stroke="#22c55e"
        fill="#22c55e"
        fillOpacity={0.4}
      />
    </RadarChart>
  );
}

export default SkillRadar;
import { personal } from "../data/personal";

/** Hero illustration: a hub-and-spoke network with the topics from my studies. Decorative SVG. */
const HUB = { x: 240, y: 240 };
const nodes = [
  { x: 80, y: 100, label: "FTTH" },
  { x: 400, y: 80, label: "5G" },
  { x: 430, y: 250, label: "BSC" },
  { x: 360, y: 405, label: "OSPF" },
  { x: 110, y: 400, label: "MSAN" },
  { x: 50, y: 250, label: "VLAN" },
];
const box = { transformBox: "fill-box", transformOrigin: "center" } as const;

export default function NetworkVisual() {
  return (
    <svg viewBox="0 0 480 480" role="img" aria-label="Network diagram linking FTTH, 5G, BSC, OSPF, MSAN and VLAN around the initials SMB" className="mx-auto h-auto w-full max-w-[460px]">
      <defs>
        <linearGradient id="hub" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffae00" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <radialGradient id="halo">
          <stop offset="0" stopColor="#22d3ee" stopOpacity=".25" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={HUB.x} cy={HUB.y} r="200" fill="url(#halo)" />
      {[80, 130, 185].map((r) => (
        <circle key={r} cx={HUB.x} cy={HUB.y} r={r} fill="none" stroke="#94a3b8" strokeOpacity=".14" strokeDasharray="2 6" />
      ))}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return <line key={`r${i}`} x1={n.x} y1={n.y} x2={next.x} y2={next.y} stroke="#ffae00" strokeOpacity=".22" />;
      })}
      {nodes.map((n) => (
        <line key={n.label} x1={HUB.x} y1={HUB.y} x2={n.x} y2={n.y} stroke="#22d3ee" strokeOpacity=".7" strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow" />
      ))}
      <circle cx={HUB.x} cy={HUB.y} r="40" fill="none" stroke="#22d3ee" strokeWidth="1.5" className="animate-ring" style={box} />
      <circle cx={HUB.x} cy={HUB.y} r="40" fill="none" stroke="#ffae00" strokeWidth="1.5" className="animate-ring" style={{ ...box, animationDelay: "1.7s" }} />
      <circle cx={HUB.x} cy={HUB.y} r="36" fill="url(#hub)" />
      <text x={HUB.x} y={HUB.y + 7} textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="20" fill="#060b18">
        {personal.initials}
      </text>
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="16" fill="#0f1830" stroke="#22d3ee" strokeOpacity=".5" />
          <circle cx={n.x} cy={n.y} r="5" fill="#22d3ee" />
          <text x={n.x} y={n.y + 34} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500" fill="#cbd5e1">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

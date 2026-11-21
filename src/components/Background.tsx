/** Fixed technical backdrop: faint grid, soft glows and a sparse network of nodes. Purely decorative. */
const nodes = [
  [8, 18], [22, 62], [36, 28], [52, 74], [66, 20], [80, 56], [92, 30], [14, 86], [74, 90],
];
const links = [[0, 2], [2, 4], [4, 6], [1, 3], [3, 5], [5, 6], [2, 5], [1, 7], [3, 8]];

export default function Background() {
  const mask = "radial-gradient(ellipse at 50% 25%, #000 25%, transparent 75%)";
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.07) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />
      <div className="absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-yellow/20 blur-[120px]" />
      <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-cyan/10 blur-[120px]" />
      <svg className="absolute inset-0 h-full w-full opacity-30">
        {links.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={`${nodes[a][0]}%`} y1={`${nodes[a][1]}%`} x2={`${nodes[b][0]}%`} y2={`${nodes[b][1]}%`} stroke="#ffae00" strokeWidth="1" opacity=".35" />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={`${x}%`} cy={`${y}%`} r="3" fill="#22d3ee" />
        ))}
      </svg>
    </div>
  );
}

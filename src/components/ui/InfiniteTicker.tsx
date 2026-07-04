const marqueeItems = [
  "Hausmeisterservice",
  "Fußbodenverlegung",
  "Netzwerkverlegung",
  "Silikonarbeiten",
  "3D-Modelle",
  "24/7 Notdienst",
  "Kostenlose Beratung",
];

const doubled = [...marqueeItems, ...marqueeItems];

export function InfiniteTicker() {
  return (
    <div style={{
      position: "relative",
      background: "#111113",
      borderTop: "1px solid rgba(245,245,247,0.08)",
      borderBottom: "1px solid rgba(245,245,247,0.08)",
      padding: "22px 0",
      overflow: "hidden",
      whiteSpace: "nowrap",
    }}>
      <div style={{ display: "inline-flex", animation: "marqueeScroll 32s linear infinite" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.5px",
              color: "rgba(245,245,247,0.55)",
              padding: "0 28px",
            }}
          >
            {item}
            <span style={{ color: "#ff8a3d", marginLeft: 28 }}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

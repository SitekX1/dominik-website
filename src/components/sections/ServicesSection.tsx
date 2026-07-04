"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Hausmeisterservice",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Fußbodenverlegung",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Netzwerkverlegung",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Silikonarbeiten",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "3D-Modelle",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=80",
  },
];

function ServiceCard({ title, image, visible, index }: { title: string; image: string; visible: boolean; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        aspectRatio: "3/4",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-12px) rotate(-0.6deg) scale(1.02)"
            : "translateY(0) rotate(0) scale(1)"
          : "translateY(32px)",
        boxShadow: hovered ? "0 26px 55px rgba(0,0,0,0.5)" : "none",
        transition: visible
          ? `opacity 0.5s ease ${index * 0.08}s, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease`
          : "none",
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        style={{
          filter: hovered ? "brightness(0.85) grayscale(0%)" : "brightness(0.65) grayscale(20%)",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1), filter 0.6s ease",
        }}
      />
      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, transparent 40%, rgba(8,8,10,0.9) 100%)",
      }} />
      {/* Bottom content */}
      <div style={{ position: "absolute", bottom: 22, left: 22, right: 22 }}>
        <div style={{
          width: hovered ? 48 : 34,
          height: 2,
          background: "#ff8a3d",
          marginBottom: 12,
          transition: "width 0.3s ease",
        }} />
        <div style={{
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "0.3px",
          color: "#f5f5f7",
        }}>
          {title}
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHeaderVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGridVisible(true); obs2.disconnect(); } }, { threshold: 0.1 });
    if (headerRef.current) obs.observe(headerRef.current);
    if (gridRef.current) obs2.observe(gridRef.current);
    return () => { obs.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <section id="leistungen" style={{ background: "#08080a", padding: "140px clamp(24px,6vw,90px)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            marginBottom: 64,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <span style={{ width: 24, height: 1, background: "#ff8a3d" }} />
            <span style={{ fontSize: 13, letterSpacing: "2px", color: "#ff8a3d", fontWeight: 700, textTransform: "uppercase" }}>
              Was ich anbiete
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(30px,4.5vw,54px)",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            margin: "0 0 16px 0",
            maxWidth: 780,
            color: "#f5f5f7",
          }}>
            KÄMPFEN SIE MIT HEIMWERKSPROBLEMEN?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(245,245,247,0.55)", margin: 0 }}>Ich bin sofort für Sie da!</p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 22,
          }}
        >
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} title={svc.title} image={svc.image} visible={gridVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

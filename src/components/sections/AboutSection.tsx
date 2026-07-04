"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: "5+", label: "Leistungsbereiche" },
  { value: "100%", label: "Qualitätsgarantie" },
  { value: "Schnell", label: "Reaktionszeit" },
  { value: "Persönlich", label: "Vor-Ort-Beratung" },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="ueber-mich"
      style={{ padding: "0 clamp(24px,6vw,90px) 140px", background: "#08080a" }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(280px,420px) 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-32px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/5" }}>
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
              alt="Dominik Lenz — LELO"
              fill
              className="object-cover"
              style={{ filter: "grayscale(25%) brightness(0.85)" }}
            />
          </div>
          <div style={{
            position: "absolute",
            bottom: -24,
            right: -24,
            background: "linear-gradient(135deg, #ff9a52, #e8672a)",
            color: "#0a0a0b",
            borderRadius: 18,
            padding: "20px 24px",
            textAlign: "center",
            boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            animation: "floatY 4s ease-in-out infinite",
          }}>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-1px" }}>TOP</div>
            <div style={{ fontSize: 10, letterSpacing: "1.5px", fontWeight: 700 }}>QUALITÄT</div>
          </div>
        </div>

        {/* Text */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(32px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <span style={{ width: 24, height: 1, background: "#ff8a3d" }} />
            <span style={{ fontSize: 13, letterSpacing: "2px", color: "#ff8a3d", fontWeight: 700, textTransform: "uppercase" }}>
              Über mich
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px,3.8vw,44px)", fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.15, margin: "0 0 20px 0", color: "#f5f5f7" }}>
            ZUVERLÄSSIGE HANDWERKSLÖSUNGEN FÜR ZUHAUSE
          </h2>
          <p style={{ fontSize: 17, color: "rgba(245,245,247,0.85)", lineHeight: 1.6, margin: "0 0 16px 0", fontWeight: 500 }}>
            Zuverlässige Reparaturen. Professioneller Service. Vertrauensvolle Ergebnisse — jedes Mal.
          </p>
          <p style={{ fontSize: 16, color: "rgba(245,245,247,0.55)", lineHeight: 1.7, margin: "0 0 44px 0" }}>
            Ich biete zuverlässige Handwerks- und Wartungsleistungen, die dafür sorgen, dass Ihre Immobilie
            sicher, funktionsfähig und in bestem Zustand bleibt. Von kleinen Reparaturen bis zu kompletten
            Installationen — mit Sorgfalt und Aufmerksamkeit für jedes Detail.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 28, marginBottom: 44 }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: 30, fontWeight: 800, color: "#ff8a3d", letterSpacing: "-1px" }}>{stat.value}</div>
                <div style={{ fontSize: 13, color: "rgba(245,245,247,0.5)", marginTop: 4, fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <a
            href="#kontakt"
            style={{ background: "#f5f5f7", color: "#0a0a0b", textDecoration: "none", fontWeight: 700, fontSize: 14, padding: "16px 30px", borderRadius: 100, display: "inline-block", transition: "all 0.3s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#ff8a3d"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#f5f5f7"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            MEHR ÜBER MICH
          </a>
        </div>
      </div>
    </section>
  );
}

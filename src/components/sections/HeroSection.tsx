"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const heroStats = [
  { value: "24/7", label: "NOTDIENST" },
  { value: "5+", label: "LEISTUNGEN" },
  { value: "100%", label: "QUALITÄT" },
];

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(() => setShown(true), 60);
    return () => { window.removeEventListener("scroll", onScroll); clearTimeout(t); };
  }, []);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 clamp(24px,6vw,90px)",
        overflow: "hidden",
      }}
    >
      {/* Background with parallax */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, transform: `translateY(${scrollY * 0.25}px)` }}>
        <Image
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1600&q=85"
          alt="Professioneller Handwerker"
          fill
          priority
          style={{ objectFit: "cover", filter: "grayscale(35%) brightness(0.55)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,10,0.55) 0%, rgba(8,8,10,0.75) 55%, #08080a 100%)" }} />
      </div>

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 900,
        paddingTop: 120,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)",
      }}>
        {/* Tag */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff8a3d", animation: "floatY 2s ease-in-out infinite", flexShrink: 0 }} />
          <span style={{ fontSize: 13, letterSpacing: "2px", color: "rgba(245,245,247,0.6)", fontWeight: 600, textTransform: "uppercase" }}>
            Ihr Handwerker vor Ort — Huisheim &amp; Umgebung
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(42px,7vw,92px)",
          fontWeight: 800,
          lineHeight: 1.02,
          letterSpacing: "-2.5px",
          margin: "0 0 26px 0",
          color: "#f5f5f7",
        }}>
          SMARTER<br />HANDWERKER<br />
          <span style={{ background: "linear-gradient(90deg,#ff9a52,#ff5f2e)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            VOR ORT!
          </span>
        </h1>

        {/* Subtext */}
        <p style={{ fontSize: "clamp(16px,1.6vw,19px)", color: "rgba(245,245,247,0.65)", maxWidth: 520, lineHeight: 1.6, margin: "0 0 40px 0", fontWeight: 400 }}>
          Von kleinen Reparaturen bis zu kompletten Installationen — ich erledige fast alles für Ihr Zuhause oder Unternehmen, inkl. schnellem Notdienst.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", marginBottom: 64 }}>
          <a
            href="tel:+491791611556"
            style={{ background: "#ff8a3d", color: "#0a0a0b", textDecoration: "none", fontWeight: 700, fontSize: 15, padding: "17px 32px", borderRadius: 100, transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)", display: "inline-block" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.transform = "translateY(-3px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(255,138,61,0.25)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#ff8a3d"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            JETZT ANRUFEN
          </a>
          <a
            href="#leistungen"
            style={{ border: "1px solid rgba(245,245,247,0.25)", color: "#f5f5f7", textDecoration: "none", fontWeight: 600, fontSize: 15, padding: "17px 32px", borderRadius: 100, transition: "all 0.3s ease", display: "inline-block" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#f5f5f7"; e.currentTarget.style.background = "rgba(245,245,247,0.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,245,247,0.25)"; e.currentTarget.style.background = ""; }}
          >
            LEISTUNGEN
          </a>
        </div>

        {/* Horizontal stats row */}
        <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "0 36px 0 0",
                marginRight: 36,
                borderRight: i < heroStats.length - 1 ? "1px solid rgba(245,245,247,0.12)" : "none",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 800, color: "#f5f5f7", letterSpacing: "-1px" }}>{stat.value}</div>
              <div style={{ fontSize: 11, letterSpacing: "1.5px", color: "rgba(245,245,247,0.45)", fontWeight: 600, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

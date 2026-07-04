"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function CtaBannerSection() {
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
    <section style={{ padding: "100px clamp(24px,6vw,90px) 140px", background: "#08080a" }}>
      <div
        ref={ref}
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-28px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <h2 style={{
            fontSize: "clamp(28px,4vw,50px)",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            lineHeight: 1.12,
            margin: "0 0 18px 0",
            color: "#f5f5f7",
          }}>
            ZUVERLÄSSIGE HANDWERKSLEISTUNGEN VOM EXPERTEN HEUTE
          </h2>
          <p style={{ fontSize: 17, color: "rgba(245,245,247,0.5)", margin: "0 0 40px 0", maxWidth: 480 }}>
            Zuverlässige Reparaturlösungen — schnell, sauber, professionell.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 420 }}>
            <a
              href="tel:+491791611556"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#ff8a3d", color: "#0a0a0b", textDecoration: "none", padding: "18px 26px", borderRadius: 16, transition: "all 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
            >
              <span style={{ fontWeight: 800, fontSize: 15 }}>+49 179 1611556</span>
              <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.75 }}>Jetzt anrufen!</span>
            </a>

            <a
              href="mailto:lelo.kontakt@gmail.com"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "transparent", border: "1px solid rgba(245,245,247,0.18)", color: "#f5f5f7", textDecoration: "none", padding: "18px 26px", borderRadius: 16, transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#ff8a3d"; e.currentTarget.style.transform = "translateX(6px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,245,247,0.18)"; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <span style={{ fontWeight: 700, fontSize: 14 }}>LELO.KONTAKT@GMAIL.COM</span>
              <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.6 }}>Business E-Mail</span>
            </a>

            <div style={{ fontSize: 13, color: "rgba(245,245,247,0.4)", paddingLeft: 6, letterSpacing: "0.3px" }}>
              GRÜNER WEG 14, 86685 HUISHEIM
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div style={{
          position: "relative",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(28px)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        }}>
          <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "1/1" }}>
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
              alt="Handwerker mit Werkzeug"
              fill
              className="object-cover"
              style={{ filter: "grayscale(30%) brightness(0.75)" }}
            />
          </div>
          <div style={{
            position: "absolute",
            top: 20,
            left: 20,
            background: "rgba(8,8,10,0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(245,245,247,0.15)",
            borderRadius: 100,
            padding: "8px 18px",
            fontSize: 11,
            letterSpacing: "1.5px",
            fontWeight: 700,
            color: "#f5f5f7",
            whiteSpace: "nowrap",
          }}>
            LELO DOMINIK LENZ • JETZT ANFRAGEN
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(245,245,247,0.08)", padding: "70px clamp(24px,6vw,90px) 40px", background: "#0a0a0b" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 50, paddingBottom: 50 }}>

        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(145deg,#ff9a52,#e8672a)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, color: "#0a0a0b" }}>L</div>
            <span style={{ fontWeight: 800, fontSize: 15, color: "#f5f5f7" }}>LELO</span>
          </div>
          <p style={{ fontSize: 14, color: "rgba(245,245,247,0.5)", lineHeight: 1.65, maxWidth: 300, margin: "0 0 20px 0" }}>
            Meine Arbeit basiert auf Vertrauen, Zuverlässigkeit und Qualität. Ich begleite Sie persönlich von der ersten Beratung bis zur finalen Umsetzung.
          </p>
          <div style={{ fontSize: 13.5, color: "rgba(245,245,247,0.6)", lineHeight: 1.8 }}>
            <div>+49 179 1611556</div>
            <div>lelo.kontakt@gmail.com</div>
            <div>Grüner Weg 14, 86685 Huisheim OT Gosheim</div>
          </div>
        </div>

        {/* Leistungen */}
        <div>
          <div style={{ fontSize: 12, letterSpacing: "1px", color: "rgba(245,245,247,0.4)", fontWeight: 700, marginBottom: 18 }}>LEISTUNGEN</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {["Hausmeisterservice", "Fußbodenverlegung", "Netzwerkverlegung", "Silikonarbeiten", "3D-Modelle"].map((item) => (
              <a key={item} href="#leistungen" style={{ color: "rgba(245,245,247,0.6)", textDecoration: "none", fontSize: 14, transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff8a3d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,247,0.6)")}>
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div style={{ fontSize: 12, letterSpacing: "1px", color: "rgba(245,245,247,0.4)", fontWeight: 700, marginBottom: 18 }}>NAVIGATION</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {[{ label: "Leistungen", href: "#leistungen" }, { label: "Über mich", href: "#ueber-mich" }, { label: "FAQ", href: "#faq" }, { label: "Kontakt", href: "#kontakt" }].map((link) => (
              <a key={link.href} href={link.href} style={{ color: "rgba(245,245,247,0.6)", textDecoration: "none", fontSize: 14, transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff8a3d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,247,0.6)")}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Rechtliches */}
        <div>
          <div style={{ fontSize: 12, letterSpacing: "1px", color: "rgba(245,245,247,0.4)", fontWeight: 700, marginBottom: 18 }}>RECHTLICHES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <Link href="/impressum" style={{ color: "rgba(245,245,247,0.6)", textDecoration: "none", fontSize: 14, transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff8a3d")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,247,0.6)")}>
              Impressum
            </Link>
            <Link href="/datenschutz" style={{ color: "rgba(245,245,247,0.6)", textDecoration: "none", fontSize: 14, transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff8a3d")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,247,0.6)")}>
              Datenschutz
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", paddingTop: 28, borderTop: "1px solid rgba(245,245,247,0.08)", fontSize: 13, color: "rgba(245,245,247,0.35)", textAlign: "center" }}>
        © {new Date().getFullYear()} LELO Dominik Lenz. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

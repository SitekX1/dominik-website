"use client";

import { useEffect, useRef, useState } from "react";

const services = ["Hausmeisterservice", "Fußbodenverlegung", "Netzwerkverlegung", "Silikonarbeiten", "3D-Modelle", "Sonstiges"];

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "#08080a",
    border: "1px solid rgba(245,245,247,0.12)",
    borderRadius: 10,
    padding: "13px 16px",
    color: "#f5f5f7",
    fontSize: 14,
    fontFamily: "inherit",
    outline: "none",
    width: "100%",
    transition: "border-color 0.25s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 12,
    letterSpacing: "0.5px",
    color: "rgba(245,245,247,0.5)",
    fontWeight: 600,
    marginBottom: 8,
    display: "block",
  };

  const cardStyle: React.CSSProperties = {
    background: "#111113",
    border: "1px solid rgba(245,245,247,0.08)",
    borderRadius: 16,
    padding: "22px 26px",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    transition: "border-color 0.3s ease",
  };

  return (
    <section id="kontakt" style={{ padding: "0 clamp(24px,6vw,90px) 160px", background: "#08080a" }}>
      <div
        ref={ref}
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 0.8fr",
          gap: 60,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}
      >
        {/* Form */}
        <div style={{ background: "#111113", border: "1px solid rgba(245,245,247,0.08)", borderRadius: 24, padding: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ width: 24, height: 1, background: "#ff8a3d" }} />
            <span style={{ fontSize: 13, letterSpacing: "2px", color: "#ff8a3d", fontWeight: 700, textTransform: "uppercase" }}>Kontakt</span>
          </div>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,38px)", fontWeight: 800, letterSpacing: "-1px", margin: "0 0 10px 0", color: "#f5f5f7" }}>PROJEKT ANFRAGEN</h2>
          <p style={{ fontSize: 15, color: "rgba(245,245,247,0.5)", margin: "0 0 36px 0" }}>Schildern Sie Ihr Anliegen — ich melde mich schnellstmöglich.</p>

          {submitted ? (
            <div style={{ padding: 40, textAlign: "center", border: "1px solid rgba(255,138,61,0.3)", borderRadius: 16, background: "rgba(255,138,61,0.06)" }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>✓</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#f5f5f7", marginBottom: 8 }}>Anfrage gesendet!</div>
              <div style={{ fontSize: 14, color: "rgba(245,245,247,0.55)" }}>Ich melde mich schnellstmöglich bei Ihnen.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <div>
                  <label style={labelStyle}>NAME *</label>
                  <input required type="text" style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#ff8a3d")} onBlur={(e) => (e.target.style.borderColor = "rgba(245,245,247,0.12)")} />
                </div>
                <div>
                  <label style={labelStyle}>TELEFON</label>
                  <input type="tel" style={inputStyle} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#ff8a3d")} onBlur={(e) => (e.target.style.borderColor = "rgba(245,245,247,0.12)")} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>E-MAIL *</label>
                <input required type="email" style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = "#ff8a3d")} onBlur={(e) => (e.target.style.borderColor = "rgba(245,245,247,0.12)")} />
              </div>
              <div>
                <label style={labelStyle}>LEISTUNG *</label>
                <select required style={{ ...inputStyle, appearance: "none" }} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  <option value="" disabled>Bitte wählen...</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>NACHRICHT *</label>
                <textarea required rows={4} style={{ ...inputStyle, resize: "vertical" }} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = "#ff8a3d")} onBlur={(e) => (e.target.style.borderColor = "rgba(245,245,247,0.12)")} />
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  marginTop: 8,
                  background: "#ff8a3d",
                  color: "#0a0a0b",
                  border: "none",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.5px",
                  padding: 16,
                  borderRadius: 12,
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.6 : 1,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#ff8a3d"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {loading ? "WIRD GESENDET..." : "ANFRAGE SENDEN"}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { label: "TELEFON (HAUPT)", value: "+49 179 1611556", href: "tel:+491791611556" },
            { label: "TELEFON (ALT)", value: "+49 176 80644258", href: "tel:+4917680644258" },
            { label: "E-MAIL", value: "lelo.kontakt@gmail.com", href: "mailto:lelo.kontakt@gmail.com" },
          ].map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,138,61,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(245,245,247,0.08)")}
            >
              <span style={{ fontSize: 11, letterSpacing: "1px", color: "rgba(245,245,247,0.4)", fontWeight: 600 }}>{label}</span>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#f5f5f7" }}>{value}</span>
            </a>
          ))}

          <div style={cardStyle}>
            <span style={{ fontSize: 11, letterSpacing: "1px", color: "rgba(245,245,247,0.4)", fontWeight: 600 }}>ADRESSE</span>
            <div style={{ fontSize: 15, color: "rgba(245,245,247,0.75)", marginTop: 6, lineHeight: 1.5 }}>
              Grüner Weg 14<br />86685 Huisheim OT Gosheim
            </div>
          </div>

          <div style={{ background: "linear-gradient(145deg,#ff9a52,#e8672a)", borderRadius: 16, padding: "24px 26px", marginTop: 6 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#0a0a0b", marginBottom: 6 }}>Schnelle Antwort?</div>
            <div style={{ fontSize: 13, color: "rgba(10,10,11,0.75)", marginBottom: 16, lineHeight: 1.5 }}>
              Rufen Sie direkt an — ich bin meistens sofort erreichbar.
            </div>
            <a
              href="tel:+491791611556"
              style={{ display: "inline-block", background: "#0a0a0b", color: "#f5f5f7", textDecoration: "none", fontWeight: 700, fontSize: 13, padding: "12px 22px", borderRadius: 100, transition: "transform 0.25s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              JETZT ANRUFEN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  { q: "In welchen Regionen sind Sie tätig?", a: "Ich bin hauptsächlich im Raum Donau-Ries tätig — Huisheim, Gosheim, Donauwörth und umliegende Gemeinden. Für größere Projekte bin ich auch in weiteren Regionen verfügbar." },
  { q: "Wie schnell kann ich einen Termin bekommen?", a: "In der Regel innerhalb weniger Werktage. Für dringende Fälle versuche ich kurzfristig zu helfen — rufen Sie einfach an." },
  { q: "Wie werden die Kosten berechnet?", a: "Nach einer kostenlosen Erstberatung erhalten Sie ein transparentes Angebot ohne versteckte Kosten. Erst nach Ihrer Zustimmung beginnen wir." },
  { q: "Bieten Sie auch gewerbliche Dienstleistungen an?", a: "Ja — ich arbeite für Privathaushalte und Unternehmen. Besonders bei Netzwerkverlegung und Hausmeisterservice habe ich umfangreiche gewerbliche Erfahrung." },
  { q: "Haben Sie eine Haftpflichtversicherung?", a: "Ja, ich bin vollständig haftpflichtversichert. Sie können sich auf qualitativ hochwertige Arbeit mit dem Schutz verlassen, den Sie verdienen." },
  { q: "Wie kontaktiere ich Sie am besten?", a: "Am schnellsten telefonisch unter +49 179 1611556. Alternativ per E-Mail an lelo.kontakt@gmail.com — ich antworte innerhalb von 24 Stunden." },
];

function FaqItem({ faq, visible, index }: { faq: { q: string; a: string }; visible: boolean; index: number }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "rgba(255,138,61,0.45)" : "rgba(245,245,247,0.1)"}`,
        borderRadius: 16,
        background: hovered ? "#131315" : "#0e0e10",
        overflow: "hidden",
        transform: visible
          ? hovered ? "translateX(6px)" : "translateX(0)"
          : "translateX(-16px)",
        opacity: visible ? 1 : 0,
        transition: visible
          ? `opacity 0.5s ease ${index * 0.07}s, transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, background 0.3s ease`
          : "none",
      }}
    >
      {/* Question row */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 26px",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: "#f5f5f7", paddingRight: 20, transition: "color 0.25s ease" }}>
          {faq.q}
        </span>
        <span style={{
          width: 26,
          height: 26,
          minWidth: 26,
          borderRadius: "50%",
          border: `1px solid ${open ? "#ff8a3d" : "rgba(245,245,247,0.25)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          color: "#ff8a3d",
          transform: open ? "rotate(135deg)" : "rotate(0deg)",
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.25s ease",
        }}>
          +
        </span>
      </div>

      {/* Answer */}
      <div style={{
        display: "grid",
        gridTemplateRows: open ? "1fr" : "0fr",
        transition: "grid-template-rows 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}>
        <div style={{ overflow: "hidden" }}>
          <p style={{ margin: 0, padding: "0 26px 24px", fontSize: 15, lineHeight: 1.65, color: "rgba(245,245,247,0.55)" }}>
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [listVisible, setListVisible] = useState(false);

  useEffect(() => {
    const o1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHeaderVisible(true); o1.disconnect(); } }, { threshold: 0.2 });
    const o2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setListVisible(true); o2.disconnect(); } }, { threshold: 0.1 });
    if (headerRef.current) o1.observe(headerRef.current);
    if (listRef.current) o2.observe(listRef.current);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  return (
    <section id="faq" style={{ padding: "0 clamp(24px,6vw,90px) 140px", background: "#08080a" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            marginBottom: 56,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <span style={{ width: 24, height: 1, background: "#ff8a3d" }} />
            <span style={{ fontSize: 13, letterSpacing: "2px", color: "#ff8a3d", fontWeight: 700, textTransform: "uppercase" }}>
              Häufige Fragen
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, letterSpacing: "-1.5px", margin: 0, color: "#f5f5f7" }}>
            FRAGEN &amp; ANTWORTEN
          </h2>
        </div>

        {/* Items */}
        <div ref={listRef} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} visible={listVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

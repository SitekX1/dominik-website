"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "ÜBER MICH", href: "#ueber-mich" },
  { label: "LEISTUNGEN", href: "#leistungen" },
  { label: "KONTAKT", href: "#kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s ease, backdrop-filter 0.4s ease, padding 0.4s ease, border-color 0.4s ease",
        background: scrolled ? "rgba(8,8,10,0.85)" : "rgba(8,8,10,0)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        borderBottom: scrolled
          ? "1px solid rgba(245,245,247,0.08)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "height 0.4s ease",
            height: scrolled ? "60px" : "76px",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              style={{
                width: 36,
                height: 36,
                background: "linear-gradient(135deg, #ff9a52, #e8672a)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: 18,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                L
              </span>
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  color: "#f5f5f7",
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: "0.06em",
                  lineHeight: 1.1,
                }}
              >
                LELO
              </span>
              <span
                style={{
                  display: "block",
                  color: "rgba(245,245,247,0.45)",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.08em",
                }}
              >
                DOMINIK LENZ
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(245,245,247,0.6)",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#f5f5f7")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245,245,247,0.6)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+491791611556"
              className="hidden sm:flex items-center gap-2 animate-pulse-cta"
              style={{
                background: "linear-gradient(135deg, #ff9a52, #e8672a)",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 100,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Phone size={12} />
              ANRUFEN
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              style={{
                background: "rgba(245,245,247,0.06)",
                border: "1px solid rgba(245,245,247,0.1)",
                borderRadius: 8,
                padding: "8px",
                color: "#f5f5f7",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Menü"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? "400px" : "0",
          transition: "max-height 0.35s ease",
          background: "rgba(8,8,10,0.97)",
          backdropFilter: "blur(20px)",
          borderTop: menuOpen
            ? "1px solid rgba(245,245,247,0.08)"
            : "1px solid transparent",
        }}
        className="md:hidden"
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                color: "rgba(245,245,247,0.65)",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.12em",
                textDecoration: "none",
                borderBottom: "1px solid rgba(245,245,247,0.06)",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+491791611556"
            style={{
              marginTop: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "linear-gradient(135deg, #ff9a52, #e8672a)",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: 100,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.1em",
              textDecoration: "none",
            }}
          >
            <Phone size={13} />
            +49 179 1611556
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      animate={{
        backgroundColor: scrolled ? "rgba(24,10,5,0.95)" : "rgba(24,10,5,0.0)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="LELO Logo"
              width={110}
              height={44}
              className="h-10 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white font-semibold text-xs tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+491791611556"
              className="hidden sm:flex items-center gap-2.5 bg-[#D4A017] hover:bg-[#B8880D] text-[#180A05] px-5 py-2.5 rounded-sm font-bold text-xs tracking-widest transition-colors"
            >
              <ArrowRight size={14} />
              ANRUFEN
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-white"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#180A05] border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-white/70 hover:text-white font-bold text-xs tracking-widest border-b border-white/5 last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="tel:+491791611556"
                className="mt-4 flex items-center justify-center gap-2 bg-[#D4A017] text-[#180A05] px-5 py-3.5 font-bold text-xs tracking-widest"
              >
                <Phone size={14} />
                +49 179 1611556
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

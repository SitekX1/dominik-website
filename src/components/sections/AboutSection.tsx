"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { softInViewSpring } from "@/lib/animations";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ueber-mich" className="bg-[#180A05] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Photo */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={softInViewSpring}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Dominik Lenz — LELO"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180A05]/60 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ ...softInViewSpring, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-[#D4A017] p-6 rounded-sm shadow-2xl"
            >
              <p className="text-5xl font-black text-[#180A05]">24/7</p>
              <p className="text-[#180A05]/70 text-xs font-bold tracking-widest mt-1">ERREICHBAR</p>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...softInViewSpring, delay: 0.15 }}
          >
            <p className="text-[#D4A017] font-bold text-xs tracking-[0.3em] uppercase mb-6">
              Über mich
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight tracking-tight mb-6">
              ZUVERLÄSSIGE<br />
              HANDWERKSLÖSUNGEN<br />
              <span className="text-[#D4A017]">FÜR ZUHAUSE</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Zuverlässige Reparaturen. Professioneller Service. Vertrauensvolle Ergebnisse — jedes Mal.
            </p>
            <p className="text-white/70 leading-relaxed mb-10">
              Ich biete zuverlässige Handwerks- und Wartungsleistungen, die dafür sorgen,
              dass Ihre Immobilie sicher, funktionsfähig und in bestem Zustand bleibt.
              Von kleinen Reparaturen bis zu kompletten Installationen — mit Sorgfalt und
              Aufmerksamkeit für jedes Detail.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { value: "5+", label: "Leistungsbereiche" },
                { value: "100%", label: "Qualitätsgarantie" },
                { value: "24/7", label: "Notdienst" },
                { value: "Persönlich", label: "Vor-Ort-Beratung" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#D4A017] pl-4">
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-white/40 text-xs font-medium tracking-wide mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 bg-[#D4A017] hover:bg-[#B8880D] text-[#180A05] px-7 py-4 font-black text-xs tracking-widest transition-colors"
            >
              <ArrowRight size={14} />
              MEHR ÜBER MICH
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

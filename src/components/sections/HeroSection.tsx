"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { heroContainerVariants, heroItemVariants } from "@/lib/animations";

export function HeroSection() {
  const controls = useAnimation();

  // Periodische Drill-Vibration alle 4 Sekunden
  useEffect(() => {
    const drill = async () => {
      while (true) {
        await new Promise((r) => setTimeout(r, 4000));
        await controls.start({
          x: [0, -4, 4, -4, 4, -3, 3, -2, 2, 0],
          y: [0, 2, -2, 2, -2, 1, -1, 0, 0, 0],
          transition: { duration: 0.6, ease: "easeInOut" },
        });
      }
    };
    drill();
  }, [controls]);

  return (
    <section className="relative min-h-screen bg-[#180A05] overflow-hidden flex items-end">

      {/* Full-bleed Handwerker Bild */}
      <div className="absolute inset-0">
        <motion.div animate={controls} className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=85"
            alt="Professioneller Handwerker"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#180A05] via-[#180A05]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#180A05] via-transparent to-[#180A05]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-end">

          {/* Left: Main Text */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={heroItemVariants}
              className="inline-block text-[#D4A017] font-bold text-xs tracking-[0.3em] uppercase mb-6"
            >
              Ihr Handwerker vor Ort — Huisheim & Umgebung
            </motion.span>

            <motion.h1
              variants={heroItemVariants}
              className="text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase leading-[0.9] tracking-tight mb-8"
            >
              <span className="text-[#D4A017]">SMARTER</span>
              <br />
              HANDWERKER
              <br />
              <span className="text-white/90">VOR ORT!</span>
            </motion.h1>

            <motion.div
              variants={heroItemVariants}
              className="flex flex-col sm:flex-row gap-3 mt-6"
            >
              <a
                href="tel:+491791611556"
                className="flex items-center gap-3 bg-[#D4A017] hover:bg-[#B8880D] text-[#180A05] px-6 py-4 font-black text-sm tracking-widest transition-colors"
              >
                <Phone size={16} />
                JETZT ANRUFEN
              </a>
              <a
                href="#leistungen"
                className="flex items-center gap-3 border border-white/20 hover:border-white/50 text-white px-6 py-4 font-bold text-sm tracking-widest transition-colors"
              >
                <ArrowRight size={16} />
                LEISTUNGEN
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="lg:text-right"
          >
            <p className="text-white/70 text-lg leading-relaxed max-w-md ml-auto mb-8">
              Von kleinen Reparaturen bis zu kompletten Installationen —
              ich erledige fast alles für Ihr Zuhause oder Unternehmen,
              inkl. schnellem Notdienst.
            </p>

            {/* Stats */}
            <div className="flex lg:justify-end gap-10">
              <div>
                <p className="text-4xl font-black text-white">24/7</p>
                <p className="text-white/50 text-xs font-medium tracking-wider mt-1">NOTDIENST</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-4xl font-black text-[#D4A017]">5+</p>
                <p className="text-white/50 text-xs font-medium tracking-wider mt-1">LEISTUNGEN</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-4xl font-black text-white">100%</p>
                <p className="text-white/50 text-xs font-medium tracking-wider mt-1">QUALITÄT</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/30" />
        <span className="text-xs tracking-widest font-medium">SCROLL</span>
      </motion.div>
    </section>
  );
}

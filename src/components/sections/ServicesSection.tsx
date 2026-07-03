"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { softInViewSpring } from "@/lib/animations";

const services = [
  {
    title: "HAUSMEISTERSERVICE",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "FUSSBODENVERLEGUNG",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "NETZWERKVERLEGUNG",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "SILIKONARBEITEN",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "3D-MODELLE",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=80",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leistungen" className="bg-[#F8F4EE] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={softInViewSpring}
          className="text-center mb-16"
        >
          <p className="text-[#D4A017] font-bold text-xs tracking-[0.3em] uppercase mb-4">
            Was ich anbiete
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#180A05] uppercase leading-tight tracking-tight">
            KÄMPFEN SIE MIT<br />
            HEIMWERKSPROBLEMEN?
          </h2>
          <p className="text-[#180A05]/50 mt-4 text-base font-medium">
            Ich bin sofort für Sie da!
          </p>
        </motion.div>
      </div>

      {/* Scrolling Cards (kein Container-Overflow) */}
      <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 lg:px-8 pb-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...softInViewSpring, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="flex-shrink-0 w-56 sm:w-64 cursor-pointer group"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-[#241208]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#D4A017]/0 group-hover:bg-[#D4A017]/15 transition-colors duration-300" />
            </div>
            <p className="mt-4 font-black text-[#180A05] text-sm tracking-widest leading-tight">
              {service.title}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </section>
  );
}

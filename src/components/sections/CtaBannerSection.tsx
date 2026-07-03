"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { SpinningBadge } from "@/components/ui/SpinningBadge";
import { softInViewSpring } from "@/lib/animations";

export function CtaBannerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#D4A017] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-center">

          {/* Left: Text + Contact Cards */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={softInViewSpring}
            className="py-16 lg:py-24"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-[#180A05] uppercase leading-tight tracking-tight mb-4">
              ZUVERLÄSSIGE<br />
              HANDWERKSLEISTUNGEN<br />
              VOM EXPERTEN HEUTE
            </h2>
            <p className="text-[#180A05]/60 text-sm mb-10">
              Zuverlässige Reparaturlösungen — schnell, sauber, professionell.
            </p>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+491791611556"
                className="flex items-center gap-4 bg-[#180A05] text-white px-5 py-4 hover:bg-[#241208] transition-colors"
              >
                <Phone size={16} className="text-[#D4A017] flex-shrink-0" />
                <div>
                  <p className="font-black text-sm tracking-wide">+49 179 1611556</p>
                  <p className="text-white/40 text-xs mt-0.5">Jetzt anrufen!</p>
                </div>
              </a>

              <a
                href="mailto:lelo.kontakt@gmail.com"
                className="flex items-center gap-4 bg-[#E63312] text-white px-5 py-4 hover:bg-red-700 transition-colors"
              >
                <Mail size={16} className="text-white flex-shrink-0" />
                <div>
                  <p className="font-black text-sm tracking-wide uppercase">LELO.KONTAKT@GMAIL.COM</p>
                  <p className="text-white/60 text-xs mt-0.5">Business E-Mail</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white/30 px-5 py-4">
                <MapPin size={16} className="text-[#180A05] flex-shrink-0" />
                <div>
                  <p className="font-black text-sm tracking-wide text-[#180A05]">GRÜNER WEG 14, 86685 HUISHEIM</p>
                  <p className="text-[#180A05]/60 text-xs mt-0.5">Schnell finden</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image + Spinning Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...softInViewSpring, delay: 0.2 }}
            className="relative h-full min-h-[500px] lg:min-h-0 flex items-end justify-center"
          >
            <div className="relative w-full h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Handwerker mit Werkzeug"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Spinning Badge */}
            <div className="absolute bottom-8 left-8 z-10">
              <SpinningBadge
                text="• LELO DOMINIK LENZ • JETZT ANFRAGEN"
                phoneNumber="+491791611556"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

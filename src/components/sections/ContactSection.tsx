"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { softInViewSpring, snappyHoverSpring } from "@/lib/animations";

const services = [
  "Hausmeisterservice",
  "Fußbodenverlegung",
  "Netzwerkverlegung",
  "Silikonarbeiten",
  "3D-Modelle",
  "Sonstiges",
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 bg-[#241208] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4A017] transition-colors rounded-none";

  return (
    <section id="kontakt" className="bg-[#F8F4EE] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={softInViewSpring}
          className="text-center mb-16"
        >
          <p className="text-[#D4A017] font-bold text-xs tracking-[0.3em] uppercase mb-4">
            Kontakt
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#180A05] uppercase leading-tight tracking-tight">
            PROJEKT ANFRAGEN
          </h2>
          <p className="text-[#180A05]/50 mt-4 text-sm">
            Schildern Sie Ihr Anliegen — ich melde mich schnellstmöglich.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Form — dark card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...softInViewSpring, delay: 0.15 }}
            className="lg:col-span-3 bg-[#180A05] p-8 sm:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <CheckCircle size={48} className="text-[#D4A017] mb-4" />
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">Anfrage gesendet!</h3>
                <p className="text-white/50 text-sm">Ich melde mich innerhalb von 24 Stunden.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs font-bold tracking-widest mb-2 uppercase">Name *</label>
                    <input type="text" required placeholder="Ihr Name" value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-bold tracking-widest mb-2 uppercase">Telefon</label>
                    <input type="tel" placeholder="+49 ..." value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-bold tracking-widest mb-2 uppercase">E-Mail *</label>
                  <input type="email" required placeholder="ihre@email.de" value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={inputClass} />
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-bold tracking-widest mb-2 uppercase">Leistung *</label>
                  <select required value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className={`${inputClass} text-${formState.service ? "white" : "white/30"}`}>
                    <option value="" disabled>Bitte wählen...</option>
                    {services.map((s) => <option key={s} value={s} className="text-white bg-[#241208]">{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-bold tracking-widest mb-2 uppercase">Nachricht *</label>
                  <textarea required rows={5} placeholder="Beschreiben Sie Ihr Anliegen..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className={`${inputClass} resize-none`} />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  transition={snappyHoverSpring}
                  className="flex items-center justify-center gap-3 bg-[#D4A017] hover:bg-[#B8880D] disabled:opacity-50 text-[#180A05] px-8 py-4 font-black text-xs tracking-widest transition-colors mt-2"
                >
                  <Send size={15} />
                  {loading ? "WIRD GESENDET..." : "ANFRAGE SENDEN"}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...softInViewSpring, delay: 0.25 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {[
              { icon: Phone, label: "Telefon (Haupt)", value: "+49 179 1611556", href: "tel:+491791611556" },
              { icon: Phone, label: "Telefon (Alt)", value: "+49 176 80644258", href: "tel:+4917680644258" },
              { icon: Mail, label: "E-Mail", value: "lelo.kontakt@gmail.com", href: "mailto:lelo.kontakt@gmail.com" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href}
                className="flex items-center gap-4 bg-[#180A05] p-5 group hover:bg-[#241208] transition-colors"
              >
                <div className="w-10 h-10 bg-[#D4A017] flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#180A05]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase">{label}</p>
                  <p className="text-white font-bold text-sm mt-0.5 group-hover:text-[#D4A017] transition-colors">{value}</p>
                </div>
                <ArrowRight size={14} className="text-white/20 group-hover:text-[#D4A017] ml-auto transition-colors" />
              </a>
            ))}

            <div className="flex items-start gap-4 bg-[#180A05] p-5">
              <div className="w-10 h-10 bg-[#D4A017] flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-[#180A05]" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-bold tracking-widest uppercase">Adresse</p>
                <p className="text-white font-bold text-sm mt-0.5">Grüner Weg 14<br />86685 Huisheim OT Gosheim</p>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-[#D4A017] p-6 mt-2">
              <h3 className="font-black text-[#180A05] text-lg uppercase tracking-tight mb-2">Schnelle Antwort?</h3>
              <p className="text-[#180A05]/60 text-xs mb-4">Rufen Sie direkt an — ich bin meistens sofort erreichbar.</p>
              <a href="tel:+491791611556"
                className="flex items-center justify-center gap-2 bg-[#180A05] text-white px-5 py-3 font-black text-xs tracking-widest hover:bg-[#241208] transition-colors">
                <Phone size={13} /> JETZT ANRUFEN
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
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
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
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

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={softInViewSpring}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-50 text-orange-600 font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Kontakt
          </span>
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Projekt anfragen
          </h2>
          <p className="text-neutral-600 text-lg max-w-xl mx-auto">
            Schildern Sie Ihr Anliegen — ich melde mich schnellstmöglich bei Ihnen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...softInViewSpring, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 px-8 bg-green-50 rounded-2xl border border-green-100"
              >
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Anfrage gesendet!</h3>
                <p className="text-neutral-600">
                  Vielen Dank für Ihre Nachricht. Ich melde mich innerhalb von 24 Stunden bei Ihnen.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ihr vollständiger Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Telefon</label>
                    <input
                      type="tel"
                      placeholder="+49 ..."
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">E-Mail *</label>
                  <input
                    type="email"
                    required
                    placeholder="ihre@email.de"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Gewünschte Leistung *</label>
                  <select
                    required
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white text-neutral-700"
                  >
                    <option value="" disabled>Bitte wählen...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Nachricht *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Beschreiben Sie kurz Ihr Anliegen oder Projekt..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  transition={snappyHoverSpring}
                  className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 disabled:opacity-60 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors shadow-lg shadow-orange-100"
                >
                  <Send size={17} />
                  {loading ? "Wird gesendet..." : "Anfrage senden"}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...softInViewSpring, delay: 0.25 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100">
              <h3 className="text-lg font-bold text-neutral-900 mb-6">Direkt Kontakt</h3>

              <div className="flex flex-col gap-5">
                <a href="tel:+491791611556" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0 mt-0.5 group-hover:bg-orange-200 transition-colors">
                    <Phone size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium mb-0.5">Telefon (Haupt)</p>
                    <p className="text-neutral-900 font-semibold group-hover:text-orange-600 transition-colors">+49 179 1611556</p>
                  </div>
                </a>

                <a href="tel:+4917680644258" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0 mt-0.5 group-hover:bg-orange-200 transition-colors">
                    <Phone size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium mb-0.5">Telefon (Alternativ)</p>
                    <p className="text-neutral-900 font-semibold group-hover:text-orange-600 transition-colors">+49 176 80644258</p>
                  </div>
                </a>

                <a href="mailto:lelo.kontakt@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0 mt-0.5 group-hover:bg-orange-200 transition-colors">
                    <Mail size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium mb-0.5">E-Mail</p>
                    <p className="text-neutral-900 font-semibold group-hover:text-orange-600 transition-colors text-sm">lelo.kontakt@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0 mt-0.5">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium mb-0.5">Adresse</p>
                    <p className="text-neutral-900 font-semibold text-sm">Grüner Weg 14<br />86685 Huisheim OT Gosheim</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-600 rounded-2xl p-7 text-white">
              <h3 className="font-bold text-lg mb-2">Schnelle Antwort?</h3>
              <p className="text-orange-100 text-sm mb-5">
                Rufen Sie direkt an — ich bin meistens sofort erreichbar.
              </p>
              <a
                href="tel:+491791611556"
                className="flex items-center justify-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors"
              >
                <Phone size={15} />
                Jetzt anrufen
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

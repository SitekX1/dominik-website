import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const leistungen = [
  "Hausmeisterservice",
  "Fußbodenverlegung",
  "Netzwerkverlegung",
  "Silikonarbeiten",
  "3D-Modelle",
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Logo + Beschreibung */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="LELO Logo"
                width={130}
                height={52}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm">
              Meine Arbeit basiert auf Vertrauen, Zuverlässigkeit und Qualität.
              Ich begleite Sie persönlich von der ersten Beratung bis zur finalen Umsetzung.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+491791611556" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-orange-400 transition-colors">
                <Phone size={14} className="text-orange-500" />
                +49 179 1611556
              </a>
              <a href="mailto:lelo.kontakt@gmail.com" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-orange-400 transition-colors">
                <Mail size={14} className="text-orange-500" />
                lelo.kontakt@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-neutral-400">
                <MapPin size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span>Grüner Weg 14, 86685 Huisheim OT Gosheim</span>
              </div>
            </div>
          </div>

          {/* Col 2: Leistungen */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Leistungen
            </h4>
            <ul className="flex flex-col gap-3">
              {leistungen.map((item) => (
                <li key={item}>
                  <a
                    href="#leistungen"
                    className="text-sm text-neutral-400 hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation + Rechtliches */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                { label: "Leistungen", href: "#leistungen" },
                { label: "Über mich", href: "#ueber-mich" },
                { label: "FAQ", href: "#faq" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-neutral-400 hover:text-orange-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Rechtliches
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/impressum" className="text-sm text-neutral-400 hover:text-orange-400 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-neutral-400 hover:text-orange-400 transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} LELO Dominik Lenz. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/impressum" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

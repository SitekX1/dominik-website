import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">Datenschutzerklärung</h1>
          <p className="text-neutral-500 mb-10 text-sm">Stand: Juli 2026</p>

          <div className="text-neutral-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">1. Verantwortlicher</h2>
              <p>
                LELO Dominik Lenz<br />
                Grüner Weg 14<br />
                86685 Huisheim OT Gosheim<br />
                E-Mail: <a href="mailto:lelo.kontakt@gmail.com" className="text-orange-600 hover:underline">lelo.kontakt@gmail.com</a><br />
                Telefon: <a href="tel:+491791611556" className="text-orange-600 hover:underline">+49 179 1611556</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">2. Erhebung und Verwendung von Daten</h2>
              <p>
                Beim Besuch dieser Website werden automatisch technische Daten übermittelt (IP-Adresse,
                Browser, Datum/Uhrzeit). Diese werden nur zur technischen Bereitstellung der Website
                genutzt und nicht gespeichert.
              </p>
              <p className="mt-3">
                Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten (Name,
                E-Mail, Telefon, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verwendet
                und nicht an Dritte weitergegeben.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">3. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit.
                Wenden Sie sich dazu per E-Mail an: lelo.kontakt@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">4. Keine Cookies / Tracking</h2>
              <p>
                Diese Website verwendet keine Tracking-Cookies und keine externen Analyse-Dienste.
                Es werden keine personenbezogenen Daten zu Werbezwecken erhoben oder verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">5. Externe Dienste</h2>
              <p>
                Bilder werden von Unsplash (unsplash.com) geladen. Beim Laden dieser Bilder kann
                Ihre IP-Adresse an Unsplash übermittelt werden. Weitere Informationen finden Sie
                in der Datenschutzerklärung von Unsplash.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">6. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
                Zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA).
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <Link href="/" className="text-orange-600 hover:underline text-sm font-medium">
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

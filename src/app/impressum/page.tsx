import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">Impressum</h1>
          <p className="text-neutral-500 mb-10 text-sm">Angaben gemäß § 5 TMG</p>

          <div className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">Anbieter</h2>
              <p>
                LELO Dominik Lenz<br />
                Grüner Weg 14<br />
                86685 Huisheim OT Gosheim<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">Kontakt</h2>
              <p>
                Telefon: <a href="tel:+491791611556" className="text-orange-600 hover:underline">+49 179 1611556</a><br />
                Telefon (alternativ): <a href="tel:+4917680644258" className="text-orange-600 hover:underline">+49 176 80644258</a><br />
                E-Mail: <a href="mailto:lelo.kontakt@gmail.com" className="text-orange-600 hover:underline">lelo.kontakt@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">Verantwortlich für den Inhalt</h2>
              <p>
                Dominik Lenz<br />
                Grüner Weg 14<br />
                86685 Huisheim OT Gosheim
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">Haftungsausschluss</h2>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">Urheberrecht</h2>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
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

# Dominik Website — Projekt-Anweisungen

## Stack
- **Framework:** Next.js 15 (App Router), TypeScript
- **Styling:** Tailwind CSS v3
- **Animationen:** Framer Motion 12 — Primäres Animations-Tool für alle UI-Interaktionen
- **Ordnerstruktur:** `src/app/` (App Router), `src/components/`, `src/lib/`

## Framer Motion Konventionen
- Alle animierten Komponenten brauchen `"use client"` Direktive
- Standard-Easing: `ease: [0.25, 0.1, 0.25, 1]` (cubic-bezier)
- Hover-Animationen über `whileHover`, nicht CSS transitions
- Page-Transitions: `AnimatePresence` + `motion.div` mit `initial/animate/exit`
- Scroll-Animationen: `useInView` + `motion` Varianten
- Micro-Interactions: immer `whileTap` für Touch-Feedback

## Code-Regeln
- Keine unnötigen Kommentare
- Keine `any` Typen in TypeScript
- Komponenten in `src/components/` — ein File pro Komponente
- Alle API-Routen in `src/app/api/`
- Umgebungsvariablen nur über `.env.local`, nie hardcoden

## Detaillierte Anleitungen
- Frontend: [docs/frontend.md](docs/frontend.md)
- Backend/API: [docs/backend.md](docs/backend.md)
- Design-System: [docs/design.md](docs/design.md)
- Architektur: [docs/architecture.md](docs/architecture.md)

## Agent-Skills (Slash Commands)
- `/frontend` — Frontend + Framer Motion Assistent
- `/backend` — API + Server-Side Assistent
- `/code-review` — Code-Prüfer
- `/security` — Sicherheits-Check

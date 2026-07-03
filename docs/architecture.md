# Architektur — Projektstruktur & Entscheidungen

## Verzeichnis-Struktur
```
D:\App\Dominik Website\
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root Layout (Fonts, Metadata)
│   │   ├── page.tsx            # Startseite /
│   │   ├── globals.css         # Globale Styles + CSS-Variablen
│   │   ├── api/                # API Routes
│   │   │   └── contact/
│   │   │       └── route.ts    # Kontaktformular-Endpoint
│   │   └── [weitere Seiten]/
│   ├── components/
│   │   ├── ui/                 # Atomare Basis-Komponenten
│   │   ├── sections/           # Seitenabschnitte
│   │   └── layout/             # Header, Footer, Nav
│   └── lib/
│       ├── animations.ts       # Framer Motion Varianten
│       ├── utils.ts            # cn() Helper + Hilfsfunktionen
│       └── types.ts            # TypeScript Interfaces
├── docs/                       # Claude Agent Dokumentation
│   ├── frontend.md
│   ├── backend.md
│   ├── design.md
│   └── architecture.md         # (diese Datei)
├── .claude/
│   ├── settings.json           # Rechte & Hooks
│   └── commands/               # Agent-Skills (Slash Commands)
│       ├── frontend.md
│       ├── backend.md
│       ├── code-review.md
│       └── security.md
├── public/                     # Statische Assets
├── CLAUDE.md                   # Projekt-Hauptanweisungen
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Technologie-Entscheidungen

### Warum App Router (nicht Pages)?
- Neuester Next.js Standard (ab v13+)
- React Server Components für bessere Performance
- Layout-System ohne `_app.tsx` Workarounds
- Bessere Streaming + Suspense Unterstützung

### Warum Framer Motion?
- Beste React-Animation-Bibliothek
- Deklarativer Ansatz (keine imperativen DOM-Manipulationen)
- Scroll-Trigger, Gestures, Page Transitions out-of-the-box
- Gute TypeScript-Unterstützung

### Warum Tailwind CSS?
- Keine CSS-Datei-Proliferation
- Konsistentes Design-System
- Responsive Utilities direkt in JSX
- Gut kombinierbar mit Framer Motion

## Deployment
- **Plattform:** Vercel (empfohlen für Next.js)
- **Befehl:** `vercel --prod --yes`
- **Env-Vars:** im Vercel Dashboard eintragen (nicht in git)

## Skalierung
- Bilder: `next/image` für automatische Optimierung
- Fonts: `next/font` für Self-Hosting (keine Google-Font-Anfragen)
- Analytics: Vercel Analytics oder Plausible (DSGVO-konform)

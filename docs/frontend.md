# Frontend — Komponenten & Framer Motion (Handyma-Style)

> Alle Tokens sind in `src/lib/animations.ts` definiert. Immer von dort importieren, nie inline duplizieren.

## Datei-Struktur
```
src/
  app/           # Seiten (App Router)
  components/    # Wiederverwendbare UI-Komponenten
    ui/          # Basis-Elemente (Button, Card, Input)
    sections/    # Seitenabschnitte (Hero, About, Contact)
    layout/      # Header, Footer, Nav
  lib/           # Utils, Hooks, Konstanten
    animations/  # Framer Motion Varianten & Configs
```

## Animation Tokens (`src/lib/animations.ts`)

| Export | Zweck |
|---|---|
| `snappyHoverSpring` | Karten/Button-Hover — spring, kein Nachschwingen |
| `softInViewSpring` | Scroll-Einblenden — sanfter Spring |
| `accordionTween` | FAQ Aufklappen — cubic-bezier tween |
| `infiniteSpinTween` | Dreh-Badge — linear, repeat: Infinity |
| `heroContainerVariants` | Hero Stagger-Container |
| `heroItemVariants` | Hero einzelne Elemente (fade-up 40px) |
| `serviceCardVariants` | Card hover: y-8 + shadow + border-radius shift |
| `arrowHoverVariants` | Pfeil-Icon x: +6 auf hover |
| `testimonialSlideVariants` | Slide left/right mit AnimatePresence |

## Implementierte Komponenten

| Komponente | Pfad |
|---|---|
| `HeroSection` | `src/components/sections/HeroSection.tsx` |
| `ServiceCard` | `src/components/ui/ServiceCard.tsx` |
| `FaqCard` | `src/components/ui/FaqCard.tsx` |
| `InfiniteTicker` | `src/components/ui/InfiniteTicker.tsx` |
| `SpinningBadge` | `src/components/ui/SpinningBadge.tsx` |
| `TestimonialSlider` | `src/components/ui/TestimonialSlider.tsx` |
| `LenisProvider` | `src/components/layout/LenisProvider.tsx` |

## Framer Motion Patterns (Handyma-Style)

### A. Hero Stagger (Elemente nacheinander einblenden)
```tsx
import { heroContainerVariants, heroItemVariants } from "@/lib/animations";
// Container staggert Kinder mit 0.1s Abstand, jedes Kind fliegt 40px von unten
<motion.div variants={heroContainerVariants} initial="hidden" animate="visible">
  <motion.h1 variants={heroItemVariants}>Headline</motion.h1>
  <motion.p variants={heroItemVariants}>Text</motion.p>
</motion.div>
```

### B. Service Card (Hover: y-lift + shadow + border-radius shift)
```tsx
import { serviceCardVariants, snappyHoverSpring, arrowHoverVariants } from "@/lib/animations";
<motion.div whileHover="hover" whileTap="tap" initial="initial"
  variants={serviceCardVariants} transition={snappyHoverSpring}>
  <motion.div variants={arrowHoverVariants} transition={snappyHoverSpring}>
    Mehr erfahren →
  </motion.div>
</motion.div>
```

### C. FAQ Akkordeon (AnimatePresence + layout)
```tsx
import { accordionTween } from "@/lib/animations";
// motion.div mit layout + AnimatePresence für CLS-freies Aufklappen
// Plus-Icon rotiert 135° mit animate={{ rotate: isOpen ? 135 : 0 }}
```

### D. Infinite Ticker (Logo/Text Marquee)
```tsx
<InfiniteTicker items={[...]} direction="left" speed={25} />
// Mask-Gradient links/rechts für weichen Auslauf
// Liste 3x dupliziert für nahtlosen Loop
```

### E. Spinning Badge (rotierendes CTA-Siegel)
```tsx
<SpinningBadge text="• Service • 24/7 Notdienst" phoneNumber="+49..." />
// SVG textPath auf Kreis + infiniteSpinTween (12s linear repeat)
```

### F. Testimonial Slider (AnimatePresence slide)
```tsx
<TestimonialSlider testimonials={[{ quote, name, role }]} />
// AnimatePresence mode="wait" + x: 50→0→-50 Slide-Transition
// whileTap auf Nav-Buttons + Dot-Indikatoren mit scale-Animation
```

### G. Smooth Scroll (Lenis — bereits im Layout)
```
// LenisProvider ist in src/app/layout.tsx eingebunden
// duration: 1.2, smoothWheel: true
// Kein weiteres Setup nötig
```

## Komponenten-Vorlage
```tsx
"use client";
import { motion } from "framer-motion";

interface Props {
  // props hier
}

export function MeineKomponente({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Inhalt */}
    </motion.div>
  );
}
```

## Tailwind Klassen-Konventionen
- Abstände: `px-4 sm:px-6 lg:px-8` (responsive padding)
- Container: `max-w-7xl mx-auto`
- Typografie: `text-sm/base/lg/xl/2xl/3xl/4xl/5xl`
- Farben: über CSS-Variablen in `globals.css` definieren

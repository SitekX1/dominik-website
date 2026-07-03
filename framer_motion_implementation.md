# Framer Motion Implementierung für Handyma Template

Dieses Dokument enthält die extrahierten Framer Motion-Konfigurationen und die entsprechenden React/TypeScript-Umsetzungen für das **Handyma** Startup-Template von *Template Munk*. Du kannst diese direkt verwenden, um das Template mit Claude Code detailgetreu nachzubauen.

---

## 1. Globale Animationstoken (Spring & Tween)

Framer verwendet standardisierte Federphysik (Spring) für physische Mikro-Interaktionen (Hover, Tap) und sanfte Kurven (Tween/Cubic-Bezier) für Layout-Änderungen (Akkordeons, Einblenden).

### A. Snappy Hover Spring (Schnappige Karte/Button-Interaktion)
Wird für alle Kachel-Hover, Service-Cards und interaktiven Elemente genutzt. Kein Nachschwingen, sehr reaktionsschnell.
```typescript
export const snappyHoverSpring = {
  type: "spring",
  stiffness: 300,
  damping: 60,
  mass: 1,
  duration: 0.3,
  ease: [0.44, 0, 0.56, 1] // Fallback ease-in-out
};
```

### B. Soft InView Spring (Einblenden beim Scrollen)
Wird für das sanfte Hereinfliegen von Texten und Sektionen genutzt, wenn sie in den Viewport scrollen.
```typescript
export const softInViewSpring = {
  type: "spring",
  stiffness: 200,
  damping: 80,
  mass: 1.2,
  delay: 0.05
};
```

### C. Accordion Tween (FAQ-Aufklappen)
Wird für das gleichmäßige Aufklappen der FAQ-Kacheln verwendet.
```typescript
export const accordionTween = {
  type: "tween",
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1] // Custom Cubic-Bezier
};
```

### D. Infinite Spin Tween (Rotierendes Badge)
Für unendliche Drehungen (z.B. CTA-Badges oder runde "Jetzt Anrufen"-Aufkleber).
```typescript
export const infiniteSpinTween = {
  type: "tween",
  duration: 12,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop" as const
};
```

---

## 2. Komponenten-Umsetzungen

### A. Hero Text & Element Entrance (Appear-Effekt)
Wenn die Seite lädt, fadet der Hero-Text ein und verschiebt sich um 40px nach oben.

```tsx
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Nacheinander einblenden
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40
    }
  }
};

export function HeroSection() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto text-center px-4"
    >
      <motion.span variants={itemVariants} className="text-orange-500 font-semibold uppercase tracking-wider">
        Professioneller Handwerker-Service
      </motion.span>
      
      <motion.h1 variants={itemVariants} className="text-5xl font-bold mt-2 text-neutral-900 leading-tight">
        Zuverlässige Hilfe für Ihr Zuhause
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-lg text-neutral-600 mt-4 max-w-xl mx-auto">
        Ob Sanitär, Elektrik oder Reparaturen – wir erledigen das schnell, sauber und professionell.
      </motion.p>
      
      <motion.div variants={itemVariants} className="mt-8 flex gap-4 justify-center">
        <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-orange-700 transition">
          Jetzt buchen
        </button>
      </motion.div>
    </motion.div>
  );
}
```

---

### B. Service & Blog Cards (Hover Elevation & Shift)
Die Karten im Handyma-Template reagieren auf Hover mit einer leichten Y-Verschiebung nach oben, einem feinen Schatten und einer Border-Radius-Animation an den Ecken.

```tsx
import { motion } from "framer-motion";
import { snappyHoverSpring } from "./tokens";

export function ServiceCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      variants={{
        initial: { y: 0, scale: 1, boxShadow: "0px 4px 10px rgba(0,0,0,0.05)" },
        hover: { 
          y: -8, 
          scale: 1.02, 
          boxShadow: "0px 15px 30px rgba(0,0,0,0.12)",
          // Im Handyma-Template verändern sich auf Hover oft auch Ecken
          borderTopRightRadius: 16,
          borderBottomLeftRadius: 16
        },
        tap: { scale: 0.98 }
      }}
      transition={snappyHoverSpring}
      className="bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer"
    >
      <div className="text-orange-500 w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mt-4 text-neutral-900">{title}</h3>
      <p className="text-neutral-600 mt-2 text-sm leading-relaxed">{description}</p>
      
      {/* Pfeil-Icon, das sich auf Hover leicht nach rechts verschiebt */}
      <motion.div 
        variants={{
          initial: { x: 0 },
          hover: { x: 6 }
        }}
        transition={snappyHoverSpring}
        className="mt-6 text-orange-500 font-semibold flex items-center gap-1 text-sm"
      >
        Mehr erfahren <span>&rarr;</span>
      </motion.div>
    </motion.div>
  );
}
```

---

### C. FAQ Accordion (Sanftes Aufklappen)
Framer nutzt intern `layoutId` und `layout` für flüssige Accordions. In React bauen wir das mit `AnimatePresence` und `motion.div` nach, um CLS (Cumulative Layout Shift) Ruckeln zu vermeiden.

```tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { accordionTween } from "./tokens";

export function FaqCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="border border-neutral-200 bg-white rounded-xl p-5 cursor-pointer select-none"
    >
      <motion.div layout="position" className="flex justify-between items-center">
        <h4 className="text-lg font-bold text-neutral-900">{question}</h4>
        
        {/* Rotierendes Plus/Minus Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={accordionTween}
          className="text-neutral-500 w-6 h-6 flex items-center justify-center text-xl font-light"
        >
          +
        </motion.div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={accordionTween}
            className="overflow-hidden"
          >
            <p className="text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
```

---

### D. Infinite Logo Marquee (Ticker Component)
Logo-Wände und Testimonial-Ticker laufen im Handyma-Template unendlich durch. Wir replizieren das mit Framer Motion, indem wir die Liste duplizieren und linear transformieren.

```tsx
import { motion } from "framer-motion";

interface TickerProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: number; // Geschwindigkeit in Sekunden
}

export function InfiniteTicker({ items, direction = "left", speed = 25 }: TickerProps) {
  // Duplizieren für nahtlosen Loop
  const duplicatedItems = [...items, ...items, ...items];
  const xTranslation = direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"];

  return (
    <div className="w-full overflow-hidden relative flex py-4 mask-gradient">
      {/* Maskierter linearer Farbverlauf links und rechts für weichen Auslauf */}
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
      
      <motion.div
        animate={{ x: xTranslation }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity
        }}
        // Pausiert auf Hover (wie im Framer Ticker standardmäßig eingestellt)
        whileHover={{ animationPlayState: "paused" }}
        className="flex gap-16 whitespace-nowrap min-w-full"
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 flex items-center justify-center">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
```

---

### E. Unendliches Dreh-Badge (Spinning Badge / Circular Call CTA)
Ein rotierendes Element, das im Handyma-Template als animiertes Siegel oder Call-to-Action dient.

```tsx
import { motion } from "framer-motion";
import { infiniteSpinTween } from "./tokens";

export function SpinningBadge() {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Rotierender Textkreis */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={infiniteSpinTween}
        className="absolute w-full h-full"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="textPath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="transparent"
          />
          <text className="fill-orange-600 font-semibold uppercase tracking-[0.25em] text-[7.5px]">
            <textPath href="#textPath" startOffset="0%">
              • Handyma Handwerker Notdienst • 24/7 Service
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Telefon-Icon oder Mitteilungs-Icon in der Mitte */}
      <div className="w-14 h-14 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-orange-700 transition">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
    </div>
  );
}
```

---

### F. Slideshow / Slider (Testimonial Slider mit Tap)
Das Testimonial-Karussell erlaubt Drag-Gesten und reagiert auf Tastendruck.

```tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialSlider({ testimonials }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative overflow-hidden bg-orange-50/50 border border-orange-100 rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="relative h-48">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <p className="text-lg italic text-neutral-800">
              "{testimonials[index].quote}"
            </p>
            <div className="mt-4">
              <h5 className="font-bold text-neutral-900">{testimonials[index].name}</h5>
              <span className="text-sm text-orange-600">{testimonials[index].role}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover:bg-white transition"
        >
          &larr;
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover:bg-white transition"
        >
          &rarr;
        </motion.button>
      </div>
    </div>
  );
}
```

---

## 3. Smooth Scroll (Lenis Integration)

Das Handyma-Template nutzt **Lenis** für das flüssige Scrollen. Um dies in Next.js oder Vite nachzubauen, verwende das offizielle Paket `@studio-freight/react-lenis` oder binde es in deinen App-Root ein:

1. Installieren:
   ```bash
   npm install @studio-freight/react-lenis
   ```

2. Im Layout/AppWrapper einbinden:
   ```tsx
   import { ReactLenis } from '@studio-freight/react-lenis'

   export default function Layout({ children }) {
     return (
       <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
         {children}
       </ReactLenis>
     )
   }
   ```

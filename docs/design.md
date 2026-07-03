# Design-System — Farben, Typo, Spacing

## Farb-Palette
Farben werden als CSS-Variablen in `src/app/globals.css` definiert:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #0070f3;       /* Hauptfarbe / CTA */
  --primary-dark: #0051cc;  /* Hover-Zustand */
  --muted: #6b7280;         /* Sekundärer Text */
  --border: #e5e7eb;        /* Rahmen */
  --surface: #f9fafb;       /* Karten-Hintergrund */
}
```

## Typografie
- **Headline 1:** `text-5xl font-bold tracking-tight` (48px)
- **Headline 2:** `text-3xl font-semibold` (30px)
- **Headline 3:** `text-xl font-semibold` (20px)
- **Body:** `text-base leading-relaxed` (16px)
- **Small/Caption:** `text-sm text-muted-foreground` (14px)

## Spacing-System (Tailwind)
- Section-Abstände: `py-16 sm:py-24`
- Komponenten-Abstände: `gap-4 sm:gap-6 lg:gap-8`
- Innere Abstände: `p-4 sm:p-6`

## Animation-Timing (Framer Motion)
| Typ | Duration | Ease |
|-----|----------|------|
| Micro (hover/tap) | 150ms | spring |
| Small (icons/badges) | 300ms | easeOut |
| Medium (cards/sections) | 500ms | [0.25,0.1,0.25,1] |
| Large (page transitions) | 700ms | easeInOut |

## Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Komponenten-Ästhetik
- **Radius:** `rounded-xl` für Cards, `rounded-lg` für Inputs, `rounded-full` für Pills
- **Schatten:** `shadow-sm` Standard, `shadow-md` für elevated Cards
- **Border:** `border border-border` (via CSS-Variable)
- **Glassmorphism (wenn gewünscht):** `bg-white/80 backdrop-blur-md border border-white/20`

## Icons
- Bibliothek: **lucide-react** (`npm install lucide-react`)
- Größen: 16px (inline), 20px (UI), 24px (Feature-Icons)
- Importpfad: `import { IconName } from "lucide-react"`

import type { Variants, Transition } from "framer-motion";

// Animation tokens aus dem Handyma Template (exakte Framer-Konfigurationen)

// Schnappige Karten/Button-Interaktion — kein Nachschwingen
export const snappyHoverSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 60,
  mass: 1,
};

// Sanftes Einblenden beim Scrollen (InView)
export const softInViewSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 80,
  mass: 1.2,
  delay: 0.05,
};

// FAQ Akkordeon — gleichmäßiges Aufklappen
export const accordionTween: Transition = {
  type: "tween",
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1],
};

// Unendlich rotierendes Badge
export const infiniteSpinTween: Transition = {
  type: "tween",
  duration: 12,
  ease: "linear",
  repeat: Infinity,
  repeatType: "loop",
};

// Hero Stagger Container
export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Hero einzelne Elemente (fade-up 40px)
export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};

// Service/Blog Card hover — y-lift + shadow + border-radius Shift
export const serviceCardVariants = {
  initial: {
    y: 0,
    scale: 1,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0px 15px 30px rgba(0,0,0,0.12)",
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  tap: { scale: 0.98 },
};

// Pfeil-Icon verschiebt sich auf Hover nach rechts
export const arrowHoverVariants = {
  initial: { x: 0 },
  hover: { x: 6 },
};

// Testimonial Slider — slide links/rechts
export const testimonialSlideVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

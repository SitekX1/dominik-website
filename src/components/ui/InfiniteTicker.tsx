"use client";

import { motion } from "framer-motion";

interface InfiniteTickerProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: number;
}

export function InfiniteTicker({
  items,
  direction = "left",
  speed = 25,
}: InfiniteTickerProps) {
  const duplicatedItems = [...items, ...items, ...items];
  const xTranslation =
    direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"];

  return (
    <div
      className="w-full overflow-hidden relative flex py-6 bg-orange-600"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        animate={{ x: xTranslation }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        className="flex gap-10 whitespace-nowrap"
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm uppercase tracking-wider"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

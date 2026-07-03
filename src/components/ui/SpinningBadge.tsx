"use client";

import { motion } from "framer-motion";
import { infiniteSpinTween } from "@/lib/animations";

interface SpinningBadgeProps {
  text?: string;
  phoneNumber?: string;
}

export function SpinningBadge({
  text = "• Professioneller Service • 24/7 Notdienst",
  phoneNumber,
}: SpinningBadgeProps) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Rotierender Text-Kreis */}
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
          <text
            fill="#ea580c"
            fontWeight="600"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              fontSize: "7.5px",
            }}
          >
            <textPath href="#textPath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Icon in der Mitte */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-orange-700 transition-colors z-10"
        onClick={() => phoneNumber && window.open(`tel:${phoneNumber}`)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </motion.div>
    </div>
  );
}

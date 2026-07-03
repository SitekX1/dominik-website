"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { accordionTween } from "@/lib/animations";

interface FaqCardProps {
  question: string;
  answer: string;
}

export function FaqCard({ question, answer }: FaqCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="border border-neutral-200 bg-white rounded-xl p-5 cursor-pointer select-none"
    >
      <motion.div layout="position" className="flex justify-between items-center">
        <h4 className="text-lg font-bold text-neutral-900 pr-4">{question}</h4>

        {/* Rotierendes Plus → X */}
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={accordionTween}
          className="text-neutral-500 w-6 h-6 flex items-center justify-center text-xl font-light flex-shrink-0"
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { accordionTween } from "@/lib/animations";

interface FaqCardProps {
  question: string;
  answer: string;
  dark?: boolean;
}

export function FaqCard({ question, answer, dark = false }: FaqCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="px-5 py-5 cursor-pointer select-none"
    >
      <motion.div layout="position" className="flex justify-between items-center gap-4">
        <h4 className={`text-base font-bold pr-4 ${dark ? "text-white" : "text-[#180A05]"}`}>
          {question}
        </h4>

        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={accordionTween}
          className={`w-6 h-6 flex items-center justify-center text-xl font-light flex-shrink-0 ${dark ? "text-[#D4A017]" : "text-[#D4A017]"}`}
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
            <p className={`text-sm leading-relaxed border-t pt-4 ${dark ? "text-white/50 border-white/10" : "text-[#180A05]/60 border-[#180A05]/10"}`}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialSlideVariants } from "@/lib/animations";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative overflow-hidden bg-orange-50/50 border border-orange-100 rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="relative h-48">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={testimonialSlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <p className="text-lg italic text-neutral-800">
              &ldquo;{testimonials[index].quote}&rdquo;
            </p>
            <div className="mt-4">
              <h5 className="font-bold text-neutral-900">
                {testimonials[index].name}
              </h5>
              <span className="text-sm text-orange-600">
                {testimonials[index].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          &larr;
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          &rarr;
        </motion.button>
      </div>

      {/* Dot-Indikatoren */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            animate={{ scale: i === index ? 1.3 : 1, opacity: i === index ? 1 : 0.4 }}
            transition={{ duration: 0.2 }}
            className="w-2 h-2 rounded-full bg-orange-500"
          />
        ))}
      </div>
    </div>
  );
}

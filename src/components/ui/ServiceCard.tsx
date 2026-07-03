"use client";

import { motion } from "framer-motion";
import {
  snappyHoverSpring,
  serviceCardVariants,
  arrowHoverVariants,
} from "@/lib/animations";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      variants={serviceCardVariants}
      transition={snappyHoverSpring}
      className="bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer"
    >
      <div className="text-orange-500 w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg">
        {icon}
      </div>

      <h3 className="text-xl font-bold mt-4 text-neutral-900">{title}</h3>
      <p className="text-neutral-600 mt-2 text-sm leading-relaxed">
        {description}
      </p>

      <motion.div
        variants={arrowHoverVariants}
        transition={snappyHoverSpring}
        className="mt-6 text-orange-500 font-semibold flex items-center gap-1 text-sm"
      >
        Mehr erfahren <span>&rarr;</span>
      </motion.div>
    </motion.div>
  );
}

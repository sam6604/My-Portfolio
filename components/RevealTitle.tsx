"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function RevealTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.h2
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.h2>
  );
}

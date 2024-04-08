"use client";
import { motion } from "framer-motion";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="hidden md:block text-xl lg:text-4xl  tracking-widest text-black dark:text-white font-bold"
    >
      {children}
    </motion.h1>
  );
}

export default SectionHeading;

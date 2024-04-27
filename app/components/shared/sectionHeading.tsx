"use client";
import { motion } from "framer-motion";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="block md:text-xl text-lg xl:text-3xl  tracking-wide text-black dark:text-white font-semibold"
    >
      {children}
    </motion.h1>
  );
}

export default SectionHeading;

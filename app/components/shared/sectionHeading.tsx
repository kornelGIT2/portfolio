"use client";
import { motion } from "framer-motion";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      className="md:block md:text-xl text-md xl:text-3xl  tracking-widest text-black dark:text-white font-black"
    >
      {children}
    </motion.h1>
  );
}

export default SectionHeading;

"use client";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import AboutMe from "./components/about";
import Projects from "./components/project";
import Contact from "./components/contact";
import { Toaster } from "sonner";
import ThemeSwitch from "./components/shared/theme-swtich";
import Links from "./components/links";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center w-full items-center dark:bg-slate-950 bg-slate-50">
      <div className="hidden md:flex">
        <ThemeSwitch />
      </div>

      <Navbar />
      <Hero />
      <div className="hidden h-[300px] md:flex flex-row justify-center md:justify-start relative items-center cursor-default ">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -500 }}
          transition={{ duration: 1.5 }}
          className="after:block dark:after:bg-zinc-500  after:opacity-90 after:bg-slate-300 md:after:w-[2px] after:h-[240px] after:mt-auto ml-6"
        ></motion.div>
      </div>
      <AboutMe />
      <Projects />
      <Contact />
      <Toaster position="bottom-left" richColors />
      <Links />
    </main>
  );
}

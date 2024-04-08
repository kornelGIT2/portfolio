import Hero from "./components/hero";
import Navbar from "./components/navbar";
import AboutMe from "./components/about";
import Projects from "./components/project";
import Contact from "./components/contact";
import { Toaster } from "sonner";
import ThemeSwitch from "./components/shared/theme-swtich";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center items-center dark:bg-slate-950 bg-slate-50">
      <ThemeSwitch />
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Toaster position="bottom-left" richColors />
    </main>
  );
}

import Hero from "./components/hero";
import Navbar from "./components/navbar";
import AboutMe from "./components/about";
import Projects from "./components/project";
import Contact from "./components/contact";
import { Toaster } from "sonner";
import ThemeSwitch from "./components/shared/theme-swtich";
import Links from "./components/links";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center w-full items-center dark:bg-slate-950 bg-slate-50">
      <div className="hidden md:flex">
        <ThemeSwitch />
      </div>

      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Toaster position="bottom-left" richColors />
      <Links />
    </main>
  );
}

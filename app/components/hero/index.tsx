"use client";
import { Link } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="hero"
      className="snap-center flex items-center justify-center w-full p-4 h-screen "
    >
      <div
        className="bg-gradient-to-b z-[0] from-blue-500 to-blue-500 dark:from-sky-500 dark:to-blue-600 absolute  rotate-45 inset-y- opacity-20 mx-auto  inset-x-0 right-20 h-[10.25rem]  rounded-full blur-3xl
    w-[40.75rem]  left-[-70rem]"
      ></div>
      <div className="md:grid grid-cols-12 flex flex-col items-center justify-center gap-10 ">
        <motion.div className="md:hidden z-10 bg-gradient-to-t dark:from-slate-950   dark:to-sky-500 rounded-full from-slate-50  to-blue-400">
          <Image
            src="/nobg.png"
            height={300}
            width={300}
            className=" rounded-full"
            alt="Obrazek"
          />
        </motion.div>
        <div className="flex flex-col md:text-start gap-6 z-[1] col-span-7 ">
          <div className=" flex flex-col gap-6">
            <span className="text-black font-bold dark:text-white tracking-widest uppercase text-sm">
              Web developer
            </span>
            <span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 2 }}
                exit={{ opacity: 0 }}
                className="bg-gradient-to-r cursor-default from-blue-600 via-sky-600 to-blue-600 dark:from-blue-500 dark:via-sky-300 dark:to-blue-500 inline-block bg-clip-text text-transparent "
              >
                <span className="font-bold lg:text-6xl text-5xl md:text-5xl tracking-wide leading-[3.25rem]  md:leading-[3.75rem] lg:leading-[4.0625rem] xl:text-6xl xl:leading-[4.5rem] ">
                  {" "}
                  Hello, I&apos;m m Kornel Użarowski
                </span>
              </motion.div>
            </span>{" "}
            <span className="font-bold text-black dark:text-white lg:text-6xl text-3xl md:text-5xl tracking-wide leading-[3.25rem]  md:leading-[3.75rem] lg:leading-[4.0625rem] xl:text-6xl xl:leading-[4.5rem]">
              <Typewriter
                words={[
                  "Dedicated & Passionate",
                  "Frontend Developer",
                  "UI/UX Designer",
                  "Focused on React (Next.js)",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </div>
          <div className=" flex md:justify-start flex-col md:flex-row justify-center items-center md:space-x-10 space-y-4 md:space-y-0 mt-4">
            <a
              href="/CV/KornelUzarowski_CV.pdf"
              download
              className={
                "p-3 cursor-pointer transition-all bg-gradient-to-r shadow-lg dark:from-sky-500 dark:to-blue-600 from-blue-400 to-blue-600 rounded-xl font-semibold flex gap-2 justify-center dark:hover:to-sky-500 hover:to-blue-400"
              }
            >
              Download CV
              <img src="download.svg" alt="download" className="h-5 invert" />
            </a>
            <Link
              to={"contact"}
              className={
                "hover:scale-[1.1] transition p-3 dark:hover:bg-sky-950 hover:bg-blue-300 hover:bg-opacity-20 dark:hover:bg-opacity-60 dark:text-white text-black rounded-xl font-semibold cursor-pointer flex justify-center gap-2 items-center"
              }
            >
              Contact Me
              <img src="arrow.svg" alt="arrow" className="h-5 dark:invert" />
            </Link>
          </div>
          <div className="flex mt-8 md:justify-start justify-center md:space-x-8 space-x-5 items-center ">
            <span className="md:mr-6 border-r-2 pr-6 border-black dark:border-white tracking-wide text-sm cursor-default font-semibold dark:text-white text-black">
              Tech Stack
            </span>
            <Image
              src="assets/icons/html-1.svg"
              width={26}
              height={26}
              alt="html5"
            />
            <Image
              src="assets/icons/css-3.svg"
              width={26}
              height={26}
              alt="css3"
            />
            <Image
              src="assets/icons/typescript.svg"
              width={26}
              height={26}
              alt="typescript"
            />
            <Image
              src="assets/icons/react.svg"
              width={26}
              height={26}
              alt="react"
            />
            <Image
              src="assets/icons/next-js.svg"
              width={26}
              height={26}
              className="dark:invert "
              alt="nextjs"
            />
            <Image
              src="assets/icons/tailwind.svg"
              width={26}
              height={26}
              alt="tailwind"
            />
          </div>
        </div>

        <motion.div className="relative col-span-5 md:flex items-center justify-center hidden ">
          <motion.div className="z-10 absolute bg-gradient-to-t dark:from-slate-950  dark:to-sky-500 rounded-full from-slate-50  to-blue-400">
            <Image
              src="/nobg.png"
              height={460}
              width={460}
              className=" rounded-full"
              alt="Obrazek"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

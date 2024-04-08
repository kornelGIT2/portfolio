"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
      setTheme(localTheme);
    }
  }, []);

  return (
    <button
      className="md:fixed md:flex 
    items-center justify-center md:bottom-5 md:right-5 
     dark:bg-slate-800 bg-slate-100 p-3 rounded-full bg-opacity-90 shadow-xl
     hover:scale-[1.1] active:scale-105 transition-all z-10
     "
      onClick={toggleMode}
    >
      {theme === "light" ? (
        <Image
          height={20}
          width={20}
          src="sun.svg"
          alt="sun"
          className="dark:invert"
        />
      ) : (
        <Image
          height={20}
          width={20}
          src="moon.svg"
          alt="sun"
          className="dark:invert"
        />
      )}
    </button>
  );
}

export default ThemeSwitch;

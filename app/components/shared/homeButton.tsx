"use client";
import React from "react";
import { Link } from "react-scroll";

function HomeButton() {
  return (
    <Link
      to="hero"
      className="fixed flex 
      items-center justify-center bottom-3 left-3
       dark:bg-slate-800 bg-slate-100 p-3 rounded-full bg-opacity-90 shadow-xl  animate-bounce
       hover:scale-[1.1] active:scale-105 transition-all z-[99]"
    >
      <img src="arrow-top.svg" alt="arrow" className="h-6 w-6 invert" />
    </Link>
  );
}

export default HomeButton;

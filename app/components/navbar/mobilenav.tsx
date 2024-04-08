"use client";
import { Link } from "react-scroll";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { links } from "@/const";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MobileNav = () => {
  const [active, setActive] = useState("");

  const handleSetActive = (to: string) => {
    setActive(to);
  };

  return (
    <Sheet key={"left"}>
      <SheetTrigger asChild>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center 
            text-sm text-black rounded-xl md:hidden dark:hover:bg-black 
            focus:outline-none focus:ring-2  dark:text-whit dark:text-white
              dark:focus:ring-slate-300 `}
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="dark:bg-slate-950 border-r-2 z-[100] dark:border-zinc-800 bg-slate-100 border-slate-800"
      >
        <div className="p-3">
          <h2 className="text-black mt-6 font-bold text-xl">Lets go</h2>
          <hr className="border-b border-zinc-300 mt-6"></hr>
          <ul className="flex flex-col space-y-10 mt-10">
            {links.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    key={link.name}
                    duration={500}
                    spy={true}
                    to={link.path}
                    onSetActive={handleSetActive}
                    className={` ${
                      link.path === active
                        ? "dark:text-sky-500 text-black dark:hover:text-slate-200 hover:slate-700"
                        : "dark:text-slate-300 text-slate-600 test dark:hover:text-slate-200 hover:slate-900"
                    } capitalize cursor-pointer  font-semibold relative`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Image
            src="/assets/icons/github.svg"
            height={30}
            width={30}
            alt="github"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
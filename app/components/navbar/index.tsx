"use client";
import { links } from "../../../const";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
import MobileNav from "./mobilenav";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const handleSetActive = (to: string) => {
    setActive(to);
  };

  return (
    <nav className="flex justify-center items-center z-[100] ">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        exit={{ opacity: 0 }}
        className={`max-w-screen-lg w-full mx-auto p-6 top-0 fixed `}
      >
        <div className="flex justify-start ">
          <MobileNav />
        </div>

        <div className="hidden md:flex justify-center bg-slate-50 dark:bg-slate-950 p-3 max-w-[500px] mx-auto items-center rounded-3xl">
          <ul className="flex flex-col space-x-10 md:flex-row m-2">
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
                        ? "dark:text-white text-slate-800  hover:text-slate-950 "
                        : "dark:text-slate-300 text-slate-500  dark:hover:text-slate-100 hover:text-slate-950"
                    } capitalize cursor-pointer p-3 pr-3 pl-3 z-10 font-bold relative`}
                  >
                    {link.path === active && (
                      <motion.span
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 40,
                        }}
                        className="dark:bg-slate-800 shadow-md bg-slate-100 absolute inset-0 -z-10 rounded-full"
                      ></motion.span>
                    )}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

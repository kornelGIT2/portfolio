"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Links() {
  return (
    <div className="hidden fixed -bottom-5 left-14 2xl:flex flex-col z-50">
      <div className="relative flex-col items-center justify-start">
        <motion.div
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="after:block dark:after:bg-zinc-500 opacity-50 after:bg-slate-300 after:w-[2px] after:h-36 after:mx-auto after:my-2 "
        >
          <ul className="flex-col space-y-6 pb-8">
            <li>
              <a href="https://github.com/kornelGIT2">
                <Image
                  src="/github3.svg"
                  width={30}
                  height={30}
                  alt="linkedin"
                  className="dark:invert opacity-70 hover:opacity-100"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kornel-użarowski-439797303">
                <Image
                  src="/linkedin.svg"
                  width={30}
                  height={30}
                  alt="linkedin"
                  className="dark:invert opacity-70 hover:opacity-100"
                />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Links;

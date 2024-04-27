"use client";
import Project from "./project";
import { projects } from "../../../const";
import React from "react";
import SectionHeading from "../shared/sectionHeading";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="snap-center flex items-center justify-center flex-col space-y-10 overflow-hidden p-4"
    >
      <div className=" w-full flex flex-row justify-start relative items-center cursor-default ">
        <SectionHeading>My Recent Projects</SectionHeading>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="after:block dark:after:bg-slate-700  after:opacity-70 after:bg-slate-200 after:w-40 md:after:w-80 md:w-60 w-20 after:h-[2px] after:mt-auto ml-6"
        ></motion.div>
      </div>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} keyProp={index} />
        </React.Fragment>
      ))}
    </section>
  );
}

export default Projects;

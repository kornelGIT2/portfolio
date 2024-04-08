import Project from "./project";
import { projects } from "../../../const";
import React from "react";
import SectionHeading from "../shared/sectionHeading";

function Projects() {
  return (
    <section
      id="projects"
      className="snap-center flex items-center justify-center flex-col space-y-10 h-screen"
    >
      <SectionHeading>My Recent Projects</SectionHeading>

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} keyProp={index} />
        </React.Fragment>
      ))}
    </section>
  );
}

export default Projects;

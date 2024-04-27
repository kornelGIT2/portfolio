"use client";
import { skills } from "@/const";
import Skill from "../skills/skill";
import { useState } from "react";
import Image from "next/image";

function AboutMe() {
  const [showSkills, setShowSkills] = useState(true);
  const [showEducation, setShowEducation] = useState(false);

  return (
    <section
      id="about"
      className="snap-center flex flex-col items-center justify-center p-4 h-screen mb-40  min-h-[1000px]"
    >
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 ">
        <div className="flex justify-center relative ">
          <Image
            src="/nobg.png"
            alt="image"
            height={300}
            width={300}
            className="rounded-xl shadow-lg mb-2 dark:bg-slate-950 bg-slate-200 object-cover lg:w-[400px] lg:h-[370px] w-[200px] h-[200px] z-[1] hidden lg:block "
          />
          <div
            className="bg-gradient-to-b z-[0] hidden lg:block  from-blue-500 to-blue-700 dark:from-sky-500 dark:to-blue-600 absolute top-0 -right-32 left-0  inset-y-16 opacity-40 mx-auto  inset-x-0  lg:h-[350px] rounded-full blur-3xl
    lg:w-[300px] h-[200px] w-[200px]"
          ></div>
        </div>

        <div className="max-w-2xl flex flex-col lg:p-6  z-[1] ">
          <h1 className="flex md:justify-start justify-center md:mb-3 mb-2  font-black tracking-widest text-xl text-black dark:text-white cursor-default">
            About Me
          </h1>
          <p className="md:text-lg text-slate-600 dark:text-slate-400 lg:leading-normal font-medium md:text-start text-xs">
            My journey into the world of web development began during my
            university years, where I discovered my love for building dynamic
            and interactive web applications. It was during my third year at
            university that I first delved into the world of{" "}
            <span className="font-bold bg-gradient-to-r cursor-default text-sky-500">
              React
            </span>
            , and from that moment on, I was{" "}
            <span className=" font-bold bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500 text-transparent bg-clip-text bg-300% animate-gradient">
              hooked
            </span>
            . With over two years of commercial experience working with React
            and TypeScript, I’ve had the opportunity to tackle a wide range of
            projects, from building robust user interfaces to optimizing
            performance and scalability. I thrive on the challenge of solving
            complex problems and enjoy the collaborative process of{" "}
            <span className="font-bold bg-gradient-to-r cursor-default text-sky-500">
              bringing ideas to life.
            </span>{" "}
            Beyond my technical skills, I bring a strong work ethic, a keen eye
            for detail, and a genuine passion for creating exceptional user
            experiences. I believe in continuous learning and stay up-to-date
            with the latest technologies and best practices to ensure that my
            work is always at the forefront of innovation.
          </p>

          <div className="flex flex-col lg:flex-row space-y-4 mt-6 justify-start text-black dark:text-white font-semibold tracking-wide relative">
            <div className="flex lg:gap-12 md:mb-0 mb-4">
              <span
                className="group hover:cursor-pointer mx-auto sm:m-auto tracking-wider"
                onClick={() => {
                  setShowSkills(true);
                  setShowEducation(false);
                }}
              >
                My Skills
                <span
                  className={`block ${
                    showSkills ? "max-w-[100%]" : "max-w-0"
                  }  group-hover:max-w-full transition-all  duration-500 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400`}
                ></span>
              </span>

              <span
                className="group hover:cursor-pointer mx-auto sm:m-auto tracking-wider"
                onClick={() => {
                  setShowEducation(true);
                  setShowSkills(false);
                }}
              >
                Education
                <span
                  className={`block ${
                    showEducation ? "max-w-[100%]" : "max-w-0"
                  }  group-hover:max-w-full transition-all  duration-500 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400`}
                ></span>
              </span>
            </div>
            {showSkills ? (
              <div className="grid lg:grid-cols-5 grid-cols-5 gap-4 lg:absolute top-10 ">
                {skills.map((skill, i) => {
                  return (
                    <Skill key={i} keyProp={i} icon={skill.icon}>
                      {skill.name}
                    </Skill>
                  );
                })}
              </div>
            ) : (
              <div className="lg:absolute lg:top-10 flex flex-col gap-4 justify-start items-start">
                <p>Nicolaus Copernicus University </p>
                <p>Bachelor of Science in Computer Science</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

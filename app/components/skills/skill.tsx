"use client";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (key: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * key,
    },
  }),
};

function Skill({
  children,
  ...props
}: {
  children: React.ReactNode;
  keyProp: number;
  icon: string;
  key: number;
}) {
  return (
    <motion.div
      key={props.keyProp}
      transition={{ ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      custom={props.keyProp}
      className="flex flex-col justify-center items-center lg:gap-4 gap-2 p-0 lg:p-2"
    >
      <img
        src={props.icon}
        className={`md:h-8 md:w-8 h-6 w-6  ${
          props.icon === "assets/icons/next-js.svg" ||
          props.icon === "assets/icons/prisma-3.svg"
            ? "dark:invert"
            : ""
        }`}
        alt="icon"
      />
      <p className="md:text-sm text-[0.7rem] dark:text-white text-black font-medium">
        {children}
      </p>
    </motion.div>
  );
}

export default Skill;

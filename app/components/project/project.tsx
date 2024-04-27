import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  imageUrl: string;
  sourceCode: string;
  techStack: { name: string; icon: string }[];
  keyProp: number;
};

function Project({
  title,
  description,
  imageUrl,
  sourceCode,
  techStack,
  keyProp,
}: ProjectProps) {
  return (
    <div
      className=" from-slate-300 to-slate-100 group max-w-[80rem] lg:h-[350px] group w-full  -z-[0] 
      overflow-hidden rounded-xl relative dark:hover:to-slate-950 dark:hover:from-slate-800 hover:to-slate-100 hover:from-slate-200 transition sm:pr-8  "
    >
      <div className="md:py-4 space-y-5 md:space-y-6 md:pb-7 sm:px-5 md:pt-10 lg:max-w-[50%]  flex flex-col h-full justify-center lg:group-even:items-end lg:group-odd:items-start lg:group-even:text-end lg:group-odd:text-start items-center lg:group-even:ml-[40rem]">
        <a
          href={sourceCode}
          className="sm:text-2xl text-lg font-semibold dark:text-white text-slate-800"
        >
          {title}
          <span className="block max-w-0 lg:group-hover:max-w-full  transition-all  duration-500 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400"></span>
        </a>
        <p className="mt-2 text-sm md:text-lg leading-relaxed dark:text-slate-400 text-slate-500 font-medium md:p-2 sm:p-0 cursor-default ">
          {description}
        </p>
        <img
          className="lg:hidden top-5 group-odd:-right-20 h-full lg:max-w-[30rem]  w-full rounded-xl shadow-lg
          group-even:right-[initial] group-even:-left-0  object-cover mt-4 "
          src={imageUrl}
          alt="app image"
        />

        <ul className="flex flex-wrap items-center justify-center gap-2 md:mt-8 mt-2">
          {techStack.map((tag: { name: string; icon: string }) => {
            return (
              <li
                key={tag.name}
                className="px-3  text-[0.5rem] md:text-[0.7rem] bg-slate-300 dark:bg-slate-700 uppercase tracking-wider  rounded-full  flex  items-center justify-center p-2"
              >
                {/* <Image
                  src={tag.icon}
                  alt="icon"
                  height={28}
                  width={28}
                  className={` ${
                    tag.name === "Next.js" || tag.name === "Prisma"
                      ? "dark:invert"
                      : ""
                  }`}
                /> */}
                <span className="dark:text-slate-300 font-semibold text-slate-700 ">
                  {tag.name}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="md:flex flex space-x-4 ">
          <a href={sourceCode}>
            <Image
              src="/github3.svg"
              height={30}
              width={30}
              alt="github"
              className="dark:invert opacity-40 hover:opacity-50"
            />
          </a>
          {title === "Car Rental" ? (
            <a href="https://car-rental-six-xi.vercel.app/">
              <Image
                src="/external_link.svg"
                height={30}
                width={30}
                alt="github"
                className="dark:invert opacity-40 hover:opacity-50"
              />
            </a>
          ) : null}
        </div>
      </div>

      <img
        className="hidden lg:block lg:absolute top-5 group-odd:-right-10 h-full lg:max-w-[30rem]  w-full rounded-t-xl shadow-2xl
          group-even:right-[initial] group-even:-left-0  object-cover -mt-4 
          group-hover:scale-[1.1]
          
          group-hover:-translate-x-4
          group-hover:translate-y-2
          group-hover:-rotate-2
          transition
          
          group-even:group-hover:translate-x-4
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          "
        src={imageUrl}
        alt="app image"
      />

      {keyProp !== 2 && (
        <hr className="border-b border-slate-200 opacity-70 w-full mt-6"></hr>
      )}
    </div>
  );
}

export default Project;

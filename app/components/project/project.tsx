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
      className="bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 from-slate-300 to-slate-100 group max-w-[55rem]  
      overflow-hidden rounded-xl relative dark:hover:to-slate-950 dark:hover:from-slate-800 hover:to-slate-100 hover:from-slate-200 transition sm:pr-8 shadow-lg"
    >
      <div className="py-4 sm:pb-7 sm:px-5 sm:pt-10 sm:max-w-[50%] flex flex-col h-full justify-center items-center text-center sm:group-even:ml-[26rem] ">
        <a
          href={sourceCode}
          className="text-2xl font-semibold dark:text-white text-slate-800 "
        >
          {title}
          <span className="block max-w-0 group-hover:max-w-full transition-all  duration-500 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400"></span>
        </a>

        <p className="mt-2 leading-relaxed dark:text-slate-400 text-slate-500 font-medium p-2 sm:p-0 cursor-default">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2 mt-8 ">
          {techStack.map((tag: { name: string; icon: string }) => {
            return (
              <li
                key={tag.name}
                className="px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full bg-black/7 flex  items-center justify-center "
              >
                <Image
                  src={tag.icon}
                  alt="icon"
                  height={28}
                  width={28}
                  className={` ${
                    tag.name === "Next.js" || tag.name === "Prisma"
                      ? "dark:invert"
                      : ""
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <img
        className="hidden sm:block absolute top-5 -right-20 lg:w-[28.25rem] w-[28rem] rounded-t-xl shadow-2xl
          group-even:right-[initial] group-even:-left-24 h-[20rem] object-cover
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
    </div>
  );
}

export default Project;

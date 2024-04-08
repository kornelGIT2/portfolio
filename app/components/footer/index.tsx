import Image from "next/image";

function Footer() {
  return (
    <footer className=" flex  bottom-4 gap-1  flex-col items-center justify-center dark:text-slate-600 text-slate-400 space-y-1">
      <small className="flex justify-center items-center">
        &copy; 2024 Kornel Użarowski. All rights reserved.
      </small>
      <small>
        This website was built with <span className="">React (Next.js)</span> &{" "}
        <span>Tailwind CSS,</span> Resend & React Email. Hosted on Vercel.
      </small>
      <div className="flex items-center justify-center space-x-2 hover:cursor-pointer hover:text-slate-400 transition">
        <Image
          src="assets/icons/github_black.svg"
          width={18}
          height={18}
          className="dark:invert"
          alt="github"
        />

        <small>GitHub</small>
      </div>
    </footer>
  );
}

export default Footer;

import Image from "next/image";

function Footer() {
  return (
    <footer className=" flex  bottom-4 gap-1  flex-col items-center justify-center dark:text-slate-600 text-slate-400 space-y-1 absolute">
      <small className="flex justify-center items-center">
        &copy; 2024 Kornel Użarowski. All rights reserved.
      </small>
    </footer>
  );
}

export default Footer;

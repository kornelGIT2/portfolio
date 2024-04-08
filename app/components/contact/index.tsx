"use client";
import Button from "../shared/button";
import Footer from "../footer";
import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { toast } from "sonner";
import { sendEmail } from "@/server/sendEmail";
import { useFormStatus } from "react-dom";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { pending } = useFormStatus();

  return (
    <section
      id="contact"
      className="snap-center h-screen flex items-center justify-center flex-col relative w-[400px] sm:min-w-[500px] md:min-w-[650px] space-y-10"
    >
      <div className="space-y-4">
        <h4 className="dark:text-slate-400 font-medium text-slate-500 text-sm">
          Get in Touch
        </h4>
        <h1 className="md:text-5xl text-4xl dark:text-white font-medium text-slate-800">
          Contact Me
        </h1>
      </div>

      <div className=" flex flex-col justify-center items-center gap-6 dark:text-white text-slate-800">
        <div className="flex space-x-2">
          <img src="tel.svg" alt="tel" className="h-6 w-6 dark:invert" />
          <p>+48 662 971 788</p>
        </div>

        <div className="flex space-x-2">
          <img src="email.svg" alt="tel" className="h-6 w-6 dark:invert" />
          <a href="mailto:uzarowskik@gmail.com" className="underline">
            uzarowskik@gmail.com
          </a>
        </div>
      </div>

      <form
        className="space-y-4 md:w-full"
        action={async (formData) => {
          const email = await sendEmail(formData);

          if (email?.error) {
            console.log(email?.error);
            toast.error("Couldn't send email");
          } else {
            toast.success("Email has been sent. Thank you for your time.");

            setEmail("");
            setMessage("");
          }
        }}
      >
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          name="email"
          required
          maxLength={500}
          value={email}
          placeholder="Enter your email"
          className="w-full p-2.5 block text-sm rounded-[5px] font-medium dark:bg-transparent border-2 dark:border-zinc-800 border-zinc-200 dark:placeholder-slate-400 text-slate-800 dark:text-white"
        ></Input>

        <Textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          required
          maxLength={3000}
          name="description"
          rows={10}
          className="block p-2.5 w-full text-sm  rounded-[5px]  dark:bg-transparent border-2 dark:border-zinc-800
          border-zinc-200
 placeholder-slate-500 dark:text-white text-slate-800 font-medium"
          placeholder="Enter your message"
        ></Textarea>

        <Button
          type="submit"
          disabled={email.length === 0 || message.length === 0 || pending}
          className={`p-2 pr-4 pl-4 text-sm bg-gradient-to-r z-[100] from-sky-500 to-blue-600 rounded-xl font-medium flex items-center gap-2 justify-center   ${
            email.length === 0 || message.length === 0 || pending
              ? "cursor-not-allowed opacity-50 hover:to-blue-600"
              : "hover:to-sky-500 "
          }`}
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              <span className="text-white">Submit </span>
              <img
                src="submit-4.svg"
                alt="submission"
                className="h-3 w-3 invert"
              />
            </>
          )}
        </Button>
      </form>
    </section>
  );
}

export default Contact;

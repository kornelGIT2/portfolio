"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
  const resend = new Resend(process.env.RESEND_KEY);

  const message = formData.get("description") as string;
  const sender = formData.get("email") as string;

  if (!validateString(sender, 500) || !validateString(message, 3000)) {
    return { error: "Invalid data or exceeded chars limit" };
  }

  try {
    const email = await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: "uzarowskik@gmail.com",
      subject: "Hello World",
      reply_to: sender,
      text: message,
    });
    return email;
  } catch (error) {
    console.log(error);
  }
};

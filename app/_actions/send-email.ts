"use server";

import { Resend } from "resend";
import { ContactFormValues } from "@/app/_components/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmailAction(contactFormValues: ContactFormValues) {
  const email = "bartosz.sobina@proton.me";

  const { error } = await resend.emails.send({
    from: "portfolio@bartoszsobina.xyz",
    to: email,
    subject: "New message from portfolio website",
    html: `<p>Email: ${contactFormValues.email}</p> <p>Name: ${contactFormValues.name}</p> <p>Message: ${contactFormValues.message}</p>`,
  });

  if (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }

  return { sucess: "Email was sent!" };
}

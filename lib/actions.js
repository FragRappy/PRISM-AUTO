"use server";

import { PrismAutoContactEmail } from "@/email";
import { resend } from "./resend";

export async function sendEmail(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: "PRISMAUTO | RestorFX Bourg-en-Bresse <contact@prismauto.fr>",
      to: "contact@prismauto.fr",
      subject: subject,
      text: email + name + message,
      react: PrismAutoContactEmail({
        email: email,
        name: name,
        subject: subject,
        message: message,
      }),
    });
    return { message: "Votre message a bien été envoyé." };
  } catch (error) {
    throw error;
  }
}

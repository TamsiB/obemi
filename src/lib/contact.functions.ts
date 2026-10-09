import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(10).max(1000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return { ok: false as const, error: "Email service is not configured." };
    }

    // Until obemi.org is verified with the email provider, deliveries must go to
    // the account owner's address. Set CONTACT_TO_EMAIL once the domain is verified.
    const to = process.env["CONTACT_TO_EMAIL"] ?? "info@obemi.org";
    const from = process.env["CONTACT_FROM_EMAIL"] ?? "Obemi Website <onboarding@resend.dev>";

    const escape = (value: string) =>
      value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const post = (recipient: string) => fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: data.email,
        subject: `[Obemi website] ${data.subject}`,
        html: `<div style="font-family:Arial,sans-serif;color:#1c1c1c">
          <h2 style="margin:0 0 16px">New contact form message</h2>
          <p><strong>Name:</strong> ${escape(data.name)}</p>
          <p><strong>Email:</strong> ${escape(data.email)}</p>
          <p><strong>Subject:</strong> ${escape(data.subject)}</p>
          <hr style="border:none;border-top:1px solid #e5e2db;margin:20px 0" />
          <p style="white-space:pre-wrap">${escape(data.message)}</p>
        </div>`,
      }),
    });

    let response = await post(to);
    // Until obemi.org is verified with Resend, only the account owner can receive mail.
    if (response.status === 403) response = await post("tamsibela@gmail.com");

    if (!response.ok) {
      const body = await response.text();
      console.error(`Resend request failed [${response.status}]: ${body}`);
      return { ok: false as const, error: "We could not send your message right now." };
    }

    return { ok: true as const };
  });

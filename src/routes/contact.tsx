import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendContactMessage } from "@/lib/contact.functions";
import { ORG } from "@/lib/content";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Obemi CBO" },
      {
        name: "description",
        content:
          "Get in touch with Obemi Community Based Organisation in Loitokitok, Kajiado County — partnerships, volunteering, donations and general enquiries.",
      },
      { property: "og:title", content: "Contact Us — Obemi CBO" },
      {
        property: "og:description",
        content:
          "Reach Obemi CBO for partnerships, volunteering, donations and general enquiries in the Amboseli landscape, Kenya.",
      },
    ],
  }),
  component: Contact,
});

const CONTACT_EMAIL = "info@obemi.co.ke";
const CONTACT_PHONE = "0721874211";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
  subject: z.string().trim().min(1, "Please add a subject").max(150, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const send = useServerFn(sendContactMessage);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSending(true);
    try {
      const result = await send({ data: parsed.data });
      if (result.ok) {
        toast.success("Thank you — your message has been sent to our team.");
        formEl.reset();
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Something went wrong. Please email us at ${CONTACT_EMAIL}.`);
    } finally {
      setSending(false);
    }
  }


  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build a regenerative future together"
        lead="Whether you are a partner, donor, volunteer or neighbour — we would love to hear from you."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="space-y-6">
              <div className="rounded-sm border border-border bg-card p-7 shadow-soft card-lift">
                <MapPin className="size-5 text-earth" />
                <p className="mt-4 text-sm font-bold tracking-[0.16em] text-foreground uppercase">
                  Where we work
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {ORG.location}
                </p>
              </div>
              <div className="rounded-sm border border-border bg-card p-7 shadow-soft card-lift">
                <Mail className="size-5 text-earth" />
                <p className="mt-4 text-sm font-bold tracking-[0.16em] text-foreground uppercase">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-2 block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="rounded-sm border border-border bg-card p-7 shadow-soft card-lift">
                <Phone className="size-5 text-earth" />
                <p className="mt-4 text-sm font-bold tracking-[0.16em] text-foreground uppercase">
                  Phone
                </p>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="mt-2 block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Tel: {CONTACT_PHONE}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-sm border border-border bg-card p-8 shadow-soft lg:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" name="name" maxLength={100} placeholder="Name" />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  maxLength={150}
                  placeholder="Partnership enquiry"
                />
                {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={1000}
                  placeholder="Tell us how you'd like to work with Obemi…"
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-[0.75rem] font-bold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                Send message
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

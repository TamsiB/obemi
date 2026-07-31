import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 size-80 rounded-full bg-primary-foreground/5 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 size-96 rounded-full bg-earth/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-[0.6875rem] font-bold tracking-[0.28em] text-primary-foreground/70 uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.05] text-primary-foreground md:text-6xl">
            {title}
          </h1>
          {lead && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {lead}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  centered?: boolean;
}) {
  return (
    <Reveal>
      <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2
          className={`mt-3 text-3xl text-foreground md:text-4xl ${centered ? "" : "rule-leaf"}`}
        >
          {title}
        </h2>
        {lead && (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{lead}</p>
        )}
      </div>
    </Reveal>
  );
}

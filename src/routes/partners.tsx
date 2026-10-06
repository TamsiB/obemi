import { createFileRoute, Link } from "@tanstack/react-router";
import { Handshake, HeartHandshake, Sprout, GraduationCap, Heart } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { NATIONAL_PRIORITIES, PARTNERS, SDGS } from "@/lib/content";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Our Partners — Obemi CBO" },
      {
        name: "description",
        content:
          "Obemi collaborates with local communities, the County Government of Kajiado, conservation organisations, TVET institutions, tourism stakeholders, development partners and impact investors.",
      },
      { property: "og:title", content: "Our Partners — Obemi CBO" },
      {
        property: "og:description",
        content:
          "Partnerships that advance conservation, sustainable development and shared learning in the Amboseli ecosystem.",
      },
    ],
  }),
  component: Partners,
});

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Our Partners"
        title="Collaboration is how landscapes change"
        lead="Obemi fosters strategic partnerships that advance conservation, sustainable development, and shared learning."
      />

      <Section>
        <SectionHeading eyebrow="Partnerships" title="Obemi collaborates with" centered />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((partner, i) => (
            <Reveal key={partner} delay={i * 70}>
              <article className="flex h-full items-start gap-4 rounded-sm border border-border bg-card p-7 shadow-soft card-lift">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                  <Handshake className="size-4" />
                </span>
                <p className="text-base leading-snug font-semibold text-foreground">
                  {partner}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="bg-cream">
        <Section>
          <div className="grid gap-14 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Alignment"
              title="Contributing to national and global goals"
              lead="Our partnerships are anchored in Kenya's development frameworks and the United Nations Sustainable Development Goals."
            />
            <Reveal delay={120}>
              <div className="space-y-4">
                {NATIONAL_PRIORITIES.map((item) => (
                  <div
                    key={item}
                    className="rounded-sm border-l-2 border-earth bg-card p-6 text-sm font-semibold text-foreground shadow-soft"
                  >
                    {item}
                  </div>
                ))}
                <div className="grid gap-3 sm:grid-cols-2">
                  {SDGS.map((sdg) => (
                    <div
                      key={sdg.code}
                      className="rounded-sm bg-earth-gradient p-5 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <p className="font-display text-xl text-earth-foreground">
                        {sdg.code}
                      </p>
                      <p className="mt-1 text-xs text-earth-foreground/85">{sdg.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>

      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-sm bg-forest p-10 text-center shadow-lift lg:p-16">
            <div
              aria-hidden
              className="absolute -top-20 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary-foreground/8 blur-3xl animate-float-slow"
            />
            <p className="relative text-[0.6875rem] font-bold tracking-[0.28em] text-primary-foreground/70 uppercase">
              Work With Obemi
            </p>
            <h2 className="relative mx-auto mt-5 max-w-2xl text-3xl text-primary-foreground md:text-4xl">
              Partner with a community-led model of regeneration
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              Donors, impact investors, conservation organisations and tourism stakeholders
              are invited to build the Obemi Regenerative Hub alongside the Loitokitok
              community.
            </p>
            <Link
              to="/commitment"
              className="relative mt-9 inline-flex rounded-sm bg-primary-foreground px-7 py-3.5 text-[0.75rem] font-bold tracking-[0.16em] text-primary uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              Our commitment
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

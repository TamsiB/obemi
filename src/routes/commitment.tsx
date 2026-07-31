import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { CORE_VALUES, OBJECTIVES, ORG } from "@/lib/content";

export const Route = createFileRoute("/commitment")({
  head: () => ({
    meta: [
      { title: "Our Commitment — Obemi CBO" },
      {
        name: "description",
        content:
          "Obemi's commitment to restoring ecosystems, empowering communities through sustainable livelihoods, and strengthening stewardship through culture and partnerships.",
      },
      { property: "og:title", content: "Our Commitment — Obemi CBO" },
      {
        property: "og:description",
        content:
          "Integrity, passion, open sharing and fairness — the commitments behind Obemi's work in the Amboseli landscape.",
      },
    ],
  }),
  component: Commitment,
});

function Commitment() {
  return (
    <>
      <PageHero
        eyebrow="Our Commitment"
        title="Accountable to people and to nature"
        lead="Obemi commits to conservation that regenerates land, creates opportunity, and honours the knowledge and culture of the communities we belong to."
      />

      <Section>
        <SectionHeading
          eyebrow="Strategic Objectives"
          title="Three commitments we hold ourselves to"
          centered
        />
        <div className="mt-14 space-y-6">
          {OBJECTIVES.map((objective, i) => (
            <Reveal key={objective.title} delay={i * 100}>
              <article className="grid gap-6 rounded-sm border border-border bg-card p-8 shadow-soft card-lift md:grid-cols-[auto_1fr] lg:p-10">
                <span className="font-display text-4xl text-earth/50 md:w-20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl leading-snug text-foreground">
                    {objective.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {objective.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="bg-cream">
        <Section>
          <SectionHeading
            eyebrow="How we work"
            title="Commitments in practice"
            centered
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 90}>
                <article className="h-full rounded-sm bg-card p-7 shadow-soft card-lift">
                  <span className="block h-1 w-10 bg-earth-gradient" />
                  <h3 className="mt-5 text-xl text-foreground">{value.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <Reveal>
          <div className="rounded-sm border border-border bg-card p-10 text-center shadow-soft lg:p-16">
            <p className="eyebrow">{ORG.tagline}</p>
            <p className="mx-auto mt-6 max-w-3xl font-display text-2xl leading-snug text-foreground md:text-3xl">
              By investing in people, protecting nature, and fostering innovation, Obemi
              seeks to create a replicable model of sustainable development that benefits
              present and future generations.
            </p>
            <p className="mt-6 text-sm tracking-[0.16em] text-muted-foreground uppercase">
              {ORG.location}
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

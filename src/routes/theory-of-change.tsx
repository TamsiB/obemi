import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { THEORY_OF_CHANGE, OBJECTIVES } from "@/lib/content";

export const Route = createFileRoute("/theory-of-change")({
  head: () => ({
    meta: [
      { title: "Our Theory of Change & Approach — Obemi CBO" },
      {
        name: "description",
        content:
          "How Obemi turns community-led restoration, vocational training and green enterprise into lasting ecological and economic change in the Amboseli landscape.",
      },
      { property: "og:title", content: "Our Theory of Change & Approach — Obemi CBO" },
      {
        property: "og:description",
        content:
          "From challenge to long-term change: Obemi's approach to regenerative conservation and community livelihoods.",
      },
    ],
  }),
  component: TheoryOfChange,
});

function TheoryOfChange() {
  return (
    <>
      <PageHero
        eyebrow="Our Theory of Change"
        title="How restoration becomes prosperity"
        lead="Conservation must create meaningful economic opportunities for local people. Our approach links ecological restoration to skills, enterprise and culture."
      />

      <Section>
        <SectionHeading
          eyebrow="Our Approach"
          title="From challenge to lasting change"
          centered
        />
        <div className="mt-16 space-y-6">
          {THEORY_OF_CHANGE.map((step, i) => (
            <Reveal key={step.stage} delay={i * 90}>
              <article className="group grid gap-6 rounded-sm border border-border bg-card p-8 shadow-soft card-lift md:grid-cols-[auto_1fr] md:items-center">
                <div className="flex items-center gap-4 md:w-56">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-forest font-display text-lg text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="text-lg leading-tight text-foreground">{step.stage}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="bg-cream">
        <Section>
          <SectionHeading
            eyebrow="Strategic Objectives"
            title="What Obemi seeks to achieve"
            centered
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {OBJECTIVES.map((objective, i) => (
              <Reveal key={objective.title} delay={i * 110}>
                <article className="h-full rounded-sm border-t-2 border-earth bg-card p-8 shadow-soft card-lift">
                  <span className="font-display text-2xl text-earth/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl leading-snug text-foreground">
                    {objective.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {objective.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}

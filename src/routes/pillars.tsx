import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { HUB_COMPONENTS, PILLARS } from "@/lib/content";

export const Route = createFileRoute("/pillars")({
  head: () => ({
    meta: [
      { title: "Our Pillars & Activities — Obemi CBO" },
      {
        name: "description",
        content:
          "Obemi's four focus areas: regenerative conservation and land restoration, the Hospitality and Regeneration Academy, community enterprise, and wildlife coexistence.",
      },
      { property: "og:title", content: "Our Pillars & Activities — Obemi CBO" },
      {
        property: "og:description",
        content:
          "Regenerative conservation, vocational training, community enterprise and human-wildlife coexistence in the Amboseli landscape.",
      },
    ],
  }),
  component: Pillars,
});

function Pillars() {
  return (
    <>
      <PageHero
        eyebrow="Our Pillars & Activities"
        title="Four focus areas, one integrated approach"
        lead="Each pillar strengthens the others — restoration creates livelihoods, training creates stewards, and enterprise sustains conservation."
      />

      <Section>
        <div className="space-y-8">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 80}>
              <article className="grid gap-8 rounded-sm border border-border bg-card p-8 shadow-soft card-lift lg:grid-cols-[1fr_1fr] lg:p-10">
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-4xl text-earth/50">
                      {pillar.number}
                    </span>
                    <span className="eyebrow">Pillar</span>
                  </div>
                  <h2 className="mt-4 text-2xl leading-snug text-foreground md:text-3xl">
                    {pillar.title}
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {pillar.summary}
                  </p>
                </div>
                <div className="rounded-sm bg-cream p-7">
                  <p className="eyebrow">{pillar.activitiesLabel}</p>
                  <ul className="mt-5 space-y-3">
                    {pillar.activities.map((activity) => (
                      <li key={activity} className="flex gap-3 text-sm text-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-earth" />
                        <span className="leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="bg-cream">
        <Section>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
            <SectionHeading
              eyebrow="Flagship Initiative"
              title="The Obemi Regenerative Hub"
              lead="The flagship initiative of Obemi is the Obemi Regenerative Hub, an integrated restoration and learning centre being developed across the Loitokitok landscape. Designed as a living classroom, the Hub demonstrates how ecological restoration can create sustainable livelihoods while protecting one of East Africa's most important wildlife ecosystems."
            />
            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {HUB_COMPONENTS.map((item) => (
                  <div
                    key={item}
                    className="rounded-sm border border-border bg-card p-6 text-sm font-semibold text-foreground shadow-soft card-lift"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>
      </div>
    </>
  );
}

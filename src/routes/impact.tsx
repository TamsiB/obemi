import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { IMPACT_AIMS, NATIONAL_PRIORITIES, SDGS } from "@/lib/content";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Obemi CBO" },
      {
        name: "description",
        content:
          "Restored ecosystems, youth employment, stronger household incomes and climate resilience — the impact Obemi is building across the Amboseli landscape.",
      },
      { property: "og:title", content: "Our Impact — Obemi CBO" },
      {
        property: "og:description",
        content:
          "Obemi's impact goals and alignment with Kenya Vision 2030, NCCAP and the UN Sustainable Development Goals.",
      },
    ],
  }),
  component: Impact,
});

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Restored landscapes, empowered people"
        lead="Through integrated conservation and community development, Obemi works towards measurable change for both ecosystems and households."
      />

      <Section>
        <SectionHeading eyebrow="What we aim to achieve" title="Impact goals" centered />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {IMPACT_AIMS.map((aim, i) => (
            <Reveal key={aim} delay={i * 80}>
              <article className="h-full rounded-sm border border-border bg-card p-8 shadow-soft card-lift">
                <span className="font-display text-3xl text-earth/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-base leading-relaxed text-foreground">{aim}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="bg-cream">
        <Section>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Alignment"
              title="National and global priorities"
              lead="Obemi's programmes are designed to contribute directly to Kenya's development frameworks and to global sustainability commitments."
            />
            <div className="space-y-10">
              <Reveal delay={100}>
                <ul className="space-y-4">
                  {NATIONAL_PRIORITIES.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border-l-2 border-earth bg-card p-6 text-sm font-semibold text-foreground shadow-soft card-lift"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={180}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {SDGS.map((sdg) => (
                    <article
                      key={sdg.code}
                      className="rounded-sm bg-forest p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5"
                    >
                      <p className="font-display text-2xl text-primary-foreground">
                        {sdg.code}
                      </p>
                      <p className="mt-2 text-sm text-primary-foreground/80">
                        {sdg.label}
                      </p>
                    </article>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <Reveal>
          <div className="rounded-sm border border-border bg-card p-10 shadow-soft lg:p-14">
            <p className="eyebrow">Looking Ahead</p>
            <p className="mt-6 max-w-4xl font-display text-2xl leading-snug text-foreground md:text-3xl">
              Obemi envisions becoming a leading community-driven regenerative
              organisation in East Africa, demonstrating that conservation, tourism,
              education, and community development can work together to restore landscapes
              while improving lives.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              By investing in people, protecting nature, and fostering innovation, Obemi
              seeks to create a replicable model of sustainable development that benefits
              present and future generations.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

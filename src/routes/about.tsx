import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { CORE_VALUES, GEOGRAPHY } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Obemi CBO" },
      {
        name: "description",
        content:
          "Obemi CBO is a community-led non-profit in Loitokitok, Kajiado County, working within the Amboseli ecosystem for people, wildlife and nature.",
      },
      { property: "og:title", content: "About Obemi Community Based Organisation" },
      {
        property: "og:description",
        content:
          "Community-led conservation, education and enterprise across the Amboseli ecosystem in Kenya.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Community-led restoration in the Amboseli ecosystem"
        lead="Obemi Community Based Organisation (CBO) is a community-led, non-profit organisation dedicated to restoring ecosystems, empowering communities, and creating sustainable livelihoods through regenerative conservation, tourism, education, and cultural enterprise."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="Our Profile" title="Who we are" />
          <Reveal delay={120}>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Based in Loitokitok, Kajiado County, Kenya, Obemi works within the globally
                significant Amboseli ecosystem to promote harmonious coexistence between
                people, wildlife, and nature. The organisation believes that thriving
                communities and healthy ecosystems are inseparable — and that conservation
                must create meaningful economic opportunities for local people.
              </p>
              <p>
                Obemi brings together traditional ecological knowledge, regenerative land
                management, sustainable tourism, vocational skills development, and
                community entrepreneurship to build resilient landscapes and prosperous
                communities.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <div className="bg-cream">
        <Section>
          <SectionHeading
            eyebrow="Our Core Values"
            title="The principles behind every decision"
            centered
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {CORE_VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 90}>
                <article className="h-full rounded-sm border border-border bg-card p-8 shadow-soft card-lift">
                  <span className="font-display text-2xl text-earth/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl text-foreground">{value.title}</h3>
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
        <div className="grid gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Geographic Focus"
            title="Where we work"
            lead="Obemi primarily operates within the Loitokitok landscape and the wider Amboseli-Tsavo-Kilimanjaro wildlife corridor."
          />
          <Reveal delay={120}>
            <ul className="space-y-4">
              {GEOGRAPHY.map((place) => (
                <li
                  key={place}
                  className="rounded-sm border-l-2 border-earth bg-card p-6 text-sm leading-relaxed text-foreground shadow-soft card-lift"
                >
                  {place}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

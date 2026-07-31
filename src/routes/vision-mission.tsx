import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { CORE_VALUES } from "@/lib/content";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Our Vision & Mission — Obemi CBO" },
      {
        name: "description",
        content:
          "Obemi's vision of a regenerative future and its mission to restore landscapes, empower communities and promote regenerative tourism and conservation.",
      },
      { property: "og:title", content: "Our Vision & Mission — Obemi CBO" },
      {
        property: "og:description",
        content:
          "A regenerative future where communities, wildlife and nature thrive together in healthy, resilient ecosystems.",
      },
    ],
  }),
  component: VisionMission,
});

function VisionMission() {
  return (
    <>
      <PageHero
        eyebrow="Our Vision & Mission"
        title="Where we are going, and how we get there"
        lead="Obemi's vision and mission hold together two inseparable ideas: healthy ecosystems and thriving communities."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="relative h-full overflow-hidden rounded-sm bg-forest p-10 shadow-lift">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 size-56 rounded-full bg-primary-foreground/8 blur-2xl animate-float-slow"
              />
              <p className="relative text-[0.6875rem] font-bold tracking-[0.28em] text-primary-foreground/70 uppercase">
                Our Vision
              </p>
              <p className="relative mt-6 font-display text-3xl leading-snug text-primary-foreground md:text-4xl">
                A regenerative future where communities, wildlife, and nature thrive
                together in healthy, resilient ecosystems.
              </p>
            </article>
          </Reveal>
          <Reveal delay={140}>
            <article className="h-full rounded-sm border border-border bg-card p-10 shadow-soft card-lift">
              <p className="eyebrow">Our Mission</p>
              <p className="mt-6 font-display text-3xl leading-snug text-foreground md:text-4xl">
                To restore degraded landscapes, empower communities through education and
                sustainable livelihoods, and promote regenerative tourism and conservation
                that benefits both people and nature.
              </p>
            </article>
          </Reveal>
        </div>
      </Section>

      <div className="bg-cream">
        <Section>
          <SectionHeading
            eyebrow="Our Core Values"
            title="Values that carry the mission"
            centered
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 90}>
                <article className="h-full border-t-2 border-earth bg-card p-7 shadow-soft card-lift">
                  <h3 className="text-xl text-foreground">{value.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {value.body}
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

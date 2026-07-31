import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, GraduationCap, Store, PawPrint } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Layout";
import logo from "@/assets/obemi-logo.jpg.asset.json";
import { CORE_VALUES, HUB_COMPONENTS, IMPACT_AIMS, PILLARS } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Obemi CBO — Restore. Empower. Thrive." },
      {
        name: "description",
        content:
          "Obemi is a community-led non-profit restoring ecosystems, empowering communities and building sustainable livelihoods in the Amboseli ecosystem, Loitokitok, Kenya.",
      },
      { property: "og:title", content: "Obemi CBO — Restore. Empower. Thrive." },
      {
        property: "og:description",
        content:
          "Obemi is a community-led non-profit restoring ecosystems, empowering communities and building sustainable livelihoods in the Amboseli ecosystem, Loitokitok, Kenya.",
      },
    ],
  }),
  component: Home,
});

const PILLAR_ICONS = [Leaf, GraduationCap, Store, PawPrint];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div
          aria-hidden
          className="absolute -top-32 -left-24 size-[26rem] rounded-full bg-primary-foreground/5 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden
          className="absolute -right-32 bottom-0 size-[30rem] rounded-full bg-earth/25 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
          <Reveal>
            <p className="text-[0.6875rem] font-bold tracking-[0.3em] text-primary-foreground/70 uppercase">
              Loitokitok • Kajiado County • Kenya
            </p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.02] text-primary-foreground md:text-7xl">
              Restore. Empower. Thrive.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              Obemi Community Based Organisation is a community-led, non-profit
              organisation dedicated to restoring ecosystems, empowering communities, and
              creating sustainable livelihoods through regenerative conservation, tourism,
              education, and cultural enterprise.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary-foreground px-7 py-3.5 text-[0.75rem] font-bold tracking-[0.16em] text-primary uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                About Obemi
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/pillars"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-7 py-3.5 text-[0.75rem] font-bold tracking-[0.16em] text-primary-foreground uppercase transition-colors duration-300 hover:bg-primary-foreground/10"
              >
                Our Pillars
              </Link>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-sm border border-primary-foreground/15 bg-primary-foreground/8 p-8 backdrop-blur-sm">
              <img
                src={logo.url}
                alt="Obemi Community Based Organisation logo"
                className="mx-auto h-16 w-auto rounded-sm bg-background p-2"
              />
              <p className="mt-8 text-center font-display text-2xl leading-snug text-primary-foreground">
                “Thriving communities and healthy ecosystems are inseparable.”
              </p>
              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-primary-foreground/15">
                {[
                  { k: "20", v: "Youth trained annually" },
                  { k: "4", v: "Programme pillars" },
                  { k: "3", v: "Strategic objectives" },
                  { k: "4", v: "SDGs advanced" },
                ].map((s) => (
                  <div key={s.v} className="bg-primary/70 p-5 text-center">
                    <p className="font-display text-3xl text-primary-foreground">{s.k}</p>
                    <p className="mt-1 text-[0.7rem] tracking-[0.12em] text-primary-foreground/70 uppercase">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="About Us"
            title="A community-led organisation in the Amboseli ecosystem"
          />
          <Reveal delay={120}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Based in Loitokitok, Kajiado County, Kenya, Obemi works within the globally
                significant Amboseli ecosystem to promote harmonious coexistence between
                people, wildlife, and nature.
              </p>
              <p>
                Obemi brings together traditional ecological knowledge, regenerative land
                management, sustainable tourism, vocational skills development, and
                community entrepreneurship to build resilient landscapes and prosperous
                communities.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-primary uppercase"
              >
                Read our full profile
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <div className="bg-cream">
        <Section>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-sm border border-border bg-card p-9 shadow-soft card-lift">
                <p className="eyebrow">Our Vision</p>
                <p className="mt-5 font-display text-2xl leading-snug text-foreground md:text-3xl">
                  A regenerative future where communities, wildlife, and nature thrive
                  together in healthy, resilient ecosystems.
                </p>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="h-full rounded-sm border border-border bg-card p-9 shadow-soft card-lift">
                <p className="eyebrow">Our Mission</p>
                <p className="mt-5 font-display text-2xl leading-snug text-foreground md:text-3xl">
                  To restore degraded landscapes, empower communities through education and
                  sustainable livelihoods, and promote regenerative tourism and
                  conservation that benefits both people and nature.
                </p>
              </article>
            </Reveal>
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Our Pillars"
          title="Four pillars of regenerative change"
          centered
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] ?? Leaf;
            return (
              <Reveal key={pillar.number} delay={i * 100}>
                <article className="group h-full rounded-sm border border-border bg-card p-8 shadow-soft card-lift">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-3xl text-earth/40">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl text-foreground">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {pillar.summary}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <Link
              to="/pillars"
              className="group inline-flex items-center gap-2 rounded-sm bg-forest px-7 py-3.5 text-[0.75rem] font-bold tracking-[0.16em] text-primary-foreground uppercase shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
            >
              Pillars &amp; activities
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Section>

      <div className="bg-cream">
        <Section>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Flagship Initiative"
                title="The Obemi Regenerative Hub"
                lead="An integrated restoration and learning centre being developed across the Loitokitok landscape. Designed as a living classroom, the Hub demonstrates how ecological restoration can create sustainable livelihoods while protecting one of East Africa's most important wildlife ecosystems."
              />
            </div>
            <Reveal delay={120}>
              <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
                {HUB_COMPONENTS.map((item) => (
                  <li
                    key={item}
                    className="bg-card p-6 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeading eyebrow="Our Core Values" title="What guides our work" centered />
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

      <div className="bg-forest">
        <Section>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[0.6875rem] font-bold tracking-[0.28em] text-primary-foreground/70 uppercase">
                Our Impact
              </p>
              <h2 className="mt-4 text-3xl text-primary-foreground md:text-4xl">
                What we are working towards
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {IMPACT_AIMS.map((aim, i) => (
              <Reveal key={aim} delay={i * 80}>
                <article className="h-full rounded-sm border border-primary-foreground/15 bg-primary-foreground/8 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-primary-foreground/15">
                  <span className="font-display text-2xl text-primary-foreground/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/90">
                    {aim}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Link
                to="/impact"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary-foreground px-7 py-3.5 text-[0.75rem] font-bold tracking-[0.16em] text-primary uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore our impact
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </Section>
      </div>
    </>
  );
}

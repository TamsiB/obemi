import { createFileRoute, Link } from "@tanstack/react-router";
import { Handshake, HeartHandshake, Sprout, GraduationCap, Heart } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { NATIONAL_PRIORITIES, PARTNERS, SDGS } from "@/lib/content";

const DONATION_CAMPAIGNS = [
  {
    icon: Sprout,
    title: "Rangeland & Tree Restoration",
    body: "Help restore degraded rangelands by funding community-led tree planting, reseeding of native trees and fruits, and wildlife corridor protection across the Amboseli ecosystem.",
  },
  {
    icon: GraduationCap,
    title: "Hospitality & Regeneration Academy",
    body: "Sponsor an underserved young person through our vocational training centre, equipping them with practical skills for the green economy and a pathway to employment.",
  },
  {
    icon: Heart,
    title: "Family & Drought Relief",
    body: "Support the distribution of foodstuffs and essentials to vulnerable families in Loitokitok and Iltilal villages during drought, delivered through community structures.",
  },
  {
    icon: HeartHandshake,
    title: "Girls' Mentorship & Community Outreach",
    body: "Fund mentorship, school outreach and essential supplies — like the sanitary towel drives held with Entaisere Community Organization at Entonet Comprehensive Primary School.",
  },
];

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

      <div className="bg-cream">
        <Section>
          <SectionHeading
            eyebrow="Partner With Us"
            title="Support a campaign"
            lead="Every contribution goes directly to community-led work in Loitokitok — restoring land, training young people and standing with families in need. Choose a campaign and give what you can."
            centered
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {DONATION_CAMPAIGNS.map((campaign, i) => (
              <Reveal key={campaign.title} delay={i * 80}>
                <article className="flex h-full flex-col rounded-sm border border-border bg-card p-8 shadow-soft card-lift">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                    <campaign.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-foreground">
                    {campaign.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {campaign.body}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex w-fit items-center rounded-sm bg-forest px-6 py-3 text-[0.75rem] font-bold tracking-[0.14em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Donate
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
              To give directly or discuss a partnership, reach us at{" "}
              <a
                href="tel:0119086181"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                0119 086 181
              </a>{" "}
              or{" "}
              <a
                href="mailto:info@obemi.co.ke"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                info@obemi.co.ke
              </a>
              .
            </p>
          </Reveal>
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

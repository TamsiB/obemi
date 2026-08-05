import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { GALLERY } from "@/lib/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Obemi CBO" },
      {
        name: "description",
        content:
          "Photos from Obemi's community work — sharing Christmas cheer with needy families and distributing foodstuffs at Iltilal villages during drought.",
      },
      { property: "og:title", content: "Gallery — Obemi CBO" },
      {
        property: "og:description",
        content:
          "Moments from Obemi's community outreach: Christmas food distribution through the church and drought relief in Iltilal villages.",
      },
      { property: "og:image", content: GALLERY[0]!.items[0]!.url },
      { name: "twitter:image", content: GALLERY[0]!.items[0]!.url },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<{ url: string; caption: string } | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments with our community"
        lead="Scenes from Obemi's outreach — sharing, supporting and standing with families across our landscape."
      />

      {GALLERY.map((group, gi) => (
        <div key={group.title} className={gi % 2 === 1 ? "bg-cream" : undefined}>
          <Section>
            <SectionHeading eyebrow={group.eyebrow} title={group.title} lead={group.caption} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, i) => (
                <Reveal key={item.url} delay={i * 70}>
                  <button
                    type="button"
                    onClick={() => setActive({ url: item.url, caption: group.caption })}
                    className="group block w-full overflow-hidden rounded-sm border border-border bg-card text-left shadow-soft card-lift"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.url}
                        alt={group.caption}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="p-5 text-sm leading-relaxed text-muted-foreground">
                      {group.caption}
                    </p>
                  </button>
                </Reveal>
              ))}
            </div>
          </Section>
        </div>
      ))}

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/85 p-5 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 rounded-full bg-background/90 p-2 text-foreground transition-colors hover:bg-background"
          >
            <X className="size-5" />
          </button>
          <figure className="max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.url}
              alt={active.caption}
              className="max-h-[75vh] w-full rounded-sm object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-primary-foreground/90">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

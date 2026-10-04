import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { GALLERY, type GalleryGroup } from "@/lib/gallery";

type Slide = { url: string; group: GalleryGroup };

const SLIDES: Slide[] = GALLERY.flatMap((group) =>
  group.items.map((item) => ({ url: item.url, group })),
);

const INTERVAL_MS = 5000;

export function Slideshow() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    if (playing) {
      timer.current = setInterval(() => go(1), INTERVAL_MS);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing, go]);

  const slide = SLIDES[index]!;

  return (
    <Section>
      <SectionHeading
        eyebrow="In Pictures"
        title="A slideshow of our work"
        lead="Scenes from Obemi's outreach — sharing, supporting and standing with families across our landscape."
        centered
      />

      <Reveal delay={120}>
        <div
          className="group relative mx-auto mt-12 aspect-[4/3] max-w-5xl overflow-hidden rounded-sm border border-border bg-card shadow-soft sm:aspect-[16/9]"
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
        >
          {SLIDES.map((s, i) => (
            <img
              key={s.url}
              src={s.url}
              alt={s.group.caption}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent"
          />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
            <p className="text-[0.6rem] font-bold tracking-[0.28em] text-primary-foreground/70 uppercase sm:text-[0.6875rem]">
              {slide.group.eyebrow}
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-primary-foreground sm:text-base">
              {slide.group.caption}
            </p>
          </div>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(-1)}
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-background/80 p-2.5 text-foreground shadow-soft opacity-0 transition-opacity duration-300 hover:bg-background group-hover:opacity-100 focus-visible:opacity-100 sm:left-5"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(1)}
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-background/80 p-2.5 text-foreground shadow-soft opacity-0 transition-opacity duration-300 hover:bg-background group-hover:opacity-100 focus-visible:opacity-100 sm:right-5"
          >
            <ChevronRight className="size-5" />
          </button>
          <button
            type="button"
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            onClick={() => setPlaying((p) => !p)}
            className="absolute top-4 right-4 rounded-full bg-background/80 p-2.5 text-foreground shadow-soft transition-colors hover:bg-background"
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>

          <div className="absolute top-4 left-4 flex gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-primary-foreground"
                    : "w-1.5 bg-primary-foreground/40 hover:bg-primary-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

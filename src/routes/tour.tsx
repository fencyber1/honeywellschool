import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import campusPhoto from "@/assets/honeywell-campus.jpg";
import exteriorPhoto from "@/assets/honeywell-exterior.jpg";
import libraryPhoto from "@/assets/honeywell-library.jpg";
import sportsPhoto from "@/assets/honeywell-sports.jpg";
import { PageHero, Section } from "@/components/school-shared";
import { Button } from "@/components/ui/button";
import { seoPage } from "@/lib/seo";

export const Route = createFileRoute("/tour")({
  head: () =>
    seoPage({
      title: "School Tour — Buildings & Facilities | Honeywell School",
      description:
        "Take a school tour of Honeywell School in Accra, Ghana — our gate and entrance, school buildings, library, and sports and play areas.",
      path: "/tour",
    }),
  component: Tour,
});

const photos = [
  { src: "/campus-gate.jpeg", name: "School Gate & Entrance" },
  { src: campusPhoto, name: "Campus View" },
  { src: exteriorPhoto, name: "School Building" },
  { src: libraryPhoto, name: "Library" },
  { src: sportsPhoto, name: "Sports & Play Area" },
  { src: "/tour/g.jpeg", name: "Playground Courtyard" },
  { src: "/tour/i.jpeg", name: "Outdoor Play Equipment" },
  { src: "/tour/r.jpeg", name: "Classroom Block Courtyard" },
  { src: "/tour/v.jpeg", name: "Oyarifa Branch Street View" },
];

function Tour() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) => (cur === null ? cur : (cur + dir + photos.length) % photos.length)),
    [],
  );
  const current = active === null ? null : (photos[active] ?? null);

  useEffect(() => {
    if (active === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <main>
      <PageHero
        eyebrow="School tour"
        title="Take a look around our school."
        intro="Our gate and entrance, school buildings, library, and sports and play areas — Honeywell School, Accra."
        image="/campus-gate.jpeg"
        imageAlt="The gate and entrance of Honeywell School"
      />
      <Section eyebrow="Buildings & facilities" title="Nine views of Honeywell.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActive(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-lg border border-ink/10 bg-surface focus-visible:outline-2 focus-visible:outline-action"
              aria-label={`Open ${photo.name}`}
            >
              <img
                src={photo.src}
                alt={photo.name}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition group-hover:bg-ink/30 group-hover:opacity-100">
                <Expand className="size-6 text-paper" />
              </span>
            </button>
          ))}
        </div>
      </Section>
      <Section dark eyebrow="Like what you see?" title="Come and see it in person.">
        <div className="flex flex-col items-start gap-5">
          <p className="max-w-xl leading-relaxed text-paper/70">
            Photos are a start — the real Honeywell is even better. Book a visit and walk
            our buildings, meet our teachers, and picture your child here.
          </p>
          <Button
            asChild
            className="h-11 rounded-none bg-action text-action-foreground hover:bg-action/90"
          >
            <Link to="/contact">Book a school tour</Link>
          </Button>
        </div>
      </Section>
      {current !== null && active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.name}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo"
            className="absolute right-4 top-4 rounded-full bg-paper/10 p-2 text-paper hover:bg-paper/20"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-paper/10 p-2 text-paper hover:bg-paper/20 sm:left-4"
          >
            <ChevronLeft className="size-6" />
          </button>
          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.name}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm font-bold text-paper">
              {active + 1} / {photos.length} · {current.name}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-paper/10 p-2 text-paper hover:bg-paper/20 sm:right-4"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}
    </main>
  );
}

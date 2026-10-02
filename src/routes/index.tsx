import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, ShieldCheck, Users } from "lucide-react";
import { useEffect, useState } from "react";

import campusImage from "@/assets/honeywell-playground-sharp.png";
import { Button } from "@/components/ui/button";
import { ContactForm, Section } from "@/components/school-shared";
import { JsonLd, seoPage, schoolSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seoPage({
    title: "Preschool in Ghana — Honeywell School, Accra | Creche & Nursery",
    description:
      "Honeywell School is a preschool in Ghana offering the UK EYFS curriculum for children 6 months to 5 years at Airport Residential Area and Oyarifa, Accra.",
    path: "/",
  }),
  component: Index,
});

const HERO_WORDS = [
  "confident",
  "bright",
  "bold",
  "creative",
  "resilient",
  "compassionate",
  "ambitious",
  "innovative",
  "disciplined",
  "limitless",
] as const;

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_WORDS.length);
    }, 2500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <span className="sr-only">confident</span>
      <span key={HERO_WORDS[index]} aria-hidden="true" className="font-serif font-medium italic text-action animate-word-in">
        {HERO_WORDS[index]}
      </span>
    </>
  );
}

const HERO_PHOTOS = [
  "/gallery/airport/airport-01.jpg",
  "/gallery/airport/airport-09.jpg",
  "/gallery/airport/airport-17.jpg",
  "/gallery/airport/airport-25.jpg",
  "/gallery/airport/airport-33.jpg",
  "/gallery/airport/airport-41.jpg",
] as const;

function HeroGallery() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % HERO_PHOTOS.length), 4500);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl" role="img" aria-label="Preschool in Ghana — Honeywell School gallery">
      {HERO_PHOTOS.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          fetchPriority={i === 0 ? "high" : "auto"}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 size-full object-cover object-center transition-all duration-1000 ${i === index ? "opacity-100 blur-0" : "opacity-0 blur-lg"}`}
        />
      ))}
    </div>
  );
}

function Index() {
  return (
    <main>
      <JsonLd data={schoolSchema} />
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute -right-24 -top-24 size-[520px] rounded-full bg-trust/30 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 size-[420px] rounded-full bg-action/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"><span className="size-1.5 rounded-full bg-action" /> Now enrolling · 2026–27</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">Preschool in Ghana: where curious minds become <RotatingWord /> futures.</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">At Honeywell, every child is known by name, challenged with care, and surrounded by a community that believes in what they can become.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild className="h-11 rounded-none bg-action text-action-foreground hover:bg-action/90"><Link to="/contact">Contact Admissions <ArrowRight /></Link></Button><Button asChild variant="outline" className="h-11 rounded-none border-paper/20 bg-paper/10 text-paper hover:bg-paper/20 hover:text-paper"><Link to="/programs">Explore programs</Link></Button></div>
          </div>
          <div className="lg:col-span-5"><HeroGallery /></div>
        </div>
      </section>
      <Section eyebrow="Why Honeywell" title="The confidence parents look for. The opportunity children deserve."><div className="grid gap-5 md:grid-cols-4">{[[BookOpen,"Ambitious learning","A curriculum that builds mastery, curiosity, and independent thought."],[Users,"Known personally","Small classes and attentive teachers help every child feel seen."],[ShieldCheck,"Safe & supported","Pastoral care and clear safeguarding shape every school day."],[Award,"Beyond the classroom","Arts, sport, leadership, and service reveal new strengths."]].map(([Icon,title,text]) => { const ItemIcon = Icon as typeof BookOpen; return <article key={String(title)} className="rounded-lg border border-ink/10 bg-surface p-6"><ItemIcon className="size-6 text-action" /><h3 className="mt-4 text-lg font-extrabold">{String(title)}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{String(text)}</p></article>; })}</div><div className="mt-8 border-l-4 border-action bg-surface p-6 sm:p-8"><h3 className="text-xl font-black sm:text-2xl">A Foundation for Lifelong Excellence</h3><p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">At Honeywell School, we provide a lifelong foundation of excellence that empowers our students to thrive academically and developmentally — building the confidence and character that carry them to leading schools, and beyond.</p></div></Section>
      <Section eyebrow="Preschool in Ghana" title="What a great preschool in Ghana looks like."><div className="grid gap-8 lg:grid-cols-2"><div className="space-y-4 leading-relaxed text-ink-soft"><p>Choosing a preschool in Ghana is one of the most important decisions a family makes. The early years — from six months to five years — shape how a child learns, relates to others, and sees themselves. At Honeywell School, we have spent over a decade getting these years right.</p><p>Our preschool in Ghana follows the UK Early Years Foundation Stage (EYFS) curriculum, delivered through safe, loving, play-based learning. Children explore, create, and build confidence in small classes where every child is known by name — academically, socially, and emotionally.</p><p>With two Accra branches, a warm and homely environment, and teachers who genuinely care, Honeywell gives your child the strongest possible start — and gives you complete peace of mind.</p><Button asChild variant="link" className="mt-2 px-0 text-trust"><Link to="/programs">Explore our preschool in Ghana programs <ArrowRight /></Link></Button></div><div className="grid gap-3 sm:grid-cols-2">{["UK EYFS curriculum","Small, attentive classes","Two Accra branches","Safe & homely environment"].map(x=><div key={x} className="border-l-4 border-action bg-surface p-5 font-bold">{x}</div>)}</div></div></Section>
      <Section eyebrow="Academic programs" title="Three stages, one promise: children who thrive."><div className="grid gap-5 md:grid-cols-3">{[["Creche","Gentle first steps","Warm care, sensory play, music, and gentle routines for our youngest."],["Nursery","Confident little explorers","Phonics, numbers through play, art, and growing independence."],["Preschool","Ready for primary school","Reading and writing foundations, early mathematics, and school habits."]].map(([name,ages,text]) => <article key={name} className="relative overflow-hidden rounded-lg border border-ink/10 bg-surface p-6"><div className="absolute -right-10 -top-10 size-28 -skew-x-12 bg-trust/10"/><p className="text-xs font-bold uppercase tracking-[0.18em] text-trust">{name}</p><h3 className="mt-3 text-xl font-black">{ages}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p></article>)}</div><Button asChild variant="link" className="mt-5 px-0 text-trust"><Link to="/programs">View full curriculum <ArrowRight /></Link></Button></Section>
      <Section dark eyebrow="Campus life" title="A campus that feels like home, built for growth."><div className="grid items-center gap-10 lg:grid-cols-2"><div className="skew-x-3 overflow-hidden rounded-xl border border-paper/20 bg-paper/10 p-2"><img src={campusImage} alt="Preschool in Ghana — Honeywell School children enjoying an outdoor activity course" width={1536} height={1920} loading="lazy" className="aspect-[4/3] w-full object-cover object-center" /></div><div><Button asChild className="mt-6 rounded-none bg-action text-action-foreground"><Link to="/campus">Explore campus <ArrowRight /></Link></Button></div></div></Section>
      <section className="relative overflow-hidden bg-ink py-16 text-paper"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-action">Admissions</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Ready to picture your child at Honeywell?</h2><p className="mt-4 max-w-lg leading-relaxed text-paper/70">Tell us what matters to your family. An admissions adviser will help you understand the next step.</p><ul className="mt-6 space-y-2 text-sm text-paper/75"><li>✓ Personal campus tour</li><li>✓ Clear application guidance</li><li>✓ Fee and support conversation</li></ul></div><ContactForm compact /></div></section>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, ShieldCheck, Users } from "lucide-react";
import { useEffect, useState } from "react";

import heroImage from "@/assets/honeywell-reading-sharp.png";
import campusImage from "@/assets/honeywell-playground-sharp.png";
import parentImage from "@/assets/honeywell-parent.jpg";
import { Button } from "@/components/ui/button";
import { ContactForm, Section } from "@/components/school-shared";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Honeywell School — Where Excellence Meets Opportunity" },
    { name: "description", content: "Discover Honeywell School's preschool programs, campus life, and admissions experience." },
    { property: "og:title", content: "Honeywell School — Where Excellence Meets Opportunity" },
    { property: "og:description", content: "A warm, ambitious school community where every student is known and challenged." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }] }),
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

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute -right-24 -top-24 size-[520px] rounded-full bg-trust/30 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 size-[420px] rounded-full bg-action/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"><span className="size-1.5 rounded-full bg-action" /> Now enrolling · 2026–27</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">Where curious minds become <RotatingWord /> futures.</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">At Honeywell, every child is known by name, challenged with care, and surrounded by a community that believes in what they can become.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild className="h-11 rounded-none bg-action text-action-foreground hover:bg-action/90"><Link to="/contact">Contact Admissions <ArrowRight /></Link></Button><Button asChild variant="outline" className="h-11 rounded-none border-paper/20 bg-paper/10 text-paper hover:bg-paper/20 hover:text-paper"><Link to="/programs">Explore programs</Link></Button></div>
          </div>
          <div className="lg:col-span-5"><div className="relative"><div className="absolute -inset-3 rotate-3 rounded-xl bg-trust/50" /><div className="relative -skew-x-3 overflow-hidden rounded-xl border border-paper/20 bg-paper/10 p-2"><img src={heroImage} alt="Honeywell School pupils reading together in their classroom" width={1920} height={1281} fetchPriority="high" className="aspect-[4/5] w-full object-cover object-center" /></div></div></div>
        </div>
      </section>
      <Section eyebrow="Why Honeywell" title="The confidence parents look for. The opportunity children deserve."><div className="grid gap-5 md:grid-cols-4">{[[BookOpen,"Ambitious learning","A curriculum that builds mastery, curiosity, and independent thought."],[Users,"Known personally","Small classes and attentive teachers help every child feel seen."],[ShieldCheck,"Safe & supported","Pastoral care and clear safeguarding shape every school day."],[Award,"Beyond the classroom","Arts, sport, leadership, and service reveal new strengths."]].map(([Icon,title,text]) => { const ItemIcon = Icon as typeof BookOpen; return <article key={String(title)} className="rounded-lg border border-ink/10 bg-surface p-6"><ItemIcon className="size-6 text-action" /><h3 className="mt-4 text-lg font-extrabold">{String(title)}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{String(text)}</p></article>; })}</div></Section>
      <Section eyebrow="Academic programs" title="Three stages, one promise: children who thrive."><div className="grid gap-5 md:grid-cols-3">{[["Creche","Gentle first steps","Warm care, sensory play, music, and gentle routines for our youngest."],["Nursery","Confident little explorers","Phonics, numbers through play, art, and growing independence."],["Kindergarten","Ready for primary school","Reading and writing foundations, early mathematics, and school habits."]].map(([name,ages,text]) => <article key={name} className="relative overflow-hidden rounded-lg border border-ink/10 bg-surface p-6"><div className="absolute -right-10 -top-10 size-28 -skew-x-12 bg-trust/10"/><p className="text-xs font-bold uppercase tracking-[0.18em] text-trust">{name}</p><h3 className="mt-3 text-xl font-black">{ages}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p></article>)}</div><Button asChild variant="link" className="mt-5 px-0 text-trust"><Link to="/programs">View full curriculum <ArrowRight /></Link></Button></Section>
      <Section dark eyebrow="Campus life" title="A campus that feels like home, built for growth."><div className="grid items-center gap-10 lg:grid-cols-2"><div className="skew-x-3 overflow-hidden rounded-xl border border-paper/20 bg-paper/10 p-2"><img src={campusImage} alt="Honeywell School children enjoying an outdoor activity course" width={1536} height={1920} loading="lazy" className="aspect-[4/3] w-full object-cover object-center" /></div><div><Button asChild className="mt-6 rounded-none bg-action text-action-foreground"><Link to="/campus">Explore campus <ArrowRight /></Link></Button></div></div></Section>
      <Section eyebrow="Parent voice" title="What feeling confident in a school sounds like."><figure className="mx-auto max-w-4xl rounded-lg border border-ink/10 bg-surface p-7 sm:p-10"><blockquote className="font-serif text-2xl leading-snug sm:text-3xl">“Honeywell didn’t just teach my daughter — they taught her to ask better questions. Her teachers know her by name and by heart.”</blockquote><figcaption className="mt-6 flex items-center gap-3"><img src={parentImage} alt="Honeywell School parent" width={816} height={816} loading="lazy" className="size-12 rounded-full object-cover"/><span><strong className="block text-sm">Priya Nandakumar*</strong><span className="text-xs text-ink-soft">Parent</span></span></figcaption></figure></Section>
      <section className="relative overflow-hidden bg-ink py-16 text-paper"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-action">Admissions</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Ready to picture your child at Honeywell?</h2><p className="mt-4 max-w-lg leading-relaxed text-paper/70">Tell us what matters to your family. An admissions adviser will help you understand the next step.</p><ul className="mt-6 space-y-2 text-sm text-paper/75"><li>✓ Personal campus tour</li><li>✓ Clear application guidance</li><li>✓ Fee and support conversation</li></ul></div><ContactForm compact /></div></section>
    </main>
  );
}

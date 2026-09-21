import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, ShieldCheck, Users } from "lucide-react";

import heroImage from "@/assets/honeywell-hero.jpg";
import campusImage from "@/assets/honeywell-campus.jpg";
import parentImage from "@/assets/honeywell-parent.jpg";
import { Button } from "@/components/ui/button";
import { ContactForm, DemoNotice, Section, StatGrid } from "@/components/school-shared";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Honeywell School — Where Excellence Meets Opportunity" },
    { name: "description", content: "Discover Honeywell School's academic programs, campus life, and admissions experience for ages 3–18." },
    { property: "og:title", content: "Honeywell School — Where Excellence Meets Opportunity" },
    { property: "og:description", content: "A warm, ambitious school community where every student is known and challenged." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }] }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute -right-24 -top-24 size-[520px] rounded-full bg-trust/30 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 size-[420px] rounded-full bg-action/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"><span className="size-1.5 rounded-full bg-action" /> Now enrolling · 2026–27</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">Where curious minds become <span className="font-serif font-medium italic text-action">confident</span> futures.</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">At Honeywell, every child is known by name, challenged with care, and surrounded by a community that believes in what they can become.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild className="h-11 rounded-none bg-action text-action-foreground hover:bg-action/90"><Link to="/contact">Contact Admissions <ArrowRight /></Link></Button><Button asChild variant="outline" className="h-11 rounded-none border-paper/20 bg-paper/10 text-paper hover:bg-paper/20 hover:text-paper"><Link to="/programs">Explore programs</Link></Button></div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/60"><span>● 96% university acceptance*</span><span>● 1:8 teacher ratio*</span></div>
          </div>
          <div className="lg:col-span-5"><div className="relative"><div className="absolute -inset-3 rotate-3 rounded-xl bg-trust/50" /><div className="relative -skew-x-3 overflow-hidden rounded-xl border border-paper/20 bg-paper/10 p-2"><img src={heroImage} alt="Students collaborating in a Honeywell School studio" width={1024} height={1280} fetchPriority="high" className="aspect-[4/5] w-full object-cover" /></div><div className="absolute -bottom-5 -left-3 rounded-lg border border-paper/20 bg-ink/70 px-4 py-3 backdrop-blur-md"><p className="text-2xl font-black">1,240*</p><p className="text-[10px] uppercase tracking-[0.16em] text-paper/60">Students · 14 nations</p></div></div></div>
        </div>
      </section>
      <DemoNotice />
      <section className="border-b border-ink/10 bg-paper-2"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 text-center"><span className="text-xs font-bold uppercase tracking-[0.18em] text-ink-soft">Demonstration accreditations</span><span className="text-sm font-bold">Independent Schools Council</span><span className="text-sm font-bold">STEM Excellence Alliance</span><span className="text-sm font-bold">Arts & Athletics League</span></div></section>
      <Section eyebrow="Why Honeywell" title="The confidence parents look for. The opportunity children deserve."><div className="grid gap-5 md:grid-cols-4">{[[BookOpen,"Ambitious learning","A curriculum that builds mastery, curiosity, and independent thought."],[Users,"Known personally","Small classes and attentive teachers help every child feel seen."],[ShieldCheck,"Safe & supported","Pastoral care and clear safeguarding shape every school day."],[Award,"Beyond the classroom","Arts, sport, leadership, and service reveal new strengths."]].map(([Icon,title,text]) => { const ItemIcon = Icon as typeof BookOpen; return <article key={String(title)} className="rounded-lg border border-ink/10 bg-surface p-6"><ItemIcon className="size-6 text-action" /><h3 className="mt-4 text-lg font-extrabold">{String(title)}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{String(text)}</p></article>; })}</div></Section>
      <Section eyebrow="Academic programs" title="Three pathways, one promise: students who thrive."><div className="grid gap-5 md:grid-cols-3">{[["Lower School","Ages 3–8","Play-based foundations in literacy, numeracy, creativity, and outdoor learning."],["Middle School","Ages 9–12","Projects, mentoring, and interdisciplinary learning build growing independence."],["Upper School","Ages 13–18","Advanced pathways, university guidance, and electives from robotics to theatre."]].map(([name,ages,text]) => <article key={name} className="relative overflow-hidden rounded-lg border border-ink/10 bg-surface p-6"><div className="absolute -right-10 -top-10 size-28 -skew-x-12 bg-trust/10"/><p className="text-xs font-bold uppercase tracking-[0.18em] text-trust">{name}</p><h3 className="mt-3 text-xl font-black">{ages}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p></article>)}</div><Button asChild variant="link" className="mt-5 px-0 text-trust"><Link to="/programs">View full curriculum <ArrowRight /></Link></Button></Section>
      <Section dark eyebrow="Campus life" title="A campus that feels like home, built for growth."><div className="grid items-center gap-10 lg:grid-cols-2"><div className="skew-x-3 overflow-hidden rounded-xl border border-paper/20 bg-paper/10 p-2"><img src={campusImage} alt="Students and teachers learning in a Honeywell science lab" width={1280} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover" /></div><div><p className="max-w-xl leading-relaxed text-paper/70">Purpose-built labs, studios, courts, gardens, and welcoming classrooms keep learning moving beyond the desk.</p><div className="mt-7"><StatGrid dark items={[["40*","Campus acres"],["32*","Clubs"],["18*","Sports"],["6*","Creative studios"]]} /></div><Button asChild className="mt-6 rounded-none bg-action text-action-foreground"><Link to="/campus">Explore campus <ArrowRight /></Link></Button></div></div></Section>
      <Section eyebrow="Parent voice" title="What feeling confident in a school sounds like."><figure className="mx-auto max-w-4xl rounded-lg border border-ink/10 bg-surface p-7 sm:p-10"><blockquote className="font-serif text-2xl leading-snug sm:text-3xl">“Honeywell didn’t just teach my daughter — they taught her to ask better questions. Her teachers know her by name and by heart.”</blockquote><figcaption className="mt-6 flex items-center gap-3"><img src={parentImage} alt="Demonstration parent portrait" width={816} height={816} loading="lazy" className="size-12 rounded-full object-cover"/><span><strong className="block text-sm">Priya Nandakumar*</strong><span className="text-xs text-ink-soft">Demonstration parent quote</span></span></figcaption></figure></Section>
      <Section eyebrow="Coming up" title="See Honeywell in action."><div className="grid gap-4 md:grid-cols-3">{[["Open House","Sat, 17 October · 9am","Tour the campus and meet teachers across all three schools."],["STEM Showcase","Fri, 6 November · 4pm","See student robotics, science, and design projects."],["Admissions Evening","Wed, 18 November · 6pm","Understand applications, fees, and financial support."]].map(([name,date,text]) => <article key={name} className="rounded-lg border border-ink/10 bg-surface p-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-action">{name}</p><h3 className="mt-2 text-lg font-black">{date}</h3><p className="mt-2 text-sm text-ink-soft">{text}</p></article>)}</div><Button asChild variant="link" className="mt-5 px-0 text-trust"><Link to="/news">All news & events <ArrowRight /></Link></Button></Section>
      <section className="relative overflow-hidden bg-ink py-16 text-paper"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-action">Admissions</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Ready to picture your child at Honeywell?</h2><p className="mt-4 max-w-lg leading-relaxed text-paper/70">Tell us what matters to your family. An admissions adviser will help you understand the next step.</p><ul className="mt-6 space-y-2 text-sm text-paper/75"><li>✓ Personal campus tour</li><li>✓ Clear application guidance</li><li>✓ Fee and support conversation</li></ul></div><ContactForm compact /></div></section>
    </main>
  );
}

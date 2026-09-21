import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Send, X } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: string; intro: string; image?: string; imageAlt?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute -right-20 -top-24 size-80 rounded-full bg-trust/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-12 lg:py-20">
        <div className={image ? "lg:col-span-7" : "lg:col-span-9"}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-action">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-none sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">{intro}</p>
          <Button asChild className="mt-7 rounded-none bg-action text-action-foreground hover:bg-action/90"><Link to="/contact">Contact Admissions <ArrowRight /></Link></Button>
        </div>
        {image && <div className="lg:col-span-5"><div className="-skew-x-3 overflow-hidden rounded-lg border border-paper/20 bg-paper/10 p-2"><img src={image} alt={imageAlt ?? "Honeywell School"} width={1280} height={900} className="aspect-[4/3] w-full object-cover" /></div></div>}
      </div>
    </section>
  );
}

export function DemoNotice() {
  return <div className="border-y border-ink/10 bg-paper-2 px-5 py-3 text-center text-xs font-semibold text-ink-soft">Demonstration content — replace dates, statistics, fees, names, and contact details with verified school information before launch.</div>;
}

export function Section({ eyebrow, title, children, dark = false }: { eyebrow: string; title: string; children: ReactNode; dark?: boolean }) {
  return <section className={dark ? "bg-ink py-16 text-paper" : "bg-paper py-16 text-ink"}><div className="mx-auto max-w-7xl px-5"><p className="text-xs font-bold uppercase tracking-[0.2em] text-action">{eyebrow}</p><h2 className="mt-2 max-w-3xl text-3xl font-black sm:text-4xl">{title}</h2><div className="mt-8">{children}</div></div></section>;
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return (
    <form onSubmit={submit} className="rounded-lg border border-paper/20 bg-paper/10 p-5 backdrop-blur-md sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-paper/80">Parent name<input required className="mt-1 w-full rounded-md border border-paper/20 bg-paper/10 px-3 py-2.5 text-paper outline-none placeholder:text-paper/40 focus:border-action" placeholder="Your name" /></label>
        <label className="text-sm text-paper/80">Email<input required type="email" className="mt-1 w-full rounded-md border border-paper/20 bg-paper/10 px-3 py-2.5 text-paper outline-none placeholder:text-paper/40 focus:border-action" placeholder="you@example.com" /></label>
      </div>
      <label className="mt-4 block text-sm text-paper/80">Grade of interest<select className="mt-1 w-full rounded-md border border-paper/20 bg-ink px-3 py-2.5 text-paper outline-none focus:border-action"><option>Early Years</option><option>Lower School</option><option>Middle School</option><option>Upper School</option></select></label>
      {!compact && <label className="mt-4 block text-sm text-paper/80">How can we help?<textarea required rows={4} className="mt-1 w-full resize-none rounded-md border border-paper/20 bg-paper/10 px-3 py-2.5 text-paper outline-none placeholder:text-paper/40 focus:border-action" placeholder="Tell us about your child and what you would like to know." /></label>}
      <Button type="submit" className="mt-5 h-11 w-full rounded-none bg-action text-action-foreground hover:bg-action/90"><Send /> Send to Admissions</Button>
      {sent ? <p role="status" className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-paper"><Check className="size-4 text-growth" /> Demo received — no information was sent.</p> : <p className="mt-3 text-center text-[11px] text-paper/50">Demonstration form — no information is stored or sent.</p>}
    </form>
  );
}

const answers = [
  ["How do I apply?", "Visit Admissions for the four-step application guide and demonstration form."],
  ["Can I tour the campus?", "Yes. Use Contact Admissions to request a weekday visit."],
  ["What ages do you serve?", "This demonstration presents pathways from ages 3 to 18."],
] as const;

export function AdmissionsChat() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState("Choose a common question below.");
  return <div className="fixed bottom-20 right-4 z-40 hidden sm:block lg:bottom-5">
    {open && <div className="mb-3 w-[min(22rem,calc(100vw-2rem))] rounded-lg border border-ink/10 bg-paper p-4 shadow-2xl"><div className="flex items-center justify-between"><div><p className="font-black text-ink">Admissions assistant</p><p className="text-xs text-ink-soft">Demonstration chat</p></div><Button size="icon" variant="ghost" onClick={() => setOpen(false)} aria-label="Close chat"><X /></Button></div><div className="mt-4 rounded-md bg-paper-2 p-3 text-sm text-ink">{answer}</div><div className="mt-3 grid gap-2">{answers.map(([question, response]) => <Button key={question} type="button" variant="outline" className="h-auto justify-start whitespace-normal py-2 text-left" onClick={() => setAnswer(response)}>{question}</Button>)}</div></div>}
    <Button onClick={() => setOpen((value) => !value)} className="ml-auto size-12 rounded-full bg-action text-action-foreground shadow-xl hover:bg-action/90" aria-label="Open admissions chat"><MessageCircle /></Button>
  </div>;
}

export function StatGrid({ items, dark = false }: { items: Array<[string, string]>; dark?: boolean }) {
  return <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{items.map(([value, label]) => <div key={label} className={dark ? "rounded-lg border border-paper/15 bg-paper/10 p-5" : "rounded-lg border border-ink/10 bg-surface p-5"}><dt className="text-3xl font-black">{value}</dt><dd className={dark ? "mt-1 text-xs font-bold uppercase tracking-[0.14em] text-paper/60" : "mt-1 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft"}>{label}</dd></div>)}</dl>;
}
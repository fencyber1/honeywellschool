import { createFileRoute } from "@tanstack/react-router";
import { Award, BookOpen, Check, Clock, Mail, MapPin, MessageCircle, Phone, Printer, ShieldCheck, Users } from "lucide-react";

import classroomImage from "@/assets/honeywell-classroom-sharp.png";
import playgroundImage from "@/assets/honeywell-playground-sharp.png";
import readingImage from "@/assets/honeywell-reading-sharp.png";
import { Button } from "@/components/ui/button";
import { MOTTO, PHONE_MAIN, PHONE_OYARIFA, SITE_EMAIL, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/brochure")({
  head: () => ({
    meta: [
      { title: "School Brochure — Honeywell School, Accra" },
      {
        name: "description",
        content:
          "Print or save Honeywell School's 4-page brochure — programs, UK EYFS curriculum, admissions, fees, and contact details for our Airport Residential Area and Oyarifa branches in Accra.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Brochure,
});

const PHONE_MAIN_DISPLAY = "024 436 2657";
const PHONE_OYARIFA_DISPLAY = "055 941 9530";

const STAGES = [
  {
    name: "Creche",
    tagline: "Gentle first steps",
    items: ["Warm, attentive care", "Sensory play and discovery", "Music, rhymes, and movement", "Outdoor air and gentle routines"],
  },
  {
    name: "Nursery",
    tagline: "Confident little explorers",
    items: ["Phonics and early language", "Numbers through play", "Art, colour, and creativity", "Sharing, manners, and independence"],
  },
  {
    name: "Preschool",
    tagline: "Ready for primary school",
    items: ["Reading and writing foundations", "Early mathematics", "Nature and the world around us", "Confidence, focus, and school habits"],
  },
] as const;

const TRUST = [
  { Icon: BookOpen, title: "UK EYFS curriculum", text: "The gold standard for early childhood education." },
  { Icon: Users, title: "Small, attentive classes", text: "Every child known and supported by name." },
  { Icon: ShieldCheck, title: "Safe & homely", text: "Warm pastoral care and clear safeguarding." },
  { Icon: Award, title: "Two Accra branches", text: "Airport Residential Area and Oyarifa." },
] as const;

const PRIME_AREAS = [
  ["Personal, Social & Emotional", "Confidence, friendships, managing feelings."],
  ["Communication & Language", "Listening, understanding, speaking."],
  ["Physical Development", "Movement, health and self-care."],
] as const;

const SPECIFIC_AREAS = ["Literacy", "Mathematics", "Understanding the World", "Expressive Arts & Design"] as const;

const STEPS = [
  ["Start a conversation", "Tell us what you are looking for and ask any first questions."],
  ["Visit Honeywell", "Meet teachers, see classes in action, and experience the campus."],
  ["Apply", "Complete the application and provide recent school records."],
  ["Meet & decide", "A family visit and a friendly interaction with your child complete the process."],
] as const;

const BRANCHES = [
  {
    name: "Branch 1 — Airport Residential Area",
    address: "226 Osibisa Close, Off Noi Fetreke Street, Airport Residential Area, Accra",
    detail: "GPS: GA-119-9300",
    phone: PHONE_MAIN_DISPLAY,
    tel: PHONE_MAIN,
  },
  {
    name: "Branch 2 — Palm Valley Estates, Oyarifa",
    address: "Palm Valley Estates, Oyarifa, Accra",
    detail: "Greater Accra, Ghana",
    phone: PHONE_OYARIFA_DISPLAY,
    tel: PHONE_OYARIFA,
  },
] as const;

function PageTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-[7.5pt] font-bold uppercase tracking-[0.24em] text-action">{eyebrow}</p>
      <h2 className="mt-2 max-w-[165mm] text-[23pt] font-black leading-[1.02] tracking-tight text-ink">{title}</h2>
      <div className="mt-4 h-[2px] w-16 bg-gold" />
    </div>
  );
}

function PageFooter({ page }: { page: string }) {
  return (
    <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-3 text-[7pt] font-semibold uppercase tracking-[0.16em] text-ink-soft">
      <span>Honeywell School · Accra, Ghana</span>
      <span>{page} / 04</span>
    </div>
  );
}

function Brochure() {
  return (
    <main className="overflow-x-auto bg-paper-2/70 px-4 py-10">
      <div className="no-print mx-auto mb-8 max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-action">School brochure</p>
        <p className="mt-1 text-sm text-ink-soft">
          Four A4 pages. Use the button to print or save as PDF — hand it to a parent or share it on WhatsApp.
        </p>
      </div>

      <div className="brochure-scale">
        {/* ---------------------------------------------------------------- */}
        {/* Page 1 — Cover                                                    */}
        {/* ---------------------------------------------------------------- */}
        <section className="brochure-page bg-ink text-paper">
          <img src={classroomImage} alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/25 to-transparent" />
          <div className="relative flex h-full flex-col p-[14mm]">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Honeywell School crest"
                className="size-[19mm] rounded-full bg-white object-contain p-1 ring-1 ring-white/30"
              />
              <div>
                <p className="text-[15pt] font-black leading-none tracking-tight">HONEYWELL SCHOOL</p>
                <p className="mt-1 text-[7pt] font-semibold uppercase tracking-[0.26em] text-paper/75">
                  Preschool in Ghana · Accra
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-[8pt] font-bold uppercase tracking-[0.26em] text-gold">
                Est. 2014 · Creche · Nursery · Preschool
              </p>
              <h1 className="mt-5 max-w-[150mm] text-[38pt] font-black leading-[0.95]">
                Learn. Play.
                <br />
                <span className="font-serif font-medium italic text-gold">Grow together.</span>
              </h1>
              <p className="mt-6 max-w-[112mm] text-[10.5pt] leading-relaxed text-paper/85">
                At Honeywell, we believe every child&rsquo;s future begins with a strong foundation. From the moment they
                join us, we nurture their potential, build their confidence, and equip them with the knowledge, values,
                and skills they need to thrive.
              </p>
              <p className="mt-7 font-serif text-[13pt] italic text-paper">“{MOTTO}.”</p>
            </div>

            <div className="mt-[10mm] grid grid-cols-3 gap-4 border-t border-paper/25 pt-5 text-[8pt] leading-snug">
              <div>
                <p className="font-bold uppercase tracking-[0.14em] text-gold">Ages</p>
                <p className="mt-1 text-paper/85">6 months – 5 years</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-[0.14em] text-gold">Curriculum</p>
                <p className="mt-1 text-paper/85">UK Early Years Foundation Stage</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-[0.14em] text-gold">Branches</p>
                <p className="mt-1 text-paper/85">Airport Residential Area · Oyarifa</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Page 2 — Who we are + programs                                    */}
        {/* ---------------------------------------------------------------- */}
        <section className="brochure-page bg-white text-ink">
          <div className="flex h-full flex-col p-[14mm]">
            <PageTitle eyebrow="Who we are" title="A foundation for lifelong excellence." />

            <div className="mt-5 grid grid-cols-[1fr_50mm] items-start gap-6">
              <div className="space-y-2.5 text-[9pt] leading-relaxed text-ink-soft">
                <p>
                  Choosing a preschool is one of the most important decisions a family makes. The early years — from six
                  months to five years — shape how a child learns, relates to others, and sees themselves. At Honeywell
                  School, we have spent over a decade getting these years right.
                </p>
                <p>
                  Our children follow the UK Early Years Foundation Stage (EYFS) curriculum, delivered through safe,
                  loving, play-based learning. In small classes, every child is known by name and supported
                  academically, socially, and emotionally.
                </p>
                <p>With two Accra branches and teachers who genuinely care, Honeywell gives your child the strongest possible start.</p>
              </div>
              <img src={readingImage} alt="Honeywell School pupils reading together in class" className="h-[44mm] w-full rounded-md object-cover" />
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2.5">
              {TRUST.map(({ Icon, title, text }) => (
                <div key={title} className="rounded-md border border-ink/10 bg-paper p-3">
                  <Icon className="size-4 text-action" />
                  <p className="mt-2 text-[8pt] font-extrabold leading-tight">{title}</p>
                  <p className="mt-1 text-[7pt] leading-snug text-ink-soft">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-baseline justify-between">
              <h3 className="text-[11pt] font-black uppercase tracking-[0.14em] text-ink">Three stages, one promise</h3>
              <span className="text-[7.5pt] font-semibold uppercase tracking-[0.14em] text-action">Children who thrive</span>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {STAGES.map((stage, index) => (
                <article key={stage.name} className="relative overflow-hidden rounded-md border border-ink/10 bg-paper p-4">
                  <span className="absolute -right-6 -top-6 size-16 -skew-x-12 bg-trust/10" />
                  <p className="text-[7pt] font-bold uppercase tracking-[0.18em] text-trust">
                    0{index + 1} · {stage.name}
                  </p>
                  <h4 className="mt-1.5 text-[11pt] font-black leading-tight">{stage.tagline}</h4>
                  <ul className="mt-2.5 space-y-1 text-[7.5pt] leading-snug text-ink-soft">
                    {stage.items.map((item) => (
                      <li key={item} className="flex gap-1.5">
                        <span className="mt-[2px] size-1 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-5 border-l-4 border-gold bg-paper px-4 py-3.5">
              <h3 className="text-[9.5pt] font-black">A Foundation for Lifelong Excellence</h3>
              <p className="mt-1 text-[8pt] leading-relaxed text-ink-soft">
                We provide a lifelong foundation of excellence that empowers our students to thrive academically and
                developmentally — building the confidence and character that carry them to leading schools, and beyond.
              </p>
            </div>

            <div className="mt-6 rounded-md bg-ink p-5 text-paper">
              <div className="flex items-baseline justify-between">
                <h3 className="text-[10pt] font-black uppercase tracking-[0.14em]">Seven areas of learning</h3>
                <span className="text-[7pt] font-semibold uppercase tracking-[0.14em] text-gold">Every step through play</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {PRIME_AREAS.map(([name, text], index) => (
                  <div key={name} className="rounded-sm border border-paper/15 bg-paper/5 p-2.5">
                    <p className="text-[12pt] font-black leading-none text-gold">0{index + 1}</p>
                    <p className="mt-1 text-[7.5pt] font-extrabold leading-tight">{name}</p>
                    <p className="mt-0.5 text-[6.5pt] leading-snug text-paper/70">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-[6.5pt] font-bold uppercase tracking-[0.16em] text-paper/60">Specific areas</span>
                {SPECIFIC_AREAS.map((area) => (
                  <span key={area} className="rounded-full border border-paper/20 px-2 py-0.5 text-[6.5pt] font-semibold">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <PageFooter page="02" />
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Page 3 — Admissions                                               */}
        {/* ---------------------------------------------------------------- */}
        <section className="brochure-page bg-white text-ink">
          <div className="flex h-full flex-col p-[14mm]">
            <PageTitle eyebrow="Admissions" title="A clear path to your child’s next chapter." />
            <p className="mt-4 max-w-[160mm] text-[9pt] leading-relaxed text-ink-soft">
              Choosing a school is a big decision. Our admissions experience is designed to feel personal, transparent,
              and easy to navigate — from your first question to your child’s first day.
            </p>

            <div className="mt-5 grid grid-cols-4 gap-2.5">
              {STEPS.map(([title, text], index) => (
                <article key={title} className="rounded-md border border-ink/10 bg-paper p-3.5">
                  <p className="text-[16pt] font-black leading-none text-trust/25">0{index + 1}</p>
                  <h3 className="mt-2 text-[9pt] font-black leading-tight">{title}</h3>
                  <p className="mt-1 text-[7pt] leading-snug text-ink-soft">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-md border border-ink/10 bg-paper p-4">
                <h3 className="text-[9.5pt] font-black uppercase tracking-[0.14em] text-action">What to bring</h3>
                <ul className="mt-2 space-y-1.5 text-[8pt] text-ink-soft">
                  {[
                    "Admission form — collected from the school premises",
                    "Child’s birth certificate",
                    "Health / immunization cards",
                    "A school visit with your child",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-[1px] size-3 shrink-0 text-growth" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-ink/10 bg-paper p-4">
                <h3 className="text-[9.5pt] font-black uppercase tracking-[0.14em] text-action">Fees &amp; timing</h3>
                <p className="mt-2 text-[8pt] leading-relaxed text-ink-soft">
                  Registration is paid once per child; tuition is charged each term, with three terms in the school
                  year. Fees vary by class — contact the administrator for the current fee schedule.
                </p>
                <p className="mt-2 text-[8pt] leading-relaxed text-ink-soft">
                  Admissions are open. Ask the administrator about deadlines, visit days, and decision dates.
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {[
                ["6 months – 5 years", "Ages welcome"],
                ["6:30am – 5:30pm", "School day, Mon–Fri"],
                ["3 terms", "School year"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-ink/10 bg-paper px-4 py-3">
                  <p className="text-[10pt] font-black leading-none">{value}</p>
                  <p className="mt-1 text-[6.5pt] font-bold uppercase tracking-[0.14em] text-ink-soft">{label}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-5 overflow-hidden rounded-md">
              <img src={playgroundImage} alt="Honeywell School children on the outdoor activity course" className="h-[88mm] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-3 pt-10">
                <p className="text-[8pt] font-bold uppercase tracking-[0.16em] text-gold">Campus life</p>
                <p className="text-[9pt] font-semibold text-paper">Outdoor learning and play, every day.</p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 bg-ink px-5 py-4 text-paper">
              <div>
                <p className="text-[9.5pt] font-black uppercase tracking-[0.12em]">Book a campus tour</p>
                <p className="mt-0.5 text-[8pt] text-paper/70">Weekday visits at both branches — meet the teachers and see the classes in action.</p>
              </div>
              <div className="text-right text-[8.5pt] font-bold leading-tight">
                <p>{PHONE_MAIN_DISPLAY}</p>
                <p>{PHONE_OYARIFA_DISPLAY}</p>
              </div>
            </div>

            <PageFooter page="03" />
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Page 4 — Visit & contact                                          */}
        {/* ---------------------------------------------------------------- */}
        <section className="brochure-page bg-white text-ink">
          <div className="flex h-full flex-col p-[14mm]">
            <PageTitle eyebrow="Visit us" title="Two branches. One warm welcome." />

            <div className="mt-5 grid grid-cols-2 gap-3">
              {BRANCHES.map((branch) => (
                <div key={branch.name} className="rounded-md border border-ink/10 bg-paper p-4">
                  <MapPin className="size-4 text-action" />
                  <h3 className="mt-2 text-[9pt] font-black leading-tight">{branch.name}</h3>
                  <p className="mt-1 text-[7.5pt] leading-snug text-ink-soft">{branch.address}</p>
                  <p className="text-[7pt] text-ink-soft/80">{branch.detail}</p>
                  <a href={`tel:${branch.tel}`} className="mt-1.5 inline-flex items-center gap-1 text-[8pt] font-bold text-trust">
                    <Phone className="size-3" /> {branch.phone}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-[1fr_75mm] gap-4">
              <div className="space-y-2 text-[8.5pt]">
                {[
                  { Icon: Mail, label: "Email", value: SITE_EMAIL, href: `mailto:${SITE_EMAIL}` },
                  { Icon: MessageCircle, label: "WhatsApp", value: "Chat with admissions", href: "https://wa.me/233244362657" },
                  { Icon: Clock, label: "Opening hours", value: "Mon–Fri · 6:30am – 5:30pm" },
                  { Icon: MapPin, label: "Online", value: SITE_URL.replace("https://", ""), href: SITE_URL },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-2.5 rounded-md border border-ink/10 bg-paper px-3 py-2">
                    <Icon className="size-4 shrink-0 text-action" />
                    <span className="w-[24mm] shrink-0 text-[6.5pt] font-bold uppercase tracking-[0.14em] text-ink-soft">{label}</span>
                    {href ? <a href={href} className="font-semibold text-trust">{value}</a> : <span className="font-semibold">{value}</span>}
                  </div>
                ))}
                <p className="pt-1 text-[7pt] leading-relaxed text-ink-soft">
                  Facebook: honeywellschool · Instagram: @honeywellschool · TikTok: @honeywell.schools
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col items-center rounded-md border border-ink/10 bg-paper p-2.5 text-center">
                  <img src="/brochure-qr-site.png" alt="QR code to honeywelledugh.com" className="size-[26mm] object-contain" />
                  <p className="mt-2 text-[6.5pt] font-bold uppercase tracking-[0.12em] text-ink-soft">Scan to visit our site</p>
                </div>
                <div className="flex flex-col items-center rounded-md border border-ink/10 bg-paper p-2.5 text-center">
                  <img src="/brochure-qr-whatsapp.png" alt="QR code to chat on WhatsApp" className="size-[26mm] object-contain" />
                  <p className="mt-2 text-[6.5pt] font-bold uppercase tracking-[0.12em] text-ink-soft">Scan to chat on WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="relative mt-4 min-h-[40mm] flex-1 overflow-hidden rounded-md">
              <img src="/campus-gate.jpeg" alt="The Honeywell School entrance and green gate in Airport Residential Area, Accra" className="absolute inset-0 size-full object-cover" />
            </div>

            <div className="mt-auto pt-4">
              <div className="flex items-center justify-between gap-4 bg-ink px-5 py-4 text-paper">
                <div>
                  <p className="text-[9.5pt] font-black uppercase tracking-[0.12em]">Ready to meet us?</p>
                  <p className="mt-0.5 text-[8pt] text-paper/70">Book a weekday tour at either branch — we would love to show you around.</p>
                </div>
                <p className="text-right text-[8.5pt] font-bold leading-tight">
                  <span className="block">{PHONE_MAIN_DISPLAY}</span>
                  <span className="block">{PHONE_OYARIFA_DISPLAY}</span>
                </p>
              </div>
              <div className="mt-4 flex items-end justify-between border-t border-ink/10 pt-4">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="" aria-hidden="true" className="size-[14mm] rounded-full bg-white object-contain p-0.5 ring-1 ring-ink/10" />
                <div>
                  <p className="text-[10pt] font-black leading-none">HONEYWELL SCHOOL</p>
                  <p className="mt-1 font-serif text-[8pt] italic text-ink-soft">“{MOTTO}.”</p>
                </div>
              </div>
              <div className="text-right text-[7pt] leading-relaxed text-ink-soft">
                <p className="font-bold uppercase tracking-[0.14em]">{SITE_URL.replace("https://", "")}</p>
                <p>© 2026 Honeywell School · Accra, Ghana</p>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>

      <div className="no-print fixed bottom-20 right-4 z-50 sm:bottom-6 sm:right-6">
        <Button onClick={() => window.print()} className="h-12 rounded-none bg-action px-5 text-action-foreground shadow-2xl hover:bg-action/90">
          <Printer className="size-5" /> Print / Save as PDF
        </Button>
      </div>
    </main>
  );
}

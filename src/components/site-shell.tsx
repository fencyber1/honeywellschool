import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Admissions", to: "/admissions" },
  { label: "Campus", to: "/campus" },
  { label: "Team", to: "/team" },
  { label: "Stories", to: "/stories" },
  { label: "News", to: "/news" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper font-display text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3" aria-label="Honeywell School home">
            <img
              src="/logo.svg"
              alt="Honeywell School crest"
              width={44}
              height={48}
              className="size-11 shrink-0 rounded-md bg-white object-contain p-0.5 shadow-sm ring-1 ring-ink/10"
            />
            <span className="leading-none">
              <span className="block text-[15px] font-extrabold">HONEYWELL SCHOOL</span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
                Where excellence meets opportunity
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
                activeProps={{ className: "text-ink" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Button asChild variant="ghost" size="icon" aria-label="Call admissions">
              <a href="tel:+233244362657"><Phone /></a>
            </Button>
            <Button asChild className="rounded-none bg-action text-action-foreground hover:bg-action/90">
              <Link to="/contact"><span className="size-2 rounded-full bg-action-foreground" />Contact Admissions</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="sm:hidden" aria-label="Open navigation"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="w-[88%] bg-paper">
              <SheetHeader className="text-left">
                <SheetTitle className="font-extrabold text-ink">Honeywell School</SheetTitle>
                <SheetDescription>Explore our school and speak with admissions.</SheetDescription>
              </SheetHeader>
              <nav className="mt-8 grid gap-1" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <SheetClose key={item.to} asChild>
                    <Link to={item.to} className="border-b border-ink/10 py-3 text-base font-bold text-ink">{item.label}</Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link to="/contact" className="mt-5 bg-action px-4 py-3 text-center font-bold text-action-foreground">Contact Admissions</Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {children}

      <footer className="bg-ink pb-20 text-paper/70 lg:pb-0">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3"><img src="/logo.svg" alt="Honeywell School crest" width={44} height={48} className="size-11 shrink-0 rounded-md bg-white object-contain p-0.5" /><span className="font-extrabold text-paper">Honeywell School</span></div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">A demonstration school website. All names, dates, statistics, fees, accreditations, and contact details must be verified before launch.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-action">Explore</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navigation.slice(0, 6).map((item) => <Link key={item.to} to={item.to} className="hover:text-paper">{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-action">Admissions</p>
            <div className="mt-4 space-y-3 text-sm">
              <a href="tel:+233244362657" className="flex items-center gap-2 hover:text-paper"><Phone className="size-4" /> 024 436 2657</a>
              <a href="https://www.google.com/maps/search/?api=1&query=JR64%2BFJ+Accra" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-paper"><MapPin className="size-4" /> JR64+FJ Accra, Ghana</a>
              <a href="mailto:admissions@honeywell.example" className="flex items-center gap-2 hover:text-paper"><Mail className="size-4" /> admissions@honeywell.example</a>
              <Link to="/contact" className="flex items-center gap-2 hover:text-paper"><MessageCircle className="size-4" /> Ask a question</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-paper/10 px-5 py-5 text-center text-xs text-paper/50">© 2026 Honeywell School · Demonstration prototype</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <Button asChild variant="outline" size="icon" className="size-11 shrink-0 rounded-full"><a href="tel:+233244362657" aria-label="Call admissions"><Phone /></a></Button>
          <Button asChild className="h-11 flex-1 rounded-none bg-action text-action-foreground hover:bg-action/90"><Link to="/contact">Contact Admissions</Link></Button>
        </div>
      </div>
    </div>
  );
}
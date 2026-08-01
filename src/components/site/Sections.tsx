import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { COMPANY, COMMITMENTS } from "@/lib/company";

export function CtaBand() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <p className="label-caps">Start a conversation</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Tell us what you need. We&apos;ll tell you exactly how we&apos;d build it.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A short scoping call, a fixed scope, and a first deliverable you can judge.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild variant="hero" size="pill" className="group">
              <Link to="/contact">
                Contact us
                <ArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="brandOutline" size="pill">
              <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Commitments({ eyebrow = "Commitments", title = "What we hold ourselves to." }) {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10">
        <Reveal>
          <p className="label-caps">{eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((c, i) => (
            <Reveal key={c.value} delay={i * 80} className="bg-background p-8">
              <p className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{c.value}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  breadcrumb,
  eyebrow,
  title,
  description,
}: {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="precision-grid grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
        <Reveal>
          <nav aria-label="Breadcrumb" className="label-caps">
            {breadcrumb}
          </nav>
        </Reveal>
        <Reveal delay={100}>
          <p className="label-caps mt-10 text-primary">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

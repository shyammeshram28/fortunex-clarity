import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

import { CtaBand, Commitments } from "@/components/site/Sections";
import { SERVICES } from "@/lib/services";
import { FAQS } from "@/lib/company";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FortuneX Technologies — Reporting, AI & Web" },
      {
        name: "description",
        content:
          "Reporting services, AI automation, web application development, staffing, training, and internships from FortuneX Technologies in Pune.",
      },
      {
        name: "keywords",
        content:
          "reporting services, AI automation, web application development, staffing services, technology training, internships, Pune",
      },
      {
        property: "og:title",
        content: "FortuneX Technologies — Building the Future of Digital Innovation",
      },
      {
        property: "og:description",
        content:
          "Clear reporting, AI automation, web development, staffing, and practical technology training from one focused team.",
      },

      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            description: s.description,
            url: `/services#${s.slug}`,
          })),
        }),
      },
    ],
  }),
});

const PILLARS = [
  { title: "Expert-led", body: "You work with people who understand both the goal and the technology." },
  {
    title: "Clear plans",
    body: "You know what we will deliver, when it will be ready, and what it will cost.",
  },
  { title: "Useful results", body: "Every service is built around a practical outcome you can review." },
];

const WHY = [
  {
    n: "01",
    title: "Five focused services",
    body: "Our work stays focused on reporting, AI automation, web applications, staffing, and practical training.",
  },
  {
    n: "02",
    title: "One responsible team",
    body: "We plan, build, review, and hand over the work with clear ownership at every step.",
  },
  {
    n: "03",
    title: "Talent you can deploy fast",
    body: "We help you find analysts, engineers, and developers whose skills match your needs.",
  },
  {
    n: "04",
    title: "Quality from the start",
    body: "We review the details throughout the work, not only at the end.",
  },
  {
    n: "05",
    title: "Clear pricing",
    body: "We explain the scope and cost before work starts, with no hidden steps.",
  },
  {
    n: "06",
    title: "Flexible ways to work",
    body: "Choose project-based, part-time, or full-time support based on what you need.",
  },
];


function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          className="precision-grid grid-fade pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div className="hero-aura pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pb-20 pt-16 text-center sm:px-6 sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background/70 px-4 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur sm:text-[0.6875rem] sm:tracking-[0.2em]">
              <span className="size-1.5 rounded-full bg-primary" />
               Technology services · Pune, India
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:mt-10 sm:text-6xl lg:text-[5.5rem] lg:leading-[1.02]">
              Building the Future of
              <br className="hidden sm:block" />{" "}
              <span className="hero-gradient-text">Digital Innovation.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-xl">
              We help businesses with clear reporting, useful AI automation, modern web applications,
              skilled technology staff, and practical training programs.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:items-center">
              <Button asChild variant="hero" size="pill" className="group h-12 px-7 text-[0.9375rem]">
                <Link to="/contact">
                  Talk to us
                  <ArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="brandOutline" size="pill" className="h-12 px-7 text-[0.9375rem]">
                <Link to="/services">View services</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground/80 sm:mt-16 sm:gap-x-8 sm:text-[0.6875rem] sm:tracking-[0.18em]">
              {[
                "Reporting",
                "AI Automation",
                "Web Applications",
                "Staffing",
                "Training & Internship",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

      </section>


      {/* Pillars */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-3 sm:divide-x sm:divide-border">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="border-b border-border px-5 py-10 sm:px-6 sm:py-12 last:border-b-0 sm:border-b-0 lg:px-10">
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-foreground">
                {p.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal>
              <p className="label-caps text-primary">Our services</p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Five services. One focused team.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-muted-foreground lg:pb-2">
                Choose the service you need today, or combine them as your business grows.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="surface-hover group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"
                >
                  <s.icon className="size-6 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-7 text-lg font-bold tracking-tight text-foreground">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Explore {s.name}
                    <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why FortuneX */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <Reveal>
            <p className="label-caps text-primary">Why FortuneX</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
               Clear work. Useful results.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal
                key={w.n}
                delay={i * 70}
                className="surface-hover rounded-2xl border border-border bg-background p-7 sm:p-8"
              >
                <p className="label-caps text-primary">{w.n}</p>
                <h3 className="mt-6 text-base font-bold leading-snug tracking-tight text-foreground">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Commitments />

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="label-caps text-primary">FAQ</p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Questions, answered plainly.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((f) => (
                  <AccordionItem key={f.q} value={f.q} className="border-border">
                    <AccordionTrigger className="py-6 text-left text-base font-semibold tracking-tight hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

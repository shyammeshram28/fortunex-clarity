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
      { title: "FortuneX Technologies — Software, AI & Cybersecurity Engineering" },
      {
        name: "description",
        content:
          "FortuneX Technologies builds custom web applications, AI and workflow automation, analytics dashboards and application security testing. Senior-led delivery from Pune, India.",
      },
      {
        property: "og:title",
        content: "FortuneX Technologies — Building the Future of Digital Innovation",
      },
      {
        property: "og:description",
        content:
          "Custom software, AI automation, analytics and cybersecurity engineered by a senior team. Fixed scopes, measurable outcomes.",
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
  { title: "Senior-led", body: "The people who scope your work are the people who build it." },
  {
    title: "Fixed scopes",
    body: "Transparent pricing, defined deliverables, no open-ended retainers.",
  },
  { title: "Measured", body: "Every engagement ships something you can evaluate in weeks." },
];

const WHY = [
  {
    n: "01",
    title: "Specialists, not generalists",
    body: "Focused depth in data and analytics, artificial intelligence, application security and web engineering — the four disciplines we practise every day.",
  },
  {
    n: "02",
    title: "End-to-end ownership",
    body: "Strategy, architecture, development and long-term support handled by one accountable team, so nothing gets lost between vendors.",
  },
  {
    n: "03",
    title: "Talent you can deploy fast",
    body: "Project-tested analysts, engineers and developers ready to join your team in days, with skills verified against real scenarios.",
  },
  {
    n: "04",
    title: "Quality, security and speed",
    body: "OWASP-aligned testing, least-privilege access and performance budgets built into delivery — not bolted on before launch.",
  },
  {
    n: "05",
    title: "Transparent, scalable pricing",
    body: "Fixed scopes and clear rates without agency overhead. Scale the team up or down as your roadmap changes.",
  },
  {
    n: "06",
    title: "A partnership that adapts",
    body: "Hourly, monthly or project-based engagements shaped around how your business actually works.",
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
              Enterprise technology · Pune, India
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
              FortuneX Technologies designs, builds and secures the software enterprises depend on —
              custom applications, AI and automation, analytics and cybersecurity. Engineered by a
              senior team, delivered against outcomes you can measure.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:items-center">
              <Button asChild variant="hero" size="pill" className="group h-12 px-7 text-[0.9375rem]">
                <Link to="/contact">
                  Start a project
                  <ArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="brandOutline" size="pill" className="h-12 px-7 text-[0.9375rem]">
                <Link to="/services">Explore capabilities</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground/80 sm:mt-16 sm:gap-x-8 sm:text-[0.6875rem] sm:tracking-[0.18em]">
              {[
                "Web Applications",
                "AI & Automation",
                "Cybersecurity",
                "Data & Reporting",
                "Support",
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
              <p className="label-caps text-primary">Capabilities</p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Six practices. One accountable team.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-muted-foreground lg:pb-2">
                Each service is designed to compound the value of the last — from the first dashboard
                to the people who maintain it.
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
                    Learn more
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
              Built for teams that need results, not decks.
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

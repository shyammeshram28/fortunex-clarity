import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { HeroComposition } from "@/components/graphics/HeroComposition";
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
      { title: "FortuneX Technologies — Clarity, engineered." },
      {
        name: "description",
        content:
          "Dashboards, staffing, cybersecurity, AI automation and web engineering from a senior-led team in Pune, India. Fixed scopes, measured delivery.",
      },
      { property: "og:title", content: "FortuneX Technologies — Clarity, engineered." },
      {
        property: "og:description",
        content:
          "Dashboards, staffing, cybersecurity, AI automation and web engineering from a senior-led team in Pune, India.",
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
    title: "Strong industry expertise in Data, AI, and Software Solutions",
    body: "Deep specialization in Data Analytics, BI, Artificial Intelligence, Cybersecurity, and Software Engineering.",
  },
  {
    n: "02",
    title: "End-to-end service delivery (Strategy → Development → Support)",
    body: "Comprehensive service coverage from initial strategy & discovery to full stack development and long-term support.",
  },
  {
    n: "03",
    title: "Skilled and pre-vetted technical talent pool",
    body: "Skilled, project-tested data analysts, engineers, and developers ready for rapid deployment.",
  },
  {
    n: "04",
    title: "Strong focus on quality, security, and performance",
    body: "OWASP Top 10 compliance, least-privilege security access, and performance-optimized clean code architectures.",
  },
  {
    n: "05",
    title: "Scalable and cost-effective solutions",
    body: "Transparent pricing without agency overhead — scale your team up or down on your timeline.",
  },
  {
    n: "06",
    title: "Client-centric and flexible engagement models",
    body: "Flexible engagement models (hourly, monthly, or project-based) tailored to your business needs.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="precision-grid grid-fade pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-32 lg:pt-28">
          <div>
            <Reveal>
              <p className="label-caps">Pune, India · Est. 2026</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-8 text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem] lg:leading-[0.95]">
                Clarity,
                <br />
                <span className="text-primary">engineered.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                FortuneX Technologies builds the dashboards, automation and secure applications that
                turn scattered data into decisions you can defend.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="pill" className="group">
                  <Link to="/contact">
                    Start a project
                    <ArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="brandOutline" size="pill">
                  <Link to="/services">Explore services</Link>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="relative">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-secondary/70 to-transparent blur-3xl" />
            <HeroComposition className="relative mx-auto w-full max-w-lg text-foreground" />
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-0 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="bg-background px-6 py-12 lg:px-10">
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
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal>
              <p className="label-caps text-primary">Capabilities</p>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
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

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="surface-hover group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft"
                >
                  <s.icon className="size-6 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-8 text-lg font-bold tracking-tight text-foreground">{s.name}</h3>
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
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="label-caps text-primary">Why FortuneX</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Built for teams that need results, not decks.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal
                key={w.n}
                delay={i * 70}
                className="surface-hover rounded-2xl border border-border bg-background p-8"
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
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="label-caps text-primary">FAQ</p>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
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

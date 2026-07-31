import { createFileRoute } from "@tanstack/react-router";
import { Compass, Gauge, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ArcGraphic } from "@/components/graphics/HeroComposition";
import { CtaBand, Commitments, PageHero } from "@/components/site/Sections";
import { INDUSTRIES } from "@/lib/company";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — FortuneX Technologies" },
      {
        name: "description",
        content:
          "Founded in Pune in 2026 by practitioners. Small senior teams, fixed scopes, and a first deliverable you can judge.",
      },
      { property: "og:title", content: "About — FortuneX Technologies" },
      {
        property: "og:description",
        content: "A new studio, built by practitioners. Small senior teams, fixed scopes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "About", item: "/about" },
          ],
        }),
      },
    ],
  }),
});

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Clarity first",
    body: "We define the decision before we build the dashboard. Scope, metric and owner — agreed in writing.",
  },
  {
    icon: Gauge,
    title: "Small and fast",
    body: "Short cycles with visible output. You see working software in weeks, not a discovery deck in months.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    body: "Least-privilege access, reviewed code and tested applications on every engagement, regardless of size.",
  },
];

const STORY = [
  "FortuneX Technologies was established in Pune by practitioners who spent years building reporting systems, data teams and secure applications inside larger organisations — and saw the same pattern repeat: long discovery, thin delivery, no accountability.",
  "So we started something intentionally different. No layers, no account managers, no inflated timelines. Small senior teams, fixed scopes and a first deliverable you can judge before you commit further.",
  "We're new, and we treat that as an advantage: every client engagement gets the full attention of the people who founded the company.",
];

function About() {
  return (
    <>
      <PageHero
        breadcrumb="Home / About"
        eyebrow="About us"
        title="A new studio, built by practitioners."
        description="FortuneX Technologies is newly founded — and deliberately small. You work directly with the engineers doing the work."
      />

      <section>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:py-32">
          <div>
            <Reveal>
              <p className="label-caps text-primary">Our story</p>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Founded in 2026 to do this work properly.
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {STORY.map((p, i) => (
                <Reveal key={p} delay={100 + i * 70}>
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={160}>
            <div className="rounded-3xl border border-border bg-secondary/40 p-10 shadow-soft">
              <ArcGraphic className="w-full text-foreground" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="label-caps text-primary">How we work</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Three principles we don&apos;t compromise on.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="surface-hover rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <p.icon className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-8 text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Commitments />

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="label-caps text-primary">Industries</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Sector context that shortens the ramp-up.
            </h2>
          </Reveal>
          <div className="mt-14 flex flex-wrap gap-3">
            {INDUSTRIES.map((industry, i) => (
              <Reveal key={industry} delay={i * 60}>
                <span className="inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-foreground/30">
                  {industry}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

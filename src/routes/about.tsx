import { createFileRoute } from "@tanstack/react-router";
import { Compass, Gauge, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaBand, Commitments, PageHero } from "@/components/site/Sections";
import { INDUSTRIES } from "@/lib/company";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About FortuneX Technologies — Engineering-Led Delivery" },
      {
        name: "description",
        content:
          "FortuneX Technologies is a Pune-based engineering team building data, AI, cybersecurity and web solutions. Senior-led delivery, fixed scopes, measurable outcomes.",
      },
      { property: "og:title", content: "About — FortuneX Technologies" },
      {
        property: "og:description",
        content:
          "An engineering-led technology partner. Small senior teams, fixed scopes, measurable outcomes.",
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
    body: "We define the decision before we build the system. Scope, success metric and owner — agreed in writing before a single line of code.",
  },
  {
    icon: Gauge,
    title: "Momentum over motion",
    body: "Short delivery cycles with visible output. You see working software in weeks, and every milestone is something you can evaluate.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    body: "Least-privilege access, reviewed code and tested applications on every engagement — regardless of budget or timeline.",
  },
];

const STORY = [
  "FortuneX Technologies exists for a simple reason: too much technology work is measured in documents rather than results. We wanted to build the opposite — a team where the engineers who scope your problem are the ones who solve it.",
  "We work across data and reporting, artificial intelligence, cybersecurity, web engineering and long-term application support. Different disciplines, one standard: understand the business decision first, then engineer the shortest reliable path to it.",
  "Every engagement is senior-led and deliberately small. No handoff layers, no inflated timelines, no lock-in. You get a clear scope, direct access to the people building it, and software you can judge on its own merits.",
];

const APPROACH = [
  {
    step: "01",
    title: "Understand",
    body: "We map the decision, the data and the constraints before proposing anything.",
  },
  {
    step: "02",
    title: "Design",
    body: "A fixed scope with defined deliverables, architecture and success criteria.",
  },
  {
    step: "03",
    title: "Build",
    body: "Short cycles, reviewed code, security and performance considered from day one.",
  },
  {
    step: "04",
    title: "Sustain",
    body: "Documented handover, monitoring and support so the solution keeps earning its place.",
  },
];

function About() {
  return (
    <>
      <PageHero
        breadcrumb="Home / About"
        eyebrow="About us"
        title="Engineering, without the theatre."
        description="FortuneX Technologies is a Pune-based engineering team. You work directly with the people writing the code — and you judge us on what we ship."
      />

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <Reveal>
              <p className="label-caps text-primary">Our story</p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Built around the outcome, not the process.
              </h2>
            </Reveal>
            <div className="mt-8 space-y-5">
              {STORY.map((p, i) => (
                <Reveal key={p} delay={100 + i * 70}>
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={160}>
            <div className="rounded-3xl border border-border bg-secondary/40 p-7 shadow-soft sm:p-10">
              <p className="label-caps">How an engagement runs</p>
              <ol className="mt-8 space-y-8">
                {APPROACH.map((a) => (
                  <li key={a.step} className="flex gap-5">
                    <span className="label-caps shrink-0 pt-1 text-primary">{a.step}</span>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold tracking-tight text-foreground">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <Reveal>
            <p className="label-caps text-primary">How we work</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Three principles we don&apos;t compromise on.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="surface-hover rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"
              >
                <p.icon className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-7 text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Commitments />

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <Reveal>
            <p className="label-caps text-primary">Industries</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Sector context that shortens the ramp-up.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              We bring working knowledge of the data models, compliance expectations and reporting
              rhythms these sectors run on.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {INDUSTRIES.map((industry, i) => (
              <Reveal key={industry} delay={i * 50}>
                <span className="inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:border-foreground/30 sm:px-5 sm:py-2.5">
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

import { createFileRoute } from "@tanstack/react-router";
import { Compass, Gauge, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaBand, Commitments, PageHero } from "@/components/site/Sections";
import { INDUSTRIES } from "@/lib/company";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About FortuneX Technologies — Clear Technology Work" },
      {
        name: "description",
        content:
          "Meet the Pune-based team behind our reporting, AI automation, web development, staffing, training, and internship services.",
      },
      { property: "og:title", content: "About — FortuneX Technologies" },
      {
        property: "og:description",
        content:
          "A focused technology partner with clear plans, direct communication, and useful results.",
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
    body: "We first agree on the goal, the work, and what success should look like.",
  },
  {
    icon: Gauge,
    title: "Progress you can see",
    body: "We work in clear stages and show useful progress throughout the project.",
  },
  {
    icon: ShieldCheck,
    title: "Quality at every step",
    body: "We review our work, test key details, and communicate clearly from start to finish.",
  },
];

const STORY = [
  "FortuneX Technologies was built around a simple idea: technology should solve real problems and be easy to understand.",
  "We focus on five areas: reporting, AI automation, web application development, staffing, and training with internships. This focus helps us give each client and learner clear, practical support.",
  "We listen first, explain our plan in plain language, and stay responsible for the work. Our aim is to deliver quality you can see and value you can use.",
];

const APPROACH = [
  {
    step: "01",
    title: "Understand",
    body: "We listen to your needs and ask the right questions.",
  },
  {
    step: "02",
    title: "Design",
    body: "We set a clear plan, timeline, and expected result.",
  },
  {
    step: "03",
    title: "Build",
    body: "We complete the work in clear stages and review it with you.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "We test the result, explain it, and provide a clear handover.",
  },
];

function About() {
  return (
    <>
      <PageHero
        breadcrumb="Home / About"
        eyebrow="About us"
        title="Technology work, made clear."
        description="FortuneX Technologies is a Pune-based team focused on useful technology, clear communication, and work you can trust."
      />

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <Reveal>
              <p className="label-caps text-primary">Our story</p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                 Built around real needs and useful results.
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
               Three principles that guide our work.
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
               We take time to understand your industry.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
               We learn how your business works so the service fits your goals and daily needs.
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

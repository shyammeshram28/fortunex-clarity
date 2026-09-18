import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/site/Sections";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/careers")({
  component: Careers,
  head: () => ({
    meta: [
      { title: "Careers — Build with FortuneX Technologies" },
      {
        name: "description",
        content:
          "Explore careers, training, and internships in reporting, AI automation, web development, and technology staffing at FortuneX.",
      },
      { property: "og:title", content: "Careers — FortuneX Technologies" },
      {
        property: "og:description",
        content: "Engineering roles for people who want ownership, not tickets.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Careers", item: "/careers" },
          ],
        }),
      },
    ],
  }),
});

const AREAS = [
  {
    title: "Reporting and Analytics",
    body: "Analysts who can prepare data and create clear reports and dashboards.",
  },
  {
    title: "AI Automation",
    body: "People who can use AI and connected tools to simplify business work.",
  },
  {
    title: "Training and Internship",
    body: "Students and professionals who want practical experience, guidance, and project work.",
  },
  {
    title: "Web Engineering",
    body: "Developers who build fast, simple, and reliable websites and web applications.",
  },
];

const VALUES = [
  "Clear ownership from planning to delivery",
  "Direct feedback and support from experienced team members",
  "Time to learn and improve practical skills",
  "Clear expectations and respect for focused work",
];

function Careers() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Careers"
        eyebrow="Careers"
        title="Build skills. Do meaningful work."
        description="Join a team that values practical thinking, clear communication, steady learning, and quality work."
      />

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <Reveal>
            <p className="label-caps text-primary">Where we hire</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
               Four areas where you can grow.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {AREAS.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 70}
                className="surface-hover rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"
              >
                <h3 className="text-lg font-bold tracking-tight text-foreground">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-24">
          <Reveal>
            <p className="label-caps text-primary">How we work</p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What you can expect from us.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-4">
              {VALUES.map((v) => (
                <li key={v} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Introduce yourself
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
               Email us a short introduction and your CV, or call us to ask about current roles,
               training, and internships.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Reveal
              delay={80}
              className="surface-hover rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"
            >
              <Mail className="size-5 text-primary" strokeWidth={1.5} />
              <h3 className="label-caps mt-6">Email</h3>
              <a
                href={`mailto:${COMPANY.email}`}
                className="link-underline mt-3 inline-block break-all text-base font-semibold text-foreground"
              >
                {COMPANY.email}
              </a>
            </Reveal>
            <Reveal
              delay={160}
              className="surface-hover rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"
            >
              <Phone className="size-5 text-primary" strokeWidth={1.5} />
              <h3 className="label-caps mt-6">Phone</h3>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="link-underline mt-3 inline-block text-base font-semibold text-foreground"
              >
                {COMPANY.phone}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

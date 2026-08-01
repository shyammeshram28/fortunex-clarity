import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/site/Sections";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Reporting, AI, Security & Web | FortuneX" },
      {
        name: "description",
        content:
          "Six practices: BI reporting, data staffing, penetration testing, AI & workflow automation, web application development, and maintenance support.",
      },
      { property: "og:title", content: "Services — FortuneX Technologies" },
      {
        property: "og:description",
        content:
          "BI reporting, data staffing, penetration testing, AI automation, web development and application support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "FortuneX Technologies Services",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.name,
              description: s.description,
              provider: { "@type": "Organization", name: "FortuneX Technologies" },
              url: `/services#${s.slug}`,
            },
          })),
        }),
      },
    ],
  }),
});

function Services() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Services"
        eyebrow="Services"
        title="Six practices. One accountable team."
        description="Each service is designed to compound the value of the last — from the first dashboard to the people who maintain it."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10">
          <div className="flex flex-wrap gap-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:border-foreground/30 hover:text-foreground"
                >
                  <s.icon className="size-4 text-primary" strokeWidth={1.5} />
                  {s.name}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {SERVICES.map((s, index) => (
        <section
          key={s.slug}
          id={s.slug}
          className={index % 2 === 1 ? "border-b border-border bg-secondary/40" : "border-b border-border"}
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <Reveal>
                  <p className="label-caps text-primary">
                    {String(index + 1).padStart(2, "0")} — Service
                  </p>
                  <s.icon className="mt-8 size-8 text-foreground" strokeWidth={1.25} />
                  <h2 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {s.name}
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <div className="mt-10">
                    <h3 className="label-caps">Tech stack</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground ring-1 ring-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild variant="hero" size="pill" className="group mt-10">
                    <Link to="/contact">
                      Start a project
                      <ArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </Reveal>
              </div>

              <div className="space-y-10">
                {s.offerings.map((group, gi) => (
                  <Reveal key={group.title ?? gi} delay={gi * 80}>
                    <h3 className="label-caps">{group.title ?? "Offerings"}</h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}

                <Reveal delay={80}>
                  <h3 className="label-caps">Benefits</h3>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {s.benefits.map((b) => (
                      <div
                        key={b}
                        className="surface-hover rounded-2xl border border-border bg-background p-6 text-sm font-medium leading-relaxed text-foreground"
                      >
                        {b}
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <h3 className="label-caps">Process</h3>
                  <ol className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
                    {s.process.map((step, si) => (
                      <li key={step} className="bg-background p-6">
                        <span className="label-caps text-primary">
                          Step {String(si + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-3 text-sm font-semibold leading-snug text-foreground">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}

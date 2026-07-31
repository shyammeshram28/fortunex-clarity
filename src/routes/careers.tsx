import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/site/Sections";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/careers")({
  component: Careers,
  head: () => ({
    meta: [
      { title: "Careers — FortuneX Technologies" },
      {
        name: "description",
        content:
          "Interested in joining FortuneX Technologies? Send a short introduction and your CV. Every message is read personally.",
      },
      { property: "og:title", content: "Careers — FortuneX Technologies" },
      {
        property: "og:description",
        content: "We're always happy to hear from people who want to build with us.",
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

function Careers() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Careers"
        eyebrow="Careers"
        title="Build with a senior team."
        description="Interested in joining FortuneX? We're always happy to hear from people who want to build with us."
      />

      <section>
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Get in touch about opportunities
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Send a short introduction and your CV by email, or call us directly. Every message is
              read personally.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal
              delay={80}
              className="surface-hover rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <Mail className="size-5 text-primary" strokeWidth={1.5} />
              <h3 className="label-caps mt-6">Email</h3>
              <a
                href={`mailto:${COMPANY.email}`}
                className="link-underline mt-3 inline-block text-base font-semibold text-foreground"
              >
                {COMPANY.email}
              </a>
            </Reveal>
            <Reveal
              delay={160}
              className="surface-hover rounded-2xl border border-border bg-card p-8 shadow-soft"
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

          <Reveal delay={220}>
            <Button asChild variant="hero" size="pill" className="mt-10">
              <a href={`mailto:${COMPANY.email}?subject=Application%20%E2%80%94%20FortuneX`}>
                Send your CV
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

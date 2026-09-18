import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/site/Sections";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact FortuneX Technologies — Pune, India" },
      {
        name: "description",
        content:
          "Contact FortuneX Technologies about reporting, AI automation, web development, staffing, training, or internships in Pune.",
      },
      { property: "og:title", content: "Contact — FortuneX Technologies" },
      {
        property: "og:description",
        content: "Call or email our team to discuss the FortuneX service you need.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "FortuneX Technologies",
          email: "info@fortunextechnologies.com",
          telephone: "+91 72761 91361",
          url: "/contact",
          openingHours: "Mo-Sa 10:00-19:00",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Office No. 10, Samarth Park, Sinhgad Campus, near Aviation College, Ambegaon Budruk",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411046",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

function Contact() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Contact"
        eyebrow="Contact"
        title="Let&apos;s talk about what you need."
        description="Call or email us about reporting, AI automation, web development, staffing, training, or internships. We reply within 24 hours."
      />

      <section>
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal className="surface-hover rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8">
              <Phone className="size-5 text-primary" strokeWidth={1.5} />
              <h2 className="label-caps mt-6">Call us</h2>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="link-underline mt-3 inline-block break-words text-lg font-semibold tracking-tight text-foreground"
              >
                {COMPANY.phone}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                 Call to discuss a service, role, training program, or internship.
              </p>
            </Reveal>

            <Reveal
              delay={90}
              className="surface-hover rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"
            >
              <Mail className="size-5 text-primary" strokeWidth={1.5} />
              <h2 className="label-caps mt-6">Email us</h2>
              <a
                href={`mailto:${COMPANY.email}`}
                className="link-underline mt-3 inline-block break-all text-lg font-semibold tracking-tight text-foreground"
              >
                {COMPANY.email}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                 Send your requirements or questions and we will explain the next step.
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={160}
            className="mt-5 rounded-2xl border border-border bg-secondary/40 p-7 sm:p-8"
          >
            <h2 className="label-caps">Office</h2>
            <ul className="mt-6 grid gap-5 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}

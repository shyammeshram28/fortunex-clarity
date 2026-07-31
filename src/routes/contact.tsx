import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/site/Sections";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — FortuneX Technologies, Pune" },
      {
        name: "description",
        content:
          "Talk to FortuneX Technologies in Pune. Call +91 72761 91361, email info@fortunextechnologies.com, or send a project brief.",
      },
      { property: "og:title", content: "Contact — FortuneX Technologies" },
      {
        property: "og:description",
        content: "A short scoping call, a fixed scope, and a first deliverable you can judge.",
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
          image: "/favicon.ico",
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
        title="Tell us what you need."
        description="A short scoping call, a fixed scope, and a first deliverable you can judge. We respond to every enquiry within 24 hours."
      />

      <section>
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-24 lg:px-10 lg:py-32">
          <Reveal className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft sm:p-10">
              <h2 className="label-caps">Office</h2>
              <ul className="mt-8 grid gap-6 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{COMPANY.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a className="link-underline hover:text-foreground" href={`tel:${COMPANY.phoneRaw}`}>
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a
                    className="link-underline hover:text-foreground"
                    href={`mailto:${COMPANY.email}`}
                  >
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{COMPANY.hours}</span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src={COMPANY.mapEmbed}
                title="FortuneX Technologies office location on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}

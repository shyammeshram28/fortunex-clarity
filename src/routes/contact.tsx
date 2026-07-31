import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Enter a valid email address.";
    if (message.length < 20) next.message = "Tell us a little more (20 characters minimum).";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${String(data.get("company") ?? "")}\n\n${message}`,
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      `Project enquiry — ${name}`,
    )}&body=${body}`;
    toast.success("Opening your email client with the enquiry ready to send.");
  }

  return (
    <>
      <PageHero
        breadcrumb="Home / Contact"
        eyebrow="Contact"
        title="Tell us what you need."
        description="A short scoping call, a fixed scope, and a first deliverable you can judge. We respond to every enquiry within 24 hours."
      />

      <section>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-32">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight">Send a brief</h2>
            <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" autoComplete="name" className="mt-2 h-11" />
                {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 h-11"
                />
                {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="company">Company (optional)</Label>
                <Input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  className="mt-2 h-11"
                />
              </div>
              <div>
                <Label htmlFor="message">What are you trying to build?</Label>
                <Textarea id="message" name="message" rows={6} className="mt-2" />
                {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
              </div>
              <Button type="submit" variant="hero" size="pill" className="w-full sm:w-auto">
                Send enquiry
              </Button>
            </form>
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h2 className="label-caps">Office</h2>
              <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
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
                className="h-[360px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

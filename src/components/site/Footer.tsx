import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { COMPANY } from "@/lib/company";

const company = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

const legal = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/cookie-policy", label: "Cookie Policy" },
  { to: "/refund-policy", label: "Refund Policy" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Reporting, staffing, security, AI automation and web engineering — delivered by a
              senior team in Pune, India.
            </p>
            <a
              href={COMPANY.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="FortuneX Technologies on LinkedIn"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-foreground/30 hover:text-foreground"
            >
              <Linkedin className="size-4" />
            </a>
          </div>

          <div>
            <h2 className="label-caps">Company</h2>
            <ul className="mt-5 space-y-3">
              {company.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-caps">Legal</h2>
            <ul className="mt-5 space-y-3">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-caps">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <a className="link-underline hover:text-foreground" href={`tel:${COMPANY.phoneRaw}`}>
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a className="link-underline hover:text-foreground" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FortuneX Technologies. All rights reserved.</p>
          <p>{COMPANY.hours}</p>
        </div>
      </div>
    </footer>
  );
}

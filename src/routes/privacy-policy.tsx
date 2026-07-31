import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — FortuneX Technologies" },
      {
        name: "description",
        content:
          "How FortuneX Technologies collects, uses, shares, retains and protects personal information, and the rights you have over your data.",
      },
      { property: "og:title", content: "Privacy Policy — FortuneX Technologies" },
      {
        property: "og:description",
        content: "How we collect, use and protect your personal information.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    body: [
      "We collect the information you provide directly — your name, work email, company name, phone number and the contents of any enquiry or brief you send us.",
      "We also collect limited technical information automatically, including IP address, browser type, device type, referring page and pages visited, through analytics tooling.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "To respond to enquiries, prepare proposals and scopes, deliver contracted services, invoice for work performed, and maintain security and service quality.",
      "We do not sell personal information, and we do not use enquiry content to train third-party models.",
    ],
  },
  {
    heading: "Legal basis for processing",
    body: [
      "We process personal information on the basis of your consent, the performance of a contract with you, our legitimate interest in operating and improving our services, and compliance with applicable legal obligations.",
    ],
  },
  {
    heading: "Sharing and disclosure",
    body: [
      "We share information only with processors who support our operations — email, hosting, analytics and accounting providers — under contractual confidentiality obligations.",
      "We may disclose information where required by law, regulation or valid legal process.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "Enquiry records are retained for up to 24 months. Client project records and invoices are retained for the period required by applicable tax and contract law, then deleted or anonymised.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We apply least-privilege access, encrypted transport (HTTPS), access logging and reviewed code practices. No system is perfectly secure; we notify affected parties promptly in the event of a breach that presents a material risk.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You may request access to, correction of, or deletion of your personal information, object to processing, or withdraw consent at any time. Email us and we will respond within 30 days.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Privacy questions: info@fortunextechnologies.com or +91 72761 91361. Office No. 10, Samarth Park, Sinhgad Campus, Ambegaon Budruk, Pune, Maharashtra 411046.",
    ],
  },
];

function Privacy() {
  return (
    <LegalPage
      breadcrumb="Home / Privacy Policy"
      title="Privacy Policy"
      description="What we collect, why we collect it, and the control you keep over your information."
      updated="July 2026"
      sections={sections}
    />
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — FortuneX Technologies" },
      {
        name: "description",
        content:
          "The terms governing engagements with FortuneX Technologies: services, responsibilities, fees, IP ownership, confidentiality, liability and governing law.",
      },
      { property: "og:title", content: "Terms & Conditions — FortuneX Technologies" },
      { property: "og:description", content: "The terms governing our engagements." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

const sections: LegalSection[] = [
  {
    heading: "Acceptance of terms",
    body: [
      "By engaging FortuneX Technologies, accessing this website, or signing a statement of work, you agree to these terms. Where a signed agreement conflicts with these terms, the signed agreement prevails.",
    ],
  },
  {
    heading: "Services",
    body: [
      "We provide reporting and BI, data and engineering staffing, cybersecurity and penetration testing, AI and workflow automation, web application development, and maintenance and application support.",
      "The specific deliverables, timeline and acceptance criteria for each engagement are defined in a written scope.",
    ],
  },
  {
    heading: "Client responsibilities",
    body: [
      "You agree to provide timely access to systems, data, stakeholders and approvals reasonably required for delivery, and to hold the necessary rights and authorisations for any data or systems you give us access to.",
      "Delays in access or feedback may shift agreed timelines.",
    ],
  },
  {
    heading: "Fees and payment",
    body: [
      "Fees are stated in the applicable scope or proposal, exclusive of taxes. Fixed-scope engagements are typically invoiced in milestones; retainers and staffing are invoiced monthly in advance unless stated otherwise.",
      "Invoices are payable within 15 days. Overdue amounts may pause active work.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "On full payment, ownership of custom deliverables produced specifically for you transfers to you.",
      "We retain ownership of our pre-existing tools, frameworks, templates and know-how, and grant you a perpetual, non-exclusive licence to use them as embedded within the deliverables.",
    ],
  },
  {
    heading: "Confidentiality",
    body: [
      "Each party will protect the other's confidential information with at least reasonable care, use it only for the engagement, and return or destroy it on request. Obligations survive termination for three years.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, neither party is liable for indirect, incidental or consequential loss, including loss of profit or data. Our aggregate liability is limited to the fees paid for the engagement giving rise to the claim in the preceding three months.",
      "Security testing reduces risk; it does not guarantee that a system is free of vulnerabilities.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of India. The courts at Hyderabad have exclusive jurisdiction over any dispute arising from or relating to these terms.",
    ],
  },
];

function Terms() {
  return (
    <LegalPage
      breadcrumb="Home / Terms & Conditions"
      title="Terms & Conditions"
      description="Clear commitments on both sides — scope, payment, ownership and liability."
      updated="July 2026"
      sections={sections}
    />
  );
}

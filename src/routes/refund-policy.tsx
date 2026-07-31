import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/refund-policy")({
  component: Refunds,
  head: () => ({
    meta: [
      { title: "Refund Policy — FortuneX Technologies" },
      {
        name: "description",
        content:
          "Refund terms for fixed-scope projects, retainers and staffing engagements with FortuneX Technologies, including our 10-day replacement guarantee.",
      },
      { property: "og:title", content: "Refund Policy — FortuneX Technologies" },
      { property: "og:description", content: "Refund terms for projects, retainers and staffing." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/refund-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
});

const sections: LegalSection[] = [
  {
    heading: "Scope of this policy",
    body: [
      "This policy applies to all services purchased from FortuneX Technologies — fixed-scope projects, monthly retainers and staffing placements — unless a signed agreement states otherwise.",
    ],
  },
  {
    heading: "Fixed-scope projects",
    body: [
      "Cancellation before kickoff: the kickoff fee is refunded in full, less any third-party costs already incurred.",
      "Cancellation after kickoff: fees are refunded on a pro-rata basis for work not yet performed. Completed and delivered milestones are non-refundable.",
    ],
  },
  {
    heading: "Retainers",
    body: [
      "Retainers run month to month and may be cancelled with 30 days' written notice. The current month's fee is not refundable, as capacity is reserved in advance.",
    ],
  },
  {
    heading: "Staffing placements",
    body: [
      "If a placed candidate is unsuitable and you notify us within 10 working days of their start date, we will provide a replacement at no additional placement cost, or refund the placement fee if no suitable replacement is available.",
    ],
  },
  {
    heading: "Non-refundable third-party costs",
    body: [
      "Licences, cloud consumption, domain and hosting fees, paid tooling and any other third-party costs purchased on your behalf are non-refundable once incurred.",
    ],
  },
  {
    heading: "How to request a refund",
    body: [
      "Email info@fortunextechnologies.com with your invoice number and the reason for the request. We acknowledge within 2 business days, confirm the outcome within 7 business days, and process approved refunds to the original payment method within 14 business days.",
    ],
  },
];

function Refunds() {
  return (
    <LegalPage
      breadcrumb="Home / Refund Policy"
      title="Refund Policy"
      description="No long-term lock-in. Clear rules for cancelling projects, retainers and placements."
      updated="July 2026"
      sections={sections}
    />
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cookie-policy")({
  component: Cookies,
  head: () => ({
    meta: [
      { title: "Cookie Policy — FortuneX Technologies" },
      {
        name: "description",
        content:
          "Which cookies FortuneX Technologies uses — essential, analytics and preference — and how to manage them in your browser.",
      },
      { property: "og:title", content: "Cookie Policy — FortuneX Technologies" },
      { property: "og:description", content: "The cookies we use and how to control them." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cookie-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
});

const sections: LegalSection[] = [
  {
    heading: "What cookies are",
    body: [
      "Cookies are small text files placed on your device by a website. They allow the site to remember your actions and preferences, and to measure how the site is used.",
    ],
  },
  {
    heading: "Essential cookies",
    body: [
      "Required for the website to function — security, load balancing and basic session handling. These cannot be disabled without breaking core functionality.",
    ],
  },
  {
    heading: "Analytics cookies",
    body: [
      "We may use Google Analytics 4 and Microsoft Clarity to understand aggregate traffic patterns, page performance and where visitors encounter friction.",
      "This data is used in aggregate and is never sold.",
    ],
  },
  {
    heading: "Preference cookies",
    body: [
      "Store non-essential choices such as dismissed notices, so the site does not repeat them on your next visit.",
    ],
  },
  {
    heading: "Managing cookies in your browser",
    body: [
      "All major browsers let you view, block and delete cookies from their settings or privacy menu. Blocking analytics cookies will not affect access to any part of this website.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this policy: info@fortunextechnologies.com or +91 72761 91361.",
    ],
  },
];

function Cookies() {
  return (
    <LegalPage
      breadcrumb="Home / Cookie Policy"
      title="Cookie Policy"
      description="A short, honest account of what this website stores on your device."
      updated="July 2026"
      sections={sections}
    />
  );
}

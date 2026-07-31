import {
  BarChart3,
  BrainCircuit,
  Braces,
  LifeBuoy,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  offerings: { title?: string; items: string[] }[];
  benefits: string[];
  process: string[];
  stack: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "reporting",
    name: "Reporting Services",
    short: "Decision-ready dashboards, automated reporting and analytics engineering.",
    description:
      "Decision-ready dashboards, automated reporting and analytics engineering that turn scattered data into a single source of truth.",
    icon: BarChart3,
    offerings: [
      {
        items: [
          "Dashboard Development (Power BI, Tableau, Excel)",
          "Automated Recurring Reports (Daily/Weekly/Monthly)",
          "Data Visualization & Insights",
          "KPI & Performance Tracking Dashboards",
          "Ad-hoc Data Analysis",
          "Report Maintenance & Support",
          "Data Cleaning & Preparation",
          "Business Intelligence Consulting",
        ],
      },
    ],
    benefits: [
      "Remove hours of manual reporting each week",
      "One trusted metric layer across teams",
      "Faster evidence-backed decisions",
    ],
    process: ["Discovery & KPI mapping", "Data modelling", "Dashboard build", "Automate & handover"],
    stack: ["Power BI", "Tableau", "SQL", "Python", "Excel"],
  },
  {
    slug: "staffing",
    name: "Staffing Services",
    short: "Pre-vetted, project-tested data talent from a single analyst to a dedicated pod.",
    description:
      "Pre-vetted, project-tested data talent — from a single analyst to a dedicated pod, on your timeline.",
    icon: Users,
    offerings: [
      {
        items: [
          "Data Analyst Staffing (Fresher & Experienced)",
          "Data Engineer Staffing (Fresher & Experienced)",
          "Staff Augmentation (Contract/Part-time/Full-time)",
          "Project-Based Talent Deployment",
          "Pre-Vetted, Project-Tested Candidates",
          "Dedicated Team Hiring",
          "Remote & On-site Staffing Options",
          "Flexible Engagement Models (Hourly/Monthly/Project-based)",
        ],
      },
    ],
    benefits: [
      "Fast focused shortlists",
      "Skill-tested on real project scenarios",
      "Scale up or down without hiring overhead",
    ],
    process: ["Role & skill scoping", "Vetting & assessment", "Client interviews", "Onboard & support"],
    stack: ["SQL", "Python", "dbt", "Airflow", "Azure", "AWS"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity & Penetration Testing",
    short: "Offensive-security testing and vulnerability assessments.",
    description:
      "Offensive-security testing and vulnerability assessments that find flaws before attackers do — with clear, developer-ready remediation guidance.",
    icon: ShieldCheck,
    offerings: [
      {
        items: [
          "Web Application Penetration Testing",
          "Security vulnerability assessment for web applications",
          "OWASP Top 10 compliance testing",
          "Identification of security loopholes and risks",
          "Detailed security audit reports",
          "Remediation guidance and support",
          "Manual + automated penetration testing",
        ],
      },
    ],
    benefits: ["OWASP Top 10 coverage", "Executive + technical reporting", "Free retest of fixed findings"],
    process: ["Scoping & rules of engagement", "Recon & testing", "Reporting", "Retest & sign-off"],
    stack: ["OWASP", "Burp Suite", "Nmap", "ZAP"],
  },
  {
    slug: "ai-automation",
    name: "AI & Workflow Automation",
    short: "Practical AI workflows, custom models, and automation systems.",
    description:
      "Practical AI workflows, custom models, and automation systems that remove repetitive work — decision automation, NLP, and smart assistants on autopilot.",
    icon: BrainCircuit,
    offerings: [
      {
        title: "AI Workflow Automation",
        items: [
          "Business process automation using AI",
          "Workflow optimization and integration",
          "AI-powered task automation systems",
          "Data-driven decision automation",
          "Integration with existing business tools",
          "Productivity enhancement solutions",
        ],
      },
      {
        title: "Custom AI Solutions",
        items: [
          "Tailor-made AI model development",
          "Machine learning and deep learning solutions",
          "Predictive analytics systems",
          "Natural language processing (NLP) solutions",
          "AI chatbot and virtual assistant development",
          "Industry-specific AI implementation",
        ],
      },
    ],
    benefits: ["Hours returned to your team weekly", "Fewer manual errors", "Human-in-the-loop by design"],
    process: ["Workflow audit", "Automation design", "Pilot", "Rollout & monitoring"],
    stack: ["OpenAI", "n8n", "Make", "Python", "PyTorch"],
  },
  {
    slug: "maintenance",
    name: "Website Maintenance & Application Support",
    short: "Proactive monitoring, regular updates, and bug fixes.",
    description:
      "Keep your web presence fast, patched and online with proactive monitoring, regular updates, bug fixes, and predictable retainer support.",
    icon: LifeBuoy,
    offerings: [
      {
        items: [
          "Regular website updates and bug fixes",
          "Performance monitoring and optimization",
          "Security updates and patch management",
          "Backup and recovery management",
          "Application troubleshooting and support",
          "Ongoing technical maintenance services",
        ],
      },
    ],
    benefits: ["Uptime & performance monitoring", "Security patching", "Priority response SLAs"],
    process: ["Health audit", "Baseline fixes", "Monitoring", "Monthly reporting"],
    stack: ["Cloudflare", "Lighthouse", "Sentry", "WordPress"],
  },
  {
    slug: "web-development",
    name: "Web Application Development",
    short: "Custom web apps, landing pages, and APIs engineered for speed.",
    description:
      "Custom web applications, landing pages, and APIs engineered for speed, scalable architecture, accessibility, and high conversion.",
    icon: Braces,
    offerings: [
      {
        items: [
          "Custom web application design and development",
          "Scalable and secure architecture",
          "Frontend and backend development",
          "API integration and development",
          "Responsive UI/UX implementation",
          "Performance optimization and deployment support",
          "Landing Page Design",
        ],
      },
    ],
    benefits: ["90+ Lighthouse targets", "Mobile-first & accessible", "Built to convert"],
    process: ["Brief & wireframe", "Design", "Build", "Launch & measure"],
    stack: ["React", "Tailwind CSS", "TypeScript", "Vite", "Node.js"],
  },
];

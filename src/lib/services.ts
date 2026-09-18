import {
  BarChart3,
  Bot,
  Braces,
  GraduationCap,
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
    short: "Clear dashboards and automated reports that help teams make better decisions.",
    description:
      "We turn business data into clear dashboards, regular reports, and useful insights your team can act on.",
    icon: BarChart3,
    offerings: [
      {
        items: [
          "Power BI, Tableau, and Excel dashboards",
          "Daily, weekly, and monthly reports",
          "KPI and performance tracking",
          "Data cleaning and preparation",
          "Business data analysis",
          "Report updates and improvements",
        ],
      },
    ],
    benefits: ["Save time on manual reporting", "Track the right numbers", "Make decisions with clear data"],
    process: ["Understand your goals", "Prepare the data", "Build the reports", "Review and hand over"],
    stack: ["Power BI", "Tableau", "SQL", "Python", "Excel"],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    short: "Practical AI tools and automated workflows that reduce repetitive work.",
    description:
      "We use AI and automation to simplify routine tasks, connect business tools, and help your team work faster.",
    icon: Bot,
    offerings: [
      {
        items: [
          "AI-powered workflow automation",
          "Business process automation",
          "AI chatbots and assistants",
          "Document and data processing",
          "Tool and system integrations",
          "Custom AI solutions",
        ],
      },
    ],
    benefits: ["Reduce repetitive work", "Improve speed and accuracy", "Keep people in control"],
    process: ["Find the right task", "Design the workflow", "Build and test", "Launch and improve"],
    stack: ["OpenAI", "n8n", "Make", "Python", "APIs"],
  },
  {
    slug: "web-development",
    name: "Web Application Development",
    short: "Fast, reliable websites and web applications built for real business needs.",
    description:
      "We design and build modern websites, web applications, and connected systems that are simple to use and easy to grow.",
    icon: Braces,
    offerings: [
      {
        items: [
          "Custom web application development",
          "Business websites and landing pages",
          "Frontend and backend development",
          "API development and integration",
          "Mobile-friendly user interfaces",
          "Performance and launch support",
        ],
      },
    ],
    benefits: ["Simple on every device", "Fast and reliable", "Ready to grow with your business"],
    process: ["Plan the product", "Design the experience", "Build and test", "Launch and hand over"],
    stack: ["React", "TypeScript", "Tailwind CSS", "APIs", "PostgreSQL"],
  },
  {
    slug: "staffing",
    name: "Staffing Services",
    short: "Skilled data and software professionals for short-term and long-term needs.",
    description:
      "We help you find capable analysts, engineers, and developers who match your work, timeline, and team.",
    icon: Users,
    offerings: [
      {
        items: [
          "Data analyst staffing",
          "Data engineer staffing",
          "Software developer staffing",
          "Contract, part-time, and full-time roles",
          "Project-based teams",
          "Remote and on-site options",
        ],
      },
    ],
    benefits: ["Relevant candidate profiles", "Skills checked before referral", "Flexible team size"],
    process: ["Understand the role", "Review skills", "Arrange interviews", "Support onboarding"],
    stack: ["Data Analytics", "Data Engineering", "Web Development", "AI Automation"],
  },
  {
    slug: "training-internship",
    name: "Training and Internship",
    short: "Practical learning programs that prepare students and professionals for real work.",
    description:
      "We provide guided training and internships in reporting, AI automation, web development, and related technology skills.",
    icon: GraduationCap,
    offerings: [
      {
        items: [
          "Data analytics and reporting training",
          "AI automation training",
          "Web development training",
          "Live project practice",
          "Mentor feedback and guidance",
          "Internship opportunities",
        ],
      },
    ],
    benefits: ["Learn through practical work", "Build job-ready skills", "Get clear mentor feedback"],
    process: ["Choose a learning path", "Build core skills", "Work on projects", "Review progress"],
    stack: ["Power BI", "SQL", "Python", "React", "AI Tools"],
  },
];
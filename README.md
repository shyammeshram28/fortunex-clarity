# FortuneX Clarity

# FortuneX Technologies Website Requirements & Implementation Plan

## Design Philosophy & Vision

The design direction is heavily inspired by **Tesla** ([https://www.tesla.com/](https://www.tesla.com/)) and **Apple** https://www.apple.com/in/ , and enterprise-grade. It is not a typical corporate website.

I want my website to have the same premium design philosophy and user experience as Tesla and Apple. However, their websites are built to showcase cars and consumer electronics, whereas my website is for an IT services and technology company. The visual design, layout, animations, typography, minimalism, and overall premium feel should be inspired by Tesla and Apple, but the content, messaging, illustrations, and user journey should be tailored specifically to an IT company, highlighting services such as software development, AI solutions, cybersecurity, cloud services, automation, and enterprise technology. It should feel like a world-class technology company, not an automotive or consumer electronics brand.

### Brand Identity Balance: Tesla/Apple Aesthetics × Premium Modern IT Company Content
* **Visual Form:** Looks and feels like Tesla or Apple — minimal, elegant, pure-white background, generous whitespace, bespoke vector geometry, and iconic UI components.
* **Business Substance:** When users read the content and explore the pages, every section clearly presents the identity of a premium, modern technology and IT services company.
* **Core Offerings Focus:** Sharp, professional communication of IT Services, Software Development, AI Solutions & Workflow Automation, Cybersecurity & Penetration Testing, Cloud Services (AWS & Azure), Data Analytics / BI Reporting, and Enterprise Technology.
* **Strategic Impression:** Every section communicates professionalism, innovation, and technical expertise without losing the clean and iconic design philosophy inspired by Tesla and Apple.

### Core Design Requirements
* **Complete Redesign Foundation:** Built on a modern enterprise aesthetic using the new FortuneX logo as the cornerstone of the branding.
* **Pure White Palette:** Pure white (`#ffffff` / `oklch(1 0 0)`), clean, ultra-premium background.
* **Minimalist Content & Whitespace:** Very minimal content with generous, luxurious whitespace.
* **Zero Generic Stock Photos:** No stock images, photos, or generic background videos.
* **Bespoke Abstract Visual Compositions:** Uses premium abstract SVG illustrations, geometric graphics, subtle 3D-inspired vector compositions, and precision node grids.
* **Futuristic & High-Tech Feel:** Creates an impression of a futuristic, luxurious, technology-focused studio.

### Match Tesla's Design Language
Take direct inspiration from Tesla for:
* **Overall Layout & Visual Hierarchy:** Bold headlines with negative letter-spacing (`tracking-tight`), crisp typographic contrast.
* **Typography:** Manrope geometric typography with uppercase letter-spaced wordmarks (`wordmark` and `label-caps`).
* **Logo Placement & Branding:** Minimalist brand lockup featuring the FX mark alongside precision letter-spaced type.
* **Navigation:** Translucent, sticky blur-header (`backdrop-blur-xl`), clean rounded pill navigation items, and full-screen responsive mobile drawer.
* **Buttons:** Tesla-style pill buttons (`rounded-full`), high-contrast solid ink hero actions (`variant="hero"`), hairline borders (`variant="brandOutline"`), and electric blue accents.
* **Icons & Visual Components:** Lucide line icons, minimal hairline card borders, and subtle lift shadows (`shadow-soft` & `shadow-lift`).
* **Illustration Style:** Geometry drawn directly from brand chevrons and vector paths.
* **Grid System & Spacing:** Hairline border grid dividers (`border-border`), balanced multi-column responsive grids.
* **Apple-level Refinement:** Meticulous attention to detail, simplicity, clean component boundaries, and effortless user experience.

---

## Motion Design System & Micro-Interactions Architecture

To achieve the iconic, fluid feel of Tesla and Apple without sacrificing performance or accessibility, the motion design system uses precise timing functions, stagger delays, scroll triggers, and fluid easing curves.

### 1. Easing Curves & Physics
* **Tesla/Apple Fluid Easing (`--ease-out-smooth`):** `cubic-bezier(0.16, 1, 0.3, 1)` — used for all scroll reveals, hover lifts, line draws, and transitions. Provides instantaneous response with an ultra-smooth decelerating settling phase.
* **Standard Hover Easing:** `ease` / `cubic-bezier(0.4, 0, 0.2, 1)` (duration `300ms`–`400ms`).
* **Continuous Loop Rotation Easing:** `linear` for background orbital graphics.

### 2. Animation Durations & Stagger Timings
* **Scroll Reveal Transition (`.reveal`):** Duration `900ms` (`0.9s`), `transform: translateY(26px)` -> `translateY(0)`, `opacity: 0` -> `1`.
* **Hero Element Stagger Delays:**
  * Tagline / Eyebrow: `0ms` delay
  * Hero Main Headline (`h1`): `100ms` delay
  * Subheadline Paragraph: `180ms` delay
  * Hero Action Buttons: `260ms` delay
* **Grid Card Stagger Delays:** `i * 70ms` or `i * 80ms` multiplier delay per card in 3–4 column grids for sequential cascading reveals.

### 3. Scroll Trigger Specifications
* **Intersection Observer Configuration (`Reveal.tsx`):**
  * `rootMargin`: `"0px 0px -10% 0px"` (triggers slightly before entering lower viewport boundary).
  * `threshold`: `0.05` (triggers as soon as 5% of element is visible).
  * `once`: `true` (unobserves immediately upon entering viewport to save RAM and CPU overhead).

### 4. Interactive Hover & Micro-Interactions
* **Card Lift Effect (`.surface-hover`):** `transform: translateY(-4px)`, shadow shifts to `--shadow-lift`, border color shifts to `color-mix(in oklab, var(--foreground) 18%, transparent)` over `500ms`.
* **Link Underline Animation (`.link-underline`):** `after` pseudo-element expanding horizontally from left (`transform: scaleX(0)` -> `scaleX(1)` over `400ms cubic-bezier(0.16, 1, 0.3, 1)`).
* **Magnetic Logo & CTA Button Feedback:** Group hover scale `group-hover:scale-[1.04]` over `500ms`, arrow translation `group-hover:translate-x-1` over `500ms`.
* **Line Tracing Animation (`.animate-trace`):** SVG path `stroke-dasharray: 600`, animating `stroke-dashoffset` from `600` to `0` over `3.4s cubic-bezier(0.16, 1, 0.3, 1)`.
* **Subtle Vector Drift (`.animate-drift`):** Keyframe `drift` moving 0px -> -12px -> 0px vertically over `9s` infinite `ease-in-out`.
* **Slow Background Orbit (`.animate-spin-slow`):** Continuous 360° rotation over `42s` infinite `linear`.

### 5. Page Transitions & Loading Architecture
* **Header Blur Transition:** Sticky header transitions background opacity from `background/60` to `background/80` with `border-b border-border` over `500ms` when `window.scrollY > 4px`.
* **Page Route Transition:** TanStack Start SSR hydration with instant layout shell rendering and non-blocking TanStack React Query cache loads.
* **Accessible Reduced Motion Handling (`prefers-reduced-motion: reduce`):** Automatically overrides all animation durations to `0.001ms` and turns scroll-behavior to `auto` for user preference compliance.

---

## User Experience Standards
* **Smooth Premium Scrolling:** Smooth scroll behavior across all views (`scroll-behavior: smooth`).
* **Elegant Page Transitions & Animations:** Subtle, non-intrusive high-end scroll animations.
* **Flawless Mobile Experience:** Mobile experience designed to feel just as luxurious and responsive as desktop.
* **Fast Loading & Optimized Performance:** Lightning-fast route transitions and 90+ Lighthouse targets.

---

## Visual Style & Aesthetic
* **Modern Enterprise SaaS Aesthetic:** Clean, uncluttered, high-end technology company feel.
* **Pixel-Perfect Alignment:** Strict grid alignment, hairline borders, and balanced typography spacing.
* **Sophisticated Color Palette:** Deep ink navy (`oklch(0.185 0.035 265)`), electric brand blue (`oklch(0.545 0.235 263)`), and soft neutral surfaces (`oklch(0.975 0.004 250)`).

---

## Final Goal
When someone visits the website, it immediately gives the impression of a world-class technology company. The overall quality is comparable to Tesla and Apple while remaining unique to the FortuneX brand — exceptionally premium, timeless, and globally recognized, clearly establishing FortuneX as a leading modern IT services and technology partner.

---

## General Requirements

* Document the complete website structure and navigation.
* Include all page sections in the correct order.
* Describe the purpose of each section.
* Include all text content used on the website.
* Mention any animations, UI components, buttons, cards, icons, and interactions.
* Document reusable components and layouts.
* Include forms, validation rules, and CTA buttons.
* Mention SEO elements where applicable.
* This document should be detailed enough that another developer can rebuild the website using only this file.

---

## Technical & Architecture Specifications

* **Framework:** React 19 + TypeScript + TanStack Router & TanStack Start
* **Styling:** Tailwind CSS v4 (OKLCH color system: `--background: oklch(1 0 0)`, `--foreground: oklch(0.185 0.035 265)`, `--primary: oklch(0.545 0.235 263)`)
* **Icon Library:** Lucide React (`lucide-react`)
* **Typography:** Manrope font family (Google Fonts: 400, 500, 600, 700, 800)
* **SEO & Analytics:** Structured JSON-LD Schemas (`Organization`, `FAQPage`, `ItemList`, `LocalBusiness`), Open Graph tags, XML Sitemap (`/sitemap.xml`)

---

## Website Pages

---

## Home

Include every section in order with all content, headings, subheadings, buttons, and descriptions.

### 1. Hero Section (Above the Fold)

* **Eyebrow:** `Pune, India · Est. 2026`
* **Headline:** `Clarity, engineered.` (Main impactful statement representing FortuneX Technologies)
* **Subheadline:** `FortuneX Technologies builds the dashboards, automation and secure applications that turn scattered data into decisions you can defend.` (Short supporting description explaining services or value proposition)
* **Purpose:** Immediately communicate the company’s core offering and value to visitors
* **CTA Buttons:**
  * **Primary CTA:** `Start a project` (Links to `/contact`, variant `hero`)
  * **Secondary CTA:** `Explore services` (Links to `/services`, variant `brandOutline`)
* **UI Elements:** Background `.precision-grid` visual/animation, gradient overlay, responsive layout, animated SVG `HeroComposition` vector with rotation and floating drift animations.

---

### 2. Core Value Pillars (Positioning Statement)

* **Purpose:** Establish trust and operational clarity.
* **Content:**
  * **Senior-led:** `The people who scope your work are the people who build it.`
  * **Fixed scopes:** `Transparent pricing, defined deliverables, no open-ended retainers.`
  * **Measured:** `Every engagement ships something you can evaluate in weeks.`
* **UI Elements:** 3-column hairline-bordered grid card layout.

---

### 3. Capabilities / Services Grid

* **Eyebrow:** `Capabilities`
* **Headline:** `Six practices. One accountable team.`
* **Description:** `Each service is designed to compound the value of the last — from the first dashboard to the people who maintain it.`
* **Service Cards (Links to `/services#slug`):**
  1. **Reporting Services:** Decision-ready dashboards, automated reporting and analytics engineering.
  2. **Staffing Services:** Pre-vetted, project-tested data talent from a single analyst to a dedicated pod.
  3. **Cybersecurity & Penetration Testing:** Offensive-security testing and vulnerability assessments.
  4. **AI & Workflow Automation:** Practical AI workflows, custom models, and automation systems.
  5. **Maintenance & Application Support:** Proactive monitoring, regular updates, and bug fixes.
  6. **Web Application Development:** Custom web apps, landing pages, and APIs engineered for speed.
* **UI Elements:** Responsive 2-column to 3-column card grid with hover card lift (`surface-hover`) and animated arrow icons (`ArrowRight`).

---

### 4. Why FortuneX

* **Purpose:** Highlight key differentiators and reasons clients should choose FortuneX Technologies
* **Headline:** `Built for teams that need results, not decks.`
* **Content Structure:**
  * **01 — Strong industry expertise in Data, AI, and Software Solutions:** Deep specialization in Data Analytics, BI, Artificial Intelligence, Cybersecurity, and Software Engineering.
  * **02 — End-to-end service delivery (Strategy → Development → Support):** Comprehensive service coverage from initial strategy & discovery to full stack development and long-term support.
  * **03 — Skilled and pre-vetted technical talent pool:** Skilled, project-tested data analysts, engineers, and developers ready for rapid deployment.
  * **04 — Strong focus on quality, security, and performance:** OWASP Top 10 compliance, least-privilege security access, and performance-optimized clean code architectures.
  * **05 — Scalable and cost-effective solutions:** Transparent pricing without agency overhead — scale your team up or down on your timeline.
  * **06 — Client-centric and flexible engagement models:** Flexible engagement models (hourly, monthly, or project-based) tailored to your business needs.
* **UI Elements:**
  * Icon-based feature cards
  * Highlight sections with stats or badges (`01` to `06` label caps)
  * Responsive grid layout

---

### 5. Commitments & Key Metrics

* **Purpose:** Quantitative representation of service standards.
* **Stat Cards:**
  * **24h:** First response to every enquiry
  * **6:** Service practices under one roof
  * **100%:** Senior-led, documented delivery
  * **0:** Long-term lock-in contracts

---

### 6. Call to Action Band (`<CtaBand />`)

* **Eyebrow:** `Start a conversation`
* **Title:** `Tell us what you need. We'll tell you exactly how we'd build it.`
* **Paragraph:** `A short scoping call, a fixed scope, and a first deliverable you can judge.`
* **Buttons:** "Contact us" (Primary CTA) & "+91 72761 91361" (Secondary Tel Link).

---

## About

Include complete documentation for:

* **Our Story**
* **How We Work**
* **Industries We Serve**
* **Any additional sections on the About page**

### Detailed About Page Implementation & Content:

#### 1. Page Hero
* **Breadcrumb:** `Home / About`
* **Eyebrow:** `About us`
* **Title:** `A new studio, built by practitioners.`
* **Description:** `FortuneX Technologies is newly founded — and deliberately small. You work directly with the engineers doing the work.`

#### 2. Our Story
* **Eyebrow:** `Our story`
* **Title:** `Founded in 2026 to do this work properly.`
* **Text Content:**
  * FortuneX Technologies was established in Pune by practitioners who spent years building reporting systems, data teams and secure applications inside larger organisations — and saw the same pattern repeat: long discovery, thin delivery, no accountability.
  * So we started something intentionally different. No layers, no account managers, no inflated timelines. Small senior teams, fixed scopes and a first deliverable you can judge before you commit further.
  * We're new, and we treat that as an advantage: every client engagement gets the full attention of the people who founded the company.
* **Visual UI:** SVG `ArcGraphic` vector illustration container card.

#### 3. How We Work (Core Principles)
* **Eyebrow:** `How we work`
* **Title:** `Three principles we don't compromise on.`
* **Principles Content:**
  1. **Clarity first** (Icon: `Compass`): We define the decision before we build the dashboard. Scope, metric and owner — agreed in writing.
  2. **Small and fast** (Icon: `Gauge`): Short cycles with visible output. You see working software in weeks, not a discovery deck in months.
  3. **Secure by default** (Icon: `ShieldCheck`): Least-privilege access, reviewed code and tested applications on every engagement, regardless of size.

#### 4. Commitments
* Displays the 4 metric cards (24h, 6, 100%, 0).

#### 5. Industries We Serve
* **Eyebrow:** `Industries`
* **Title:** `Sector context that shortens the ramp-up.`
* **Industries List (8 Badges):**
  1. Banking & Financial Services
  2. Healthcare & Life Sciences
  3. Retail & E-commerce
  4. Manufacturing & Supply Chain
  5. SaaS & Technology
  6. Logistics & Transportation
  7. Education
  8. Professional Services

---

## Services

Document every service available on the website, including:

* Service name
* Description / Summary
* Features / Offerings
* Benefits
* 4-Step Process
* Tech Stack
* CTA
* Icons or illustrations (if applicable)

---

## Services Content

### 1. Reporting Services
* **Service Name:** Reporting Services
* **Description:** Decision-ready dashboards, automated reporting and analytics engineering that turn scattered data into a single source of truth.
* **Features / Offerings:**
  * Dashboard Development (Power BI, Tableau, Excel)
  * Automated Recurring Reports (Daily/Weekly/Monthly)
  * Data Visualization & Insights
  * KPI & Performance Tracking Dashboards
  * Ad-hoc Data Analysis
  * Report Maintenance & Support
  * Data Cleaning & Preparation
  * Business Intelligence Consulting
* **Benefits:** Remove hours of manual reporting each week, One trusted metric layer across teams, Faster evidence-backed decisions.
* **4-Step Process:** Discovery & KPI mapping → Data modelling → Dashboard build → Automate & handover.
* **Tech Stack:** Power BI, Tableau, SQL, Python, Excel.
* **Icon:** `BarChart3` | **CTA:** Learn more (`/services#reporting`)

---

### 2. Staffing Services
* **Service Name:** Staffing Services
* **Description:** Pre-vetted, project-tested data talent — from a single analyst to a dedicated pod, on your timeline.
* **Features / Offerings:**
  * Data Analyst Staffing (Fresher & Experienced)
  * Data Engineer Staffing (Fresher & Experienced)
  * Staff Augmentation (Contract/Part-time/Full-time)
  * Project-Based Talent Deployment
  * Pre-Vetted, Project-Tested Candidates
  * Dedicated Team Hiring
  * Remote & On-site Staffing Options
  * Flexible Engagement Models (Hourly/Monthly/Project-based)
* **Benefits:** Fast focused shortlists, Skill-tested on real project scenarios, Scale up or down without hiring overhead.
* **4-Step Process:** Role & skill scoping → Vetting & assessment → Client interviews → Onboard & support.
* **Tech Stack:** SQL, Python, dbt, Airflow, Azure, AWS.
* **Icon:** `Users` | **CTA:** Learn more (`/services#staffing`)

---

### 3. Web Application Penetration Testing (Cybersecurity)
* **Service Name:** Cybersecurity & Penetration Testing
* **Description:** Offensive-security testing and vulnerability assessments that find flaws before attackers do — with clear, developer-ready remediation guidance.
* **Features / Offerings:**
  * Web Application Penetration Testing
  * Security vulnerability assessment for web applications
  * OWASP Top 10 compliance testing
  * Identification of security loopholes and risks
  * Detailed security audit reports
  * Remediation guidance and support
  * Manual + automated penetration testing
* **Benefits:** OWASP Top 10 coverage, Executive + technical reporting, Free retest of fixed findings.
* **4-Step Process:** Scoping & rules of engagement → Recon & testing → Reporting → Retest & sign-off.
* **Tech Stack:** OWASP, Burp Suite, Nmap, ZAP.
* **Icon:** `ShieldCheck` | **CTA:** Learn more (`/services#cybersecurity`)

---

### 4. Web Application Development
* **Service Name:** Web Application Development
* **Description:** Custom web applications, landing pages, and APIs engineered for speed, scalable architecture, accessibility, and high conversion.
* **Features / Offerings:**
  * Custom web application design and development
  * Scalable and secure architecture
  * Frontend and backend development
  * API integration and development
  * Responsive UI/UX implementation
  * Performance optimization and deployment support
  * Landing Page Design
* **Benefits:** 90+ Lighthouse targets, Mobile-first & accessible, Built to convert.
* **4-Step Process:** Brief & wireframe → Design → Build → Launch & measure.
* **Tech Stack:** React, Tailwind CSS, TypeScript, Vite, Node.js.
* **Icon:** `Braces` | **CTA:** Learn more (`/services#web-development`)

---

### 5. AI Workflow Automation & Custom AI Solutions
* **Service Name:** AI & Workflow Automation
* **Description:** Practical AI workflows, custom models, and automation systems that remove repetitive work — decision automation, NLP, and smart assistants on autopilot.
* **Features / Offerings (AI Workflow Automation):**
  * Business process automation using AI
  * Workflow optimization and integration
  * AI-powered task automation systems
  * Data-driven decision automation
  * Integration with existing business tools
  * Productivity enhancement solutions
* **Features / Offerings (Custom AI Solutions):**
  * Tailor-made AI model development
  * Machine learning and deep learning solutions
  * Predictive analytics systems
  * Natural language processing (NLP) solutions
  * AI chatbot and virtual assistant development
  * Industry-specific AI implementation
* **Benefits:** Hours returned to your team weekly, Fewer manual errors, Human-in-the-loop by design.
* **4-Step Process:** Workflow audit → Automation design → Pilot → Rollout & monitoring.
* **Tech Stack:** OpenAI, n8n, Make, Python, PyTorch.
* **Icon:** `BrainCircuit` | **CTA:** Learn more (`/services#ai-automation`)

---

### 6. Website Maintenance & Application Support
* **Service Name:** Website Maintenance & Application Support
* **Description:** Keep your web presence fast, patched and online with proactive monitoring, regular updates, bug fixes, and predictable retainer support.
* **Features / Offerings:**
  * Regular website updates and bug fixes
  * Performance monitoring and optimization
  * Security updates and patch management
  * Backup and recovery management
  * Application troubleshooting and support
  * Ongoing technical maintenance services
* **Benefits:** Uptime & performance monitoring, Security patching, Priority response SLAs.
* **4-Step Process:** Health audit → Baseline fixes → Monitoring → Monthly reporting.
* **Tech Stack:** Cloudflare, Lighthouse, Sentry, WordPress.
* **Icon:** `LifeBuoy` | **CTA:** Learn more (`/services#maintenance`)

---

## FAQ (Frequently Asked Questions)

* **Purpose:** Address common client questions and reduce friction in decision-making
* **Content Structure:**

  1. **Q: What services does FortuneX Technologies provide?**  
     **A:** We offer BI & Reporting Services, Data & Engineering Staffing, Web Application Penetration Testing (Cybersecurity), AI & Workflow Automation (including Custom AI Solutions), Web Application Development, and Website Maintenance & Application Support.

  2. **Q: Do you offer custom AI and software solutions?**  
     **A:** Yes. We develop tailor-made AI models, ML/DL workflows, predictive analytics systems, NLP models, AI chatbots, as well as full-stack scalable web applications tailored to your business goals.

  3. **Q: What industries do you work with?**  
     **A:** We serve Banking & Financial Services, Healthcare & Life Sciences, Retail & E-commerce, Manufacturing & Supply Chain, SaaS & Technology, Logistics & Transportation, Education, and Professional Services.

  4. **Q: Do you provide staffing or dedicated developers?**  
     **A:** Yes, we provide pre-vetted, project-tested Data Analysts, Data Engineers, and Developers on flexible contract, part-time, full-time, or dedicated pod engagement models.

  5. **Q: What is your project delivery process?**  
     **A:** We operate in clear stages: Scoping & Discovery → Architecture & Design → Development & Testing → Handover & Post-deployment Monitoring.

  6. **Q: Do you offer post-deployment support?**  
     **A:** Yes! We offer ongoing Website Maintenance & Application Support retainers, including performance monitoring, security patching, bug fixes, and SLA-backed troubleshooting.

  7. **Q: How can I contact FortuneX Technologies?**  
     **A:** You can email us at info@fortunextechnologies.com, call +91 72761 91361, or visit our office at Office No. 10, Samarth Park, Sinhgad Campus, Ambegaon Budruk, Pune, Maharashtra 411046.

* **UI Elements:**
  * Accordion-style expandable questions (`@radix-ui/react-accordion`)
  * Smooth open/close animations
  * Mobile-friendly stacked layout

---

## Careers

Interested in joining FortuneX? We're always happy to hear from people who want to build with us.

**Get in touch about opportunities**  
Send a short introduction and your CV by email, or call us directly. Every message is read personally.

**Email:** [info@fortunextechnologies.com](mailto:info@fortunextechnologies.com)  
**Phone:** +91 72761 91361 (`tel:+917276191361`)

---

## Contact

**Office Address:**  
Office No. 10, Samarth Park, Sinhgad Campus, near Aviation College, Ambegaon Budruk, Pune, Maharashtra 411046

**Phone:** +91 72761 91361  
**Email:** [info@fortunextechnologies.com](mailto:info@fortunextechnologies.com)  
**Hours:** Mon – Sat, 10:00 – 19:00 IST

**Google Maps Embed URL:**  
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.482156334128!2d73.8357503!3d18.4618068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29583f46c68c7%3A0x8065e4f18ed58397!2sAnalyx%20Academy%20%E2%80%93%20Data%20Science%20%26%20Data%20Analytics%20Training%20Institute!5e0!3m2!1sen!2sin!4v1785399276314!5m2!1sen!2sin

---

## Footer

Include complete footer documentation, including:

* **Privacy Policy:** (8 sections: Information collected, Usage, Legal basis, Sharing, Retention, Security, User rights, Contact).
* **Terms & Conditions:** (8 sections: Acceptance, Services, Client responsibilities, Fees & Payment, IP ownership, Confidentiality, Liability limits, Governing law - India/Hyderabad).
* **Cookie Policy:** (6 sections: Cookie definition, Essential cookies, Analytics cookies - GA4/Clarity, Preference cookies, Browser management, Contact).
* **Refund Policy:** (6 sections: Scope, Fixed-scope kickoff refund rules, Retainer 30-day notice, Staffing 10-day replacement guarantee, Non-refundable third-party costs, Refund request process).
* **Social Media Links**

**LinkedIn URL:**  
https://www.linkedin.com/company/fortunex-technologies10/

---

## SEO + GEO + AEO Specifications

### Search Engine Optimization (SEO)

- **Dynamic XML Sitemap:** Automatically generated at `/sitemap.xml` with optimized priorities:
  - `/` → `1.0`
  - `/services` → `0.9`
  - `/about` → `0.8`
  - `/careers` → `0.8`
  - `/contact` → `0.8`
  - `/privacy-policy` → `0.3`
  - `/terms` → `0.3`
  - `/cookie-policy` → `0.3`
  - `/refund-policy` → `0.3`
- **Robots.txt:** Properly configured to allow search engine crawling while blocking unnecessary paths.
- **Canonical URLs:** Implemented across all pages to prevent duplicate content issues.
- **Meta Tags:** Unique SEO-optimized title, description, keywords, author, and robots meta tags for every page.
- **Open Graph Tags:** Complete Open Graph implementation for rich previews on Facebook, LinkedIn, WhatsApp, and other social platforms.
- **Twitter Cards:** Summary Large Image cards configured for optimal sharing on X (Twitter).
- **Structured Heading Hierarchy:** Semantic H1–H6 structure throughout the website.
- **Image SEO:** Descriptive filenames, optimized alt attributes, lazy loading, and next-generation image formats (WebP/AVIF).
- **Breadcrumb Schema:** Added where applicable for improved navigation and search visibility.
- **Internal Linking Strategy:** Optimized contextual links between pages for better crawlability and user experience.
- **Core Web Vitals Optimization:** Optimized for Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).
- **Performance Optimization:** Code splitting, tree shaking, asset compression, browser caching, CDN delivery, and lazy loading.

---

### Generative Engine Optimization (GEO)

Optimized for AI-powered search engines and Large Language Models (LLMs), including ChatGPT, Google AI Search, Gemini, Perplexity, Claude, and Microsoft Copilot.

- AI-readable semantic HTML structure.
- Entity-based content architecture.
- Clear service and business descriptions.
- Well-structured content with logical information hierarchy.
- Question-and-answer content blocks where appropriate.
- AI-friendly metadata.
- Comprehensive Organization and Service schema.
- Knowledge Graph optimization.
- Consistent company information (Name, Address, Phone, Email).
- Strong topical authority through service-focused content.
- Clean URLs and descriptive page architecture.

---

### Answer Engine Optimization (AEO)

Optimized for direct-answer platforms and AI assistants.

- FAQ sections designed for featured snippets and AI responses.
- Concise, answer-focused content blocks.
- Structured lists and comparison tables where appropriate.
- Natural language question targeting.
- Featured Snippet optimization.
- Voice Search Optimization.
- Conversational content structure.
- Clear definitions and service explanations.
- Schema-enhanced FAQ implementation.

---

### Structured Data (JSON-LD)

Implemented structured data using Schema.org standards:

- **Organization**
- **LocalBusiness**
- **WebSite**
- **WebPage**
- **BreadcrumbList**
- **Service**
- **ItemList**
- **FAQPage**
- **ContactPage**
- **Person** (Leadership/Founder, if applicable)
- **JobPosting** (Careers page)
- **Article / BlogPosting** (Insights/Blog pages)

---

### Local SEO

- Google Business Profile integration.
- Consistent NAP (Name, Address, Phone).
- LocalBusiness schema.
- Google Maps integration.
- Location-specific keywords.
- Contact information optimized for local search.

---

### Technical SEO

- Mobile-first responsive architecture.
- HTTPS enforced across the website.
- Clean, descriptive URLs.
- Canonical URL implementation.
- XML Sitemap.
- Robots.txt.
- Custom 404 page.
- Fast server response times.
- Accessibility (WCAG 2.2 friendly).
- Indexability and crawlability optimization.

---

### AI Readiness

The website is fully optimized for modern AI-powered discovery and search experiences, ensuring improved visibility across:

- Google Search
- Google AI Overviews
- ChatGPT
- Gemini
- Claude
- Perplexity AI
- Microsoft Copilot
- Voice Assistants (Google Assistant, Siri, Alexa)

using semantic content architecture, structured data, and AI-friendly information design.
---

*End of Implementation Specification Document.*

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5bb1233b-8861-4c8e-baaa-55050e728b6c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

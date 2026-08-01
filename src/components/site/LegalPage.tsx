import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/site/Sections";

export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalPage({
  breadcrumb,
  title,
  description,
  updated,
  sections,
}: {
  breadcrumb: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero breadcrumb={breadcrumb} eyebrow="Legal" title={title} description={description} />
      <section>
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:px-10 lg:py-24">
          <p className="label-caps">Last updated {updated}</p>
          <div className="mt-12 space-y-12">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 40} as="article">
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  <span className="mr-3 text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p) => (
                    <p key={p} className="text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

import { careers } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";
import CareerPeriod from "./CareerPeriod";

export default function Career() {
  return (
    <section id="career" className="bg-paper px-4 py-24">
      <SectionTitle title="CAREER" caption="걸어온 길" />
      <div className="mx-auto max-w-5xl space-y-8">
        {careers.map((career) => (
          <article key={career.company} className="grid gap-6 rounded-2xl bg-white p-6 shadow-md sm:p-10 md:grid-cols-[14rem_1fr]">
            <div>
              <h3 className="font-display text-3xl">{career.company}</h3>
              <CareerPeriod start={career.start} end={career.end} />
            </div>
            <div>
              <p className="text-ink/80">{career.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {career.roles.map((role) => (
                  <li key={role} className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                    {role}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 space-y-7 border-t border-black/5 pt-6">
                {career.works.map((work) => (
                  <li key={work.title} className="border-l-4 border-accent/40 pl-4">
                    <p className="font-bold">{work.title}</p>
                    {work.period && <p className="text-sm text-ink/50">{work.period}</p>}
                    {work.description && <p className="mt-1 text-sm text-ink/60">{work.description}</p>}
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-ink/80">
                      {work.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="text-accent">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

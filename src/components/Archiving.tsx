import { archiving } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Archiving() {
  return (
    <section id="archiving" className="bg-navy px-4 py-24">
      <SectionTitle title="ARCHIVING" caption="기록하고 공유하는 곳" dark />
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6">
        {archiving.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-white transition hover:-translate-y-1 hover:border-accent hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-3 font-display text-3xl">
                {item.title === "GitHub" && (
                  <svg viewBox="0 0 24 24" className="size-9" fill="currentColor" aria-hidden>
                    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
                  </svg>
                )}
                {item.title}
              </h3>
              <span className="text-xl text-white/40 transition group-hover:text-accent">↗</span>
            </div>
            <p className="mt-4 text-sm text-[#b3c3f7]">{item.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</p>
            <p className="mt-4 font-medium">{item.description}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/60">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}

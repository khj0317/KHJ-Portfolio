import { about, type AboutIcon } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

const iconPaths: Record<AboutIcon, string> = {
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0Z",
  calendar: "M7 2v3M17 2v3M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
  pin: "M12 22s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 2-10 7L2 6",
  school: "M22 10 12 5 2 10l10 5 10-5ZM6 12v5c3 2 9 2 12 0v-5",
};

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-24">
      <SectionTitle title="ABOUT ME" caption="저를 소개합니다" />
      <dl className="mx-auto grid w-fit gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {about.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <svg
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d={iconPaths[item.icon]} />
              </svg>
            </span>
            <div className="min-w-40">
              <dt className="text-sm font-bold text-ink/50">{item.label}</dt>
              <dd className="mt-0.5 whitespace-pre-line font-medium">
                {item.href ? (
                  <a href={item.href} className="whitespace-nowrap hover:text-accent">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}

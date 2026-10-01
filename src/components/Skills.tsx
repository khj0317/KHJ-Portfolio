import { skills } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";

// 분류 이름별 아이콘입니다. 목록에 없는 분류는 기본 아이콘을 씁니다.
const icons: Record<string, string> = {
  Language: "M16 18l6-6-6-6M8 6l-6 6 6 6M14 4l-4 16",
  Backend: "M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01",
  Database: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  Frontend: "M3 4h18v12H3zM8 20h8M12 16v4M7 8h6M7 12h10",
  Test: "M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3M7.5 14h9",
  DevOps: "M7 18a5 5 0 1 1 .9-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 18 18zM12 12v6M9 15l3-3 3 3",
};
const defaultIcon = "M12 2l9 5v10l-9 5-9-5V7z";

export default function Skills() {
  return (
    <section id="skills" className="bg-band px-4 py-24">
      <SectionTitle title="SKILLS" caption="다뤄 본 기술들" dark />
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="rounded-xl bg-white p-6 shadow-lg shadow-black/10">
            <h3 className="flex items-center gap-3 font-display text-2xl text-ink">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d={icons[group.category] ?? defaultIcon} />
                </svg>
              </span>
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill.name} className={`rounded-full px-3 py-1 text-sm font-bold ${skill.color}`}>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

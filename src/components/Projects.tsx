"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import SectionTitle from "./SectionTitle";
import ImageModal from "./ImageModal";
import ReadmeModal from "./ReadmeModal";

// 탭은 이 순서로 보여 주고, 여기에 없는 분류는 뒤에 붙입니다.
const categoryOrder = ["풀스택", "프론트엔드"];
const rank = (category: string) => {
  const i = categoryOrder.indexOf(category);
  return i === -1 ? categoryOrder.length : i;
};
const categories = ["전체", ...[...new Set(projects.map((p) => p.category))].sort((a, b) => rank(a) - rank(b))];

export default function Projects() {
  const [category, setCategory] = useState("전체");
  const [gallery, setGallery] = useState<Project | null>(null);
  const [readme, setReadme] = useState<Project | null>(null);

  const visible = category === "전체" ? projects : projects.filter((p) => p.category === category);

  return (
    <section id="projects" className="bg-career px-4 py-24">
      <SectionTitle title="PROJECTS" caption="직접 만든 서비스들" />

      <div className="mb-10 flex justify-center gap-2" role="tablist" aria-label="프로젝트 분류">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={category === c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              category === c ? "bg-accent text-white" : "bg-white text-ink/60 shadow-sm hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {visible.map((project) => (
          <article key={project.title} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
            <header className="relative overflow-hidden border-b border-accent/15 bg-[#eef2fd] px-6 pt-6 pb-5 sm:px-8">
              <span className="relative inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                {project.category}
              </span>
              <h3 className="relative mt-3 font-display text-4xl leading-tight">
                <span className="box-decoration-clone shadow-[inset_0_-0.4em_0_rgba(111,140,232,0.3)]">{project.title}</span>
              </h3>
              <p className="relative mt-2 text-sm text-ink/55">
                {project.period} · {project.team}
              </p>
            </header>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="font-bold">{project.summary}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/80">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-accent">✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <ul className="flex flex-wrap gap-1.5 border-t border-black/5 pt-4">
                  {project.stack.map((s) => (
                    <li key={s} className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-ink px-3 py-1.5 text-white hover:bg-accent"
                    >
                      🔗 사이트
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setReadme(project)}
                    className="rounded-md border border-black/15 px-3 py-1.5 hover:bg-paper"
                  >
                    📖 README
                  </button>
                  <button
                    type="button"
                    onClick={() => setGallery(project)}
                    className="rounded-md border border-black/15 px-3 py-1.5 hover:bg-paper"
                  >
                    🖼️ 이미지
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {gallery && <ImageModal project={gallery} onClose={() => setGallery(null)} />}
      {readme && <ReadmeModal project={readme} onClose={() => setReadme(null)} />}
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/portfolio";

export default function ImageModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const count = project.images.length;
  const image = project.images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [count, onClose]);

  const navButton = "absolute top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-ink shadow hover:brightness-110";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} 이미지`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between text-white">
          <p className="font-bold">
            {project.title} · {image.alt}
          </p>
          <button type="button" onClick={onClose} aria-label="닫기" className="text-3xl leading-none">
            ×
          </button>
        </div>

        <div className="relative flex h-[75svh] items-center justify-center rounded-lg bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} alt={image.alt} className="max-h-full max-w-full rounded object-contain" />
          {count > 1 && (
            <>
              <button type="button" className={`${navButton} left-2`} aria-label="이전 이미지" onClick={() => setIndex((index - 1 + count) % count)}>
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button type="button" className={`${navButton} right-2`} aria-label="다음 이미지" onClick={() => setIndex((index + 1) % count)}>
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>

        <div className="mt-3 flex justify-center gap-2">
          {project.images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              aria-label={`${i + 1}번째 이미지`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-2.5 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

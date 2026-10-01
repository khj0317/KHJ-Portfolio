"use client";

import { useEffect, useState } from "react";
import Markdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import type { Element, ElementContent } from "hast";
import type { Project } from "@/data/portfolio";
import MermaidBlock from "./MermaidBlock";

// 한 번 불러온 README는 다시 열 때 바로 보여 줍니다.
const cache = new Map<string, string>();

// ```mermaid 코드 블록이면 안의 글자를 꺼냅니다.
function mermaidSource(node: Element | undefined) {
  const code = node?.children.find((child): child is Element => child.type === "element" && child.tagName === "code");
  const className = code?.properties.className;
  if (!code || !Array.isArray(className) || !className.includes("language-mermaid")) return null;
  const text = (nodes: ElementContent[]): string =>
    nodes.map((n) => (n.type === "text" ? n.value : n.type === "element" ? text(n.children) : "")).join("");
  return text(code.children);
}

type State = { status: "loading" } | { status: "done"; markdown: string } | { status: "error" };

// https://github.com/owner/repo → README 원문 주소와 상대 경로를 풀 기준 주소들
function repoUrls(github: string) {
  const repo = github.replace(/^https:\/\/github\.com\//, "").replace(/\/$/, "");
  return {
    readme: `https://raw.githubusercontent.com/${repo}/HEAD/README.md`,
    rawBase: `https://raw.githubusercontent.com/${repo}/HEAD/`,
    blobBase: `https://github.com/${repo}/blob/HEAD/`,
  };
}

export default function ReadmeModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const urls = repoUrls(project.github);
  const cached = cache.get(urls.readme);
  const [state, setState] = useState<State>(cached ? { status: "done", markdown: cached } : { status: "loading" });

  useEffect(() => {
    if (cache.has(urls.readme)) return;
    let cancelled = false;
    fetch(urls.readme)
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.text();
      })
      .then((markdown) => {
        cache.set(urls.readme, markdown);
        if (!cancelled) setState({ status: "done", markdown });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });
    return () => {
      cancelled = true;
    };
  }, [urls.readme]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // README 안의 상대 경로(스크린샷, 다른 문서)를 GitHub 주소로 바꿉니다.
  const transformUrl = (url: string, key: string) => {
    if (/^(https?:|mailto:|#)/.test(url)) return defaultUrlTransform(url);
    const path = url.replace(/^\.?\//, "");
    return defaultUrlTransform((key === "src" ? urls.rawBase : urls.blobBase) + path);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} README`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex max-h-[88svh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-black/5 bg-[#eef2fd] px-6 py-4">
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-widest text-accent">README.md</p>
            <h2 className="truncate font-display text-2xl">{project.title}</h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-black/10 bg-white px-3 py-1.5 text-sm font-medium hover:border-accent hover:text-accent"
            >
              GitHub ↗
            </a>
            <button type="button" onClick={onClose} aria-label="닫기" className="px-2 text-3xl leading-none text-ink/50 hover:text-ink">
              ×
            </button>
          </div>
        </div>

        <div className="overflow-y-auto px-6 py-8 sm:px-10">
          {state.status === "loading" && <p className="py-20 text-center text-ink/50">README를 불러오는 중이에요…</p>}
          {state.status === "error" && (
            <div className="py-20 text-center">
              <p className="text-ink/60">README를 불러오지 못했어요.</p>
              <a href={project.github} target="_blank" rel="noreferrer" className="mt-4 inline-block font-bold text-accent hover:underline">
                GitHub에서 보기 ↗
              </a>
            </div>
          )}
          {state.status === "done" && (
            <article className="readme prose max-w-none prose-headings:font-bold prose-a:text-accent prose-img:rounded-lg prose-img:border prose-img:border-black/5 prose-pre:bg-[#1b2140] prose-table:text-sm prose-code:before:content-none prose-code:after:content-none prose-code:rounded prose-code:bg-paper prose-code:px-1 prose-code:py-0.5 prose-code:font-medium [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-white">
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                urlTransform={transformUrl}
                components={{
                  pre: ({ node, children }) => {
                    const source = mermaidSource(node);
                    return source ? <MermaidBlock code={source} /> : <pre>{children}</pre>;
                  },
                  a: ({ href, children }) => (
                    <a href={href} target={href?.startsWith("#") ? undefined : "_blank"} rel="noreferrer">
                      {children}
                    </a>
                  ),
                }}
              >
                {state.markdown}
              </Markdown>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}

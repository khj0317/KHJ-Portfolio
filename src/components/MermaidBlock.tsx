"use client";

import { useEffect, useId, useState } from "react";

// README 안의 ```mermaid 코드 블록을 그림으로 그립니다.
// mermaid 라이브러리가 커서, 다이어그램이 있을 때만 불러옵니다.
export default function MermaidBlock({ code }: { code: string }) {
  const id = `mermaid-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const [svg, setSvg] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    import("mermaid")
      .then(async ({ default: mermaid }) => {
        // 원래 크기로 그려 두고, 화면에 맞출지 원래 크기로 볼지는 버튼으로 고릅니다.
        mermaid.initialize({
          startOnLoad: false,
          theme: "neutral",
          securityLevel: "strict",
          er: { useMaxWidth: false },
          flowchart: { useMaxWidth: false },
          sequence: { useMaxWidth: false },
        });
        const result = await mermaid.render(id, code);
        if (!cancelled) setSvg(result.svg);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [id, code]);

  if (failed) {
    return (
      <pre>
        <code>{code}</code>
      </pre>
    );
  }

  if (!svg) {
    return <p className="not-prose py-6 text-center text-sm text-ink/50">다이어그램을 그리는 중이에요…</p>;
  }

  return (
    <div className="not-prose my-6 rounded-lg border border-black/5 bg-paper">
      <div className="flex justify-end border-b border-black/5 px-3 py-2">
        <button
          type="button"
          onClick={() => setZoomed((v) => !v)}
          className="rounded-md border border-black/10 bg-white px-3 py-1 text-xs font-medium hover:border-accent hover:text-accent"
        >
          {zoomed ? "화면에 맞추기" : "🔍 크게 보기"}
        </button>
      </div>
      <div
        className={`overflow-x-auto p-4 [&_svg]:mx-auto [&_svg]:h-auto ${zoomed ? "[&_svg]:max-w-none" : "[&_svg]:max-w-full"}`}
        // mermaid가 securityLevel "strict"로 정리한 SVG만 넣습니다.
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}

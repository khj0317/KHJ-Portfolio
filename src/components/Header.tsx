"use client";

import { useEffect, useState } from "react";
import { careers, profile } from "@/data/portfolio";

const menus = [
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "archiving", label: "Archiving" },
  { id: "projects", label: "Projects" },
  ...(careers.length > 0 ? [{ id: "career", label: "Career" }] : []),
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      // 화면 위쪽 40% 지점을 지난 마지막 섹션을 현재 섹션으로 봅니다. 맨 아래에 닿으면 마지막 메뉴를 표시합니다.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const current = atBottom
        ? menus[menus.length - 1].id
        : menus.filter((menu) => {
            const el = document.getElementById(menu.id);
            return el && el.getBoundingClientRect().top <= window.innerHeight * 0.4;
          }).pop()?.id;
      setActive(current ?? "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "bg-white/95 text-ink shadow-sm backdrop-blur" : "bg-transparent text-white"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-display text-2xl tracking-wide" onClick={() => setOpen(false)}>
          {profile.logo}
        </a>

        <ul className="hidden gap-7 text-sm font-medium md:flex">
          {menus.map((menu) => (
            <li key={menu.id}>
              <a
                href={`#${menu.id}`}
                aria-current={active === menu.id ? "true" : undefined}
                className={`relative py-1 transition hover:text-accent hover:opacity-100 ${
                  active === menu.id ? "font-bold text-accent opacity-100" : "opacity-75"
                }`}
              >
                {menu.label}
                {active === menu.id && <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-accent" />}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-black/5 bg-white px-4 pb-4 md:hidden">
          {menus.map((menu) => (
            <li key={menu.id}>
              <a
                href={`#${menu.id}`}
                aria-current={active === menu.id ? "true" : undefined}
                className={`block py-3 ${active === menu.id ? "font-bold text-accent" : "text-ink"}`}
                onClick={() => setOpen(false)}
              >
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";

export interface NavItem {
  id: string;
  label: string;
}

// Highlights the section currently in view. "sidebar" is the vertical list
// under the profile on desktop; "bar" is a slim sticky row for phones.
export function SectionNav({
  items,
  variant,
}: {
  items: NavItem[];
  variant: "sidebar" | "bar";
}) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    // The active section is the last one whose top is within 140px of the top of the
    // viewport; at the very bottom of the page, the last section wins.
    const update = () => {
      const line = 140;
      let current = items[0]?.id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom && items.length) current = items[items.length - 1].id;
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  if (variant === "bar") {
    return (
      <nav
        aria-label="Sections"
        className="md:hidden sticky top-0 z-20 -mx-8 px-8 mb-6 bg-[#FFFCF8]/95 backdrop-blur border-b border-zinc-200"
      >
        <ul className="flex gap-5 overflow-x-auto py-3 text-xs uppercase tracking-wide whitespace-nowrap">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                className={
                  active === item.id
                    ? "text-zinc-900 underline underline-offset-4"
                    : "text-zinc-500 hover:text-zinc-900"
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="Sections" className="hidden md:block">
      <ul className="space-y-1.5 text-xs uppercase tracking-wide">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={`flex items-center gap-2 transition-colors duration-300 ${
                active === item.id
                  ? "text-zinc-900"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <span
                className={`h-px transition-all duration-300 ${
                  active === item.id ? "w-6 bg-zinc-900" : "w-3 bg-zinc-300"
                }`}
              />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

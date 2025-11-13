"use client";

import { cn } from "@/lib/utils";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only",
        "fixed top-4 left-4 z-100",
        "px-6 py-3 rounded-lg",
        "bg-[#35a7ff] text-white font-semibold",
        "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#35a7ff]",
        "transition-all duration-200"
      )}
    >
      Pular para o conteúdo principal
    </a>
  );
}

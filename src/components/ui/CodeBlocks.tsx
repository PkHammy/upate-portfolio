import { useState } from "react";
import { cn } from "#/util/tailwindmerge";
import type { ClassNameValue } from "tailwind-merge";

export interface CodeBlocksProps {
  text: string;
  className: ClassNameValue;
}

export function CodeBlocks({ text, className }: CodeBlocksProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "cursor-default rounded-sm border-2 border-(--ink) bg-(--paper) transition-colors duration-150",
          "px-2.5 py-1 font-['Permanent_Marker'] text-[11px] tracking-wider text-(--ink) uppercase",
          hovered
            ? "translate-x-0.5 translate-y-0.5 shadow-[1px_1px_0_var(--ink)]"
            : "shadow-[2px_2px_0_var(--ink)]",
          className,
        )}
      >
        {text}
      </span>
    </div>
  );
}

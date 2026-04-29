import { useState } from "react";
import { motion } from "framer-motion";

interface ComicButtonProps {
  children: React.ReactNode;
  href?: string;
  variant: "primary" | "secondary";
  effect?: string;
  hoverClass?: string;
}

export default function ComicButton({
  children,
  href,
  variant,
  effect,
  hoverClass,
}: ComicButtonProps) {
  const [pressed, setPressed] = useState(false);
  const bg =
    variant === "primary"
      ? "bg-(--ink) text-(--paper)"
      : "bg-(--paper) text-(--ink)";

  const inner = (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={`relative cursor-pointer rounded-sm border-[3px] border-(--ink) px-5 py-2.5 font-['Bangers'] text-xl tracking-wider uppercase transition-all duration-75 select-none sm:px-6 sm:text-[22px] ${bg} ${
        pressed
          ? "translate-x-0.75 translate-y-0.75 shadow-[1px_1px_0_var(--ink)]"
          : "translate-x-0 translate-y-0 shadow-[5px_5px_0_var(--ink)]"
      } ${hoverClass ?? ""}`}
    >
      {effect && (
        <span className="absolute -top-2.5 -right-2.5 rotate-12 rounded-sm bg-(--ink) px-1.5 py-0.5 font-['Bangers'] text-[11px] tracking-wider text-(--paper) uppercase">
          {effect}
        </span>
      )}
      {children}
    </motion.div>
  );

  return href ? (
    <a href={href} className="no-underline">
      {inner}
    </a>
  ) : (
    inner
  );
}

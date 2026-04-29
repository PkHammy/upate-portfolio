import { useState } from "react";
import { motion } from "framer-motion";

interface FooterLinkProps {
  children: React.ReactNode;
  href: string;
  isHighlighted?: boolean;
}

export default function FooterLink({
  children,
  href,
  isHighlighted,
}: FooterLinkProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{
        scale: 1.1,
        rotate: -3,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      whileTap={{ scale: 0.95 }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={`relative inline-block rounded-xs border-3 px-5 py-2 font-['Bangers'] text-xl tracking-wide uppercase transition-all duration-75 ${
        isHighlighted
          ? "border-(--paper) bg-yellow-400 text-(--ink) hover:bg-white hover:text-red-600"
          : "border-(--paper) bg-transparent text-(--paper) hover:bg-(--paper) hover:text-(--ink)"
      } ${
        pressed
          ? "translate-x-1 translate-y-1 shadow-none"
          : "shadow-[5px_5px_0_rgba(240,237,230,0.3)] hover:shadow-[8px_8px_0_rgba(234,179,8,1)]"
      } `}
    >
      {children}
    </motion.a>
  );
}

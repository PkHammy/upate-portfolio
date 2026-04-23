/**
 * Footer.tsx — Comic Book Style
 * Final Panel with halftone background and enhanced hover effects.
 */

import { useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Email", href: "mailto:hamza@email.com" },
];

export default function Footer() {
  const themeStyles = {
    "--ink": "#0a0a0a",
    "--paper": "#f0ede6",
  } as React.CSSProperties;

  return (
    <footer
      style={themeStyles}
      className="relative border-t-8 border-(--ink) bg-(--ink) px-6 py-12 text-(--paper) transition-colors duration-300"
    >
      {/* Light Halftone Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--paper) 1px, transparent 1px)`,
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-10">
        {/* Logo / Branding */}
        <div className="group">
          <div className="font-['Bangers'] text-4xl tracking-wider uppercase">
            HAMZA
            <span className="ml-1 text-yellow-400 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              .
            </span>
          </div>
          <div className="mt-2 font-['Permanent_Marker'] text-[10px] tracking-[0.2em] uppercase opacity-60">
            Issue #01 — Released {new Date().getFullYear()}
          </div>
        </div>

        {/* Social Navigation */}
        <nav className="flex flex-wrap gap-4">
          {LINKS.map((link) => (
            <FooterLink key={link.label} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </nav>
      </div>

      {/* Bottom Comic Strip Tagline */}
      <div className="relative mx-auto mt-12 max-w-6xl">
        <div className="h-px w-full bg-(--paper) opacity-20" />
        <div className="mt-6 text-center font-['Permanent_Marker'] text-[11px] tracking-[0.15em] uppercase italic opacity-40">
          ★ Created with React · Tailwind · Passion · And a whole lot of Ink ★
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  children,
  href,
  isHighlighted,
}: {
  children: React.ReactNode;
  href: string;
  isHighlighted?: boolean;
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      // Enhanced Hover: Scale up, slight tilt, and shadow shift
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

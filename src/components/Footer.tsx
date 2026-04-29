/**
 * Footer.tsx — Comic Book Style
 * Final Panel with halftone background and enhanced hover effects.
 */

import FooterLink from "#/components/ui/FooterLink";

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

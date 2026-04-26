import { useRef, useCallback, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "#/util/tailwindmerge";
import type { ClassNameValue } from "tailwind-merge";

// Import fonts via CSS
const fonts = `
  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Permanent+Marker&display=swap');
`;

export default function HeroSection() {
  const [isDark] = useState(false);

  const themeStyles = {
    "--ink": isDark ? "#f0f0f0" : "#0a0a0a",
    "--paper": isDark ? "#111111" : "#f0ede6",
    "--dots": isDark ? "rgba(240,240,240,0.2)" : "rgba(10,10,10,0.15)",
  } as React.CSSProperties;

  const codes: CodeBlocksProps[] = [
    { text: "React", className: "hover:bg-blue-500" },
    { text: "TypeScript", className: "hover:bg-blue-500" },
    { text: "Python", className: "hover:bg-[#9AD872]" },
    { text: "Tailwind", className: "hover:bg-[#56B6C6]" },
    { text: "Node.js", className: "hover:bg-blue-500" },
  ];

  return (
    <div style={themeStyles}>
      <style>{fonts}</style>

      <section
        className="relative min-h-screen overflow-hidden border-4 border-(--ink) px-4 pt-20 pb-10 transition-colors duration-300 sm:px-6 sm:pt-24"
        style={{
          backgroundColor: "var(--paper)",
          backgroundImage: `radial-gradient(circle, var(--dots) 1px, transparent 1px)`,
          backgroundSize: "12px 12px",
          fontFamily: "'Permanent Marker', cursive",
          color: "var(--ink)",
        }}
      >
        {/* Panel label */}
        <div className="absolute top-0 left-4 z-10 rounded-b-sm bg-(--ink) px-3 py-1 text-[11px] tracking-widest text-(--paper) uppercase sm:left-6">
          Panel 01
        </div>

        {/* Main grid — stacks on mobile, side-by-side on md+ */}
        <div className="mx-auto grid min-h-[calc(100vh-100px)] max-w-6xl grid-cols-1 items-center gap-8 pt-8 md:grid-cols-2 md:gap-12">
          {/* LEFT — Text */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <TiltCard ink="var(--ink)">
              <div className="relative rounded-sm border-4 border-(--ink) bg-(--paper) p-5 sm:border-[5px] sm:p-7 md:p-8">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    WebkitTextFillColor: "#669bbc",
                    transition: { duration: 0.2 },
                  }}
                  className="mb-3 cursor-default stroke-(--ink) font-['Bangers'] text-[clamp(40px,10vw,76px)] leading-[0.88] text-transparent uppercase sm:mb-5"
                  style={{ WebkitTextStroke: "3px var(--ink)" }}
                >
                  Hamza
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    WebkitTextFillColor: "#FF0000",
                    transition: { duration: 0.2 },
                  }}
                  className="mb-4 cursor-default stroke-(--ink) font-['Bangers'] text-[clamp(40px,10vw,76px)] leading-[0.88] text-transparent uppercase sm:mb-5"
                  style={{ WebkitTextStroke: "3px var(--ink)" }}
                >
                  NASIR
                </motion.div>

                {/* Role tags */}
                <div className="flex flex-wrap gap-2">
                  {["Full Stack Dev", "Clean UI · Practical Code"].map((t) => {
                    const isFullStack = t.includes("Full");
                    return (
                      <motion.span
                        key={t}
                        whileHover={{
                          scale: 1.1,
                          rotate: isFullStack ? 2 : -2,
                          backgroundColor: "#facc15",
                          color: "#0a0a0a",
                          borderColor: "#0a0a0a",
                          boxShadow: "4px 4px 0px #0a0a0a",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        className={`cursor-default rounded-sm border-2 border-(--ink) px-3 py-1 font-['Permanent_Marker'] text-[10px] tracking-wider uppercase transition-colors sm:text-[11px] ${
                          isFullStack
                            ? "bg-(--ink) text-(--paper)"
                            : "bg-transparent text-(--ink)"
                        }`}
                      >
                        {t}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </TiltCard>

            {/* Speech bubble */}
            <SpeechBubble
              ink="var(--ink)"
              paper="var(--paper)"
              className="mt-3 ml-3 sm:mt-5 sm:ml-4"
            >
              "I build apps that feel smooth, responsive, and easy to use."
            </SpeechBubble>

            {/* CTA buttons */}
            <div className="mt-4 flex flex-wrap gap-3 sm:mt-7">
              <ComicButton
                href="#projects"
                variant="primary"
                effect="GO!"
                hoverClass="hover:bg-blue-500 hover:text-white"
              >
                View Projects
              </ComicButton>

              <ComicButton
                href="#"
                variant="secondary"
                effect="GET"
                hoverClass="hover:bg-red-500 hover:text-white"
              >
                Download CV
              </ComicButton>
            </div>

            {/* Tech stack */}
            <div className="mt-4 sm:mt-7">
              <div className="mb-2 inline-block rounded-sm bg-(--ink) px-2.5 py-1 font-['Permanent_Marker'] text-[10px] tracking-widest text-(--paper) uppercase">
                Arsenal:
              </div>
              <div className="flex flex-wrap gap-2">
                {codes.map(({ text, className }, index) => (
                  <CodeBlocks key={index} text={text} className={className} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Photo: centered on mobile, right-aligned on md+ */}
          <div className="flex items-center justify-center">
            <PhotoPanel />
          </div>
        </div>
      </section>
    </div>
  );
}

// ── 3D Tilt wrapper ───────────────────────────────────────────────────────────

function TiltCard({
  children,
  ink,
}: {
  children: React.ReactNode;
  ink: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(rawX, { stiffness: 260, damping: 20 });
  const rotateY = useSpring(rawY, { stiffness: 260, damping: 20 });
  const scale = useSpring(1, { stiffness: 300, damping: 25 });

  const shadowX = useTransform(rotateY, [-12, 0, 12], [16, 8, -2]);
  const shadowY = useTransform(rotateX, [-12, 0, 12], [-2, 8, 16]);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
      rawY.set(nx * 12);
      rawX.set(-ny * 12);
    },
    [rawX, rawY],
  );

  return (
    <div
      ref={ref}
      className="relative perspective-[900px]"
      onMouseMove={onMove}
      onMouseEnter={() => scale.set(1.02)}
      onMouseLeave={() => {
        rawX.set(0);
        rawY.set(0);
        scale.set(1);
      }}
    >
      <motion.div
        className="absolute inset-0 z-0 rounded-sm opacity-80"
        style={{
          backgroundImage: `radial-gradient(circle, ${ink} 1.5px, transparent 1.5px)`,
          backgroundSize: "6px 6px",
          x: shadowX,
          y: shadowY,
        }}
      />
      <motion.div
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}

// ── Speech bubble ─────────────────────────────────────────────────────────────

function SpeechBubble({
  children,
  className,
}: {
  children: React.ReactNode;
  ink: string;
  paper: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[18px_18px_18px_4px] border-[3px] border-(--ink) bg-(--paper) p-3 px-4 font-['Permanent_Marker'] text-xs leading-relaxed tracking-wide text-(--ink) uppercase sm:p-3.5 sm:px-5 sm:text-sm">
        {children}
      </div>
      {/* Tail */}
      <div className="absolute -bottom-3.25 left-5 z-[-1] h-0 w-0 border-t-13 border-l-12 border-t-(--ink) border-l-(--ink)" />
      <div className="absolute -bottom-2.25 left-6 z-0 h-0 w-0 border-t-10 border-l-9 border-t-(--paper) border-l-(--paper)" />
    </div>
  );
}

// ── Comic button ──────────────────────────────────────────────────────────────

function ComicButton({
  children,
  href,
  variant,
  effect,
  hoverClass,
}: {
  children: React.ReactNode;
  href?: string;
  variant: "primary" | "secondary";
  effect?: string;
  hoverClass?: string;
}) {
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

// ── Code block badge ──────────────────────────────────────────────────────────

export interface CodeBlocksProps {
  text: string;
  className: ClassNameValue;
}

export function CodeBlocks({ text, className }: CodeBlocksProps) {
  return (
    <div>
      <span
        className={cn(
          "transition-soft rounded-sm border-2 border-(--ink) bg-(--paper)",
          "px-2.5 py-1 font-['Permanent_Marker'] text-[11px] tracking-wider text-(--ink) uppercase shadow-[2px_2px_0_var(--ink)]",
          className,
        )}
      >
        {text}
      </span>
    </div>
  );
}

// ── Photo panel ───────────────────────────────────────────────────────────────

function PhotoPanel() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-72 w-56 sm:h-80 sm:w-64 md:h-95 md:w-75"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <TiltCard ink="var(--ink)">
            <div className="group/colorPicker relative h-72 w-56 cursor-pointer rounded-sm border-4 border-(--ink) bg-gray-500 sm:h-80 sm:w-64 sm:border-[5px] md:h-95 md:w-75">
              {/* Speed lines */}
              <div
                className="pointer-events-none relative inset-0 z-10"
                style={{
                  backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, rgba(10,10,10,0.06) 0deg, rgba(10,10,10,0.06) 2.5deg, transparent 2.5deg, transparent 7.5deg)`,
                }}
              />

              <img
                src="/hammyColour.png"
                alt="Hamza Nasir"
                className="absolute bottom-18 block h-full w-full scale-125 object-cover brightness-105 contrast-150 grayscale transition-all duration-200 ease-in-out group-hover/colorPicker:grayscale-0"
              />

              {/* Halftone overlay */}
              <div
                className="pointer-events-none absolute inset-0 z-20 mix-blend-multiply"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(10,10,10,0.12) 1px, transparent 1px)`,
                  backgroundSize: "7px 7px",
                }}
              />

              {/* Clickable label → triggers flip */}
              <button
                onClick={() => setFlipped(true)}
                aria-label="Flip card to see special thanks"
                className="absolute right-0 bottom-0 left-0 z-30 w-full cursor-pointer bg-(--ink) py-1.5 text-center font-['Permanent_Marker'] text-[11px] tracking-widest text-(--paper) uppercase transition-opacity hover:opacity-75"
              >
                ★ Hammy ★
              </button>

              <div className="absolute top-2 right-2 z-30 flex h-6 w-6 items-center justify-center rounded-full bg-(--ink) font-['Permanent_Marker'] text-[10px] text-(--paper)">
                08
              </div>
            </div>
          </TiltCard>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 rounded-sm border-4 border-(--ink) bg-yellow-400 p-6 shadow-[6px_6px_0_var(--ink)] sm:border-[5px]">
            {/* Dot texture */}
            <div
              className="pointer-events-none absolute inset-0 rounded-sm opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle, var(--ink) 1.5px, transparent 1.5px)`,
                backgroundSize: "8px 8px",
              }}
            />

            <div className="relative z-10 text-center">
              <p className="font-['Bangers'] text-3xl leading-tight tracking-wider text-(--ink) uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,0.15)] sm:text-4xl">
                Special
                <br />
                Thanks!
              </p>

              <div className="mt-3 space-y-2">
                {[
                  { name: "Jacob", href: "https://github.com/JustJacobJar" },
                  { name: "Jamal", href: "https://github.com/Jamal-Raja" },
                ].map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-sm border-[3px] border-(--ink) bg-(--paper) px-4 py-1.5 font-['Bangers'] text-xl tracking-widest text-(--ink) uppercase shadow-[3px_3px_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_5px_0_var(--ink)] sm:text-2xl"
                  >
                    ★ {name} ★
                  </a>
                ))}
              </div>

              <p className="mt-3 font-['Permanent_Marker'] text-[10px] leading-relaxed tracking-tight text-(--ink) uppercase opacity-70">
                Couldn't have done it
                <br />
                without you guys
              </p>
            </div>

            <button
              onClick={() => setFlipped(false)}
              aria-label="Flip card back"
              className="relative z-10 cursor-pointer rounded-sm border-[3px] border-(--ink) bg-(--ink) px-4 py-1.5 font-['Bangers'] text-sm tracking-widest text-(--paper) uppercase shadow-[3px_3px_0_rgba(0,0,0,0.25)] transition-opacity hover:opacity-80"
            >
              ← Flip Back
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

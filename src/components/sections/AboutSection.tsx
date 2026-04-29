/**
 * AboutSection.tsx — Comic Book Style (Responsive Update)
 */
import { Lightbulb, MessageSquare, Palette, Trees } from "lucide-react";
import { motion } from "framer-motion";
import HighlightCard from "#/components/features/HighlightCard";
import type { HighlightCardProps } from "#/components/features/HighlightCard";

const HIGHLIGHTS: HighlightCardProps[] = [
  {
    icon: <Palette size={32} color="#881616" strokeWidth={3} />,
    title: "Frontend Focus",
    desc: "Responsive layouts, clean interactions, accessible UI.",
    color: "bg-yellow-400",
  },
  {
    icon: <MessageSquare size={32} color="#0b696f" strokeWidth={3} />,
    title: "Full Stack",
    desc: "React, TypeScript, Python, and modern tooling.",
    color: "bg-sky-400",
  },
  {
    icon: <Lightbulb size={32} color="#8c8921" strokeWidth={3} />,
    title: "Problem Solver",
    desc: "Turning rough ideas into polished digital products.",
    color: "bg-red-500",
  },
  {
    icon: <Trees size={32} color="#139516" strokeWidth={3} />,
    title: "Always Growing",
    desc: "Improving workflow, code quality, and design decisions.",
    color: "bg-green-500",
  },
];

export default function AboutSection() {
  const themeStyles = {
    "--ink": "#0a0a0a",
    "--paper": "#f0ede6",
    "--dots": "rgba(10,10,10,0.15)",
  } as React.CSSProperties;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 22 },
    },
  };

  return (
    <div style={themeStyles}>
      <section
        id="about"
        className="relative min-h-screen border-t-4 border-(--ink) px-4 py-16 pt-24 sm:px-6 sm:py-20 md:pt-32 lg:pt-40"
        style={{
          backgroundColor: "var(--paper)",
          backgroundImage: `radial-gradient(circle, var(--dots) 1px, transparent 1px)`,
          backgroundSize: "12px 12px",
        }}
      >
        <div className="absolute top-0 left-4 z-10 rounded-b-sm bg-(--ink) px-3 py-1 font-['Permanent_Marker'] text-[11px] tracking-widest text-(--paper) uppercase sm:left-6">
          Panel 02
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto mt-12 max-w-6xl rounded-sm border-4 border-(--ink) bg-(--paper) p-5 shadow-[6px_6px_0_var(--ink)] sm:mt-16 sm:border-[5px] sm:p-8 sm:shadow-[10px_10px_0_var(--ink)] md:p-12"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, var(--ink) 0, var(--ink) 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, var(--ink) 0, var(--ink) 1px, transparent 0, transparent 50%)`,
              backgroundSize: "12px 12px",
            }}
          />

          {/* Two-column on lg+, single column otherwise */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div variants={itemVariants} className="flex flex-col">
              <h2 className="font-['Bangers'] text-[clamp(28px,6vw,60px)] leading-[0.9] tracking-wide text-(--ink) uppercase">
                Creating user-friendly products with modern code.
              </h2>

              <div className="mt-6 space-y-3 font-['Permanent_Marker'] text-xs leading-relaxed tracking-tight text-(--ink) uppercase sm:mt-8 sm:space-y-4 sm:text-sm">
                <p>
                  I'm a Full Stack Developer who enjoys building websites and
                  apps that feel smooth, responsive, and easy to use.
                </p>
                <p>
                  My approach: clean code, strong layout structure, and a focus
                  on performance.
                </p>
                <p>
                  I'm especially into turning ideas into practical digital
                  experiences.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4">
                {[
                  { label: "Identity", value: "Hamza Nasir" },
                  { label: "Class", value: "Full Stack Dev" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-sm border-[3px] border-(--ink) bg-(--paper) p-2.5 shadow-[4px_4px_0_var(--ink)] sm:p-3"
                  >
                    <p className="font-['Permanent_Marker'] text-[9px] uppercase opacity-60">
                      {stat.label}
                    </p>
                    <p className="font-['Bangers'] text-lg tracking-wider text-(--ink) uppercase sm:text-xl">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2×2 grid of highlight cards — responsive */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {HIGHLIGHTS.map((h, i) => (
                <HighlightCard
                  key={i}
                  icon={h.icon}
                  title={h.title}
                  desc={h.desc}
                  color={h.color}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

/**
 * AboutSection.tsx — Comic Book Style (Responsive Update)
 */
import { Lightbulb, MessageSquare, Palette, Trees } from "lucide-react";
import { useRef, useCallback, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "#/util/tailwindmerge";

interface HighlightCardProps {
  icon: React.ReactElement;
  title: string;
  desc: string;
  color: string;
}

function HighlightCard({ icon, title, desc, color }: HighlightCardProps) {
  const phrases = [
    { text: "KRAK!", bg: "bg-red-600" },
    { text: "POW!", bg: "bg-yellow-400" },
    { text: "BAM!", bg: "bg-blue-600" },
    { text: "ZAP!", bg: "bg-green-600" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <TiltCard ink="var(--ink)">
      <div className="group relative overflow-hidden rounded-sm border-[3px] border-(--ink) bg-(--paper) p-4 transition-all duration-300 hover:shadow-[8px_8px_0_var(--ink)] sm:p-5">
        {/* Interactive Color Burst on Hover */}
        <div
          className={cn(
            "absolute top-0 right-0 left-0 h-1.5 opacity-100 transition-all duration-500 group-hover:h-full group-hover:opacity-20",
            color,
          )}
          style={{
            backgroundImage: `radial-gradient(circle, var(--ink) 1.5px, transparent 1.5px)`,
            backgroundSize: "6px 6px",
          }}
        />

        {/* Secret Action Label */}
        <div
          className={cn(
            "absolute -top-10 -right-10 z-20 flex h-16 w-16 scale-0 items-center justify-center rounded-full border-4 border-black font-['Bangers'] text-base text-white shadow-[4px_4px_0_var(--ink)] transition-all duration-300 group-hover:-top-3 group-hover:-right-3 group-hover:scale-100 group-hover:rotate-12 sm:h-20 sm:w-20 sm:text-xl",
            phrases[index].bg,
          )}
        >
          {phrases[index].text}
        </div>

        <div className="relative z-10">
          <div className="mb-2 inline-block text-2xl transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12 group-hover:drop-shadow-[2px_2px_0_var(--ink)] sm:mb-3 sm:text-3xl">
            {icon}
          </div>

          <h3 className="font-['Bangers'] text-xl tracking-wide text-(--ink) uppercase transition-colors duration-300 group-hover:text-red-600 sm:text-2xl">
            {title}
          </h3>

          <p className="mt-2 font-['Permanent_Marker'] text-[10px] leading-relaxed tracking-tighter text-(--ink) uppercase opacity-80 transition-opacity group-hover:opacity-100 sm:text-[11px]">
            {desc}
          </p>
        </div>

        <div
          className={cn(
            "absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full",
            color,
          )}
        />
      </div>
    </TiltCard>
  );
}

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
  const shadowX = useTransform(rotateY, [-10, 0, 10], [12, 6, -2]);
  const shadowY = useTransform(rotateX, [-10, 0, 10], [-2, 6, 12]);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      rawY.set(((e.clientX - r.left) / r.width - 0.5) * 15);
      rawX.set(((e.clientY - r.top) / r.height - 0.5) * -15);
    },
    [rawX, rawY],
  );

  return (
    <div
      ref={ref}
      className="relative perspective-[900px]"
      onMouseMove={onMove}
      onMouseEnter={() => scale.set(1.03)}
      onMouseLeave={() => {
        rawX.set(0);
        rawY.set(0);
        scale.set(1);
      }}
    >
      <motion.div
        className="absolute inset-0 z-0 rounded-sm opacity-70"
        style={{
          backgroundImage: `radial-gradient(circle, ${ink} 1.5px, transparent 1.5px)`,
          backgroundSize: "6px 6px",
          x: shadowX,
          y: shadowY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

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

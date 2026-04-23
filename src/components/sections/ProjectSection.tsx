/**
 * ProjectSection.tsx — Comic Book Style (Updated)
 */

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const PROJECTS = [
  {
    title: "Python Project",
    screenshot:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    techstack: ["Python", "Flask", "SQLite"],
    description:
      "A Python-powered web app for managing and displaying project data through a clean interface.",
    href: "#",
    hoverColor: "#9AD872", // Green reveal
  },
  {
    title: "Automation Tool",
    screenshot:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1200",
    techstack: ["Python", "Selenium", "Pandas"],
    description:
      "Workflow automation for repetitive tasks — streamlines data handling and boosts productivity.",
    href: "#",
    hoverColor: "#ff4d4d", // Red reveal
  },
  {
    title: "Portfolio App",
    screenshot:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8c?auto=format&fit=crop&q=80&w=1200",
    techstack: ["React", "TypeScript", "Tailwind"],
    description:
      "A modern portfolio built to showcase projects, technical strengths, and a polished design system.",
    href: "#",
    hoverColor: "#38bdf8", // Blue reveal
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
  const shadowX = useTransform(rotateY, [-10, 0, 10], [12, 8, -2]);
  const shadowY = useTransform(rotateX, [-10, 0, 10], [-2, 8, 12]);

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
      className="relative [perspective:900px]"
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
        className="relative z-10"
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function ProjectSection() {
  // Use CSS variables to match HeroSection
  const themeStyles = {
    "--ink": "#0a0a0a",
    "--paper": "#f0ede6",
    "--dots": "rgba(10,10,10,0.15)",
  } as React.CSSProperties;

  return (
    <div style={themeStyles}>
      <section
        id="projects"
        className="relative flex min-h-screen items-center border-t-4 border-(--ink) px-6 py-20 pt-24 transition-colors duration-300 md:pt-32"
        style={{
          backgroundColor: "var(--paper)",
          backgroundImage: `radial-gradient(circle, var(--dots) 1px, transparent 1px)`,
          backgroundSize: "12px 12px",
        }}
      >
        {/* Panel 02 label */}
        <div className="absolute top-0 left-6 z-10 rounded-b-sm bg-(--ink) px-3 py-1 font-['Permanent_Marker'] text-[11px] tracking-widest text-(--paper) uppercase">
          Panel 03
        </div>

        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div
              className="inline-block max-w-xl rounded-sm border-[4px] border-(--ink) bg-(--paper) p-5 shadow-[6px_6px_0_var(--ink)] md:p-6"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              <h2 className="font-['Bangers'] text-[clamp(28px,4vw,42px)] leading-tight tracking-wide text-(--ink) uppercase">
                The Mission Log: Latest Deployments
              </h2>
              <p className="mt-3 max-w-md text-xs leading-relaxed tracking-tight text-(--ink) uppercase opacity-80">
                A selection of work across dev, UI thinking, and practical
                problem-solving. Engineering clean code with a visual punch.
              </p>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TiltCard ink="var(--ink)">
                  <article className="group relative overflow-hidden rounded-sm border-[4px] border-(--ink) bg-(--paper)">
                    {/* Header Bar */}
                    <div className="flex items-center justify-between bg-(--ink) px-4 py-2 text-(--paper)">
                      <span className="font-['Bangers'] text-xl tracking-wider uppercase">
                        {project.title}
                      </span>
                      <span className="font-['Permanent_Marker'] text-[10px] opacity-70">
                        VOL. {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Image Area with Reveal Effect */}
                    <div className="relative aspect-[16/9] max-h-[180px] overflow-hidden border-b-[4px] border-(--ink)">
                      <img
                        src={project.screenshot}
                        alt={project.title}
                        className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                      />
                      {/* Halftone Overlay */}
                      <div
                        className="pointer-events-none absolute inset-0 z-10 opacity-40 mix-blend-multiply transition-opacity group-hover:opacity-10"
                        style={{
                          backgroundImage: `radial-gradient(circle, var(--ink) 1px, transparent 1px)`,
                          backgroundSize: "6px 6px",
                        }}
                      />
                      {/* Color Wash on Hover */}
                      <div
                        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                        style={{ backgroundColor: project.hoverColor }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="mb-4 font-['Permanent_Marker'] text-xs leading-relaxed text-(--ink) uppercase">
                        {project.description}
                      </p>

                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.techstack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-sm border-2 border-(--ink) bg-(--paper) px-2 py-0.5 font-['Permanent_Marker'] text-[9px] tracking-tighter text-(--ink) uppercase shadow-[2px_2px_0_var(--ink)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <motion.a
                        href={project.href}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block w-full border-[3px] border-(--ink) bg-(--ink) py-2 text-center font-['Bangers'] text-lg tracking-widest text-(--paper) uppercase no-underline shadow-[4px_4px_0_#888] transition-all hover:bg-blue-600 active:shadow-none"
                      >
                        Read Files →
                      </motion.a>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

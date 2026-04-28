/**
 * ProjectSection.tsx — Comic Book Style (Responsive Update)
 */

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const PROJECTS = [
  {
    title: "UK Crime Map Suite",
    screenshot: "./crimwatch.png",
    techstack: ["Python", "Streamlit", "Folium", "Police API", "Postcodes API"],
    description:
      "A spatial analysis tool that visualizes real-time street-level crime data across the UK by integrating the Police.uk and Postcodes.io APIs into an interactive dashboard.",
    href: "https://github.com/HamzaNasir0/crimewatch",
    hoverColor: "#e05c5c",
  },
  {
    title: "Hammy Comics",
    screenshot: "./hammyComic.png",
    techstack: [
      "Python",
      "Streamlit",
      "aiohttp",
      "BeautifulSoup",
      "Pandas",
      "Asyncio",
    ],
    description:
      "Scrapes and processes comic data into structured JSON, then visualizes it in a fast, interactive browser-based viewer.",
    href: "https://github.com/HamzaNasir0/hammycomic",
    hoverColor: "#ff4d4d",
  },
  {
    title: "Rightmove Explorer",
    screenshot: "./java.png",
    techstack: ["Java", "Swing", "Jsoup", "Maven", "jpackage"],
    description:
      "Dark-themed desktop app that scrapes Rightmove house price data by postcode, displaying sale history, price trends, and property details in a modern card-based UI.",
    href: "https://github.com/HamzaNasir0/right-move-explorer",
    hoverColor: "#00E676",
  },
  {
    title: "Automation Tool",
    screenshot:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1200",
    techstack: ["Python", "Selenium", "Pandas"],
    description:
      "Workflow automation for repetitive tasks — streamlines data handling and boosts productivity.",
    href: "#",
    hoverColor: "#ff4d4d",
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
      className="relative h-full perspective-[900px]"
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
        className="relative z-10 h-full"
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function ProjectSection() {
  const themeStyles = {
    "--ink": "#0a0a0a",
    "--paper": "#f0ede6",
    "--dots": "rgba(10,10,10,0.15)",
  } as React.CSSProperties;

  return (
    <div style={themeStyles}>
      <section
        id="projects"
        className="relative flex min-h-screen items-center border-t-4 border-(--ink) px-4 py-16 pt-20 transition-colors duration-300 sm:px-6 sm:pt-24 md:pt-32"
        style={{
          backgroundColor: "var(--paper)",
          backgroundImage: `radial-gradient(circle, var(--dots) 1px, transparent 1px)`,
          backgroundSize: "12px 12px",
        }}
      >
        {/* Panel label */}
        <div className="absolute top-0 left-4 z-10 rounded-b-sm bg-(--ink) px-3 py-1 font-['Permanent_Marker'] text-[11px] tracking-widest text-(--paper) uppercase sm:left-6">
          Panel 03
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div
              className="inline-block max-w-full rounded-sm border-4 border-(--ink) bg-(--paper) p-4 shadow-[6px_6px_0_var(--ink)] sm:max-w-xl sm:p-5 md:p-6"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              <h2 className="font-['Bangers'] text-[clamp(24px,5vw,42px)] leading-tight tracking-wide text-(--ink) uppercase">
                The Mission Log: Latest Deployments
              </h2>
              <p className="mt-2 max-w-md text-[10px] leading-relaxed tracking-tight text-(--ink) uppercase opacity-80 sm:mt-3 sm:text-xs">
                A selection of work across dev, UI thinking, and practical
                problem-solving. Engineering clean code with a visual punch.
              </p>
            </div>
          </motion.div>

          {/* Grid: 1 col mobile → 2 col tablet → 3 col desktop */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <TiltCard ink="var(--ink)">
                  {/* 
                    grid-rows-[auto_160px_1fr]:
                      Row 1 (auto)   — header bar
                      Row 2 (160px)  — fixed-height image, never clips
                      Row 3 (1fr)    — content stretches to match tallest card in row
                    h-full ensures the article fills the motion wrapper so all cards align.
                  */}
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border-4 border-(--ink) bg-(--paper)">
                    {/* Header Bar */}
                    <div className="flex shrink-0 items-center justify-between bg-(--ink) px-4 py-2 text-(--paper)">
                      <span className="font-['Bangers'] text-lg tracking-wider uppercase sm:text-xl">
                        {project.title}
                      </span>
                      <span className="font-['Permanent_Marker'] text-[10px] opacity-70">
                        VOL. {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Image Area — fixed height, never shrinks */}
                    <div className="relative h-40 shrink-0 overflow-hidden border-b-4 border-(--ink)">
                      <img
                        src={project.screenshot}
                        alt={project.title}
                        className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 z-10 opacity-40 mix-blend-multiply transition-opacity group-hover:opacity-10"
                        style={{
                          backgroundImage: `radial-gradient(circle, var(--ink) 1px, transparent 1px)`,
                          backgroundSize: "6px 6px",
                        }}
                      />
                      <div
                        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                        style={{ backgroundColor: project.hoverColor }}
                      />
                    </div>

                    {/* Content — grows to fill remaining space, button pinned to bottom */}
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <p className="mb-3 font-['Permanent_Marker'] text-[12px] leading-relaxed text-(--ink) uppercase sm:mb-4 sm:text-xs">
                        {project.description}
                      </p>

                      <div className="mb-4 flex flex-1 flex-wrap content-start gap-1.5 sm:mb-6 sm:gap-2">
                        {project.techstack.map((tech) => (
                          <span
                            key={tech}
                            className="h-fit rounded-sm border-2 border-(--ink) bg-(--paper) px-2 py-0.5 font-['Permanent_Marker'] text-[11px] tracking-tighter text-(--ink) uppercase shadow-[2px_2px_0_var(--ink)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Button always sits at the bottom */}
                      <motion.a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-auto inline-block w-full border-[3px] border-(--ink) bg-(--ink) py-2.5 text-center font-['Bangers'] text-base tracking-widest text-(--paper) uppercase no-underline shadow-[4px_4px_0_#888] transition-all hover:bg-blue-600 active:shadow-none sm:py-2 sm:text-lg"
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

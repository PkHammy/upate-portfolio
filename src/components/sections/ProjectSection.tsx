/**
 * ProjectSection.tsx — Comic Book Style (Responsive Update)
 */

import { motion } from "framer-motion";
import TiltCard from "#/components/ui/TiltCard";

const PROJECTS = [
  {
    title: "Manga Shelf",
    techstack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    description:
      "Track your manga collection, manage collector profiles, and back up your shelves with private cloud saves.",
    href: "https://pkhammy.github.io/Manga-Collector/",
    sourceHref: "https://github.com/PkHammy/Manga-Collector",
    hoverColor: "#a78bfa",
    screenshot: "./projects/manga-shelf.svg",
  },
  {
    title: "Undercover",
    techstack: ["React", "TypeScript", "Express", "Socket.IO"],
    description:
      "A multiplayer imposter party game with secret roles, custom word packs, live voting, and room invites.",
    href: "https://undercover-7acj.onrender.com/",
    sourceHref: "https://github.com/PkHammy/undercover",
    hoverColor: "#fb7185",
    screenshot: "./projects/undercover.svg",
  },
  {
    title: "Hammy Keys",
    techstack: ["Python", "CustomTkinter", "Windows"],
    description:
      "Remap Windows keys and shortcuts while keeping your NuPhy Halo wireless. Includes profiles, live key testing, and a portable EXE.",
    href: "https://github.com/PkHammy/nuphy-Halo-65",
    sourceHref: "https://github.com/PkHammy/nuphy-Halo-65",
    hoverColor: "#67e8f9",
    screenshot: "./projects/hammy-keys.svg",
  },
  {
    title: "Save One",
    techstack: ["React", "Vite", "JavaScript"],
    description:
      "Choose a favourite game from each year, share your collection, and play a knockout tournament to crown your all-time champion.",
    href: "https://pkhammy.github.io/saveone/",
    sourceHref: "https://github.com/PkHammy/saveone",
    hoverColor: "#facc15",
    screenshot: "./projects/save-one.svg",
  },
  {
    title: "Rider Budget",
    techstack: ["Python", "Flask", "SQLite", "HTMX", "Tailwind CSS"],
    description:
      "Track delivery earnings, expenses, and shifts with weekly goals, net hourly rates, history, and CSV exports.",
    href: "https://pkhammy.pythonanywhere.com/",
    hoverColor: "#86efac",
    screenshot: "./projects/rider-budget.svg",
  },
  {
    title: "KeyComics",
    screenshot: "./hammyComic.png",
    techstack: ["JavaScript", "HTML", "CSS"],
    description:
      "Browse your exported comic collection with search, key-issue filters, pricing, and variant covers in a fast browser viewer.",
    href: "https://pkhammy.github.io/hammycomic/",
    sourceHref: "https://github.com/PkHammy/hammycomic",
    hoverColor: "#ff4d4d",
  },
  {
    title: "Crimewatch UK",
    screenshot: "./crimwatch.png",
    techstack: ["Python", "Streamlit", "Folium", "Police API", "Postcodes API"],
    description:
      "Explore street-level UK crime data by postcode with interactive maps, category breakdowns, and a companion CLI for HTML map exports.",
    href: "https://crimewatchuk.streamlit.app/",
    sourceHref: "https://github.com/PkHammy/crimewatch",
    hoverColor: "#e05c5c",
  },
  {
    title: "Rightmove Explorer",
    screenshot: "./java.png",
    techstack: ["Java", "Swing", "Jsoup", "Maven"],
    description:
      "A desktop app for browsing Rightmove house price data, sale history, and property details by postcode.",
    href: "https://github.com/PkHammy/right-move-explorer",
    sourceHref: "https://github.com/PkHammy/right-move-explorer",
    hoverColor: "#00E676",
  },
];

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
                <TiltCard ink="var(--ink)" fullHeight>
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
                        alt={`${project.title} project preview`}
                        loading="lazy"
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
                        {project.href.includes("github.com")
                          ? "View Project →"
                          : "Launch App →"}
                      </motion.a>
                      {project.sourceHref &&
                        project.sourceHref !== project.href && (
                          <a
                            href={project.sourceHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 text-center text-xs font-bold text-(--ink) underline underline-offset-4"
                          >
                            View source on GitHub
                          </a>
                        )}
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

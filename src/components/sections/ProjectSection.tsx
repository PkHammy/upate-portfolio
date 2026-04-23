import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  screenshot: string;
  techstack: string[];
  description: string;
  href?: string;
}

const allProjects: Project[] = [
  {
    title: "Python Project",
    screenshot:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    techstack: ["Python", "Flask", "SQLite"],
    description:
      "A Python-powered web application designed to manage, organize, and display project data through a clean interface.",
    href: "#",
  },
  {
    title: "Automation Tool",
    screenshot:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1200",
    techstack: ["Python", "Selenium", "Pandas"],
    description:
      "An automation workflow for repetitive tasks, helping streamline processes and improve productivity with data handling.",
    href: "#",
  },
  {
    title: "Portfolio App",
    screenshot:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
    techstack: ["React", "TypeScript", "Tailwind"],
    description:
      "A modern portfolio experience built to showcase projects, technical strengths, and a polished responsive design system.",
    href: "#",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
              Featured Work
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Projects that blend clean engineering with modern presentation.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              A selection of work that highlights development, UI thinking, and
              practical problem-solving across different project types.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/5 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-950">
                    {project.title}
                  </h3>
                  <a
                    href={project.href}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-950 hover:text-white"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techstack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

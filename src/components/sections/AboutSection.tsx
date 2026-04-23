import { motion } from "framer-motion";
import { Code2, Layers3, MonitorSmartphone, Rocket } from "lucide-react";

const highlights = [
  {
    title: "Frontend Focus",
    description:
      "Responsive layouts, clean interactions, and accessible UI patterns.",
    icon: MonitorSmartphone,
  },
  {
    title: "Full Stack Skills",
    description:
      "Comfortable building with React, TypeScript, Python, and modern tooling.",
    icon: Layers3,
  },
  {
    title: "Problem Solving",
    description:
      "I enjoy turning rough ideas into practical, polished digital products.",
    icon: Code2,
  },
  {
    title: "Continuous Growth",
    description:
      "Always improving my workflow, code quality, and design decisions.",
    icon: Rocket,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-10"
    >
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-12"
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
              About Me
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Creating user-friendly products with modern code and thoughtful
              design.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                I’m a{" "}
                <span className="font-semibold text-slate-900">
                  Full Stack Developer
                </span>{" "}
                who enjoys building websites and applications that feel smooth,
                responsive, and easy to use across all screen sizes.
              </p>
              <p>
                My approach combines clean code, strong layout structure, and a
                focus on performance so the final result looks polished and
                works well in the real world.
              </p>
              <p>
                I’m especially interested in turning ideas into practical
                digital experiences that are modern, maintainable, and pleasant
                to interact with.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                  Name
                </p>
                <p className="mt-2 text-lg font-bold text-slate-950">
                  Hamza Nasir
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                  Role
                </p>
                <p className="mt-2 text-lg font-bold text-slate-950">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

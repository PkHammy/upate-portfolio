import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import {
  DiCss3,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiPython,
  DiReact,
} from "react-icons/di";
import ActionButton from "../ActionButton";

const techStack = [
  { name: "Python", Icon: DiPython, color: "#3776AB", bg: "#EBF4FF" },
  { name: "JavaScript", Icon: DiJavascript1, color: "#B8860B", bg: "#FEFCE8" },
  { name: "React", Icon: DiReact, color: "#0891B2", bg: "#ECFEFF" },
  { name: "HTML5", Icon: DiHtml5, color: "#EA580C", bg: "#FFF7ED" },
  { name: "Java", Icon: DiJava, color: "#2563EB", bg: "#EFF6FF" },
  { name: "CSS", Icon: DiCss3, color: "#2563EB", bg: "#EFF6FF" },
];

const RADIUS = 150;

export default function HeroSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const angleRef = useRef(0);
  const [, setTick] = useState(0);

  useAnimationFrame((_, delta) => {
    angleRef.current += delta * 0.00012;
    setTick((value) => value + 1);
  });

  const orbitItems = techStack.map((tech, index) => {
    const baseAngle = (index / techStack.length) * 2 * Math.PI;
    const currentAngle = baseAngle + angleRef.current;

    return {
      ...tech,
      x: Math.cos(currentAngle) * RADIUS,
      y: Math.sin(currentAngle) * RADIUS,
    };
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.16),_transparent_35%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)] px-4 pt-28 pb-16 sm:px-6 lg:px-10"
    >
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            <Sparkles size={16} className="text-indigo-600" />
            Full Stack Developer · Clean UI · Practical Solutions
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
            Building fast,
            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              modern web experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I’m Hamza Nasir, a developer focused on responsive interfaces,
            polished user experiences, and reliable full stack projects built
            with modern web tools.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionButton
              text="View Projects"
              href="#projects"
              className="gap-2"
            />
            <ActionButton
              text="Download CV"
              href="#"
              variant="secondary"
              className="gap-2"
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Projects built", value: "10+" },
              { label: "Core stack", value: "React · Python" },
              { label: "Focus", value: "UI + Performance" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-2xl font-bold text-slate-950">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative flex min-h-[420px] items-center justify-center"
        >
          <div className="absolute inset-auto h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="relative hidden h-[380px] w-[380px] items-center justify-center lg:flex">
            <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-slate-300/80" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10 h-56 w-56 overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl shadow-indigo-950/10 outline outline-4 outline-indigo-500/20"
            >
              <img
                src="/profile_pic.jpg"
                alt="Hamza Nasir"
                className="h-full w-full object-cover object-center"
              />
            </motion.div>

            {orbitItems.map((tech, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <motion.div
                  key={tech.name}
                  animate={{ x: tech.x, y: tech.y }}
                  transition={{ type: "tween", duration: 0 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="absolute z-20 flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-lg transition-transform duration-200"
                  style={{
                    background: isHovered ? tech.bg : "#ffffff",
                    borderColor: isHovered ? tech.color : "#e2e8f0",
                    transform: `scale(${isHovered ? 1.15 : 1})`,
                    boxShadow: isHovered
                      ? `0 12px 24px ${tech.color}33`
                      : "0 10px 20px rgba(15,23,42,0.08)",
                  }}
                  title={tech.name}
                >
                  <tech.Icon size={30} color={tech.color} />
                </motion.div>
              );
            })}
          </div>

          <div className="grid w-full gap-4 lg:hidden">
            <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl shadow-indigo-950/10 outline outline-4 outline-indigo-500/20">
              <img
                src="/profile_pic.jpg"
                alt="Hamza Nasir"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <tech.Icon size={20} color={tech.color} />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

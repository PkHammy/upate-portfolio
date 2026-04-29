import { useState } from "react";
import { motion } from "framer-motion";
import TiltCard from "#/components/ui/TiltCard";
import SpeechBubble from "#/components/ui/SpeechBubble";
import ComicButton from "#/components/ui/ComicButton";
import { CodeBlocks } from "#/components/ui/CodeBlocks";
import type { CodeBlocksProps } from "#/components/ui/CodeBlocks";
import PhotoPanel from "#/components/features/PhotoPanel";

// Import fonts via CSS
const fonts = `
  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Permanent+Marker&display=swap');
`;

export default function HeroSection() {
  const webFrontendStack: CodeBlocksProps[] = [
    { text: "React", className: "hover:bg-[#61DAFB] hover:text-black" },
    { text: "TypeScript", className: "hover:bg-[#3178C6] hover:text-white" },
    { text: "Tailwind", className: "hover:bg-[#06B6D4] hover:text-white" },
  ];

  const dataDashboardStack: CodeBlocksProps[] = [
    { text: "Streamlit", className: "hover:bg-[#FF4B4B] hover:text-white" },
    { text: "Folium", className: "hover:bg-[#77B02A] hover:text-white" },
  ];

  const coreEngineStack: CodeBlocksProps[] = [
    { text: "Python", className: "hover:bg-[#3776AB] hover:text-white" },
    { text: "Node.js", className: "hover:bg-[#339933] hover:text-white" },
    { text: "Java", className: "hover:bg-[#f89820] hover:text-white" },
  ];

  const toolsLibrariesStack: CodeBlocksProps[] = [
    { text: "Pandas", className: "hover:bg-[#150458] hover:text-white" },
    { text: "Playwright", className: "hover:bg-[#2EAD33] hover:text-white" },
    { text: "Aiohttp", className: "hover:bg-[#2C3E50] hover:text-white" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const stacks = [
    { label: "Web Frontend", stack: webFrontendStack },
    { label: "Data Dashboards", stack: dataDashboardStack },
    { label: "Core Engine", stack: coreEngineStack },
    { label: "Tools & Libraries", stack: toolsLibrariesStack },
  ];
  const [isDark] = useState(false);

  const themeStyles = {
    "--ink": isDark ? "#f0f0f0" : "#0a0a0a",
    "--paper": isDark ? "#111111" : "#f0ede6",
    "--dots": isDark ? "rgba(240,240,240,0.2)" : "rgba(10,10,10,0.15)",
  } as React.CSSProperties;

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
            <TiltCard
              ink="var(--ink)"
              moveMultiplier={24}
              rotationRange={12}
              shadowXOutput={[16, 8, -2]}
              shadowYOutput={[-2, 8, 16]}
            >
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
              {/* Tab bar */}
              <div className="flex flex-wrap gap-1">
                {stacks.map(({ label }, i) => (
                  <button
                    key={label}
                    onClick={() => setActiveTab(i)}
                    className={`cursor-pointer rounded-t-sm border-[3px] border-b-0 px-3 py-1.5 font-['Bangers'] text-[13px] tracking-widest uppercase transition-all duration-100 ${
                      activeTab === i
                        ? "border-(--ink) bg-(--ink) text-(--paper)"
                        : "border-(--ink) bg-(--paper) text-(--ink) opacity-60 hover:opacity-100"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Panel */}
              <div className="flex flex-wrap gap-2 rounded-tr-sm rounded-b-sm border-[3px] border-(--ink) p-3.5">
                {stacks[activeTab].stack.map(({ text, className }, i) => (
                  <CodeBlocks key={i} text={text} className={className} />
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

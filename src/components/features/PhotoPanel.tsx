import { useState } from "react";
import { motion } from "framer-motion";
import TiltCard from "#/components/ui/TiltCard";

export default function PhotoPanel() {
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
          <TiltCard
            ink="var(--ink)"
            moveMultiplier={24}
            rotationRange={12}
            shadowXOutput={[16, 8, -2]}
            shadowYOutput={[-2, 8, 16]}
          >
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

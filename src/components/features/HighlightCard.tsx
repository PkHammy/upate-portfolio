import { useState, useEffect } from "react";
import { cn } from "#/util/tailwindmerge";
import TiltCard from "#/components/ui/TiltCard";

export interface HighlightCardProps {
  icon: React.ReactElement;
  title: string;
  desc: string;
  color: string;
}

export default function HighlightCard({
  icon,
  title,
  desc,
  color,
}: HighlightCardProps) {
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
    <TiltCard
      ink="var(--ink)"
      shadowXOutput={[12, 6, -2]}
      shadowYOutput={[-2, 6, 12]}
      scaleOnEnter={1.03}
      shadowOpacity={70}
    >
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

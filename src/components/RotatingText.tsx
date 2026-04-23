import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  splitLevelClassName?: string;
  staggerFrom?: "first" | "last" | "center";
  staggerDuration?: number;
  rotationInterval?: number;
  splitBy?: "characters" | "words";
  auto?: boolean;
  loop?: boolean;
  initial?: { y?: string | number; opacity?: number };
  animate?: { y?: string | number; opacity?: number };
  exit?: { y?: string | number; opacity?: number };
  transition?: {
    type?: string;
    damping?: number;
    stiffness?: number;
  };
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RotatingText({
  texts,
  mainClassName,
  splitLevelClassName,
  staggerFrom = "first",
  staggerDuration = 0.03,
  rotationInterval = 2000,
  splitBy = "characters",
  auto = true,
  loop = true,
  initial = { y: "100%", opacity: 0 },
  animate = { y: 0, opacity: 1 },
  exit = { y: "-120%", opacity: 0 },
  transition = { type: "spring", damping: 30, stiffness: 400 },
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!auto || texts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === texts.length - 1) {
          return loop ? 0 : prev;
        }
        return prev + 1;
      });
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [auto, texts.length, loop, rotationInterval]);

  const currentText = texts[currentIndex];

  const items = useMemo(() => {
    if (splitBy === "words") {
      return currentText.split(" ");
    }

    return Array.from(currentText);
  }, [currentText, splitBy]);

  function getDelay(index: number, total: number) {
    if (staggerFrom === "first") return index * staggerDuration;
    if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;

    const center = Math.floor(total / 2);
    return Math.abs(center - index) * staggerDuration;
  }

  return (
    <motion.span
      layout
      className={cn(
        "relative inline-flex flex-wrap whitespace-pre-wrap",
        mainClassName,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          aria-hidden="true"
          className="inline-flex flex-wrap whitespace-pre-wrap"
        >
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className={cn("inline-flex", splitLevelClassName)}
            >
              <motion.span
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{
                  ...transition,
                  delay: getDelay(index, items.length),
                }}
                className="inline-block"
              >
                {item}
              </motion.span>

              {splitBy === "words" && index !== items.length - 1 && (
                <span className="whitespace-pre"> </span>
              )}
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

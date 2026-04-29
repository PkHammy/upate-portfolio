import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  ink: string;
  moveMultiplier?: number;
  rotationRange?: number;
  shadowXOutput?: [number, number, number];
  shadowYOutput?: [number, number, number];
  scaleOnEnter?: number;
  shadowOpacity?: number;
  fullHeight?: boolean;
}

export default function TiltCard({
  children,
  ink,
  moveMultiplier = 15,
  rotationRange = 10,
  shadowXOutput = [12, 8, -2],
  shadowYOutput = [-2, 8, 12],
  scaleOnEnter = 1.02,
  shadowOpacity = 80,
  fullHeight = false,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(rawX, { stiffness: 260, damping: 20 });
  const rotateY = useSpring(rawY, { stiffness: 260, damping: 20 });
  const scale = useSpring(1, { stiffness: 300, damping: 25 });

  const inputRange: [number, number, number] = [
    -rotationRange,
    0,
    rotationRange,
  ];
  const shadowX = useTransform(rotateY, inputRange, shadowXOutput);
  const shadowY = useTransform(rotateX, inputRange, shadowYOutput);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      rawY.set(((e.clientX - r.left) / r.width - 0.5) * moveMultiplier);
      rawX.set(((e.clientY - r.top) / r.height - 0.5) * -moveMultiplier);
    },
    [rawX, rawY, moveMultiplier],
  );

  return (
    <div
      ref={ref}
      className={
        fullHeight
          ? "relative h-full perspective-[900px]"
          : "relative perspective-[900px]"
      }
      onMouseMove={onMove}
      onMouseEnter={() => scale.set(scaleOnEnter)}
      onMouseLeave={() => {
        rawX.set(0);
        rawY.set(0);
        scale.set(1);
      }}
    >
      <motion.div
        className={`absolute inset-0 z-0 rounded-sm ${shadowOpacity === 70 ? "opacity-70" : "opacity-80"}`}
        style={{
          backgroundImage: `radial-gradient(circle, ${ink} 1.5px, transparent 1.5px)`,
          backgroundSize: "6px 6px",
          x: shadowX,
          y: shadowY,
        }}
      />
      <motion.div
        className={fullHeight ? "relative z-10 h-full" : "relative z-10"}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

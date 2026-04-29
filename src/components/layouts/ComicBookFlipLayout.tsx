"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  forwardRef,
  useImperativeHandle,
  type ReactNode,
} from "react";
import { motion, useSpring, useTransform } from "framer-motion";

// ─── Handle ───────────────────────────────────────────────────────────────────

export interface FlipBookHandle {
  goToPage: (index: number) => void;
  currentPage: number;
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface FlipBookCtx {
  progress: ReturnType<typeof useSpring>;
  total: number;
  currentPage: number;
}

const Ctx = createContext<FlipBookCtx | null>(null);
function useCtx() {
  const c = useContext(Ctx);
  if (!c) throw new Error("Must be inside FlipBook");
  return c;
}

// ─── FlipBook ─────────────────────────────────────────────────────────────────

interface FlipBookProps {
  children: ReactNode;
  total: number;
  className?: string;
  onPageChange?: (index: number) => void;
}

export const FlipBook = forwardRef<FlipBookHandle, FlipBookProps>(
  function FlipBook({ children, total, className = "", onPageChange }, ref) {
    const outerRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);

    // Spring-driven progress: 0 = page 0 fully shown, 1 = page 1 shown, etc.
    const rawProgress = useSpring(0, { stiffness: 55, damping: 17, mass: 1.1 });

    useEffect(() => {
      return rawProgress.on("change", (v) => {
        const page = Math.round(v);
        setCurrentPage(page);
        onPageChange?.(page);
      });
    }, [rawProgress, onPageChange]);

    // Wheel / touch → advance one page at a time
    const accumRef = useRef(0);
    const cooldownRef = useRef(false);

    const advance = useCallback(
      (dir: 1 | -1) => {
        if (cooldownRef.current) return;
        cooldownRef.current = true;
        setTimeout(() => {
          cooldownRef.current = false;
        }, 750);
        const next = Math.max(
          0,
          Math.min(total - 1, Math.round(rawProgress.get()) + dir),
        );
        rawProgress.set(next);
      },
      [rawProgress, total],
    );

    useEffect(() => {
      const el = outerRef.current;
      if (!el) return;

      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        accumRef.current += e.deltaY;
        if (Math.abs(accumRef.current) > 50) {
          advance(accumRef.current > 0 ? 1 : -1);
          accumRef.current = 0;
        }
      };

      let ty = 0;
      const onTouchStart = (e: TouchEvent) => {
        ty = e.touches[0].clientY;
      };
      const onTouchEnd = (e: TouchEvent) => {
        const dy = ty - e.changedTouches[0].clientY;
        if (Math.abs(dy) > 40) advance(dy > 0 ? 1 : -1);
      };

      el.addEventListener("wheel", onWheel, { passive: false });
      el.addEventListener("touchstart", onTouchStart, { passive: true });
      el.addEventListener("touchend", onTouchEnd, { passive: true });
      return () => {
        el.removeEventListener("wheel", onWheel);
        el.removeEventListener("touchstart", onTouchStart);
        el.removeEventListener("touchend", onTouchEnd);
      };
    }, [advance]);

    useImperativeHandle(ref, () => ({
      goToPage: (index) =>
        rawProgress.set(Math.max(0, Math.min(total - 1, index))),
      get currentPage() {
        return Math.round(rawProgress.get());
      },
    }));

    return (
      <Ctx.Provider value={{ progress: rawProgress, total, currentPage }}>
        {/*
          Mobile: full width (no sidebar).
          Desktop (md+): offset by sidebar width w-16 = 4rem.
          Fixed, exact viewport fill, clips all overflowing 3D transforms.
        */}
        <div
          ref={outerRef}
          className={`fixed top-12 right-0 bottom-0 left-0 overflow-hidden md:top-0 md:left-16 ${className}`}
          style={{
            perspective: "1400px",
            perspectiveOrigin: "0% 50%",
          }}
        >
          {children}
        </div>
      </Ctx.Provider>
    );
  },
);

// ─── ComicBookPage ────────────────────────────────────────────────────────────

interface ComicBookPageProps {
  index: number;
  children: ReactNode;
  className?: string;
  backContent?: ReactNode;
}

export function ComicBookPage({
  index,
  children,
  className = "",
  backContent,
}: ComicBookPageProps) {
  const { progress, total } = useCtx();
  const isLastPage = index === total - 1;

  /*
    Page `index` starts flipping when progress goes from (index-1) → index.
    At progress = index-1 the page faces us (rotateY = 0°).
    At progress = index   the page has flipped away (rotateY = -180°).
  */
  const rotateY = useTransform(progress, [index - 1, index], [0, -180], {
    clamp: true,
  });

  // Shadow peaks at the midpoint of the flip
  const shadowOpacity = useTransform(
    progress,
    [index - 1, index - 0.5, index],
    [0, 0.65, 0],
    { clamp: true },
  );

  // Slight lift mid-flip
  const scale = useTransform(
    progress,
    [index - 1, index - 0.5, index],
    [1, 1.015, 1],
    { clamp: true },
  );

  // Disable pointer events while page is mid-air (between -8° and -172°)
  const [isFlipping, setIsFlipping] = useState(false);
  useEffect(() => {
    return rotateY.on("change", (v) => {
      setIsFlipping(v < -8 && v > -172);
    });
  }, [rotateY]);

  /*
    Z-index layering:
    - Pages stack front-to-back: page 0 on top, last page at bottom.
    - Boost the in-flight page so it always renders above everything.
    - We add total+10 to beat the base stack during the flip animation.
  */
  const baseZ = isLastPage ? 1 : total + 2 - index;
  const zIndex = isFlipping ? total + 20 : baseZ;

  if (isLastPage) {
    return (
      <div
        className={`absolute inset-0 h-full w-full overflow-hidden ${className}`}
        style={{ zIndex: 1 }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{
        zIndex,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        transformOrigin: "left center",
        willChange: "transform",
        pointerEvents: isFlipping ? "none" : "auto",
      }}
    >
      {/* ── FRONT ── */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {children}

        {/* Left spine shimmer */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-4"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.45), transparent)",
            zIndex: 2,
          }}
        />
        {/* Right-edge shadow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-8"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.14), transparent)",
            zIndex: 2,
          }}
        />
        {/* Flip shadow overlay */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: shadowOpacity,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.28) 45%, transparent 100%)",
            zIndex: 3,
          }}
        />
      </div>

      {/* ── BACK FACE ── */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: "#ccc9bb",
        }}
      >
        {backContent ?? (
          /* Blank back — just a paper texture */
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(10,10,10,0.07) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />
        )}
        {/* Back-face highlight near spine */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, rgba(255,255,255,0.3) 0%, transparent 55%)",
          }}
        />
      </div>
    </motion.div>
  );
}

// ─── Page dots ────────────────────────────────────────────────────────────────

export function PageDots() {
  const { total, currentPage } = useCtx();
  return (
    <div className="pointer-events-none absolute bottom-5 left-1/2 z-50 flex -translate-x-1/2 gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-2 w-2 rounded-full border-2 transition-all duration-300"
          style={{
            borderColor: "#0a0a0a",
            backgroundColor: i === currentPage ? "#0a0a0a" : "transparent",
            transform: i === currentPage ? "scale(1.3)" : "scale(1)",
          }}
        />
      ))}
    </div>
  );
}

// ─── Convenience wrapper ──────────────────────────────────────────────────────

export interface PageDefinition {
  id: string;
  content: ReactNode;
  backContent?: ReactNode;
  className?: string;
}

interface ComicBookFlipLayoutProps {
  pages: PageDefinition[];
  className?: string;
  onPageChange?: (index: number) => void;
}

const ComicBookFlipLayout = forwardRef<
  FlipBookHandle,
  ComicBookFlipLayoutProps
>(function ComicBookFlipLayout({ pages, className = "", onPageChange }, ref) {
  const total = pages.length;
  return (
    <FlipBook
      ref={ref}
      total={total}
      className={className}
      onPageChange={onPageChange}
    >
      {pages.map((page, index) => (
        <ComicBookPage
          key={page.id}
          index={index}
          className={page.className}
          backContent={page.backContent}
        >
          {page.content}
        </ComicBookPage>
      ))}
      <PageDots />
    </FlipBook>
  );
});

export default ComicBookFlipLayout;

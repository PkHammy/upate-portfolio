/**
 * ContactSection.tsx — Comic Book Style
 * Section 04 with background consistency and fixed JSX nesting.
 */

import { useState, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

function TiltCard({
  children,
  ink,
}: {
  children: React.ReactNode;
  ink: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(rawX, { stiffness: 260, damping: 20 });
  const rotateY = useSpring(rawY, { stiffness: 260, damping: 20 });
  const scale = useSpring(1, { stiffness: 300, damping: 25 });
  const shadowX = useTransform(rotateY, [-10, 0, 10], [14, 8, -2]);
  const shadowY = useTransform(rotateX, [-10, 0, 10], [-2, 8, 14]);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      rawY.set(((e.clientX - r.left) / r.width - 0.5) * 15);
      rawX.set(((e.clientY - r.top) / r.height - 0.5) * -15);
    },
    [rawX, rawY],
  );

  return (
    <div
      ref={ref}
      className="relative [perspective:900px]"
      onMouseMove={onMove}
      onMouseEnter={() => scale.set(1.01)}
      onMouseLeave={() => {
        rawX.set(0);
        rawY.set(0);
        scale.set(1);
      }}
    >
      <motion.div
        className="absolute inset-0 z-0 rounded-sm opacity-80"
        style={{
          backgroundImage: `radial-gradient(circle, ${ink} 1.5px, transparent 1.5px)`,
          backgroundSize: "6px 6px",
          x: shadowX,
          y: shadowY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const labelClasses =
  "block font-['Permanent_Marker'] text-[10px] uppercase tracking-wider text-(--ink) mb-1.5";
const inputClasses =
  "w-full font-['Permanent_Marker'] text-sm uppercase tracking-tight border-3 border-(--ink) rounded-xs bg-(--paper) text-(--ink) px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-400 transition-all placeholder:opacity-40";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [pressed, setPressed] = useState(false);

  const themeStyles = {
    "--ink": "#0a0a0a",
    "--paper": "#f0ede6",
    "--mid": "#e0ddd6",
    "--dots": "rgba(10,10,10,0.15)",
  } as React.CSSProperties;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div style={themeStyles}>
      <section
        id="contact"
        className="relative border-t-4 border-(--ink) px-6 py-20 transition-colors duration-300"
        style={{
          backgroundColor: "var(--paper)",
          backgroundImage: `radial-gradient(circle, var(--dots) 1px, transparent 1px)`,
          backgroundSize: "12px 12px",
        }}
      >
        {/* Section Label Tab (Panel 04) */}
        <div className="absolute top-0 left-6 z-10 rounded-b-sm bg-(--ink) px-4 py-1.5 font-['Permanent_Marker'] text-[11px] tracking-widest text-(--paper) uppercase">
          Panel 04: The Inquiry
        </div>

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="relative overflow-hidden rounded-sm border-[5px] border-(--ink) bg-(--paper) p-8 shadow-[10px_10px_0_var(--ink)] md:p-12"
          >
            {/* Subtle Crosshatch Overlay Texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, var(--ink) 0, var(--ink) 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, var(--ink) 0, var(--ink) 1px, transparent 0, transparent 50%)`,
                backgroundSize: "10px 10px",
              }}
            />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* LEFT — Info & Speech Bubble */}
              <div className="relative z-10 flex flex-col justify-center">
                <div className="relative mb-10 inline-block self-start rounded-[2rem] border-4 border-(--ink) bg-white p-6 shadow-[6px_6px_0_var(--ink)]">
                  <h2 className="font-['Bangers'] text-[clamp(32px,4vw,52px)] leading-[0.95] tracking-wide text-(--ink) uppercase">
                    Let's Start a Conversation!
                  </h2>
                  {/* Speech Bubble Tail */}
                  <div className="absolute -bottom-4 left-10 h-6 w-6 rotate-45 border-r-4 border-b-4 border-(--ink) bg-white" />
                </div>

                <p className="font-['Permanent_Marker'] text-sm leading-relaxed tracking-tight text-(--ink)/80 uppercase">
                  Have a project in mind or just want to say hi? I'm always open
                  to new opportunities and heroic collaborations.
                </p>

                <div className="mt-10 space-y-6">
                  {[
                    {
                      label: "Direct Signal",
                      value: "hamza@email.com",
                      href: "mailto:hamza@email.com",
                    },
                    {
                      label: "Network Access",
                      value: "LinkedIn / hamza-nasir",
                      href: "#",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-['Permanent_Marker'] text-[9px] tracking-[0.2em] uppercase opacity-50">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="group inline-block font-['Bangers'] text-2xl tracking-wider text-(--ink) no-underline decoration-red-500 underline-offset-4 transition-all hover:underline"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — The Form UI */}
              <TiltCard ink="var(--ink)">
                <div className="relative z-10 rounded-sm border-4 border-(--ink) bg-(--mid) p-8 shadow-inner">
                  {/* Form Header Bar */}
                  <div className="-mx-8 -mt-8 mb-8 bg-(--ink) px-6 py-2 font-['Bangers'] text-xl tracking-[0.1em] text-(--paper) uppercase">
                    Transmission Form
                  </div>

                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.div
                        key="success"
                        initial={{ scale: 0, rotate: -15 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0 }}
                        className="py-12 text-center"
                      >
                        <div className="font-['Bangers'] text-7xl tracking-tighter text-red-600 uppercase drop-shadow-[4px_4px_0_var(--ink)]">
                          KAPOW!
                        </div>
                        <p className="mt-4 font-['Permanent_Marker'] text-lg text-(--ink) uppercase">
                          Message Sent Successfully!
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label className={labelClasses}>
                              Identity (Name)
                            </label>
                            <input
                              type="text"
                              placeholder="John Doe"
                              required
                              className={inputClasses}
                            />
                          </div>
                          <div>
                            <label className={labelClasses}>
                              Frequency (Email)
                            </label>
                            <input
                              type="email"
                              placeholder="john@example.com"
                              required
                              className={inputClasses}
                            />
                          </div>
                        </div>

                        <div>
                          <label className={labelClasses}>
                            Briefing (Message)
                          </label>
                          <textarea
                            rows={4}
                            placeholder="What's the mission?"
                            required
                            className={`${inputClasses} resize-none`}
                          />
                        </div>

                        <button
                          type="submit"
                          onMouseDown={() => setPressed(true)}
                          onMouseUp={() => setPressed(false)}
                          onMouseLeave={() => setPressed(false)}
                          className={`group relative w-full cursor-pointer rounded-xs border-3 border-(--ink) bg-yellow-400 py-4 font-['Bangers'] text-2xl tracking-widest text-(--ink) uppercase transition-all ${pressed ? "translate-x-1 translate-y-1 shadow-none" : "shadow-[6px_6px_0_var(--ink)] hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--ink)]"}`}
                        >
                          <span className="absolute -top-3 -right-2 rotate-12 rounded-sm border-2 border-(--ink) bg-red-600 px-2 py-0.5 font-['Bangers'] text-[10px] text-white">
                            ZAP!
                          </span>
                          Submit Transmission
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  {
    label: "Home",
    href: "#home",
    color: "rgba(59, 130, 246, 1)",
    base: "rgba(59, 130, 246, 0)",
  },
  {
    label: "About",
    href: "#about",
    color: "rgba(154, 216, 114, 1)",
    base: "rgba(154, 216, 114, 0)",
  },
  {
    label: "Projects",
    href: "#projects",
    color: "rgba(250, 204, 21, 1)",
    base: "rgba(250, 204, 21, 0)",
  },
  {
    label: "Contact",
    href: "#contact",
    color: "rgba(248, 113, 113, 1)",
    base: "rgba(248, 113, 113, 0)",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const ink = "#0a0a0a";
  const paper = "#f0ede6";

  const scrollToSection = (href: string, label: string) => {
    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(label);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const container = document.getElementById("snap-container");
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = NAV_LINKS.find(
              (l) => l.href === `#${entry.target.id}`,
            );
            if (link) setActive(link.label);
          }
        });
      },
      {
        root: container,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    NAV_LINKS.forEach((link) => {
      const id = link.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = document.getElementById("snap-container");
    if (!container) return;

    let lastY = container.scrollTop;

    const onScroll = () => {
      const currentY = container.scrollTop;

      if (currentY <= 10) {
        setVisible(true);
      } else if (currentY > lastY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastY = currentY;
    };

    container.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      animate={{ y: visible ? 0 : "-110%" }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed top-0 right-0 left-0 z-[100] p-3 sm:p-5"
    >
      <nav
        className="mx-auto flex max-w-[1100px] items-center justify-between rounded-sm border-4 px-5 py-2.5"
        style={{
          backgroundColor: paper,
          borderColor: ink,
          boxShadow: `6px 6px 0 ${ink}`,
        }}
      >
        {/* LOGO */}
        <button
          onClick={() => scrollToSection("#home", "Home")}
          className="font-['Bangers'] text-3xl tracking-wider uppercase"
          style={{ color: ink }}
        >
          HAMZA
          <span
            style={{
              WebkitTextStroke: "2px #0a0a0a",
              WebkitTextFillColor: "transparent",
            }}
          >
            .
          </span>
        </button>

        {/* DESKTOP */}
        <div className="hidden items-center gap-2.5 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.label;

            return (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href, link.label)}
                initial={false}
                animate={{
                  backgroundColor: isActive ? ink : link.base,
                  color: isActive ? paper : ink,
                  borderColor: isActive ? ink : "rgba(0,0,0,0)",
                }}
                whileHover={{
                  backgroundColor: isActive ? ink : link.color,
                  scale: 1.05,
                  rotate: -2,
                  boxShadow: isActive ? `0px 0px 0 ${ink}` : `4px 4px 0 ${ink}`,
                }}
                whileTap={{ scale: 0.95 }}
                className="block rounded-xs border-2 px-4 py-1.5 font-['Bangers'] text-lg tracking-wide uppercase transition-[border-color] duration-200"
              >
                {link.label}
              </motion.button>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xs border-2 px-3 py-1 font-['Bangers'] text-lg md:hidden"
          style={{ borderColor: ink, color: ink }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mx-auto mt-2 flex max-w-[1100px] flex-col gap-2 rounded-sm border-4 p-4"
            style={{
              backgroundColor: paper,
              borderColor: ink,
              boxShadow: `6px 6px 0 ${ink}`,
            }}
          >
            {NAV_LINKS.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href, link.label)}
                whileHover={{ x: 10, backgroundColor: link.color }}
                className="rounded-xs px-4 py-2 text-left font-['Bangers'] text-xl tracking-widest uppercase"
                style={{
                  color: active === link.label ? paper : ink,
                  backgroundColor: active === link.label ? ink : "transparent",
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

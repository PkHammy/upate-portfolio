import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, User, FolderCode, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: FolderCode },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 40);
      setLastScrollY(currentScrollY);

      const sections = navLinks
        .map((link) => ({
          label: link.label,
          element:
            link.href === "#home"
              ? document.documentElement
              : document.querySelector(link.href),
        }))
        .filter((item) => item.element);

      for (const section of sections) {
        const rect = section.element!.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(section.label);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/80 px-3 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
          <a
            href="#home"
            className="px-3 text-sm font-extrabold tracking-tight text-slate-900"
          >
            Hamza<span className="text-indigo-600">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = active === link.label;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setActive(link.label)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-slate-950 text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mx-4 mt-24 rounded-3xl border border-white/60 bg-white p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = active === link.label;

                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={() => {
                          setActive(link.label);
                          setIsMenuOpen(false);
                        }}
                        className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "bg-slate-950 text-white"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <Icon size={18} />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

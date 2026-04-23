import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Email", href: "mailto:hamza@email.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-extrabold tracking-tight text-slate-950">
            Hamza<span className="text-indigo-600">.</span>
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                link.label === "Email"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}

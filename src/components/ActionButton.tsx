import React from "react";

interface ActionButtonProps {
  className?: string;
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:ring-offset-2 active:scale-[0.98]";

const variants = {
  primary:
    "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:-translate-y-0.5 hover:bg-indigo-500",
  secondary:
    "border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50",
};

const ActionButton = ({
  className = "",
  text,
  href = "#",
  variant = "primary",
  target,
  rel,
}: ActionButtonProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </a>
  );
};

export default ActionButton;

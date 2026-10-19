import { o as __toESM } from "../_runtime.mjs";
import { H as require_react, _ as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as AnimatePresence, i as motion, n as useTransform, r as useMotionValue, t as useSpring } from "../_libs/framer-motion.mjs";
import { i as Lightbulb, n as Palette, r as MessageSquare, t as Trees } from "../_libs/lucide-react.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B6gXmEJG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FooterLink({ children, href, isHighlighted }) {
	const [pressed, setPressed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
		whileHover: {
			scale: 1.1,
			rotate: -3,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 10
			}
		},
		whileTap: { scale: .95 },
		onMouseDown: () => setPressed(true),
		onMouseUp: () => setPressed(false),
		onMouseLeave: () => setPressed(false),
		className: `relative inline-block rounded-xs border-3 px-5 py-2 font-['Bangers'] text-xl tracking-wide uppercase transition-all duration-75 ${isHighlighted ? "border-(--paper) bg-yellow-400 text-(--ink) hover:bg-white hover:text-red-600" : "border-(--paper) bg-transparent text-(--paper) hover:bg-(--paper) hover:text-(--ink)"} ${pressed ? "translate-x-1 translate-y-1 shadow-none" : "shadow-[5px_5px_0_rgba(240,237,230,0.3)] hover:shadow-[8px_8px_0_rgba(234,179,8,1)]"} `,
		children
	});
}
/**
* Footer.tsx — Comic Book Style
* Final Panel with halftone background and enhanced hover effects.
*/
var LINKS = [
	{
		label: "GitHub",
		href: "https://github.com/"
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/"
	},
	{
		label: "Email",
		href: "mailto:hamza@email.com"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		style: {
			"--ink": "#0a0a0a",
			"--paper": "#f0ede6"
		},
		className: "relative border-t-8 border-(--ink) bg-(--ink) px-6 py-12 text-(--paper) transition-colors duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.08]",
				style: {
					backgroundImage: `radial-gradient(circle, var(--paper) 1px, transparent 1px)`,
					backgroundSize: "14px 14px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-['Bangers'] text-4xl tracking-wider uppercase",
						children: ["HAMZA", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-yellow-400 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]",
							children: "."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 font-['Permanent_Marker'] text-[10px] tracking-[0.2em] uppercase opacity-60",
						children: ["Issue #01 — Released ", (/* @__PURE__ */ new Date()).getFullYear()]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-wrap gap-4",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
						href: link.href,
						children: link.label
					}, link.label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-12 max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-(--paper) opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 text-center font-['Permanent_Marker'] text-[11px] tracking-[0.15em] uppercase italic opacity-40",
					children: "★ Created with React · Tailwind · Passion · And a whole lot of Ink ★"
				})]
			})
		]
	});
}
var NAV_LINKS = [
	{
		label: "Home",
		href: "#home",
		color: "rgba(59, 130, 246, 1)",
		base: "rgba(59, 130, 246, 0)"
	},
	{
		label: "About",
		href: "#about",
		color: "rgba(154, 216, 114, 1)",
		base: "rgba(154, 216, 114, 0)"
	},
	{
		label: "Projects",
		href: "#projects",
		color: "rgba(250, 204, 21, 1)",
		base: "rgba(250, 204, 21, 0)"
	},
	{
		label: "Contact",
		href: "#contact",
		color: "rgba(248, 113, 113, 1)",
		base: "rgba(248, 113, 113, 0)"
	}
];
function Navbar() {
	const [active, setActive] = (0, import_react.useState)("Home");
	const [visible, setVisible] = (0, import_react.useState)(true);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const ink = "#0a0a0a";
	const paper = "#f0ede6";
	const scrollToSection = (href, label) => {
		const id = href.replace("#", "");
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			setActive(label);
			setMenuOpen(false);
		}
	};
	(0, import_react.useEffect)(() => {
		const container = document.getElementById("snap-container");
		if (!container) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const link = NAV_LINKS.find((l) => l.href === `#${entry.target.id}`);
					if (link) setActive(link.label);
				}
			});
		}, {
			root: container,
			rootMargin: "-20% 0px -70% 0px",
			threshold: 0
		});
		NAV_LINKS.forEach((link) => {
			const id = link.href.replace("#", "");
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const container = document.getElementById("snap-container");
		if (!container) return;
		let lastY = 0;
		let ticking = false;
		const getScrollY = () => {
			return container.scrollHeight > container.clientHeight ? container.scrollTop : window.scrollY;
		};
		lastY = getScrollY();
		const handleScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				const currentY = getScrollY();
				if (currentY <= 10) setVisible(true);
				else if (currentY > lastY + 4) {
					setVisible(false);
					setMenuOpen(false);
				} else if (currentY < lastY - 4) setVisible(true);
				lastY = currentY;
				ticking = false;
			});
		};
		container.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			container.removeEventListener("scroll", handleScroll);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		animate: { y: visible ? 0 : "-110%" },
		transition: {
			duration: .25,
			ease: "easeInOut"
		},
		className: "fixed top-0 right-0 left-0 z-100 p-3 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-6xl items-center justify-between rounded-sm border-4 px-4 py-2.5 sm:px-5",
			style: {
				backgroundColor: paper,
				borderColor: ink,
				boxShadow: `6px 6px 0 ${ink}`
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => scrollToSection("#home", "Home"),
					className: "font-['Bangers'] text-2xl tracking-wider uppercase sm:text-3xl",
					style: { color: ink },
					"aria-label": "Go to home",
					children: ["HAMZA", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							WebkitTextStroke: "2px #0a0a0a",
							WebkitTextFillColor: "transparent"
						},
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-2.5 md:flex",
					children: NAV_LINKS.map((link) => {
						const isActive = active === link.label;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							onClick: () => scrollToSection(link.href, link.label),
							initial: false,
							animate: {
								backgroundColor: isActive ? ink : link.base,
								color: isActive ? paper : ink,
								borderColor: isActive ? ink : "rgba(0,0,0,0)"
							},
							whileHover: {
								backgroundColor: isActive ? ink : link.color,
								scale: 1.05,
								rotate: -2,
								boxShadow: isActive ? `0px 0px 0 ${ink}` : `4px 4px 0 ${ink}`
							},
							whileTap: { scale: .95 },
							className: "block rounded-xs border-2 px-4 py-1.5 font-['Bangers'] text-lg tracking-wide uppercase transition-[border-color] duration-200",
							children: link.label
						}, link.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setMenuOpen((prev) => !prev),
					className: "rounded-xs border-2 px-3 py-1.5 font-['Bangers'] text-lg md:hidden",
					style: {
						borderColor: ink,
						color: ink
					},
					"aria-label": menuOpen ? "Close menu" : "Open menu",
					"aria-expanded": menuOpen,
					children: menuOpen ? "✕" : "☰"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -15
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -15
			},
			className: "mx-auto mt-2 flex max-w-6xl flex-col gap-2 rounded-sm border-4 p-4",
			style: {
				backgroundColor: paper,
				borderColor: ink,
				boxShadow: `6px 6px 0 ${ink}`
			},
			children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				onClick: () => scrollToSection(link.href, link.label),
				whileHover: {
					x: 10,
					backgroundColor: link.color
				},
				className: "rounded-xs px-4 py-3 text-left font-['Bangers'] text-xl tracking-widest uppercase",
				style: {
					color: active === link.label ? paper : ink,
					backgroundColor: active === link.label ? ink : "transparent"
				},
				children: link.label
			}, link.label))
		}) })]
	});
}
/**

Merges Tailwind classes without style conflicts*/
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function TiltCard({ children, ink, moveMultiplier = 15, rotationRange = 10, shadowXOutput = [
	12,
	8,
	-2
], shadowYOutput = [
	-2,
	8,
	12
], scaleOnEnter = 1.02, shadowOpacity = 80, fullHeight = false }) {
	const ref = (0, import_react.useRef)(null);
	const rawX = useMotionValue(0);
	const rawY = useMotionValue(0);
	const rotateX = useSpring(rawX, {
		stiffness: 260,
		damping: 20
	});
	const rotateY = useSpring(rawY, {
		stiffness: 260,
		damping: 20
	});
	const scale = useSpring(1, {
		stiffness: 300,
		damping: 25
	});
	const inputRange = [
		-rotationRange,
		0,
		rotationRange
	];
	const shadowX = useTransform(rotateY, inputRange, shadowXOutput);
	const shadowY = useTransform(rotateX, inputRange, shadowYOutput);
	const onMove = (0, import_react.useCallback)((e) => {
		if (!ref.current) return;
		const r = ref.current.getBoundingClientRect();
		rawY.set(((e.clientX - r.left) / r.width - .5) * moveMultiplier);
		rawX.set(((e.clientY - r.top) / r.height - .5) * -moveMultiplier);
	}, [
		rawX,
		rawY,
		moveMultiplier
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: fullHeight ? "relative h-full perspective-[900px]" : "relative perspective-[900px]",
		onMouseMove: onMove,
		onMouseEnter: () => scale.set(scaleOnEnter),
		onMouseLeave: () => {
			rawX.set(0);
			rawY.set(0);
			scale.set(1);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: `absolute inset-0 z-0 rounded-sm ${shadowOpacity === 70 ? "opacity-70" : "opacity-80"}`,
			style: {
				backgroundImage: `radial-gradient(circle, ${ink} 1.5px, transparent 1.5px)`,
				backgroundSize: "6px 6px",
				x: shadowX,
				y: shadowY
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: fullHeight ? "relative z-10 h-full" : "relative z-10",
			style: {
				rotateX,
				rotateY,
				scale,
				transformStyle: "preserve-3d"
			},
			children
		})]
	});
}
function HighlightCard({ icon, title, desc, color }) {
	const phrases = [
		{
			text: "KRAK!",
			bg: "bg-red-600"
		},
		{
			text: "POW!",
			bg: "bg-yellow-400"
		},
		{
			text: "BAM!",
			bg: "bg-blue-600"
		},
		{
			text: "ZAP!",
			bg: "bg-green-600"
		}
	];
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % phrases.length);
		}, 1e3);
		return () => clearInterval(interval);
	}, [phrases.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
		ink: "var(--ink)",
		shadowXOutput: [
			12,
			6,
			-2
		],
		shadowYOutput: [
			-2,
			6,
			12
		],
		scaleOnEnter: 1.03,
		shadowOpacity: 70,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "group relative overflow-hidden rounded-sm border-[3px] border-(--ink) bg-(--paper) p-4 transition-all duration-300 hover:shadow-[8px_8px_0_var(--ink)] sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("absolute top-0 right-0 left-0 h-1.5 opacity-100 transition-all duration-500 group-hover:h-full group-hover:opacity-20", color),
					style: {
						backgroundImage: `radial-gradient(circle, var(--ink) 1.5px, transparent 1.5px)`,
						backgroundSize: "6px 6px"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("absolute -top-10 -right-10 z-20 flex h-16 w-16 scale-0 items-center justify-center rounded-full border-4 border-black font-['Bangers'] text-base text-white shadow-[4px_4px_0_var(--ink)] transition-all duration-300 group-hover:-top-3 group-hover:-right-3 group-hover:scale-100 group-hover:rotate-12 sm:h-20 sm:w-20 sm:text-xl", phrases[index].bg),
					children: phrases[index].text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 inline-block text-2xl transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12 group-hover:drop-shadow-[2px_2px_0_var(--ink)] sm:mb-3 sm:text-3xl",
							children: icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-['Bangers'] text-xl tracking-wide text-(--ink) uppercase transition-colors duration-300 group-hover:text-red-600 sm:text-2xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-['Permanent_Marker'] text-[10px] leading-relaxed tracking-tighter text-(--ink) uppercase opacity-80 transition-opacity group-hover:opacity-100 sm:text-[11px]",
							children: desc
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full", color) })
			]
		})
	});
}
/**
* AboutSection.tsx — Comic Book Style (Responsive Update)
*/
var HIGHLIGHTS = [
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, {
			size: 32,
			color: "#881616",
			strokeWidth: 3
		}),
		title: "Frontend Focus",
		desc: "Responsive layouts, clean interactions, accessible UI.",
		color: "bg-yellow-400"
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
			size: 32,
			color: "#0b696f",
			strokeWidth: 3
		}),
		title: "Full Stack",
		desc: "React, TypeScript, Python, and modern tooling.",
		color: "bg-sky-400"
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
			size: 32,
			color: "#8c8921",
			strokeWidth: 3
		}),
		title: "Problem Solver",
		desc: "Turning rough ideas into polished digital products.",
		color: "bg-red-500"
	},
	{
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trees, {
			size: 32,
			color: "#139516",
			strokeWidth: 3
		}),
		title: "Always Growing",
		desc: "Improving workflow, code quality, and design decisions.",
		color: "bg-green-500"
	}
];
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			"--ink": "#0a0a0a",
			"--paper": "#f0ede6",
			"--dots": "rgba(10,10,10,0.15)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "about",
			className: "relative min-h-screen border-t-4 border-(--ink) px-4 py-16 pt-24 sm:px-6 sm:py-20 md:pt-32 lg:pt-40",
			style: {
				backgroundColor: "var(--paper)",
				backgroundImage: `radial-gradient(circle, var(--dots) 1px, transparent 1px)`,
				backgroundSize: "12px 12px"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-4 z-10 rounded-b-sm bg-(--ink) px-3 py-1 font-['Permanent_Marker'] text-[11px] tracking-widest text-(--paper) uppercase sm:left-6",
				children: "Panel 02"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: {
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: { staggerChildren: .12 }
					}
				},
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-80px"
				},
				className: "relative mx-auto mt-12 max-w-6xl rounded-sm border-4 border-(--ink) bg-(--paper) p-5 shadow-[6px_6px_0_var(--ink)] sm:mt-16 sm:border-[5px] sm:p-8 sm:shadow-[10px_10px_0_var(--ink)] md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 opacity-[0.03]",
					style: {
						backgroundImage: `repeating-linear-gradient(45deg, var(--ink) 0, var(--ink) 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, var(--ink) 0, var(--ink) 1px, transparent 0, transparent 50%)`,
						backgroundSize: "12px 12px"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: {
							hidden: {
								opacity: 0,
								y: 30
							},
							show: {
								opacity: 1,
								y: 0,
								transition: {
									type: "spring",
									stiffness: 300,
									damping: 22
								}
							}
						},
						className: "flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-['Bangers'] text-[clamp(28px,6vw,60px)] leading-[0.9] tracking-wide text-(--ink) uppercase",
								children: "Creating user-friendly products with modern code."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-3 font-['Permanent_Marker'] text-xs leading-relaxed tracking-tight text-(--ink) uppercase sm:mt-8 sm:space-y-4 sm:text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm a Full Stack Developer who enjoys building websites and apps that feel smooth, responsive, and easy to use." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My approach: clean code, strong layout structure, and a focus on performance." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm especially into turning ideas into practical digital experiences." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4",
								children: [{
									label: "Identity",
									value: "Hamza Nasir"
								}, {
									label: "Class",
									value: "Full Stack Dev"
								}].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-sm border-[3px] border-(--ink) bg-(--paper) p-2.5 shadow-[4px_4px_0_var(--ink)] sm:p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-['Permanent_Marker'] text-[9px] uppercase opacity-60",
										children: stat.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-['Bangers'] text-lg tracking-wider text-(--ink) uppercase sm:text-xl",
										children: stat.value
									})]
								}, stat.label))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 sm:gap-4",
						children: HIGHLIGHTS.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HighlightCard, {
							icon: h.icon,
							title: h.title,
							desc: h.desc,
							color: h.color
						}, i))
					})]
				})]
			})]
		})
	});
}
/**
* ContactSection.tsx — Comic Book Style (Responsive Update)
*/
var labelClasses = "block font-['Permanent_Marker'] text-[10px] uppercase tracking-wider text-(--ink) mb-1.5";
var inputClasses = "w-full font-['Permanent_Marker'] text-sm uppercase tracking-tight border-3 border-(--ink) rounded-xs bg-(--paper) text-(--ink) px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition-all placeholder:opacity-40 sm:py-2.5";
function ContactSection() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [pressed, setPressed] = (0, import_react.useState)(false);
	const themeStyles = {
		"--ink": "#0a0a0a",
		"--paper": "#f0ede6",
		"--mid": "#e0ddd6",
		"--dots": "rgba(10,10,10,0.15)"
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		setTimeout(() => setSent(false), 4e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: themeStyles,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "contact",
			className: "relative flex min-h-screen items-center justify-center border-t-4 border-(--ink) px-4 py-16 pt-20 transition-colors duration-300 sm:px-6 sm:py-20",
			style: {
				backgroundColor: "var(--paper)",
				backgroundImage: `radial-gradient(circle, var(--dots) 1px, transparent 1px)`,
				backgroundSize: "12px 12px"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-4 z-10 rounded-b-sm bg-(--ink) px-4 py-1.5 font-['Permanent_Marker'] text-[11px] tracking-widest text-(--paper) uppercase sm:left-6",
				children: "Panel 04: The Inquiry"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-6xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						type: "spring",
						stiffness: 280,
						damping: 22
					},
					className: "relative overflow-hidden rounded-sm border-4 border-(--ink) bg-(--paper) p-5 shadow-[6px_6px_0_var(--ink)] sm:border-[5px] sm:p-8 sm:shadow-[10px_10px_0_var(--ink)] md:p-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 opacity-[0.04]",
						style: {
							backgroundImage: `repeating-linear-gradient(45deg, var(--ink) 0, var(--ink) 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, var(--ink) 0, var(--ink) 1px, transparent 0, transparent 50%)`,
							backgroundSize: "10px 10px"
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mb-6 inline-block self-start rounded-3xl border-4 border-(--ink) bg-white p-5 shadow-[6px_6px_0_var(--ink)] sm:mb-10 sm:rounded-4xl sm:p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-['Bangers'] text-[clamp(26px,5vw,52px)] leading-[0.95] tracking-wide text-(--ink) uppercase",
										children: "Let's Start a Conversation!"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-4 left-10 h-6 w-6 rotate-45 border-r-4 border-b-4 border-(--ink) bg-white" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-['Permanent_Marker'] text-xs leading-relaxed tracking-tight text-(--ink)/80 uppercase sm:text-sm",
									children: "Have a project in mind or just want to say hi? I'm always open to new opportunities and heroic collaborations."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 space-y-5 sm:mt-10 sm:space-y-6",
									children: [{
										label: "Direct Signal",
										value: "lordhammy2gmail.com",
										href: "mailto:lordhammy2gmail.com"
									}, {
										label: "Network Access",
										value: "Github / Hamza Nasir",
										href: "https://github.com/HamzaNasir0"
									}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-['Permanent_Marker'] text-[9px] tracking-[0.2em] uppercase opacity-50",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: item.href,
										className: "group inline-block font-['Bangers'] text-xl tracking-wider text-(--ink) no-underline decoration-red-500 underline-offset-4 transition-all hover:underline sm:text-2xl",
										children: item.value
									})] }, item.label))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
							ink: "var(--ink)",
							shadowXOutput: [
								14,
								8,
								-2
							],
							shadowYOutput: [
								-2,
								8,
								14
							],
							scaleOnEnter: 1.01,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 rounded-sm border-4 border-(--ink) bg-(--mid) p-5 shadow-inner sm:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "-mx-5 -mt-5 mb-6 bg-(--ink) px-5 py-2 font-['Bangers'] text-lg tracking-widest text-(--paper) uppercase sm:-mx-8 sm:-mt-8 sm:mb-8 sm:px-6 sm:text-xl",
									children: "Transmission Form"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											scale: 0,
											rotate: -15
										},
										animate: {
											scale: 1,
											rotate: 0
										},
										exit: { scale: 0 },
										className: "py-10 text-center sm:py-12",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-['Bangers'] text-6xl tracking-tighter text-red-600 uppercase drop-shadow-[4px_4px_0_var(--ink)] sm:text-7xl",
											children: "KAPOW!"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 font-['Permanent_Marker'] text-base text-(--ink) uppercase sm:text-lg",
											children: "Message Sent Successfully!"
										})]
									}, "success") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
										exit: { opacity: 0 },
										onSubmit: handleSubmit,
										className: "space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: labelClasses,
													children: "Identity (Name)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													placeholder: "John Doe",
													required: true,
													className: inputClasses
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: labelClasses,
													children: "Frequency (Email)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													placeholder: "john@example.com",
													required: true,
													className: inputClasses
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: labelClasses,
												children: "Briefing (Message)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 4,
												placeholder: "What's the mission?",
												required: true,
												className: `${inputClasses} resize-none`
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "submit",
												onMouseDown: () => setPressed(true),
												onMouseUp: () => setPressed(false),
												onMouseLeave: () => setPressed(false),
												"aria-label": "Submit contact form",
												className: `group relative w-full cursor-pointer rounded-xs border-3 border-(--ink) bg-yellow-400 py-4 font-['Bangers'] text-xl tracking-widest text-(--ink) uppercase transition-all sm:text-2xl ${pressed ? "translate-x-1 translate-y-1 shadow-none" : "shadow-[6px_6px_0_var(--ink)] hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--ink)]"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute -top-3 -right-2 rotate-12 rounded-sm border-2 border-(--ink) bg-red-600 px-2 py-0.5 font-['Bangers'] text-[10px] text-white",
													children: "ZAP!"
												}), "Submit Transmission"]
											})
										]
									}, "form")
								})]
							})
						})]
					})]
				})
			})]
		})
	});
}
function SpeechBubble({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[18px_18px_18px_4px] border-[3px] border-(--ink) bg-(--paper) p-3 px-4 font-['Permanent_Marker'] text-xs leading-relaxed tracking-wide text-(--ink) uppercase sm:p-3.5 sm:px-5 sm:text-sm",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-3.25 left-5 z-[-1] h-0 w-0 border-t-13 border-l-12 border-t-(--ink) border-l-(--ink)" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-2.25 left-6 z-0 h-0 w-0 border-t-10 border-l-9 border-t-(--paper) border-l-(--paper)" })
		]
	});
}
function ComicButton({ children, href, variant, effect, hoverClass }) {
	const [pressed, setPressed] = (0, import_react.useState)(false);
	const bg = variant === "primary" ? "bg-(--ink) text-(--paper)" : "bg-(--paper) text-(--ink)";
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		whileHover: { scale: 1.04 },
		whileTap: { scale: .96 },
		onMouseDown: () => setPressed(true),
		onMouseUp: () => setPressed(false),
		onMouseLeave: () => setPressed(false),
		className: `relative cursor-pointer rounded-sm border-[3px] border-(--ink) px-5 py-2.5 font-['Bangers'] text-xl tracking-wider uppercase transition-all duration-75 select-none sm:px-6 sm:text-[22px] ${bg} ${pressed ? "translate-x-0.75 translate-y-0.75 shadow-[1px_1px_0_var(--ink)]" : "translate-x-0 translate-y-0 shadow-[5px_5px_0_var(--ink)]"} ${hoverClass ?? ""}`,
		children: [effect && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -top-2.5 -right-2.5 rotate-12 rounded-sm bg-(--ink) px-1.5 py-0.5 font-['Bangers'] text-[11px] tracking-wider text-(--paper) uppercase",
			children: effect
		}), children]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "no-underline",
		children: inner
	}) : inner;
}
function CodeBlocks({ text, className }) {
	const [hovered, setHovered] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		className: cn("cursor-default rounded-sm border-2 border-(--ink) bg-(--paper) transition-colors duration-150", "px-2.5 py-1 font-['Permanent_Marker'] text-[11px] tracking-wider text-(--ink) uppercase", hovered ? "translate-x-0.5 translate-y-0.5 shadow-[1px_1px_0_var(--ink)]" : "shadow-[2px_2px_0_var(--ink)]", className),
		children: text
	}) });
}
function PhotoPanel() {
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-72 w-56 sm:h-80 sm:w-64 md:h-95 md:w-75",
		style: { perspective: "1000px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			animate: { rotateY: flipped ? 180 : 0 },
			transition: {
				duration: .6,
				ease: "easeInOut"
			},
			style: { transformStyle: "preserve-3d" },
			className: "relative h-full w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { backfaceVisibility: "hidden" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					ink: "var(--ink)",
					moveMultiplier: 24,
					rotationRange: 12,
					shadowXOutput: [
						16,
						8,
						-2
					],
					shadowYOutput: [
						-2,
						8,
						16
					],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group/colorPicker relative h-72 w-56 cursor-pointer rounded-sm border-4 border-(--ink) bg-gray-500 sm:h-80 sm:w-64 sm:border-[5px] md:h-95 md:w-75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none relative inset-0 z-10",
								style: { backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, rgba(10,10,10,0.06) 0deg, rgba(10,10,10,0.06) 2.5deg, transparent 2.5deg, transparent 7.5deg)` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/hammyColour.png",
								alt: "Hamza Nasir",
								className: "absolute bottom-18 block h-full w-full scale-125 object-cover brightness-105 contrast-150 grayscale transition-all duration-200 ease-in-out group-hover/colorPicker:grayscale-0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-0 z-20 mix-blend-multiply",
								style: {
									backgroundImage: `radial-gradient(circle, rgba(10,10,10,0.12) 1px, transparent 1px)`,
									backgroundSize: "7px 7px"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFlipped(true),
								"aria-label": "Flip card to see special thanks",
								className: "absolute right-0 bottom-0 left-0 z-30 w-full cursor-pointer bg-(--ink) py-1.5 text-center font-['Permanent_Marker'] text-[11px] tracking-widest text-(--paper) uppercase transition-opacity hover:opacity-75",
								children: "★ Hammy ★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-2 right-2 z-30 flex h-6 w-6 items-center justify-center rounded-full bg-(--ink) font-['Permanent_Marker'] text-[10px] text-(--paper)",
								children: "08"
							})
						]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: {
					backfaceVisibility: "hidden",
					transform: "rotateY(180deg)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full w-full flex-col items-center justify-center gap-3 rounded-sm border-4 border-(--ink) bg-yellow-400 p-6 shadow-[6px_6px_0_var(--ink)] sm:border-[5px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-0 rounded-sm opacity-20",
							style: {
								backgroundImage: `radial-gradient(circle, var(--ink) 1.5px, transparent 1.5px)`,
								backgroundSize: "8px 8px"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-['Bangers'] text-3xl leading-tight tracking-wider text-(--ink) uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,0.15)] sm:text-4xl",
									children: [
										"Special",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Thanks!"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 space-y-2",
									children: [{
										name: "Jacob",
										href: "https://github.com/JustJacobJar"
									}, {
										name: "Jamal",
										href: "https://github.com/Jamal-Raja"
									}].map(({ name, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "block rounded-sm border-[3px] border-(--ink) bg-(--paper) px-4 py-1.5 font-['Bangers'] text-xl tracking-widest text-(--ink) uppercase shadow-[3px_3px_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_5px_0_var(--ink)] sm:text-2xl",
										children: [
											"★ ",
											name,
											" ★"
										]
									}, name))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 font-['Permanent_Marker'] text-[10px] leading-relaxed tracking-tight text-(--ink) uppercase opacity-70",
									children: [
										"Couldn't have done it",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"without you guys"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFlipped(false),
							"aria-label": "Flip card back",
							className: "relative z-10 cursor-pointer rounded-sm border-[3px] border-(--ink) bg-(--ink) px-4 py-1.5 font-['Bangers'] text-sm tracking-widest text-(--paper) uppercase shadow-[3px_3px_0_rgba(0,0,0,0.25)] transition-opacity hover:opacity-80",
							children: "← Flip Back"
						})
					]
				})
			})]
		})
	});
}
var fonts = `
  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Permanent+Marker&display=swap');
`;
function HeroSection() {
	const webFrontendStack = [
		{
			text: "React",
			className: "hover:bg-[#61DAFB] hover:text-black"
		},
		{
			text: "TypeScript",
			className: "hover:bg-[#3178C6] hover:text-white"
		},
		{
			text: "Tailwind",
			className: "hover:bg-[#06B6D4] hover:text-white"
		}
	];
	const dataDashboardStack = [{
		text: "Streamlit",
		className: "hover:bg-[#FF4B4B] hover:text-white"
	}, {
		text: "Folium",
		className: "hover:bg-[#77B02A] hover:text-white"
	}];
	const coreEngineStack = [
		{
			text: "Python",
			className: "hover:bg-[#3776AB] hover:text-white"
		},
		{
			text: "Node.js",
			className: "hover:bg-[#339933] hover:text-white"
		},
		{
			text: "Java",
			className: "hover:bg-[#f89820] hover:text-white"
		}
	];
	const toolsLibrariesStack = [
		{
			text: "Pandas",
			className: "hover:bg-[#150458] hover:text-white"
		},
		{
			text: "Playwright",
			className: "hover:bg-[#2EAD33] hover:text-white"
		},
		{
			text: "Aiohttp",
			className: "hover:bg-[#2C3E50] hover:text-white"
		}
	];
	const [activeTab, setActiveTab] = (0, import_react.useState)(0);
	const stacks = [
		{
			label: "Web Frontend",
			stack: webFrontendStack
		},
		{
			label: "Data Dashboards",
			stack: dataDashboardStack
		},
		{
			label: "Core Engine",
			stack: coreEngineStack
		},
		{
			label: "Tools & Libraries",
			stack: toolsLibrariesStack
		}
	];
	const [isDark] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			"--ink": isDark ? "#f0f0f0" : "#0a0a0a",
			"--paper": isDark ? "#111111" : "#f0ede6",
			"--dots": isDark ? "rgba(240,240,240,0.2)" : "rgba(10,10,10,0.15)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: fonts }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-screen overflow-hidden border-4 border-(--ink) px-4 pt-20 pb-10 transition-colors duration-300 sm:px-6 sm:pt-24",
			style: {
				backgroundColor: "var(--paper)",
				backgroundImage: `radial-gradient(circle, var(--dots) 1px, transparent 1px)`,
				backgroundSize: "12px 12px",
				fontFamily: "'Permanent Marker', cursive",
				color: "var(--ink)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-4 z-10 rounded-b-sm bg-(--ink) px-3 py-1 text-[11px] tracking-widest text-(--paper) uppercase sm:left-6",
				children: "Panel 01"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid min-h-[calc(100vh-100px)] max-w-6xl grid-cols-1 items-center gap-8 pt-8 md:grid-cols-2 md:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
							ink: "var(--ink)",
							moveMultiplier: 24,
							rotationRange: 12,
							shadowXOutput: [
								16,
								8,
								-2
							],
							shadowYOutput: [
								-2,
								8,
								16
							],
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-sm border-4 border-(--ink) bg-(--paper) p-5 sm:border-[5px] sm:p-7 md:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										whileHover: {
											scale: 1.05,
											WebkitTextFillColor: "#669bbc",
											transition: { duration: .2 }
										},
										className: "mb-3 cursor-default stroke-(--ink) font-['Bangers'] text-[clamp(40px,10vw,76px)] leading-[0.88] text-transparent uppercase sm:mb-5",
										style: { WebkitTextStroke: "3px var(--ink)" },
										children: "Hamza"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										whileHover: {
											scale: 1.05,
											WebkitTextFillColor: "#FF0000",
											transition: { duration: .2 }
										},
										className: "mb-4 cursor-default stroke-(--ink) font-['Bangers'] text-[clamp(40px,10vw,76px)] leading-[0.88] text-transparent uppercase sm:mb-5",
										style: { WebkitTextStroke: "3px var(--ink)" },
										children: "NASIR"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: ["Full Stack Dev", "Clean UI · Practical Code"].map((t) => {
											const isFullStack = t.includes("Full");
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
												whileHover: {
													scale: 1.1,
													rotate: isFullStack ? 2 : -2,
													backgroundColor: "#facc15",
													color: "#0a0a0a",
													borderColor: "#0a0a0a",
													boxShadow: "4px 4px 0px #0a0a0a"
												},
												transition: {
													type: "spring",
													stiffness: 400,
													damping: 10
												},
												className: `cursor-default rounded-sm border-2 border-(--ink) px-3 py-1 font-['Permanent_Marker'] text-[10px] tracking-wider uppercase transition-colors sm:text-[11px] ${isFullStack ? "bg-(--ink) text-(--paper)" : "bg-transparent text-(--ink)"}`,
												children: t
											}, t);
										})
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeechBubble, {
							ink: "var(--ink)",
							paper: "var(--paper)",
							className: "mt-3 ml-3 sm:mt-5 sm:ml-4",
							children: "\"I build apps that feel smooth, responsive, and easy to use.\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-3 sm:mt-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
								href: "#projects",
								variant: "primary",
								effect: "GO!",
								hoverClass: "hover:bg-blue-500 hover:text-white",
								children: "View Projects"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
								href: "#",
								variant: "secondary",
								effect: "GET",
								hoverClass: "hover:bg-red-500 hover:text-white",
								children: "Download CV"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 sm:mt-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1",
								children: stacks.map(({ label }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveTab(i),
									className: `cursor-pointer rounded-t-sm border-[3px] border-b-0 px-3 py-1.5 font-['Bangers'] text-[13px] tracking-widest uppercase transition-all duration-100 ${activeTab === i ? "border-(--ink) bg-(--ink) text-(--paper)" : "border-(--ink) bg-(--paper) text-(--ink) opacity-60 hover:opacity-100"}`,
									children: label
								}, label))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2 rounded-tr-sm rounded-b-sm border-[3px] border-(--ink) p-3.5",
								children: stacks[activeTab].stack.map(({ text, className }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlocks, {
									text,
									className
								}, i))
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoPanel, {})
				})]
			})]
		})]
	});
}
/**
* ProjectSection.tsx — Comic Book Style (Responsive Update)
*/
var PROJECTS = [
	{
		title: "Manga Shelf",
		techstack: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Supabase"
		],
		description: "Track your manga collection, manage collector profiles, and back up your shelves with private cloud saves.",
		href: "https://pkhammy.github.io/Manga-Collector/",
		sourceHref: "https://github.com/PkHammy/Manga-Collector",
		hoverColor: "#a78bfa",
		screenshot: "./projects/manga-shelf.svg"
	},
	{
		title: "Undercover",
		techstack: [
			"React",
			"TypeScript",
			"Express",
			"Socket.IO"
		],
		description: "A multiplayer imposter party game with secret roles, custom word packs, live voting, and room invites.",
		href: "https://undercover-7acj.onrender.com/",
		sourceHref: "https://github.com/PkHammy/undercover",
		hoverColor: "#fb7185",
		screenshot: "./projects/undercover.svg"
	},
	{
		title: "Hammy Keys",
		techstack: [
			"Python",
			"CustomTkinter",
			"Windows"
		],
		description: "Remap Windows keys and shortcuts while keeping your NuPhy Halo wireless. Includes profiles, live key testing, and a portable EXE.",
		href: "https://github.com/PkHammy/nuphy-Halo-65",
		sourceHref: "https://github.com/PkHammy/nuphy-Halo-65",
		hoverColor: "#67e8f9",
		screenshot: "./projects/hammy-keys.svg"
	},
	{
		title: "Save One",
		techstack: [
			"React",
			"Vite",
			"JavaScript"
		],
		description: "Choose a favourite game from each year, share your collection, and play a knockout tournament to crown your all-time champion.",
		href: "https://pkhammy.github.io/saveone/",
		sourceHref: "https://github.com/PkHammy/saveone",
		hoverColor: "#facc15",
		screenshot: "./projects/save-one.svg"
	},
	{
		title: "Rider Budget",
		techstack: [
			"Python",
			"Flask",
			"SQLite",
			"HTMX",
			"Tailwind CSS"
		],
		description: "Track delivery earnings, expenses, and shifts with weekly goals, net hourly rates, history, and CSV exports.",
		href: "https://pkhammy.pythonanywhere.com/",
		hoverColor: "#86efac",
		screenshot: "./projects/rider-budget.svg"
	},
	{
		title: "KeyComics",
		screenshot: "./hammyComic.png",
		techstack: [
			"JavaScript",
			"HTML",
			"CSS"
		],
		description: "Browse your exported comic collection with search, key-issue filters, pricing, and variant covers in a fast browser viewer.",
		href: "https://pkhammy.github.io/hammycomic/",
		sourceHref: "https://github.com/PkHammy/hammycomic",
		hoverColor: "#ff4d4d"
	},
	{
		title: "Crimewatch UK",
		screenshot: "./crimwatch.png",
		techstack: [
			"Python",
			"Streamlit",
			"Folium",
			"Police API",
			"Postcodes API"
		],
		description: "Explore street-level UK crime data by postcode with interactive maps, category breakdowns, and a companion CLI for HTML map exports.",
		href: "https://crimewatchuk.streamlit.app/",
		sourceHref: "https://github.com/PkHammy/crimewatch",
		hoverColor: "#e05c5c"
	},
	{
		title: "Rightmove Explorer",
		screenshot: "./java.png",
		techstack: [
			"Java",
			"Swing",
			"Jsoup",
			"Maven"
		],
		description: "A desktop app for browsing Rightmove house price data, sale history, and property details by postcode.",
		href: "https://github.com/PkHammy/right-move-explorer",
		sourceHref: "https://github.com/PkHammy/right-move-explorer",
		hoverColor: "#00E676"
	}
];
function ProjectSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			"--ink": "#0a0a0a",
			"--paper": "#f0ede6",
			"--dots": "rgba(10,10,10,0.15)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "projects",
			className: "relative flex min-h-screen items-center border-t-4 border-(--ink) px-4 py-16 pt-20 transition-colors duration-300 sm:px-6 sm:pt-24 md:pt-32",
			style: {
				backgroundColor: "var(--paper)",
				backgroundImage: `radial-gradient(circle, var(--dots) 1px, transparent 1px)`,
				backgroundSize: "12px 12px"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-4 z-10 rounded-b-sm bg-(--ink) px-3 py-1 font-['Permanent_Marker'] text-[11px] tracking-widest text-(--paper) uppercase sm:left-6",
				children: "Panel 03"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "mb-8 sm:mb-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-block max-w-full rounded-sm border-4 border-(--ink) bg-(--paper) p-4 shadow-[6px_6px_0_var(--ink)] sm:max-w-xl sm:p-5 md:p-6",
						style: { fontFamily: "'Permanent Marker', cursive" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-['Bangers'] text-[clamp(24px,5vw,42px)] leading-tight tracking-wide text-(--ink) uppercase",
							children: "The Mission Log: Latest Deployments"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-md text-[10px] leading-relaxed tracking-tight text-(--ink) uppercase opacity-80 sm:mt-3 sm:text-xs",
							children: "A selection of work across dev, UI thinking, and practical problem-solving. Engineering clean code with a visual punch."
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10",
					children: PROJECTS.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .1 },
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
							ink: "var(--ink)",
							fullHeight: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group relative flex h-full flex-col overflow-hidden rounded-sm border-4 border-(--ink) bg-(--paper)",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex shrink-0 items-center justify-between bg-(--ink) px-4 py-2 text-(--paper)",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-['Bangers'] text-lg tracking-wider uppercase sm:text-xl",
											children: project.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-['Permanent_Marker'] text-[10px] opacity-70",
											children: ["VOL. ", String(i + 1).padStart(2, "0")]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative h-40 shrink-0 overflow-hidden border-b-4 border-(--ink)",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: project.screenshot,
												alt: `${project.title} project preview`,
												loading: "lazy",
												className: "h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-110"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute inset-0 z-10 opacity-40 mix-blend-multiply transition-opacity group-hover:opacity-10",
												style: {
													backgroundImage: `radial-gradient(circle, var(--ink) 1px, transparent 1px)`,
													backgroundSize: "6px 6px"
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20",
												style: { backgroundColor: project.hoverColor }
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-1 flex-col p-4 sm:p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-3 font-['Permanent_Marker'] text-[12px] leading-relaxed text-(--ink) uppercase sm:mb-4 sm:text-xs",
												children: project.description
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-4 flex flex-1 flex-wrap content-start gap-1.5 sm:mb-6 sm:gap-2",
												children: project.techstack.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "h-fit rounded-sm border-2 border-(--ink) bg-(--paper) px-2 py-0.5 font-['Permanent_Marker'] text-[11px] tracking-tighter text-(--ink) uppercase shadow-[2px_2px_0_var(--ink)]",
													children: tech
												}, tech))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
												href: project.href,
												target: "_blank",
												rel: "noopener noreferrer",
												whileHover: { scale: 1.05 },
												whileTap: { scale: .95 },
												className: "mt-auto inline-block w-full border-[3px] border-(--ink) bg-(--ink) py-2.5 text-center font-['Bangers'] text-base tracking-widest text-(--paper) uppercase no-underline shadow-[4px_4px_0_#888] transition-all hover:bg-blue-600 active:shadow-none sm:py-2 sm:text-lg",
												children: project.href.includes("github.com") ? "View Project →" : "Launch App →"
											}),
											project.sourceHref && project.sourceHref !== project.href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: project.sourceHref,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "mt-3 text-center text-xs font-bold text-(--ink) underline underline-offset-4",
												children: "View source on GitHub"
											})
										]
									})
								]
							})
						})
					}, project.title))
				})]
			})]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[#e5e5d1]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "snap-container",
			className: "overflow-y-scroll scroll-smooth md:h-screen md:snap-y md:snap-mandatory",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "home",
					className: "md:min-h-screen",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "about",
					className: "md:min-h-screen",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "projects",
					className: "md:min-h-screen",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectSection, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex min-h-screen flex-col",
					id: "contact",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "bg-[#111111]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
					})]
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Home as component };

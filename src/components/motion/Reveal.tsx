"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PropsWithChildren } from "react";

export function Reveal({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
	const prefersReducedMotion = useReducedMotion();
	const initial = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 };
	const animate = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
	return (
		<motion.div
			initial={initial}
			whileInView={animate}
			viewport={{ once: true, margin: "-10%" }}
			transition={{ duration: 0.6, ease: "easeOut", delay }}
		>
			{children}
		</motion.div>
	);
} 
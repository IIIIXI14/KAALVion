"use client";

import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { CircuitBoard, Gauge, Handshake, Eye } from "lucide-react";

const items = [
	{
		icon: CircuitBoard,
		title: "Innovation & Technology",
		desc: "Abstract systems, data flow, and futuristic aesthetics.",
	},
	{ icon: Gauge, title: "Progress & Automation", desc: "Momentum, direction, and seamless step flows." },
	{ icon: Handshake, title: "Human Connection", desc: "Candid, authentic collaboration and proximity." },
	{ icon: Eye, title: "Abstract Metaphors", desc: "Symbolic visual language for complex ideas." },
];

export function Features() {
	return (
		<section id="about" className="py-20 sm:py-28">
			<div className="mx-auto max-w-6xl px-6">
				<Reveal>
					<h2 className="text-2xl sm:text-3xl font-semibold">A visual system built on four pillars</h2>
				</Reveal>
				<div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{items.map((it, i) => (
						<Reveal key={it.title} delay={i * 0.05}>
							<div className={cn("rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition")}> 
								<it.icon className="h-6 w-6 text-white mb-4" />
								<h3 className="font-medium">{it.title}</h3>
								<p className="mt-2 text-sm text-white/70">{it.desc}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

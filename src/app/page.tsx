import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { HeroScene } from "@/components/three/HeroScene";
import { Header } from "@/components/layout/Header";
import { Features } from "@/components/sections/Features";
import { Work } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";
import { GradientGrid } from "@/components/backgrounds/GradientGrid";

export default function Home() {
	return (
		<div className="relative font-sans min-h-screen bg-black text-white">
			<Header />
			<GradientGrid />
			<HeroScene />
			<main className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-36">
				<Reveal>
					<h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">Kaalvion</h1>
				</Reveal>
				<Reveal delay={0.1}>
					<p className="mt-4 max-w-2xl text-white/80">
						A high-end, innovation-forward experience. Abstract motion, authentic visuals, and
						immersive storytelling.
					</p>
				</Reveal>
				<Reveal delay={0.2}>
					<div className="mt-8 flex gap-4">
						<a
							href="#contact"
							className="rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:bg-neutral-200 transition"
						>
							Start a project
						</a>
						<Link
							href="#work"
							className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium hover:bg-white/10 transition"
						>
							See work
						</Link>
					</div>
				</Reveal>
			</main>
			<Features />
			<Work />
			<Contact />
		</div>
	);
}

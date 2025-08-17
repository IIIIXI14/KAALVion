export default function AboutPage() {
	return (
		<div className="mx-auto max-w-4xl px-6 py-20">
			<h1 className="text-3xl sm:text-4xl font-semibold">About</h1>
			<p className="mt-3 text-white/80">
				Kaalvion crafts innovation-forward brand experiences where the medium is the message—
				abstract motion, interactive visuals, and sound performance.
			</p>
			<div className="mt-10 grid gap-8 sm:grid-cols-2">
				<div>
					<h2 className="font-medium">Principles</h2>
					<ul className="mt-3 space-y-2 text-white/70 text-sm">
						<li>Emotion first, then description.</li>
						<li>Metaphor over literal.</li>
						<li>Performance is part of design.</li>
						<li>Accessible by default.</li>
					</ul>
				</div>
				<div>
					<h2 className="font-medium">Capabilities</h2>
					<ul className="mt-3 space-y-2 text-white/70 text-sm">
						<li>Next.js, R3F, WebGL, GSAP</li>
						<li>Creative direction & motion systems</li>
						<li>Headless CMS & content ops</li>
						<li>Analytics & experimentation</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

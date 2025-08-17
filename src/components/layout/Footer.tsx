import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-white/5 py-10">
			<div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
				<p>© {new Date().getFullYear()} Kaalvion. All rights reserved.</p>
				<nav className="flex items-center gap-5">
					<Link href="/work" className="hover:text-white">Work</Link>
					<Link href="/about" className="hover:text-white">About</Link>
					<Link href="/contact" className="hover:text-white">Contact</Link>
				</nav>
			</div>
		</footer>
	);
}

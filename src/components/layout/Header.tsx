"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
	const pathname = usePathname();
	return (
		<header className={cn("sticky top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur")}> 
			<div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
				<Link href="/" className="text-white/90 hover:text-white font-semibold">Kaalvion</Link>
				<nav className="flex items-center gap-6 text-sm text-white/70">
					<Link href="/work" className={cn("hover:text-white", pathname?.startsWith("/work") && "text-white")}>Work</Link>
					<Link href="/about" className={cn("hover:text-white", pathname === "/about" && "text-white")}>About</Link>
					<Link href="/contact" className={cn("hover:text-white", pathname === "/contact" && "text-white")}>Contact</Link>
				</nav>
			</div>
		</header>
	);
}

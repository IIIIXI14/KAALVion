import type { MetadataRoute } from "next";

function getBaseUrl() {
	const explicit = process.env.NEXT_PUBLIC_SITE_URL;
	if (explicit) return explicit;
	const vercel = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
	return vercel ?? "http://localhost:3000";
}

export default function robots(): MetadataRoute.Robots {
	const base = getBaseUrl();
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${base}/sitemap.xml`,
	};
}

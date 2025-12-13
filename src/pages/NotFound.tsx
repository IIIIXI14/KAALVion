import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/registry/magicui/aurora-text";
import logger from "@/lib/logger";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    logger.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Background in site theme */}
      <div className="pointer-events-none absolute inset-0 gradient-hero" />
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="pointer-events-none absolute inset-0 hero-particles mix-blend-screen opacity-60" />
      <div className="pointer-events-none absolute -left-10 top-10 h-[420px] w-[420px] hero-orb opacity-60" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-[360px] w-[360px] animate-gradient-mesh opacity-40" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[0.62rem] tracking-[0.45em] text-white/70">
            KAALVION • SYSTEM OFF-GRID
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-tight text-white sm:text-6xl">
            404{" "}
            <AuroraText>
              Signal lost.
            </AuroraText>
          </h1>

          <p className="mt-4 text-lg text-white/70">
            The route <span className="font-mono text-[var(--primary)]">{location.pathname}</span> isn&apos;t wired into this mesh yet.
            Head back to the control panel or jump into our live systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full border border-[rgba(236,68,59,0.65)] bg-[var(--primary)] px-8 py-6 text-[var(--primary-foreground)] font-semibold tracking-wide shadow-[0_16px_50px_rgba(236,68,59,0.55)] hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_20px_60px_rgba(255,111,100,0.62)] transition"
              onClick={() => navigate("/")}
            >
              Return to Home
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/30 bg-transparent px-8 py-6 text-white font-semibold tracking-wide hover:bg-white/10 hover:-translate-y-1 transition"
              onClick={() => navigate("/#services")}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

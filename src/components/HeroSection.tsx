import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cpu, RadioTower, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Granted patents", value: "01", detail: "Edge + IoT + UX" },
  { label: "Deployment window", value: "48h", detail: "From install to live" },
  { label: "Edge uptime", value: "99.9%", detail: "WiFi → Cloud telemetry" },
];

const showcasePanels = [
  {
    title: "WiFi Attendance Platform",
    patent: "Patent #WIFI-2024-001",
    description: "MAC + biometric dual-auth, zero hardware installs.",
    link: "/solutions/wifi-attendance",
  },
  {
    title: "Smart Farming Assistant",
    patent: "Patent #AGRI-2024-002",
    description: "ESP32 irrigation mesh + weather-fed automation.",
    link: "/solutions/smart-farming",
  },
];

const badges = [
  { icon: ShieldCheck, label: "Row-level security + biometric proof" },
  { icon: Cpu, label: "Edge-to-cloud orchestration" },
  { icon: RadioTower, label: "IoT hardware, firmware, and product UI" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 gradient-hero" />
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="pointer-events-none absolute inset-0 hero-particles mix-blend-screen opacity-60" />
      <div className="pointer-events-none absolute -left-10 top-10 w-[420px] h-[420px] hero-orb opacity-60" />
      <div className="pointer-events-none absolute right-10 bottom-10 w-[360px] h-[360px] animate-gradient-mesh opacity-40" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-10">
          <motion.div
              initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[0.62rem] tracking-[0.45em] text-white/70"
          >
              SYSTEM BLUEPRINTS • NOT WEBSITES
          </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
                We engineer patented systems{" "}
                <span className="glow-gradient">others can&apos;t replicate.</span>
              </h1>
              <p className="max-w-2xl text-lg text-white/75">
                KAALVION is an engineering atelier building WiFi attendance networks, smart farming meshes, and the
                interfaces that choreograph them. Every product is edge hardware, cloud infrastructure, and human UI
                stitched together with patent-backed precision.
              </p>
            </motion.div>

          <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
                className="rounded-full border border-[rgba(0,255,136,0.5)] bg-[var(--accent)] px-8 py-6 text-[0.95rem] font-semibold tracking-wide text-[var(--primary-foreground)] shadow-[0_0_35px_rgba(0,255,136,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:brightness-110"
            >
                Request Demo
            </Button>
            <Button
                onClick={() => scrollToSection("patents")}
              size="lg"
              variant="outline"
                className="rounded-full border border-[rgba(228,231,235,0.3)] bg-transparent px-8 py-6 text-[0.95rem] font-semibold tracking-wide text-white hover:border-[rgba(0,255,136,0.6)] hover:bg-white/5"
            >
                Explore Products
            </Button>
          </motion.div>

          <motion.div
              className="grid gap-6 text-sm text-white/80 md:grid-cols-3"
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg transition hover:-translate-y-1 hover:border-[rgba(0,255,136,0.4)] hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]"
                >
                  <div className="text-[0.75rem] uppercase tracking-[0.35em] text-white/50">{stat.label}</div>
                  <div className="mt-2 text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-white/60">{stat.detail}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70 backdrop-blur-lg"
          >
                  <badge.icon className="h-4 w-4 text-[var(--accent-foreground)] text-[var(--primary)]" />
                  <span className="text-sm tracking-wide">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative flex flex-col gap-6"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[36px] border border-white/5 bg-gradient-to-br from-white/5 to-transparent opacity-70" />
            <div className="pointer-events-none absolute inset-0 blur-[120px] bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,136,0.35),transparent_55%)]" />
            <div className="relative space-y-5 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">Systems in rotation</p>
              <div className="space-y-5">
                {showcasePanels.map((panel) => (
                  <div
                    key={panel.title}
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(panel.link)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        navigate(panel.link);
                      }
                    }}
                    className="rounded-2xl border border-white/10 bg-[#0f141c]/70 p-5 transition hover:-translate-y-1 hover:border-[rgba(0,255,136,0.45)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f141c]"
              >
                    <p className="text-xs font-mono uppercase tracking-[0.4em] text-[var(--primary)]">{panel.patent}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{panel.title}</h3>
                    <p className="mt-1 text-sm text-white/65">{panel.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-white/55">
                      <span className="h-1 w-8 rounded-full bg-[var(--primary)]" />
                      <span className="flex items-center gap-2 text-[var(--primary)]">→ See architecture</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[28px] border border-white/10 bg-[#0D1118]/80 p-6 backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.45em] text-white/60">Telemetry snapshot</p>
              <div className="mt-4 space-y-3 font-mono text-sm text-white/70">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span>EDGE → CLOUD</span>
                  <span className="text-[var(--primary)]">532 ms</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span>DEVICES ONLINE</span>
                  <span>1,284</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>BIOMETRIC VERIFIED</span>
                  <span>98.7%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

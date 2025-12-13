import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cpu, RadioTower, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TechnicalTermTooltip from "@/components/TechnicalTermTooltip";
import ExpandableExplanation from "@/components/ExpandableExplanation";
import { AuroraText } from "@/registry/magicui/aurora-text";

const stats = [
  { 
    label: "Granted patents", 
    value: "01", 
    detail: "Edge + IoT + UX",
    detailTooltip: "Devices that work offline, internet-connected sensors, and user-friendly interfaces"
  },
  { label: "Deployment window", value: "48h", detail: "From install to live" },
  { 
    label: "Edge uptime", 
    value: "99.9%", 
    detail: "WiFi → Cloud telemetry",
    detailTooltip: "Data automatically sent from WiFi devices to secure online storage"
  },
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
  { 
    icon: ShieldCheck, 
    label: "Row-level security + biometric proof",
    simple: "Each user's data is protected separately, verified by fingerprint/face"
  },
  { 
    icon: Cpu, 
    label: "Edge-to-cloud orchestration",
    simple: "Devices work independently but sync seamlessly with online systems"
  },
  { 
    icon: RadioTower, 
    label: "IoT hardware, firmware, and product UI",
    simple: "Smart devices, their software, and easy-to-use interfaces"
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1118]/80 via-[#0f141c]/60 to-[#0a0e14]/80 -z-10" />
      
      {/* Transparent mask shape to reveal robot - creates a window on the right side */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 700px 900px at 82% 45%, transparent 0%, transparent 35%, rgba(13, 17, 24, 0.3) 45%, rgba(13, 17, 24, 0.7) 55%, rgba(13, 17, 24, 0.95) 70%)',
        }}
      />
      
      {/* Animated light rays */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[rgba(236,68,59,0.4)] to-transparent animate-light-ray-1" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[rgba(236,68,59,0.3)] to-transparent animate-light-ray-2" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[rgba(255,111,100,0.25)] to-transparent animate-light-ray-3" />
      </div>

      {/* Animated light orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(236,68,59,0.4),transparent_70%)] rounded-full blur-3xl animate-float-orb-1" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[radial-gradient(circle,rgba(255,111,100,0.35),transparent_70%)] rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(236,68,59,0.15),transparent_60%)] rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Border effect */}
      <div className="pointer-events-none absolute inset-0 border border-white/10" />
      
      {/* Subtle grid overlay */}
      
      {/* Glass shine effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32">
        {/* Content wrapper */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent" />
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* Main content - single column to leave space for robot */}
          <div className="max-w-4xl space-y-6 sm:space-y-8 md:space-y-10">
          <motion.div
              initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 sm:px-5 sm:py-2 text-[0.5rem] sm:text-[0.62rem] tracking-[0.35em] sm:tracking-[0.45em] text-white/70"
          >
              SYSTEM BLUEPRINTS • NOT WEBSITES
          </motion.div>

            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-tight text-white">
                We engineer patented systems{" "}
                <AuroraText>others can&apos;t replicate.</AuroraText>
              </h1>
              <p className="max-w-2xl text-base sm:text-lg text-white/75">
                KAALVION is an engineering atelier building <TechnicalTermTooltip term="WiFi mesh">WiFi attendance networks</TechnicalTermTooltip>, <TechnicalTermTooltip term="IoT">smart farming meshes</TechnicalTermTooltip>, and the
                interfaces that choreograph them. Every product is <TechnicalTermTooltip term="Edge">edge hardware</TechnicalTermTooltip>, cloud infrastructure, and human UI
                stitched together with patent-backed precision.
              </p>
            </motion.div>

          <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
                className="w-full sm:w-auto rounded-full border border-[rgba(236,68,59,0.65)] bg-[var(--primary)] px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-[0.95rem] font-semibold tracking-wide text-[var(--primary-foreground)] shadow-[0_0_40px_rgba(236,68,59,0.55)] transition-transform duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_0_55px_rgba(255,111,100,0.6)] min-h-[44px]"
            >
                Request Demo
            </Button>
            <Button
                onClick={() => scrollToSection("patents")}
              size="lg"
              variant="outline"
                className="w-full sm:w-auto rounded-full border border-[rgba(228,231,235,0.3)] bg-transparent px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-[0.95rem] font-semibold tracking-wide text-white hover:border-[rgba(236,68,59,0.75)] hover:bg-white/5 hover:shadow-[0_0_25px_rgba(236,68,59,0.45)] min-h-[44px]"
            >
                Explore Products
            </Button>
          </motion.div>

          <motion.div
              className="grid gap-4 sm:gap-6 text-sm text-white/80 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative rounded-2xl border border-white/20 bg-white/[0.08] p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(236,68,59,0.6)] hover:bg-white/[0.12] hover:shadow-[0_8px_32px_rgba(236,68,59,0.35)] overflow-hidden group"
                >
                  {/* Glass shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10 text-[0.7rem] sm:text-[0.75rem] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/50">{stat.label}</div>
                  <div className="relative z-10 mt-2 text-2xl sm:text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="relative z-10 mt-1 text-sm sm:text-base text-white/60">
                    {stat.detailTooltip ? (
                      <TechnicalTermTooltip term={stat.detail} customExplanation={stat.detailTooltip}>
                        {stat.detail}
                      </TechnicalTermTooltip>
                    ) : (
                      stat.detail
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="relative flex flex-col gap-1 sm:gap-1.5 rounded-full border border-white/20 bg-white/[0.08] px-3 py-2 sm:px-4 sm:py-2 text-white/70 overflow-hidden group"
          >
                  {/* Glass shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10 flex items-center gap-2 sm:gap-3">
                    <badge.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--accent-foreground)] text-[var(--primary)] flex-shrink-0" />
                    <span className="text-xs sm:text-sm tracking-wide">{badge.label}</span>
                  </div>
                  {badge.simple && (
                    <div className="relative z-10 text-[0.65rem] sm:text-xs text-white/50 italic pl-5 sm:pl-6">
                      {badge.simple}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Systems in rotation - positioned below main content to avoid blocking robot */}
          <motion.div
            className="relative mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Systems cards - side by side layout */}
              <div className="relative space-y-4 sm:space-y-5 rounded-[24px] sm:rounded-[32px] border border-white/20 bg-white/[0.08] p-4 sm:p-6 md:p-8 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10 space-y-4 sm:space-y-5">
                  <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] text-white/60">Systems in rotation</p>
                  <div className="space-y-4 sm:space-y-5">
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
                        className="relative rounded-xl sm:rounded-2xl border border-white/20 bg-white/[0.06] p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(236,68,59,0.7)] hover:bg-white/[0.1] hover:shadow-[0_12px_48px_rgba(236,68,59,0.45)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f141c] min-h-[44px] overflow-hidden group"
                      >
                        {/* Glass shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                          <p className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[var(--primary)]">{panel.patent}</p>
                          <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white">{panel.title}</h3>
                          <p className="mt-1 text-xs sm:text-sm text-white/65">
                            {panel.title === "WiFi Attendance Platform" ? (
                              <>
                                <TechnicalTermTooltip term="MAC">MAC</TechnicalTermTooltip> + <TechnicalTermTooltip term="Biometric proof">biometric</TechnicalTermTooltip> <TechnicalTermTooltip term="Dual authentication">dual-auth</TechnicalTermTooltip>, zero hardware installs.
                              </>
                            ) : (
                              <>
                                <TechnicalTermTooltip term="ESP32">ESP32</TechnicalTermTooltip> <TechnicalTermTooltip term="Irrigation mesh">irrigation mesh</TechnicalTermTooltip> + weather-fed automation.
                              </>
                            )}
                          </p>
                          <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[0.65rem] sm:text-xs font-mono text-white/55">
                            <span className="h-1 w-6 sm:w-8 rounded-full bg-[var(--primary)]" />
                            <span className="flex items-center gap-2 text-[var(--primary)]">→ See architecture</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Telemetry snapshot card */}
              <div className="relative rounded-[24px] sm:rounded-[28px] border border-white/20 bg-white/[0.08] p-4 sm:p-6 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.45em] text-white/60">Live System Status</p>
                  <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm text-white/70">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span>
                        <TechnicalTermTooltip term="Edge-to-cloud orchestration" customExplanation="Data transfer time from device to cloud server">
                          EDGE → CLOUD
                        </TechnicalTermTooltip>
                      </span>
                      <span className="text-[var(--primary)]">532 ms</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span>DEVICES ONLINE</span>
                      <span>1,284</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>
                        <TechnicalTermTooltip term="Biometric proof" customExplanation="Successfully verified using fingerprint or face recognition">
                          BIOMETRIC VERIFIED
                        </TechnicalTermTooltip>
                      </span>
                      <span>98.7%</span>
                    </div>
                  </div>
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

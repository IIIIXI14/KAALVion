import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Wifi, Sprout } from "lucide-react";
import wifiAttendance from "@/assets/wifi-attendance.jpg";
import smartFarming from "@/assets/smart-farming.jpg";
import logoName from "@/assets/KaalVion_DarkLogo_name .png";

const patents = [
  {
    title: "WiFi-Based Attendance Platform",
    image: wifiAttendance,
    icon: Wifi,
    patent: "Patent #WIFI-2024-001",
    subtitle: "Reinventing Attendance for Modern Workplaces",
    copy:
      "MAC + biometric dual authentication automates check-ins the moment a registered device hits the trusted WiFi zone.",
    bullets: [
      "Zero manual work or hardware installs",
      "Accurate real-time logs w/ Supabase RLS",
      "Centralized multi-location control",
      "Admin analytics + biometric verification",
    ],
    cta: { label: "See Architecture", href: "/solutions/wifi-attendance" },
  },
  {
    title: "Smart Farming Assistant",
    image: smartFarming,
    icon: Sprout,
    patent: "Patent #AGRI-2024-002",
    subtitle: "Your Farm’s Personal Assistant",
    copy:
      "ESP32 irrigation mesh, sensor telemetry, and weather-aware rules orchestrate entire fields from one dashboard.",
    bullets: [
      "Real-time soil intelligence (moisture, temp, humidity)",
      "Automated irrigation engine with manual override",
      "Rule execution at the edge for reliability",
      "Localized, multilingual advisories for Indian districts",
    ],
    cta: { label: "View Deployment Plan", href: "/solutions/smart-farming" },
  },
];

const PatentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  return (
    <section id="patents" className="relative overflow-hidden py-20 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(236,68,59,0.3),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(102,102,102,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-30" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 sm:mb-4 text-[0.65rem] sm:text-xs font-mono uppercase tracking-[0.5em] sm:tracking-[0.6em] text-white/60">Granted patents</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white">
            Systems we <span className="glow-gradient">own</span> the blueprints for.
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70">
            Each product is an engineered stack—IoT hardware, firmware, cloud orchestration, and interface choreography—
            protected by law and proven in deployment.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {patents.map((patent, index) => (
            <motion.div
              key={patent.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border border-white/12 bg-[rgba(10,14,19,0.82)] p-4 sm:p-6 md:p-8 lg:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute inset-0 animate-gradient-mesh" />
              </div>
              <div className="relative grid gap-6 sm:gap-8 md:gap-12 grid-cols-1 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl border border-white/10 bg-white/5">
                      <patent.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[var(--primary)]">
                        {patent.patent}
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white">{patent.title}</h3>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-white/75">{patent.subtitle}</p>
                  <p className="text-sm sm:text-base text-white/65">{patent.copy}</p>
                  <div className="grid gap-2 sm:gap-3 text-xs sm:text-sm text-white/70">
                    {patent.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2 sm:gap-3">
                        <span className="mt-1.5 sm:mt-1 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[var(--primary)] flex-shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" onClick={() => navigate(patent.cta.href)} className="w-full sm:w-auto">
                    {patent.cta.label}
                  </Button>
                </div>

                <div className="relative mt-6 lg:mt-0">
                  <div className="pointer-events-none absolute -inset-3 sm:-inset-6 rounded-[20px] sm:rounded-[28px] border border-white/5 opacity-60" />
                  <div className="relative rounded-[20px] sm:rounded-[28px] border border-white/8 bg-black/40 p-4 sm:p-6 backdrop-blur-xl">
                    <div className="relative overflow-hidden rounded-[16px] sm:rounded-[24px] border border-white/10">
                      <img src={patent.image} alt={patent.title} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 sm:px-4 sm:py-1 flex items-center h-5 sm:h-6">
                        {index === 0 ? (
                          <img src={logoName} alt="KAALVION" className="h-5 sm:h-4 w-auto" />
                        ) : (
                          <span className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/70">FARM-AGRO-TECH</span>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 font-mono text-[0.65rem] sm:text-xs text-white/65">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>EDGE MODES</span>
                        <span className="text-right">{index === 0 ? "Attendance + Biometric" : "Irrigation + Sensors"}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>SYNC LATENCY</span>
                        <span>{index === 0 ? "0.53s" : "0.64s"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ACTIVE SITES</span>
                        <span>{index === 0 ? "24 campuses" : "18 districts"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatentsSection;

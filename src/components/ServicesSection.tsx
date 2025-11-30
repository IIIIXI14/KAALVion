import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Radio, BadgeCheck, CloudCog, CircuitBoard } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Systems",
    description: "Next.js, Vite, edge-rendered control rooms, multi-tenant admin surfaces.",
    stack: ["Next.js 14", "Vite", "Framer Motion", "Edge Functions"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Wearables",
    description: "Flutter + React Native apps with biometric auth, offline-first sync, OTA updates.",
    stack: ["Flutter", "React Native", "Expo", "Secure Enclaves"],
  },
  {
    icon: Radio,
    title: "IoT & Edge",
    description: "ESP32, Termux, WiFi mesh, LoRa, and sensor fusion orchestrations.",
    stack: ["ESP32", "Termux", "Node edge scanners", "BLE / WiFi mesh"],
  },
  {
    icon: CloudCog,
    title: "Cloud & Infrastructure",
    description: "Supabase RLS, Firebase FCM, AWS CDK, observability pipelines.",
    stack: ["Supabase", "Firebase", "AWS CDK", "Grafana"],
  },
  {
    icon: BadgeCheck,
    title: "Interfaces",
    description: "Desktop-grade dashboards, industrial UI, multilingual command centers.",
    stack: ["Epilogue/Satoshi", "Design tokens", "Tailwind", "Three.js"],
  },
  {
    icon: CircuitBoard,
    title: "Automation Ops",
    description: "CI/CD, firmware deployment, telemetry monitoring, on-site commissioning.",
    stack: ["GitHub Actions", "Docker", "IoT OTA", "Telemetry APIs"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(0,255,136,0.18),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(0,229,255,0.18),transparent_50%)]" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute inset-0 noise-overlay opacity-25" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-mono uppercase tracking-[0.55em] text-white/60">KAALVION STACK</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Full-spectrum engineering, orchestrated like an <span className="glow-gradient">industrial console</span>.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Every capability plugs into our telemetry layer—IoT, cloud, and interface teams operating as a single system.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[rgba(10,14,19,0.85)] p-8 backdrop-blur-2xl transition hover:-translate-y-2 hover:border-[rgba(0,255,136,0.35)]"
            >
              <div className="absolute inset-0 opacity-25">
                <div className="absolute inset-0 animate-gradient-mesh" />
              </div>
              <div className="relative space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
                    <service.icon className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-white/60">Capability #{index + 1}</p>
                </div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-white/70">{service.description}</p>
                <div className="mt-6 space-y-2 text-xs font-mono text-white/60">
                  {service.stack.map((item) => (
                    <div key={item} className="flex items-center justify-between border-b border-white/5 py-1">
                      <span>{item}</span>
                      <span className="h-1 w-8 rounded-full bg-[var(--primary)] opacity-60" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

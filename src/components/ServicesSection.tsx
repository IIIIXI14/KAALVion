import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Smartphone, Radio, BadgeCheck, CloudCog, CircuitBoard, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceModal from "./ServiceModal";
import type { ServiceData } from "@/types/project";

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

const studentService: ServiceData = {
  title: "Student Projects",
  description: "Quick turnaround, student-friendly pricing, and portfolio-focused development for learning projects.",
  stack: ["Student Discount", "Quick Turnaround", "Portfolio Focus", "Learning Support"],
  icon: GraduationCap,
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [isStudent, setIsStudent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: ServiceData, student: boolean = false) => {
    setSelectedService(service);
    setIsStudent(student);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(236,68,59,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(99,99,99,0.1),transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 sm:mb-16 max-w-4xl text-center"
        >
          <p className="mb-3 sm:mb-4 text-[0.65rem] sm:text-xs font-mono uppercase tracking-[0.45em] sm:tracking-[0.55em] text-white/60">KAALVION STACK</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Full-spectrum engineering, orchestrated like an <span className="glow-gradient">industrial console</span>.
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-white/70">
            Every capability plugs into our telemetry layer—IoT, cloud, and interface teams operating as a single system.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.33 }}
              className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/12 bg-[rgba(10,14,19,0.9)] p-4 sm:p-6 md:p-8 transition hover:-translate-y-2 hover:border-[rgba(236,68,59,0.55)] hover:shadow-[0_0_50px_rgba(236,68,59,0.48)] cursor-pointer"
              onClick={() => handleServiceClick(service, false)}
            >
              <div className="relative space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--primary)]" />
                  </div>
                  <p className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-[0.35em] sm:tracking-[0.4em] text-white/60">Capability #{index + 1}</p>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
                <p className="text-xs sm:text-sm text-white/70">{service.description}</p>
                <div className="mt-6 space-y-2 text-xs font-mono text-white/60">
                  {service.stack.map((item) => (
                    <div key={item} className="flex items-center justify-between border-b border-white/5 py-1">
                      <span>{item}</span>
                      <span className="h-1 w-8 rounded-full bg-[var(--primary)] opacity-60" />
                    </div>
                  ))}
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service, false);
                  }}
                  className="w-full mt-6 bg-[var(--primary)]/20 border border-[var(--primary)]/30 text-[var(--primary)] hover:bg-[var(--primary)]/30 hover:scale-105 transition-all rounded-xl"
                >
                  Configure Project
                </Button>
              </div>
            </motion.div>
          ))}

          {/* Student Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: services.length * 0.08 }}
            className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border-2 border-[var(--primary)]/40 bg-[rgba(10,14,19,0.9)] p-4 sm:p-6 md:p-8 transition hover:-translate-y-2 hover:border-[var(--primary)]/70 hover:shadow-[0_0_50px_rgba(236,68,59,0.55)] cursor-pointer"
            onClick={() => handleServiceClick(studentService, true)}
          >
            <div className="relative space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl border border-[var(--primary)]/30 bg-[var(--primary)]/10 shadow-[0_10px_40px_rgba(236,68,59,0.55)]">
                  <studentService.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-[0.65rem] sm:text-xs font-mono uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[var(--primary)]">Student Section</p>
                  <span className="inline-block mt-1 px-2 py-0.5 text-[0.65rem] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-[var(--primary)]/20 text-[var(--primary)] rounded-full border border-[var(--primary)]/30">
                    Quick Projects
                  </span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">{studentService.title}</h3>
              <p className="text-xs sm:text-sm text-white/70">{studentService.description}</p>
              <div className="mt-6 space-y-2 text-xs font-mono text-white/60">
                {studentService.stack.map((item) => (
                  <div key={item} className="flex items-center justify-between border-b border-white/5 py-1">
                    <span>{item}</span>
                    <span className="h-1 w-8 rounded-full bg-[var(--primary)] opacity-60" />
                  </div>
                ))}
              </div>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick(studentService, true);
                }}
                className="w-full mt-6 bg-[var(--primary)] text-[#f2f3f5] hover:bg-[var(--primary)]/90 hover:scale-105 transition-all rounded-xl font-semibold shadow-[0_0_25px_rgba(236,68,59,0.55)]"
              >
                Apply for Student Project
              </Button>
            </div>
          </motion.div>
        </div>

        <ServiceModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          service={selectedService}
          isStudent={isStudent}
        />
      </div>
    </section>
  );
};

export default ServicesSection;

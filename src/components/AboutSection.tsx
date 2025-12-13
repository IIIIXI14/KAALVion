import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, Shield, Users, Code, Rocket } from "lucide-react";
import TechnicalTermTooltip from "@/components/TechnicalTermTooltip";
import { AuroraText } from "@/registry/magicui/aurora-text";

const values = [
  {
    icon: Shield,
    title: "Patent-Backed Innovation",
    description: "Every system we build is protected by intellectual property, ensuring unique solutions that can't be replicated.",
  },
  {
    icon: Zap,
    title: "Edge-to-Cloud Excellence",
    description: "Seamless orchestration from device hardware to cloud infrastructure, creating unified systems that work offline and online.",
  },
  {
    icon: Code,
    title: "Full-Stack Engineering",
    description: "We don't just build websites—we engineer complete systems: IoT hardware, firmware, cloud infrastructure, and human interfaces.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "From concept to deployment in 48 hours. We move fast without compromising on quality or security.",
  },
];

const teamMembers = [
  {
    name: "Engineering Team",
    role: "Full-Stack Engineers",
    description: "Specialists in IoT, cloud infrastructure, and modern web technologies.",
  },
  {
    name: "Product Team",
    role: "UX & Design",
    description: "Creating intuitive interfaces that make complex systems accessible.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,68,59,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,99,99,0.08),transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 sm:mb-16 max-w-4xl text-center"
        >
          <p className="mb-3 sm:mb-4 text-[0.65rem] sm:text-xs font-mono uppercase tracking-[0.45em] sm:tracking-[0.55em] text-white/60">
            ABOUT KAALVION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white">
            Engineering atelier building <AuroraText>patented systems</AuroraText>.
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70">
            We don&apos;t just write code—we architect complete ecosystems that bridge the physical and digital worlds.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/12 bg-[rgba(10,14,19,0.9)] p-6 sm:p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl border border-white/10 bg-white/5">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">Our Story</h3>
              </div>
              <div className="space-y-4 text-base sm:text-lg text-white/75 leading-relaxed">
                <p>
                  KAALVION was founded on a simple principle: <strong className="text-white">systems, not websites</strong>. 
                  While others were building static pages, we were engineering complete ecosystems—from <TechnicalTermTooltip term="Edge">edge devices</TechnicalTermTooltip> 
                  that work offline to cloud infrastructure that scales globally.
                </p>
                <p>
                  Our journey began with a challenge: how do you create attendance systems that don&apos;t require expensive hardware, 
                  or farming solutions that work in areas with unreliable internet? The answer was <TechnicalTermTooltip term="IoT">IoT mesh networks</TechnicalTermTooltip>, 
                  <TechnicalTermTooltip term="Edge computing">edge computing</TechnicalTermTooltip>, and patent-backed architectures that others can&apos;t replicate.
                </p>
                <p>
                  Today, we&apos;re an engineering atelier that builds <TechnicalTermTooltip term="WiFi mesh">WiFi attendance networks</TechnicalTermTooltip>, 
                  <TechnicalTermTooltip term="IoT">smart farming meshes</TechnicalTermTooltip>, and the interfaces that choreograph them. 
                  Every product is edge hardware, cloud infrastructure, and human UI stitched together with precision.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[var(--primary)]/30 bg-[rgba(10,14,19,0.9)] p-6 sm:p-8 md:p-10 shadow-[0_30px_90px_rgba(236,68,59,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/[0.08] via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl border border-[var(--primary)]/30 bg-[var(--primary)]/10">
                  <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">Our Mission</h3>
              </div>
              <p className="text-xl sm:text-2xl font-medium text-white/90 leading-relaxed">
                To engineer patented systems that bridge the gap between physical hardware and digital infrastructure, 
                creating solutions that work seamlessly offline and online, at scale, with zero compromise on security or reliability.
              </p>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                We believe that the future belongs to systems that don&apos;t depend on constant connectivity, 
                that respect user privacy through <TechnicalTermTooltip term="Biometric proof">biometric verification</TechnicalTermTooltip> 
                and <TechnicalTermTooltip term="Row-level security">row-level security</TechnicalTermTooltip>, 
                and that can be deployed in 48 hours without sacrificing quality.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 sm:mb-12 text-center">
            Core Values
          </h3>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-white/12 bg-[rgba(10,14,19,0.9)] p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(236,68,59,0.55)] hover:shadow-[0_0_50px_rgba(236,68,59,0.48)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--primary)]" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">{value.title}</h4>
                  </div>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/12 bg-[rgba(10,14,19,0.9)] p-6 sm:p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl border border-white/10 bg-white/5">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">Our Team</h3>
              </div>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                KAALVION is built by a multidisciplinary team of engineers, designers, and product specialists 
                who share a passion for building systems that matter. We combine expertise in <TechnicalTermTooltip term="IoT">IoT</TechnicalTermTooltip>, 
                cloud infrastructure, mobile development, and user experience to create products that are both powerful and accessible.
              </p>
              <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 mt-6 sm:mt-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] border border-white/10 bg-white/[0.05] p-4 sm:p-6"
                  >
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-lg sm:text-xl font-semibold text-white">{member.name}</h4>
                      <p className="text-sm sm:text-base text-[var(--primary)] font-medium">{member.role}</p>
                      <p className="text-xs sm:text-sm text-white/65 leading-relaxed">{member.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;


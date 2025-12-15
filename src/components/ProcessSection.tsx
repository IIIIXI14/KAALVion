import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { Search, Lightbulb, Code, Rocket } from "lucide-react";
import { AuroraText } from "@/registry/magicui/aurora-text";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const steps = useMemo(
    () => [
      {
        icon: Search,
        title: "Discover",
        description: "We map goals, risks, and success metrics with stakeholders in a focused kickoff.",
      },
      {
        icon: Lightbulb,
        title: "Prototype",
        description: "Rapid, clickable prototypes validate flows and messaging before we write code.",
      },
      {
        icon: Code,
        title: "Build",
        description: "Battle-tested stacks, performance budgets, and secure-by-default implementation.",
      },
      {
        icon: Rocket,
        title: "Ship & Support",
        description: "Launch with telemetry, iterate from real usage, and scale with confidence.",
      },
    ],
    [],
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="process" className="relative py-20 sm:py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgba(236,68,59,0.12)] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[rgba(79,70,229,0.12)] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 mb-4">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
            Proven Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            The <AuroraText>Process</AuroraText>
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            From discovery to launch, we de-risk your product with fast validation loops and production-grade builds.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative max-w-6xl mx-auto"
        >
          {/* Timeline connector */}
          <div className="absolute top-1/2 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent hidden lg:block -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={cardVariants}
                className="group text-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 rounded-2xl gradient-primary flex items-center justify-center shadow-[0_20px_60px_rgba(236,68,59,0.35)] relative z-10 ring-2 ring-white/10 ring-offset-4 ring-offset-[#070812]"
                >
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>

                <div className="glass rounded-2xl p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-white/10 backdrop-blur-xl transition-all duration-300 group-hover:border-white/20 group-hover:translate-y-[-4px]">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{step.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 text-white font-semibold flex items-center justify-center text-xs sm:text-sm shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Deep dive into your business goals, user needs, and technical requirements",
  },
  {
    icon: Lightbulb,
    title: "Prototype",
    description: "Create interactive prototypes and validate concepts with stakeholders",
  },
  {
    icon: Code,
    title: "Build",
    description: "Develop with cutting-edge technologies and best practices",
  },
  {
    icon: Rocket,
    title: "Ship & Support",
    description: "Launch, monitor, and continuously improve based on real user data",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="process" className="py-20 sm:py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            The <span className="glow-gradient">Process</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology to bring your vision to life
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline connector */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary hidden lg:block -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl gradient-primary flex items-center justify-center shadow-medium relative z-10"
                >
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>

                <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full gradient-primary text-white font-bold flex items-center justify-center text-xs sm:text-sm shadow-medium">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

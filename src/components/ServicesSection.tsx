import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Lock, Palette, Cloud, Cog } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites built with HTML, CSS, JS, React, and Next.js",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications using Flutter and React Native",
  },
  {
    icon: Lock,
    title: "Patented App Integrations",
    description: "WiFi Attendance and Smart Farming solutions with proprietary technology",
  },
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    description: "Beautiful, user-centered design that drives engagement and conversion",
  },
  {
    icon: Cloud,
    title: "Deployment & Hosting",
    description: "Reliable cloud infrastructure with continuous deployment and monitoring",
  },
  {
    icon: Cog,
    title: "Custom Automation",
    description: "Tailored automation solutions to streamline your business workflows",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth h-full">
                <div className="mb-6">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-primary text-white"
                  >
                    <service.icon className="w-7 h-7" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

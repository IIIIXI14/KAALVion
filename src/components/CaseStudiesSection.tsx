import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

const caseStudies = [
  {
    title: "E-Commerce Platform Redesign",
    subtitle: "Increased conversions by 185%",
    description: [
      "Complete UI/UX overhaul with modern design system",
      "Mobile-first responsive architecture",
      "Optimized checkout flow reducing cart abandonment by 42%",
      "Integrated real-time inventory management",
    ],
    metrics: [
      { icon: TrendingUp, label: "Conversion Rate", value: "+185%" },
      { icon: Clock, label: "Page Load Time", value: "-60%" },
      { icon: Users, label: "User Engagement", value: "+220%" },
    ],
  },
  {
    title: "Healthcare Appointment System",
    subtitle: "Reduced 98% manual work",
    description: [
      "Automated scheduling with AI-powered slot optimization",
      "Patient portal with medical history access",
      "SMS/Email reminder system reducing no-shows by 75%",
      "HIPAA-compliant data handling and storage",
    ],
    metrics: [
      { icon: TrendingUp, label: "Efficiency", value: "+98%" },
      { icon: Clock, label: "Booking Time", value: "-80%" },
      { icon: Users, label: "Patient Satisfaction", value: "4.9/5" },
    ],
  },
  {
    title: "Real Estate Management App",
    subtitle: "Streamlined operations for 500+ properties",
    description: [
      "Cross-platform mobile app for property managers",
      "Tenant communication and payment portal",
      "Maintenance request tracking and automation",
      "Financial reporting and analytics dashboard",
    ],
    metrics: [
      { icon: TrendingUp, label: "Revenue Growth", value: "+156%" },
      { icon: Clock, label: "Response Time", value: "-70%" },
      { icon: Users, label: "Active Users", value: "10k+" },
    ],
  },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="case-studies" className="py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group glass rounded-2xl p-8 shadow-soft hover:shadow-strong transition-smooth"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                  {study.title}
                </h3>
                <p className="text-accent font-semibold text-lg">{study.subtitle}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {study.description.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-border">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <metric.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold text-gradient">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-smooth">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

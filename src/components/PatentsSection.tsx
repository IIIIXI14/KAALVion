import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Wifi, Sprout, CheckCircle } from "lucide-react";
import wifiAttendance from "@/assets/wifi-attendance.jpg";
import smartFarming from "@/assets/smart-farming.jpg";

const patents = [
  {
    title: "WiFi-Based Attendance App",
    image: wifiAttendance,
    icon: Wifi,
    patent: "Patent #WIFI-2024-001",
    features: [
      "Automatic check-in via WiFi proximity",
      "Real-time attendance tracking dashboard",
      "Multi-location support",
      "Admin analytics & reporting",
    ],
  },
  {
    title: "Smart Farming Assistant",
    image: smartFarming,
    icon: Sprout,
    patent: "Patent #AGRI-2024-002",
    features: [
      "IoT sensor integration for soil monitoring",
      "Automated irrigation scheduling",
      "Crop health analysis with AI",
      "Weather-based recommendations",
    ],
  },
];

const PatentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="patents" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Patented <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions protected by intellectual property
          </p>
        </motion.div>

        <div className="space-y-16">
          {patents.map((patent, index) => (
            <motion.div
              key={patent.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <img
                    src={patent.image}
                    alt={patent.title}
                    className="w-full rounded-2xl shadow-strong"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth" />
                </motion.div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <patent.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-primary">
                    {patent.patent}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black mb-4">
                  {patent.title}
                </h3>

                <ul className="space-y-3 mb-8">
                  {patent.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="gradient-primary text-white font-semibold rounded-xl px-8 hover:scale-105 transition-smooth shadow-medium"
                >
                  View Full Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatentsSection;

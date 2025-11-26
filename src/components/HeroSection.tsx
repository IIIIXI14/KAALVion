import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, RefreshCw, Shield, TrendingUp } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const badges = [
    { icon: Zap, text: "Fast Build" },
    { icon: RefreshCw, text: "Cross-platform" },
    { icon: Shield, text: "Patented IP" },
    { icon: TrendingUp, text: "ROI-first approach" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Floating gradient blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            >
              Build. Ship.{" "}
              <span className="text-gradient">Scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              We build premium websites and cross-platform mobile apps. We also own patented technologies:{" "}
              <span className="font-semibold text-foreground">Wi-Fi Attendance System</span> and{" "}
              <span className="font-semibold text-foreground">Smart Farming Assistant</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="gradient-primary text-white font-semibold rounded-xl px-8 hover:scale-105 transition-smooth shadow-medium text-base"
              >
                Request Demo
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                variant="outline"
                className="rounded-xl px-8 hover:scale-105 transition-smooth border-2 font-semibold text-base"
              >
                View Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 glass rounded-full px-4 py-2 shadow-soft"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src={heroIllustration}
                alt="KAALVION Technology"
                className="w-full rounded-2xl shadow-strong"
              />
            </motion.div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

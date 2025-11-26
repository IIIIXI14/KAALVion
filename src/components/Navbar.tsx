import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black text-gradient cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            KAALVION
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "Services", "Patents", "Case Studies", "Testimonials", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-smooth relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              )
            )}
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="gradient-primary text-white font-semibold rounded-xl px-6 hover:scale-105 transition-smooth shadow-medium"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

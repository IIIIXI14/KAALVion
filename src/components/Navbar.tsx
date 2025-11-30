import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If we're not on the homepage, navigate to it first
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're on the homepage, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between gap-6 rounded-[999px] border border-white/10 bg-[rgba(10,14,19,0.72)] px-6 py-3 md:px-10 md:py-4 shadow-[0_25px_70px_rgba(0,0,0,0.65)] backdrop-blur-2xl transition duration-300 ${
            scrolled ? "scale-[1.015]" : "scale-100"
          } pointer-events-auto`}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-semibold tracking-[0.6em] text-xs text-white uppercase cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            KAALVION
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", id: "hero" },
              { label: "Services", id: "services" },
              { label: "Patents", id: "patents" },
              { label: "Testimonials", id: "testimonials" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-semibold uppercase tracking-[0.25em] text-white/70 transition duration-300 hover:text-[var(--primary)]"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>

          <AuthButtons scrollToSection={scrollToSection} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

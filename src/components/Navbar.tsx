import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";
import logoIcon from "@/assets/KaalVion_DarkLogo_img.png";
import logoName from "@/assets/KaalVion_DarkLogo_name .png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLetter, setHoveredLetter] = useState<{ label: string; index: number } | null>(null);
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

  const renderLabel = (label: string) => {
    return label.split("").map((char, index) => {
      const isActive = hoveredLetter?.label === label;
      const distance = isActive ? Math.abs(index - (hoveredLetter?.index ?? 0)) : null;
      const influence = distance !== null ? Math.max(0, 1 - distance * 0.45) : 0;
      const color = isActive
        ? `hsla(3, 82%, 58%, ${0.55 + 0.4 * influence})`
        : undefined;
      const shadowIntensity = isActive ? 0.4 + 0.35 * influence : 0;
      const textShadow = isActive
        ? `0 0 12px rgba(236,68,59,${0.5 * shadowIntensity}), 0 0 24px rgba(255,255,255,${0.6 * shadowIntensity}), 0 0 36px rgba(236,68,59,${0.35 * shadowIntensity})`
        : "none";

      return (
        <span
          key={`${label}-${index}`}
          className="nav-letter"
          style={{
            color,
            textShadow,
          }}
          onMouseEnter={() => setHoveredLetter({ label, index })}
          onMouseLeave={() => setHoveredLetter(null)}
          onFocus={() => setHoveredLetter({ label, index })}
          onBlur={() => setHoveredLetter(null)}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <>
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6">
        <div
            className={`flex items-center justify-between gap-3 sm:gap-6 rounded-[999px] border border-white/10 bg-[rgba(10,14,19,0.72)] px-3 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 shadow-[0_25px_70px_rgba(0,0,0,0.65)] backdrop-blur-2xl transition duration-300 ${
            scrolled ? "scale-[1.015]" : "scale-100"
          } pointer-events-auto`}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
              <img src={logoIcon} alt="KAALVION Logo Icon" className="h-6 sm:h-8 md:h-10 w-auto" />
              <img src={logoName} alt="KAALVION Name Logo" className="h-8 sm:h-10 md:h-14 w-auto" />
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
                className="relative group text-sm font-semibold uppercase tracking-[0.25em] text-white/70 transition duration-300 hover:text-[var(--primary)] nav-link"
              >
                <span className="inline-flex gap-[0.04em]">{renderLabel(item.label)}</span>
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[var(--primary)] transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>

            <div className="hidden md:block">
          <AuthButtons scrollToSection={scrollToSection} />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors min-h-[44px]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
        </div>
      </div>
    </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Navbar;

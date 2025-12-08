import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import logoIcon from "@/assets/KaalVion_DarkLogo_img.png";
import logoName from "@/assets/KaalVion_DarkLogo_name .png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const quickLinks = [
    { label: "Home", id: "hero", type: "section" },
    { label: "Services", id: "services", type: "section" },
    { label: "Patents", id: "patents", type: "section" },
    { label: "WiFi Attendance", path: "/solutions/wifi-attendance", type: "page" },
    { label: "Smart Farming", path: "/solutions/smart-farming", type: "page" },
    { label: "Testimonials", id: "testimonials", type: "section" },
    { label: "Contact", id: "contact", type: "section" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[hsl(214,33%,8%)] via-[rgba(236,68,59,0.08)] to-[hsl(214,33%,10%)] text-white py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src={logoIcon} alt="KAALVION Logo Icon" className="h-8 sm:h-10 w-auto" />
              <img src={logoName} alt="KAALVION Name Logo" className="h-10 sm:h-14 w-auto" />
            </div>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-3 sm:mb-4">
              Premium web and mobile app development with patented technologies. Building digital solutions that scale.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/kaal-vion-445453381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth hover:scale-110 min-h-[44px]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kaalvion?igsh=dTI5Nnp3anlhcGUy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth hover:scale-110 min-h-[44px]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.type === "page" ? (
                    <button
                      onClick={() => {
                        navigate(link.path);
                        window.scrollTo(0, 0);
                      }}
                      className="text-sm sm:text-base text-white/70 hover:text-white transition-smooth hover:translate-x-1 inline-block text-left min-h-[44px]"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm sm:text-base text-white/70 hover:text-white transition-smooth hover:translate-x-1 inline-block text-left min-h-[44px]"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:kaalvion@gmail.com" className="hover:text-white transition-smooth break-all">
                  kaalvion@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10 text-center text-white/60 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} KAALVION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

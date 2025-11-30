import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";

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
    <footer className="bg-[hsl(222,47%,11%)] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(239,84%,67%)] bg-clip-text text-transparent">
              KAALVION
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Premium web and mobile app development with patented technologies. Building digital solutions that scale.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/kaal-vion-445453381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kaalvion?igsh=dTI5Nnp3anlhcGUy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth hover:scale-110"
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
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.type === "page" ? (
                    <button
                      onClick={() => {
                        navigate(link.path);
                        window.scrollTo(0, 0);
                      }}
                      className="text-white/70 hover:text-white transition-smooth hover:translate-x-1 inline-block text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/70 hover:text-white transition-smooth hover:translate-x-1 inline-block text-left"
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
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:kaalvion@gmail.com" className="hover:text-white transition-smooth">
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

        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} KAALVION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

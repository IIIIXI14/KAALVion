import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SignedIn } from "@clerk/clerk-react";
import AuthButtons from "./AuthButtons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (id: string) => void;
}

const MobileMenu = ({ isOpen, onClose, scrollToSection }: MobileMenuProps) => {
  const navigate = useNavigate();
  const navItems = [
    { label: "Home", id: "hero", isRoute: false },
    { label: "About", id: "about", isRoute: false },
    { label: "Services", id: "services", isRoute: false },
    { label: "Patents", id: "patents", isRoute: false },
    { label: "Testimonials", id: "testimonials", isRoute: false },
    { label: "Contact", id: "contact", isRoute: false },
  ];

  const handleNavClick = (id: string, isRoute: boolean = false) => {
    if (isRoute) {
      navigate(id);
    } else {
    scrollToSection(id);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
          />

          {/* Side Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[rgba(10,14,19,0.98)] border-l border-white/10 z-50 overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-lg font-semibold text-white">Menu</h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.id, item.isRoute)}
                        className="w-full text-left px-4 py-4 rounded-xl text-base font-semibold uppercase tracking-[0.15em] text-white/70 hover:text-[var(--primary)] hover:bg-white/5 transition-all duration-300 min-h-[44px] flex items-center"
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                  <SignedIn>
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navItems.length * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick("/projects", true)}
                        className="w-full text-left px-4 py-4 rounded-xl text-base font-semibold uppercase tracking-[0.15em] text-white/70 hover:text-[var(--primary)] hover:bg-white/5 transition-all duration-300 min-h-[44px] flex items-center"
                      >
                        My Projects
                      </button>
                    </motion.li>
                  </SignedIn>
                </ul>
              </nav>

              {/* Auth Buttons */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <AuthButtons scrollToSection={scrollToSection} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

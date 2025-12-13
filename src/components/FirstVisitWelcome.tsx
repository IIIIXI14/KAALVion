import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const FIRST_VISIT_KEY = "kaalvion-first-visit";

export default function FirstVisitWelcome() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem(FIRST_VISIT_KEY);
    if (!hasVisited) {
      // Small delay to ensure page is loaded
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowWelcome(false);
    localStorage.setItem(FIRST_VISIT_KEY, "true");
  };

  return (
    <AnimatePresence>
      {showWelcome && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
            onClick={handleClose}
          />
          
          {/* Welcome Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#0D1118] via-[#0f141c] to-[#0a0e14] border border-white/20 rounded-2xl shadow-2xl p-8 sm:p-12 pointer-events-auto overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(236,68,59,0.2),transparent_70%)] rounded-full blur-3xl pointer-events-none" />
              
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                aria-label="Close welcome message"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Content */}
              <div className="relative z-10 space-y-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
                    <EncryptedText
                      text="Welcome to KAALVION"
                      encryptedClassName="text-neutral-500"
                      revealedClassName="text-white"
                      revealDelayMs={50}
                      autoStart={true}
                    />
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="space-y-4"
                >
                  <p className="text-lg sm:text-xl text-white/80 max-w-lg mx-auto">
                    <EncryptedText
                      text="We engineer patented systems others can't replicate."
                      encryptedClassName="text-neutral-500"
                      revealedClassName="text-white/80"
                      revealDelayMs={30}
                      autoStart={true}
                    />
                  </p>
                  
                  <p className="text-base text-white/60 max-w-md mx-auto">
                    <EncryptedText
                      text="Explore our WiFi attendance networks, smart farming meshes, and edge-to-cloud orchestration."
                      encryptedClassName="text-neutral-500"
                      revealedClassName="text-white/60"
                      revealDelayMs={25}
                      autoStart={true}
                    />
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="pt-4"
                >
                  <Button
                    onClick={handleClose}
                    size="lg"
                    className="rounded-full border border-[rgba(236,68,59,0.65)] bg-[var(--primary)] px-8 py-6 text-base font-semibold tracking-wide text-[var(--primary-foreground)] shadow-[0_0_40px_rgba(236,68,59,0.55)] transition-transform duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_0_55px_rgba(255,111,100,0.6)]"
                  >
                    Begin Exploration
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


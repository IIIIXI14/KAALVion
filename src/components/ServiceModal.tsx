import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import type { ServiceData } from "@/types/project";
import ProjectForm from "./ProjectForm";
import StudentProjectForm from "./StudentProjectForm";

interface ServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: ServiceData | null;
  isStudent?: boolean;
}

const ServiceModal = ({ open, onOpenChange, service, isStudent = false }: ServiceModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-transparent border-0 p-0 [&>button]:hidden">
        <div className="relative">
          {/* Technical Noir Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,61,58,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(102,102,102,0.08),transparent_50%)]" />
          <div className="absolute inset-0 grid-overlay opacity-20" />

          <div className="relative bg-[rgba(10,14,19,0.95)] backdrop-blur-2xl border border-white/10 rounded-[28px] p-8">
            {/* Custom Close Button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-6 top-6 z-10 rounded-full p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <DialogHeader className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
                  <service.icon className="h-8 w-8 text-[var(--primary)]" />
                </div>
                <div>
                  <DialogTitle className="text-3xl font-semibold text-white font-display">
                    {service.title}
                  </DialogTitle>
                  {isStudent && (
                    <span className="inline-block mt-2 px-3 py-1 text-xs font-mono uppercase tracking-[0.3em] bg-[var(--primary)]/20 text-[var(--primary)] rounded-full border border-[var(--primary)]/30">
                      Student Project
                    </span>
                  )}
                </div>
              </motion.div>
              <DialogDescription className="text-white/70 text-base">
                {service.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6">
              {isStudent ? (
                <StudentProjectForm
                  serviceType={service.title}
                  onSuccess={() => onOpenChange(false)}
                />
              ) : (
                <ProjectForm
                  serviceType={service.title}
                  onSuccess={() => onOpenChange(false)}
                />
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;


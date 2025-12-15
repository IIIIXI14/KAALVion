import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { redirectToWhatsApp } from "@/lib/submitProject";
import logger from "@/lib/logger";
import { isRateLimited, getTimeUntilReset, recordSubmission } from "@/lib/rateLimiter";
import type { ContactSubmissionData } from "@/types/submission";
import { trackFormSubmission } from "@/lib/analytics";
import contactIllustration from "@/assets/contact-illustration.jpg";
import { AuroraText } from "@/registry/magicui/aurora-text";
import { useUser } from "@clerk/clerk-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const { user } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limit
    if (isRateLimited("contact_form")) {
      const minutesUntilReset = getTimeUntilReset("contact_form");
      toast({
        title: "Rate Limit Exceeded",
        description: `You've sent too many messages. Please wait ${minutesUntilReset} minute${minutesUntilReset !== 1 ? 's' : ''} before sending again.`,
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Format WhatsApp message
      const whatsappMessage = [
        "*New Contact Form Inquiry*",
        "",
        `*Name:* ${formData.name}`,
        `*Email:* ${formData.email}`,
        `*Phone:* ${formData.phone || "Not provided"}`,
        "",
        "*Message:*",
        formData.message || "No message provided",
      ].join("\n");

      // Save to Supabase if configured
      if (supabase) {
        const submissionData: ContactSubmissionData = {
          name: formData.name,
          email: formData.email,
          project_type: null,
          message: formData.message,
          phone: formData.phone || null,
          submitted_at: new Date().toISOString(),
          status: 'pending',
          user_id: user?.id || null,
        };

        const { error } = await supabase
          .from('contact_submissions')
          .insert([submissionData]);

        if (error) {
          logger.error("Supabase error:", error);
          // Continue to WhatsApp redirect even if Supabase fails
        }
      } else {
        logger.warn("Supabase not configured. Skipping database save.");
      }

      // Record submission for rate limiting
      recordSubmission("contact_form");
      
      // Track form submission
      trackFormSubmission("contact_form", true);

      // Redirect to WhatsApp
      redirectToWhatsApp(whatsappMessage);

      toast({
        title: "Message Sent!",
        description: "Redirecting to WhatsApp... We'll get back to you shortly.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      logger.error("Submission error:", error);
      trackFormSubmission("contact_form", false);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-transparent via-transparent to-[rgba(236,68,59,0.07)] relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            Get in <AuroraText>Touch</AuroraText>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your project to life? Let's talk.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-xl sm:rounded-2xl border border-[var(--primary)]/20 bg-white/7 p-6 sm:p-8 md:p-10 flex flex-col gap-6 shadow-none">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="John Doe"
                    className="rounded-xl min-h-[44px] border border-white/10 bg-transparent focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]/80 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="john@example.com"
                    className="rounded-xl min-h-[44px] border border-white/10 bg-transparent focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]/80 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone (optional)</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 7718850412"
                    className="rounded-xl min-h-[44px] border border-white/10 bg-transparent focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]/80 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Tell us about your project..."
                    className="rounded-xl min-h-32 border border-white/10 bg-transparent focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]/80 transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto rounded-full border border-[rgba(236,68,59,0.65)] bg-[var(--primary)] px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-[0.95rem] font-semibold tracking-wide text-[var(--primary-foreground)] shadow-[0_0_40px_rgba(236,68,59,0.55)] transition-transform duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_0_55px_rgba(255,111,100,0.6)] min-h-[44px]"
                >
                  Request Demo
                </Button>
              </form>
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border space-y-3 sm:space-y-4">
                <a
                  href="mailto:hello@kaalvion.com"
                  className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth min-h-[44px]"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="break-all">kaalvion@gmail.com</span>
                </a>
                <a
                  href="tel:+917718850412"
                  className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground min-h-[44px] hover:text-primary transition-smooth"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+91 7718850412</span>
                </a>
                <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground min-h-[44px]">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img
              src={contactIllustration}
              alt="Contact Us"
              loading="lazy"
              className="w-full rounded-xl sm:rounded-2xl shadow-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

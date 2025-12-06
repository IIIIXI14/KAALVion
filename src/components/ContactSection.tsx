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
import contactIllustration from "@/assets/contact-illustration.jpg";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Format WhatsApp message
      const whatsappMessage = `*New Contact Form Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Project Type:* ${formData.projectType || 'Not specified'}\n\n*Message:*\n${formData.message}`;

      // Save to Supabase if configured
      if (supabase) {
        const { error } = await supabase
          .from('contact_submissions')
          .insert([{
            name: formData.name,
            email: formData.email,
            project_type: formData.projectType || null,
            message: formData.message,
            submitted_at: new Date().toISOString(),
            status: 'pending',
          }]);

        if (error) {
          console.error("Supabase error:", error);
          // Continue to WhatsApp redirect even if Supabase fails
        }
      } else {
        console.warn("Supabase not configured. Skipping database save.");
      }

      // Redirect to WhatsApp
      redirectToWhatsApp(whatsappMessage);

      toast({
        title: "Message Sent!",
        description: "Redirecting to WhatsApp... Your message has been saved.",
      });

      // Reset form
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 bg-secondary/30 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            Get in <span className="glow-gradient">Touch</span>
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
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-medium">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="John Doe"
                    className="rounded-xl min-h-[44px]"
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
                    className="rounded-xl min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Project Type</label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="rounded-xl min-h-[44px]">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="licensing">Patent Licensing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Tell us about your project..."
                    className="rounded-xl min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-smooth shadow-medium min-h-[44px]"
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
                  <span className="break-all">hello@kaalvion.com</span>
                </a>
                <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground min-h-[44px]">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground min-h-[44px]">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>San Francisco, CA</span>
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
              className="w-full rounded-xl sm:rounded-2xl shadow-strong"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

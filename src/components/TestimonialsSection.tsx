import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc",
    content: "KAALVION transformed our entire digital presence. Their team delivered a stunning website and mobile app that exceeded all expectations. The attention to detail and technical expertise is unmatched.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "James Rodriguez",
    role: "Founder, GreenFarm Solutions",
    content: "The Smart Farming Assistant has revolutionized our operations. We've seen a 40% increase in crop yield and significantly reduced water usage. This technology is game-changing.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
  {
    name: "Emily Chen",
    role: "CTO, EduTech Platform",
    content: "Working with KAALVION was seamless. They understood our vision perfectly and delivered a cross-platform app that our users love. The WiFi Attendance feature is brilliant!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
  {
    name: "Michael Thompson",
    role: "Director, Healthcare Innovations",
    content: "The level of professionalism and technical depth KAALVION brings is exceptional. Our patient management system is now best-in-class, thanks to their innovative solutions.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            Client <span className="glow-gradient">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients say about working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: index * 0.09 }}
              whileHover={{ y: -8, boxShadow: '0 1px 9px hsl(var(--primary) / 0.34)' }}
              className="rounded-xl sm:rounded-2xl border border-[var(--primary)]/20 bg-white/7 p-6 sm:p-8 lg:p-10 flex flex-col gap-6 items-start shadow-none transition-smooth"
            >
              <div className="flex gap-2 mb-2 sm:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[hsl(var(--primary))] text-[hsl(var(--primary))]" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-white/80 mb-3 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <span className="relative flex-shrink-0">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full ring-2 ring-[var(--primary)] ring-opacity-50 shadow-xl z-1" />
                  <span className="absolute -inset-1 rounded-full blur-[6px] bg-[hsl(var(--primary)/0.18)] opacity-45 -z-1" />
                </span>
                <div>
                  <div className="text-base font-semibold font-mono tracking-tight text-white">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm font-mono tracking-wider text-[hsl(var(--primary))]">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

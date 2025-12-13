import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Code, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuroraText } from "@/registry/magicui/aurora-text";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseStudy = caseStudies.find((study) => study.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/#case-studies" className="text-primary hover:underline">
            Return to Portfolio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/#case-studies" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 glass">
              {caseStudy.category}
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6">
              {caseStudy.title}
            </h1>
            
            <p className="text-2xl text-accent font-semibold mb-8">
              {caseStudy.subtitle}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label} className="glass rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2"><AuroraText>{metric.value}</AuroraText></div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Problem & Solution */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient flex items-center justify-center">
                    <span className="text-white text-xl">!</span>
                  </div>
                  The Challenge
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.overview.problem}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  Our Solution
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.overview.solution}
                </p>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">Timeline</h3>
                </div>
                <p className="text-muted-foreground">{caseStudy.overview.timeline}</p>
              </div>

              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.overview.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-background/50 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Key Features */}
        <section className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.description.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 glass rounded-xl p-6 hover:shadow-soft transition-smooth"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Image Gallery */}
        <section className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.images.map((image, index) => (
                <div
                  key={index}
                  className="group glass rounded-2xl overflow-hidden hover:shadow-strong transition-smooth"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover opacity-50"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Get in touch to discuss how we can help bring your vision to life.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient text-white font-semibold shadow-soft hover:shadow-strong hover:scale-103 transition-smooth"
            >
              Request Demo
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;

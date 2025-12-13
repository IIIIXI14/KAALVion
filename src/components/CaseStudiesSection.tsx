import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies, categories, type CaseStudyCategory } from "@/data/caseStudies";
import { AuroraText } from "@/registry/magicui/aurora-text";

const iconMap = {
  TrendingUp,
  Clock,
  Users,
};

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<CaseStudyCategory | "All">("All");

  const filteredStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <section id="case-studies" className="py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Success <AuroraText>Stories</AuroraText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-6 py-2 rounded-xl font-medium transition-smooth ${
              selectedCategory === "All"
                ? "bg-gradient text-white shadow-soft"
                : "glass text-foreground hover:shadow-soft"
            }`}
          >
            All Projects
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-xl font-medium transition-smooth ${
                selectedCategory === category
                  ? "bg-gradient text-white shadow-soft"
                  : "glass text-foreground hover:shadow-soft"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredStudies.map((study, index) => {
            const IconComponent = iconMap[study.metrics[0].icon as keyof typeof iconMap];
            return (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group glass rounded-2xl p-8 shadow-soft hover:shadow-strong transition-smooth"
            >
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 glass">
                  {study.category}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                  {study.title}
                </h3>
                <p className="text-accent font-semibold text-lg">{study.subtitle}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {study.description.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-border">
                {study.metrics.map((metric) => {
                  const MetricIcon = iconMap[metric.icon as keyof typeof iconMap];
                  return (
                    <div key={metric.label} className="text-center">
                      <MetricIcon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-xl font-bold"><AuroraText>{metric.value}</AuroraText></div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  );
                })}
              </div>

              <Link 
                to={`/case-studies/${study.id}`}
                className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-smooth"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

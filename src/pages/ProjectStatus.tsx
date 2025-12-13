import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuroraText } from "@/registry/magicui/aurora-text";
import { getUserProjects, getStatusColor, formatStatus, type ProjectSubmissionRecord } from "@/lib/projectQueries";
import { CheckCircle, Clock, MessageSquare, Loader2, Calendar, DollarSign, AlertCircle, FileText } from "lucide-react";
import logger from "@/lib/logger";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectStatus = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const [projects, setProjects] = useState<ProjectSubmissionRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      navigate("/sign-in");
      return;
    }

    async function fetchProjects() {
      setLoading(true);
      const userEmail = user.emailAddresses[0]?.emailAddress || null;
      logger.log("Fetching projects for user:", { userId: user.id, email: userEmail });
      
      try {
        const userProjects = await getUserProjects(user.id, userEmail);
        logger.log("Fetched projects:", userProjects);
        setProjects(userProjects);
      } catch (error) {
        logger.error("Error in fetchProjects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [user, isLoaded, navigate]);

  const getStatusIcon = (status: string) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "in_progress":
        return <Clock className="w-4 h-4" />;
      case "contacted":
        return <MessageSquare className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatBudget = (budget: string) => {
    switch (budget) {
      case "<10k":
        return "Less than $10,000";
      case "10k-50k":
        return "$10,000 - $50,000";
      case "50k-100k":
        return "$50,000 - $100,000";
      case "100k+":
        return "$100,000+";
      default:
        return budget;
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="relative min-h-screen bg-[#0A0E13] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1630] via-[#111933] to-[#150c1f]" />
        <Navbar />
        <main className="relative z-10 pt-32 pb-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-8 sm:mb-12">
              <Skeleton className="h-12 w-64 mb-4 bg-white/10" />
              <Skeleton className="h-6 w-96 bg-white/5" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="rounded-[24px] border border-white/10 bg-[rgba(10,14,19,0.95)] p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <Skeleton className="h-7 w-48 mb-2 bg-white/10" />
                      <Skeleton className="h-4 w-32 mb-3 bg-white/5" />
                    </div>
                    <Skeleton className="h-6 w-20 rounded-full bg-white/10" />
                  </div>
                  <Skeleton className="h-4 w-full mb-2 bg-white/5" />
                  <Skeleton className="h-4 w-3/4 mb-4 bg-white/5" />
                  <div className="flex gap-4 mt-4">
                    <Skeleton className="h-4 w-24 bg-white/5" />
                    <Skeleton className="h-4 w-24 bg-white/5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0A0E13] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1630] via-[#111933] to-[#150c1f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,68,59,0.3),transparent_55%)]" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
                My <AuroraText>Projects</AuroraText>
              </h1>
              <p className="text-base sm:text-lg text-white/70">
                Track the status of all your submitted projects
              </p>
            </div>

            {projects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="rounded-[28px] border border-white/10 bg-[rgba(10,14,19,0.95)] p-12 text-center">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-white/30" />
                  <h2 className="text-2xl font-semibold mb-2 text-white">No Projects Yet</h2>
                  <p className="text-white/70 mb-6">
                    You haven't submitted any projects yet. Submit your first project to get started!
                  </p>
                  <button
                    onClick={() => navigate("/#services")}
                    className="rounded-full border border-[rgba(236,68,59,0.65)] bg-[var(--primary)] px-6 py-3 text-sm font-semibold tracking-wide text-[var(--primary-foreground)] shadow-[0_0_40px_rgba(236,68,59,0.55)] transition-transform duration-300 hover:-translate-y-1 hover:brightness-110"
                  >
                    Browse Services
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="rounded-[24px] border border-white/10 bg-[rgba(10,14,19,0.95)] p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                          {project.project_name}
                        </h3>
                        <p className="text-sm text-white/60 mb-3">{project.service_type}</p>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {getStatusIcon(project.status)}
                        {formatStatus(project.status)}
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-white/70">
                        <Calendar className="w-4 h-4 text-white/50" />
                        <span>Submitted: {formatDate(project.submitted_at)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/70">
                        <Calendar className="w-4 h-4 text-white/50" />
                        <span>Deadline: {formatDate(project.deadline)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/70">
                        <DollarSign className="w-4 h-4 text-white/50" />
                        <span>Budget: {formatBudget(project.budget)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/70">
                        <AlertCircle className="w-4 h-4 text-white/50" />
                        <span className="capitalize">Urgency: {project.urgency}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                      className="text-sm text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors font-semibold"
                    >
                      {expandedId === project.id ? "Hide Details" : "View Details"}
                    </button>

                    {expandedId === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-white/10 space-y-4"
                      >
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Description</p>
                          <p className="text-sm text-white/80">{project.description}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Key Features</p>
                          <p className="text-sm text-white/80">{project.key_features}</p>
                        </div>
                        {project.tech_stack && project.tech_stack.length > 0 && (
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech_stack.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 rounded-md bg-white/5 text-xs text-white/70 border border-white/10"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {project.is_student && project.student_name && (
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Student Info</p>
                            <p className="text-sm text-white/80">
                              {project.student_name}
                              {project.university && ` • ${project.university}`}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectStatus;

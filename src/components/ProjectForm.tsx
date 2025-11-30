import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitProject } from "@/lib/submitProject";
import { useState, useMemo } from "react";
import { Loader2 } from "lucide-react";
import { getProjectTypesForService, getProjectTypeSchema } from "@/lib/serviceProjectTypes";

interface ProjectFormProps {
  serviceType: string;
  onSuccess: () => void;
}

const ProjectForm = ({ serviceType, onSuccess }: ProjectFormProps) => {
  const projectTypeOptions = useMemo(() => getProjectTypesForService(serviceType), [serviceType]);
  
  const projectFormSchema = useMemo(() => z.object({
    projectName: z.string().min(3, "Project name must be at least 3 characters").max(100),
    company: z.string().min(2, "Company name must be at least 2 characters").max(100),
    phone: z.string().regex(/^\+?[\d\s-()]+$/, "Invalid phone number format"),
    email: z.string().email("Invalid email address"),
    description: z.string().min(50, "Description must be at least 50 characters").max(2000),
    keyFeatures: z.string().min(20, "Key features must be at least 20 characters").max(1000),
    projectType: getProjectTypeSchema(serviceType),
    deadline: z.string().min(1, "Deadline is required"),
    budget: z.enum(['<10k', '10k-50k', '50k-100k', '100k+']),
    urgency: z.enum(['low', 'medium', 'high', 'critical']),
    teamSize: z.string().transform((val) => {
      const num = parseInt(val, 10);
      if (isNaN(num) || num < 1 || num > 50) {
        throw new Error("Team size must be between 1 and 50");
      }
      return num;
    }),
    techStack: z.string().optional(),
    integrations: z.string().max(500).optional(),
    requirements: z.string().max(1000).optional(),
    timelinePhases: z.string().max(1000).optional(),
  }), [serviceType]);

  type ProjectFormData = z.infer<typeof projectFormSchema>;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      projectType: undefined,
      budget: undefined,
      urgency: undefined,
    },
  });

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);
    try {
      const deadlineDate = new Date(data.deadline);
      if (isNaN(deadlineDate.getTime())) {
        throw new Error("Invalid deadline date");
      }

      const techStackArray = data.techStack
        ? data.techStack.split(',').map((s) => s.trim()).filter(Boolean)
        : undefined;

      const result = await submitProject({
        serviceType,
        isStudent: false,
        projectName: data.projectName,
        company: data.company,
        email: data.email,
        phone: data.phone,
        description: data.description,
        keyFeatures: data.keyFeatures,
        projectType: data.projectType,
        deadline: deadlineDate.toISOString(),
        budget: data.budget,
        urgency: data.urgency,
        teamSize: data.teamSize,
        techStack: techStackArray,
        integrations: data.integrations,
        requirements: data.requirements,
        timelinePhases: data.timelinePhases,
      });

      if (result.success) {
        toast({
          title: "Project Submitted!",
          description: "We'll review your project and get back to you within 24 hours.",
        });
        onSuccess();
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit project",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-white/90">
            Project Name <span className="text-[var(--primary)]">*</span>
          </label>
          <Input
            {...register("projectName")}
            placeholder="My Awesome Project"
            className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]"
          />
          {errors.projectName && (
            <p className="mt-1 text-xs text-red-400">{errors.projectName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-white/90">
            Company/Organization <span className="text-[var(--primary)]">*</span>
          </label>
          <Input
            {...register("company")}
            placeholder="Acme Corp"
            className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]"
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-white/90">
            Email <span className="text-[var(--primary)]">*</span>
          </label>
          <Input
            type="email"
            {...register("email")}
            placeholder="you@example.com"
            className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-white/90">
            Phone <span className="text-[var(--primary)]">*</span>
          </label>
          <Input
            {...register("phone")}
            placeholder="+1 (555) 123-4567"
            className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-white/90">
          Detailed Description <span className="text-[var(--primary)]">*</span>
        </label>
        <Textarea
          {...register("description")}
          placeholder="Describe your project in detail (minimum 50 characters)..."
          className="bg-white/5 border-white/10 text-white rounded-xl min-h-32 focus:border-[var(--primary)]"
        />
        {errors.description && (
          <p className="mt-1 text-xs text-red-400">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-white/90">
          Key Features <span className="text-[var(--primary)]">*</span>
        </label>
        <Textarea
          {...register("keyFeatures")}
          placeholder="List the main features and requirements..."
          className="bg-white/5 border-white/10 text-white rounded-xl min-h-24 focus:border-[var(--primary)]"
        />
        {errors.keyFeatures && (
          <p className="mt-1 text-xs text-red-400">{errors.keyFeatures.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-white/90">
            Project Type <span className="text-[var(--primary)]">*</span>
          </label>
          <Select onValueChange={(value) => setValue("projectType", value as any, { shouldValidate: true })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1F29] border-white/10">
              {projectTypeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.projectType && (
            <p className="mt-1 text-xs text-red-400">{errors.projectType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-white/90">
            Deadline <span className="text-[var(--primary)]">*</span>
          </label>
          <Input
            type="date"
            {...register("deadline")}
            min={new Date().toISOString().split('T')[0]}
            className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]"
          />
          {errors.deadline && (
            <p className="mt-1 text-xs text-red-400">{errors.deadline.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-white/90">
            Budget Range <span className="text-[var(--primary)]">*</span>
          </label>
          <Select onValueChange={(value) => setValue("budget", value as any, { shouldValidate: true })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]">
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1F29] border-white/10">
              <SelectItem value="<10k">Less than $10,000</SelectItem>
              <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k+">$100,000+</SelectItem>
            </SelectContent>
          </Select>
          {errors.budget && (
            <p className="mt-1 text-xs text-red-400">{errors.budget.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-white/90">
            Urgency Level <span className="text-[var(--primary)]">*</span>
          </label>
          <Select onValueChange={(value) => setValue("urgency", value as any, { shouldValidate: true })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]">
              <SelectValue placeholder="Select urgency" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1F29] border-white/10">
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
            </SelectContent>
          </Select>
          {errors.urgency && (
            <p className="mt-1 text-xs text-red-400">{errors.urgency.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-white/90">
          Expected Team Size <span className="text-[var(--primary)]">*</span>
        </label>
        <Input
          type="number"
          {...register("teamSize")}
          placeholder="5"
          min="1"
          max="50"
          className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]"
        />
        {errors.teamSize && (
          <p className="mt-1 text-xs text-red-400">{errors.teamSize.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-white/90">
          Preferred Tech Stack <span className="text-white/50">(optional)</span>
        </label>
        <Input
          {...register("techStack")}
          placeholder="React, Node.js, PostgreSQL (comma-separated)"
          className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-white/90">
          Existing Systems to Integrate <span className="text-white/50">(optional)</span>
        </label>
        <Textarea
          {...register("integrations")}
          placeholder="Describe systems that need to integrate..."
          className="bg-white/5 border-white/10 text-white rounded-xl min-h-20 focus:border-[var(--primary)]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-white/90">
          Special Requirements/Constraints <span className="text-white/50">(optional)</span>
        </label>
        <Textarea
          {...register("requirements")}
          placeholder="Any special requirements or constraints..."
          className="bg-white/5 border-white/10 text-white rounded-xl min-h-20 focus:border-[var(--primary)]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-white/90">
          Timeline/Phases Breakdown <span className="text-white/50">(optional)</span>
        </label>
        <Textarea
          {...register("timelinePhases")}
          placeholder="Break down your project timeline and phases..."
          className="bg-white/5 border-white/10 text-white rounded-xl min-h-20 focus:border-[var(--primary)]"
        />
      </div>

      <div className="flex gap-4 pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 !bg-[var(--primary)] !text-[var(--primary-foreground)] font-semibold !rounded-xl px-8 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all border-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Project"
          )}
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { submitProject } from "@/lib/submitProject";
import { useState, useMemo } from "react";
import { Loader2, GraduationCap } from "lucide-react";
import { getProjectTypesForService, getProjectTypeSchema } from "@/lib/serviceProjectTypes";

interface StudentProjectFormProps {
  serviceType: string;
  onSuccess: () => void;
}

const StudentProjectForm = ({ serviceType, onSuccess }: StudentProjectFormProps) => {
  const projectTypeOptions = useMemo(() => getProjectTypesForService(serviceType), [serviceType]);
  
  const studentFormSchema = useMemo(() => z.object({
    projectName: z.string().min(3, "Project name must be at least 3 characters").max(100),
    studentName: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    university: z.string().max(100).optional(),
    description: z.string().min(30, "Description must be at least 30 characters").max(1000),
    keyFeatures: z.string().min(15, "Key features must be at least 15 characters").max(500),
    projectType: getProjectTypeSchema(serviceType),
    preferredTimeline: z.enum(['2-4 weeks', '1-2 months', '2-3 months']),
    budget: z.enum(['<10k', '10k-50k', '50k-100k', '100k+']),
    portfolioFocus: z.boolean().default(false),
  }), [serviceType]);

  type StudentFormData = z.infer<typeof studentFormSchema>;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      portfolioFocus: false,
      projectType: undefined,
      preferredTimeline: undefined,
      budget: undefined,
    },
  });

  const portfolioFocus = watch("portfolioFocus");

  const onSubmit = async (data: StudentFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitProject({
        serviceType,
        isStudent: true,
        projectName: data.projectName,
        studentName: data.studentName,
        email: data.email,
        company: data.university || "Student",
        phone: "", // Not required for students
        description: data.description,
        keyFeatures: data.keyFeatures,
        projectType: data.projectType,
        deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // Default 30 days
        budget: data.budget,
        urgency: "medium",
        teamSize: 1,
        university: data.university,
        portfolioFocus: data.portfolioFocus,
        preferredTimeline: data.preferredTimeline,
      });

      if (result.success) {
        toast({
          title: "Project Submitted!",
          description: "We'll review your student project and get back to you soon. Quick turnaround available!",
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
    <div className="space-y-6">
      {/* Student Discount Badge */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/30">
        <GraduationCap className="h-5 w-5 text-[var(--primary)]" />
        <div>
          <p className="text-sm font-semibold text-[var(--primary)]">Student Discount Available</p>
          <p className="text-xs text-white/70">Quick turnaround and student-friendly pricing for portfolio projects</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-white/90">
              Project Name <span className="text-[var(--primary)]">*</span>
            </label>
            <Input
              {...register("projectName")}
              placeholder="My Portfolio Project"
              className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]"
            />
            {errors.projectName && (
              <p className="mt-1 text-xs text-red-400">{errors.projectName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-white/90">
              Your Name <span className="text-[var(--primary)]">*</span>
            </label>
            <Input
              {...register("studentName")}
              placeholder="John Doe"
              className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]"
            />
            {errors.studentName && (
              <p className="mt-1 text-xs text-red-400">{errors.studentName.message}</p>
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
              placeholder="you@university.edu"
              className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-white/90">
              University/School <span className="text-white/50">(optional)</span>
            </label>
            <Input
              {...register("university")}
              placeholder="University Name"
              className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-white/90">
            Project Description <span className="text-[var(--primary)]">*</span>
          </label>
          <Textarea
            {...register("description")}
            placeholder="Describe your project (minimum 30 characters)..."
            className="bg-white/5 border-white/10 text-white rounded-xl min-h-24 focus:border-[var(--primary)]"
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
            placeholder="List the main features you want..."
            className="bg-white/5 border-white/10 text-white rounded-xl min-h-20 focus:border-[var(--primary)]"
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
              Preferred Timeline <span className="text-[var(--primary)]">*</span>
            </label>
            <Select onValueChange={(value) => setValue("preferredTimeline", value as any, { shouldValidate: true })}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1F29] border-white/10">
                <SelectItem value="2-4 weeks">2-4 weeks (Quick turnaround)</SelectItem>
                <SelectItem value="1-2 months">1-2 months</SelectItem>
                <SelectItem value="2-3 months">2-3 months</SelectItem>
              </SelectContent>
            </Select>
            {errors.preferredTimeline && (
              <p className="mt-1 text-xs text-red-400">{errors.preferredTimeline.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-white/90">
            Budget Range <span className="text-[var(--primary)]">*</span>
          </label>
          <Select onValueChange={(value) => setValue("budget", value as any, { shouldValidate: true })}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[var(--primary)]">
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1F29] border-white/10">
              <SelectItem value="<10k">Less than $10,000 (Student-friendly)</SelectItem>
              <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k+">$100,000+</SelectItem>
            </SelectContent>
          </Select>
          {errors.budget && (
            <p className="mt-1 text-xs text-red-400">{errors.budget.message}</p>
          )}
        </div>

        <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
          <Checkbox
            id="portfolio"
            checked={portfolioFocus}
            onCheckedChange={(checked) => setValue("portfolioFocus", checked === true)}
            className="border-white/20 data-[state=checked]:bg-[var(--primary)] data-[state=checked]:border-[var(--primary)]"
          />
          <label
            htmlFor="portfolio"
            className="text-sm font-medium text-white/90 cursor-pointer"
          >
            This is a portfolio/learning project
          </label>
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
              "Submit Student Project"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StudentProjectForm;


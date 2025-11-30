export interface ProjectSubmission {
  id?: string;
  serviceType: string;
  isStudent: boolean;
  projectName: string;
  company: string;
  email: string;
  phone: string;
  description: string;
  keyFeatures: string;
  projectType: string;
  deadline: Date | string;
  budget: string;
  urgency: string;
  teamSize: number;
  techStack?: string[];
  integrations?: string;
  requirements?: string;
  timelinePhases?: string;
  submittedAt?: Date;
  status?: 'pending' | 'reviewed' | 'contacted';
  // Student-specific fields
  studentName?: string;
  university?: string;
  portfolioFocus?: boolean;
  preferredTimeline?: string;
}

export interface ServiceData {
  title: string;
  description: string;
  stack: string[];
  icon: React.ComponentType<{ className?: string }>;
}


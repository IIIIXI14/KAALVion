/**
 * Type definitions for submission data sent to Supabase
 */

/**
 * Data structure for project submission to Supabase
 */
export interface ProjectSubmissionData {
  service_type: string;
  is_student: boolean;
  project_name: string;
  company: string;
  email: string;
  phone: string | null;
  description: string;
  key_features: string;
  project_type: string;
  deadline: string;
  budget: string;
  urgency: string;
  team_size: number;
  tech_stack: string[] | null;
  integrations: string | null;
  requirements: string | null;
  timeline_phases: string | null;
  student_name: string | null;
  university: string | null;
  portfolio_focus: boolean;
  preferred_timeline: string | null;
  submitted_at: string;
  status: string;
  user_id?: string | null;
}

/**
 * Data structure for contact submission to Supabase
 */
export interface ContactSubmissionData {
  name: string;
  email: string;
  project_type: string | null;
  message: string;
  submitted_at: string;
  status: string;
  user_id?: string | null;
}

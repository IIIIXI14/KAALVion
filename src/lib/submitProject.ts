import type { ProjectSubmission } from "@/types/project";
import { supabase } from "./supabase";

const WHATSAPP_NUMBER = "7718850412";

/**
 * Format project data into WhatsApp message
 */
function formatWhatsAppMessage(data: ProjectSubmission): string {
  const lines = [
    `*New Project Inquiry - ${data.serviceType}*`,
    ``,
    `*Project Name:* ${data.projectName}`,
    `*${data.isStudent ? 'Student Name' : 'Company'}:* ${data.isStudent ? data.studentName : data.company}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone || 'Not provided'}`,
    ``,
    `*Project Type:* ${data.projectType}`,
    `*Budget:* ${data.budget}`,
    `*Urgency:* ${data.urgency}`,
    `*Deadline:* ${new Date(data.deadline).toLocaleDateString()}`,
    ``,
    `*Description:*`,
    data.description,
    ``,
    `*Key Features:*`,
    data.keyFeatures,
  ];

  if (data.techStack && data.techStack.length > 0) {
    lines.push(``, `*Tech Stack:* ${data.techStack.join(', ')}`);
  }

  if (data.integrations) {
    lines.push(``, `*Integrations:* ${data.integrations}`);
  }

  if (data.isStudent) {
    if (data.university) lines.push(`*University:* ${data.university}`);
    if (data.preferredTimeline) lines.push(`*Preferred Timeline:* ${data.preferredTimeline}`);
    if (data.portfolioFocus) lines.push(`*Portfolio Project:* Yes`);
  }

  return lines.join('\n');
}

/**
 * Redirect to WhatsApp with pre-filled message
 */
export function redirectToWhatsApp(message: string) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}

/**
 * Submit project form data to Supabase and redirect to WhatsApp
 */
export async function submitProject(data: ProjectSubmission): Promise<{ success: boolean; error?: string }> {
  try {
    const submissionData = {
      service_type: data.serviceType,
      is_student: data.isStudent,
      project_name: data.projectName,
      company: data.company,
      email: data.email,
      phone: data.phone || null,
      description: data.description,
      key_features: data.keyFeatures,
      project_type: data.projectType,
      deadline: typeof data.deadline === 'string' ? data.deadline : data.deadline.toISOString(),
      budget: data.budget,
      urgency: data.urgency,
      team_size: data.teamSize,
      tech_stack: data.techStack || null,
      integrations: data.integrations || null,
      requirements: data.requirements || null,
      timeline_phases: data.timelinePhases || null,
      student_name: data.studentName || null,
      university: data.university || null,
      portfolio_focus: data.portfolioFocus || false,
      preferred_timeline: data.preferredTimeline || null,
      submitted_at: new Date().toISOString(),
      status: 'pending',
    };

    // Save to Supabase if configured
    if (supabase) {
      const { error } = await supabase
        .from('project_submissions')
        .insert([submissionData]);

      if (error) {
        console.error("Supabase error:", error);
        // Continue to WhatsApp redirect even if Supabase fails
      }
    } else {
      console.warn("Supabase not configured. Skipping database save.");
    }

    // Format and redirect to WhatsApp
    const whatsappMessage = formatWhatsAppMessage(data);
    redirectToWhatsApp(whatsappMessage);

    return { success: true };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit project",
    };
  }
}


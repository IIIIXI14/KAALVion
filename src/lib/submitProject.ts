import type { ProjectSubmission } from "@/types/project";

/**
 * Submit project form data to database
 * Currently uses placeholder - database credentials to be configured via environment variables
 * 
 * TODO: Configure Supabase or Firebase credentials:
 * - Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env
 * - Or add Firebase config to .env
 */
export async function submitProject(data: ProjectSubmission): Promise<{ success: boolean; error?: string }> {
  try {
    // Placeholder: Log submission for now
    // Replace with actual database call once credentials are configured
    console.log("Project submission:", {
      ...data,
      submittedAt: new Date().toISOString(),
      status: 'pending',
    });

    // TODO: Uncomment and configure when database is ready
    /*
    // Supabase example:
    const { data: result, error } = await supabase
      .from('project_submissions')
      .insert([{
        ...data,
        submittedAt: new Date().toISOString(),
        status: 'pending',
      }]);

    if (error) throw error;
    */

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit project",
    };
  }
}


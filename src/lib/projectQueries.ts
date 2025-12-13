import { supabase } from "./supabase";
import logger from "./logger";

export interface ProjectSubmissionRecord {
  id: string;
  user_id: string | null;
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
  created_at: string;
}

/**
 * Fetch all project submissions for a specific user
 */
export async function getUserProjects(userId: string, userEmail?: string | null): Promise<ProjectSubmissionRecord[]> {
  if (!supabase) {
    logger.warn("Supabase not configured");
    return [];
  }

  try {
    // Try to fetch by user_id first
    const { data: dataByUserId, error: errorByUserId } = await supabase
      .from("project_submissions")
      .select("*")
      .eq("user_id", userId)
      .order("submitted_at", { ascending: false });

    // Check if error is due to missing column or type mismatch
    if (errorByUserId) {
      const errorMsg = errorByUserId.message?.toLowerCase() || "";
      const isMissingColumn = errorMsg.includes("column") && errorMsg.includes("user_id");
      const isTypeError = errorByUserId.code === "22P02" || errorMsg.includes("invalid input syntax for type");
      
      if (isTypeError) {
        logger.error("❌ Type Mismatch Error!");
        logger.error("Clerk user IDs are TEXT strings, but your database may expect a different type.");
        logger.error("Please run the migration script: MIGRATION_FIX_UUID.sql");
        logger.error("Or see SUPABASE_SETUP.md for the migration SQL.");
        logger.warn("Falling back to email-based query...");
      } else if (isMissingColumn) {
        logger.warn("user_id column doesn't exist. Please run the migration SQL in SUPABASE_SETUP.md");
        logger.warn("Falling back to email-based query...");
      } else {
        logger.error("Error fetching user projects by user_id:", errorByUserId);
      }
    }

    // If we got results, return them
    if (!errorByUserId && dataByUserId && dataByUserId.length > 0) {
      logger.log(`Found ${dataByUserId.length} projects by user_id`);
      return dataByUserId;
    }

    // If user_id query failed or returned no results, try email as fallback
    if (userEmail) {
      logger.log("Querying projects by email as fallback...");
      const { data: dataByEmail, error: errorByEmail } = await supabase
        .from("project_submissions")
        .select("*")
        .eq("email", userEmail)
        .order("submitted_at", { ascending: false });

      if (errorByEmail) {
        logger.error("Error fetching user projects by email:", errorByEmail);
        return [];
      }

      if (dataByEmail && dataByEmail.length > 0) {
        logger.log(`Found ${dataByEmail.length} projects by email`);
        // Optionally update these records with user_id if column exists
        if (!errorByUserId && dataByEmail.length > 0) {
          // Try to update user_id for records that don't have it
          const recordsToUpdate = dataByEmail.filter(p => !p.user_id);
          if (recordsToUpdate.length > 0) {
            logger.log(`Updating ${recordsToUpdate.length} records with user_id...`);
            const updatePromises = recordsToUpdate.map(record =>
              supabase
                .from("project_submissions")
                .update({ user_id: userId })
                .eq("id", record.id)
            );
            await Promise.all(updatePromises);
          }
        }
        return dataByEmail;
      }
    }

    logger.log("No projects found for user");
    return [];
  } catch (error) {
    logger.error("Exception fetching user projects:", error);
    return [];
  }
}

/**
 * Get status badge color based on status value
 */
export function getStatusColor(status: string): string {
  switch (status?.toLowerCase()) {
    case "pending":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "reviewed":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "contacted":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "in_progress":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    case "completed":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    default:
      return "bg-white/10 text-white/70 border-white/20";
  }
}

/**
 * Format status text for display
 */
export function formatStatus(status: string): string {
  switch (status?.toLowerCase()) {
    case "in_progress":
      return "In Progress";
    default:
      return status?.charAt(0).toUpperCase() + status?.slice(1).toLowerCase() || "Unknown";
  }
}

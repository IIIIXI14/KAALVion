import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "@/lib/supabase";
import logger from "@/lib/logger";

export function ClerkSupabaseSync() {
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (!isSignedIn || !user || !supabase) return;

    async function upsertClerkUser() {
      try {
        const { id, emailAddresses, firstName, lastName, username, createdAt } = user;
        const email = emailAddresses[0]?.emailAddress || null;
        const fullName = firstName && lastName 
          ? `${firstName} ${lastName}` 
          : firstName || lastName || username || null;

        const { error } = await supabase
          .from("users")
          .upsert(
            [
              {
                id, // Clerk user id (unique)
                email,
                name: fullName,
                role: null, // Can be set later if needed
                created_at: createdAt ? new Date(createdAt).toISOString() : new Date().toISOString(),
              },
            ],
            { onConflict: "id" }
          );

        if (error) {
          logger.error("Supabase upsert user error:", error.message);
        } else {
          logger.log("User synced to Supabase successfully");
        }
      } catch (error) {
        logger.error("Error syncing user to Supabase:", error);
      }
    }

    upsertClerkUser();
  }, [isSignedIn, user]);

  return null;
}

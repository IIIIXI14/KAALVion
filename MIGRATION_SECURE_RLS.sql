-- Migration Script: Secure RLS Policies
-- Run this in your Supabase SQL Editor to tighten security policies
-- This removes the permissive "Allow anon to read projects" policy

-- Step 1: Drop the insecure policy that allows anonymous users to read all projects
DROP POLICY IF EXISTS "Allow anon to read projects" ON project_submissions;

-- Step 2: Update the authenticated policy name for clarity
DROP POLICY IF EXISTS "Allow authenticated users to read projects" ON project_submissions;

-- Step 3: Create a more descriptive policy (note: still requires app-level filtering)
CREATE POLICY "Allow authenticated users to read own projects" ON project_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Step 4: Add a comment explaining the security model
COMMENT ON POLICY "Allow authenticated users to read own projects" ON project_submissions IS 
'Allows authenticated users to read projects. IMPORTANT: Since we use Clerk (not Supabase Auth), 
we cannot filter by auth.uid() at the database level. The application MUST filter queries by user_id 
to ensure users only see their own projects. This is implemented in getUserProjects() function.';

-- Success message
DO $$ 
BEGIN
  RAISE NOTICE 'RLS policies updated. Anonymous users can no longer read projects.';
  RAISE NOTICE 'IMPORTANT: Application code must filter by user_id in all queries.';
END $$;

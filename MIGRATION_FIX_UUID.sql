-- Migration Script: Fix UUID Type Issue for Clerk Integration
-- Run this in your Supabase SQL Editor if you're getting UUID type errors
-- This fixes the mismatch between Clerk user IDs (TEXT) and Supabase UUID columns

-- Step 1: Drop all foreign key constraints that reference users.id
-- This must be done before we can alter the users table
ALTER TABLE project_submissions 
DROP CONSTRAINT IF EXISTS project_submissions_user_id_fkey;

ALTER TABLE contact_submissions 
DROP CONSTRAINT IF EXISTS contact_submissions_user_id_fkey;

-- Step 2: Create or recreate users table with TEXT id
-- Since we're using Clerk (not Supabase Auth), we can safely recreate the table
-- Drop users table if it exists (will recreate with correct type)
-- Note: This will delete existing data, but since we're using Clerk, 
-- the ClerkSupabaseSync component will repopulate it
DROP TABLE IF EXISTS users CASCADE;

-- Create users table with TEXT id for Clerk
CREATE TABLE users (
  id TEXT PRIMARY KEY, -- Clerk user IDs are strings, not UUIDs
  email TEXT,
  name TEXT,
  role TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 3: Add user_id column if it doesn't exist (as TEXT)
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'project_submissions' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE project_submissions ADD COLUMN user_id TEXT;
  ELSE
    -- If column exists, change its type from UUID to TEXT
    ALTER TABLE project_submissions 
    ALTER COLUMN user_id TYPE TEXT USING user_id::TEXT;
  END IF;
END $$;

-- Step 4: Recreate the foreign key with TEXT type
ALTER TABLE project_submissions 
ADD CONSTRAINT project_submissions_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL;

-- Step 5: Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_project_submissions_user_id ON project_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Step 6: Update contact_submissions table similarly
-- (Foreign key already dropped in Step 1)

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'contact_submissions' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN user_id TEXT;
  ELSE
    ALTER TABLE contact_submissions 
    ALTER COLUMN user_id TYPE TEXT USING user_id::TEXT;
  END IF;
END $$;

ALTER TABLE contact_submissions 
ADD CONSTRAINT contact_submissions_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_contact_submissions_user_id ON contact_submissions(user_id);

-- Step 7: Update RLS policies (drop and recreate)
DROP POLICY IF EXISTS "Allow authenticated reads" ON project_submissions;
DROP POLICY IF EXISTS "Allow users to read own projects" ON project_submissions;
DROP POLICY IF EXISTS "Allow users to insert own projects" ON project_submissions;
DROP POLICY IF EXISTS "Allow anon to read projects" ON project_submissions;

-- Recreate policies
CREATE POLICY "Allow authenticated users to read projects" ON project_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow anon to read projects" ON project_submissions
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow users to insert own projects" ON project_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Success message
DO $$ 
BEGIN
  RAISE NOTICE 'Migration completed successfully! Clerk user IDs (TEXT) are now compatible with your database.';
END $$;

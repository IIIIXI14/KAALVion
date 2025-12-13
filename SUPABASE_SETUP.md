# Supabase Setup Guide

## Environment Variables (.env.local)

Create or update the `.env.local` file in the root directory with the following format:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk Authentication (if using)
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# WhatsApp Integration
VITE_WHATSAPP_NUMBER=7718850412
```

### How to get your Supabase credentials:

1. Go to [https://supabase.com](https://supabase.com) and sign in
2. Create a new project or select an existing one
3. Go to **Settings** → **API**
4. Copy the following:
   - **Project URL** → Use as `VITE_SUPABASE_URL`
   - **anon/public key** → Use as `VITE_SUPABASE_ANON_KEY`

### Example .env.local file:

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eHh4eHh4eHh4eHh4eHh4eHgiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NTg3NjgwMCwiZXhwIjoxOTYxNDUyODAwfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
VITE_WHATSAPP_NUMBER=7718850412
```

---

## Supabase Database Schema

You need to create three tables in your Supabase database:

### 1. `users` Table (for Clerk user sync)

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY, -- Clerk user IDs are strings, not UUIDs
  email TEXT,
  name TEXT,
  role TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
```

### 2. `project_submissions` Table

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS project_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT REFERENCES users(id) ON DELETE SET NULL, -- TEXT to match Clerk IDs
  service_type TEXT NOT NULL,
  is_student BOOLEAN DEFAULT false,
  project_name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  description TEXT NOT NULL,
  key_features TEXT NOT NULL,
  project_type TEXT NOT NULL,
  deadline TIMESTAMPTZ NOT NULL,
  budget TEXT NOT NULL,
  urgency TEXT NOT NULL,
  team_size INTEGER NOT NULL,
  tech_stack TEXT[],
  integrations TEXT,
  requirements TEXT,
  timeline_phases TEXT,
  student_name TEXT,
  university TEXT,
  portfolio_focus BOOLEAN DEFAULT false,
  preferred_timeline TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'contacted', 'in_progress', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_project_submissions_email ON project_submissions(email);
CREATE INDEX IF NOT EXISTS idx_project_submissions_user_id ON project_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_project_submissions_status ON project_submissions(status);
CREATE INDEX IF NOT EXISTS idx_project_submissions_submitted_at ON project_submissions(submitted_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE project_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (anonymous users can submit)
CREATE POLICY "Allow anonymous inserts" ON project_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read their own projects only
-- Note: Since we're using Clerk (not Supabase Auth), we cannot use auth.uid()
-- The application MUST filter by user_id in queries to ensure users only see their own projects
-- This policy allows authenticated users to read, but application-level filtering is required
CREATE POLICY "Allow authenticated users to read own projects" ON project_submissions
  FOR SELECT
  TO authenticated
  USING (true);
  
-- SECURITY NOTE: The above policy allows authenticated users to read all projects.
-- Since Clerk doesn't integrate with Supabase Auth, we cannot filter by auth.uid() at the database level.
-- The application code MUST always filter queries by user_id to ensure data isolation.
-- Example: .eq("user_id", userId) - This is already implemented in getUserProjects().

-- Create policy to allow users to insert their own projects
CREATE POLICY "Allow users to insert own projects" ON project_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);
```

### 3. `contact_submissions` Table

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT REFERENCES users(id) ON DELETE SET NULL, -- TEXT to match Clerk IDs
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT,
  message TEXT NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'contacted')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_user_id ON contact_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (anonymous users can submit)
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read their own contact submissions
-- Note: Application should filter by user_id when querying
CREATE POLICY "Allow authenticated users to read own contacts" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
```

---

## WhatsApp Integration

The WhatsApp number is configured via environment variable:
- **Environment Variable:** `VITE_WHATSAPP_NUMBER` in `.env.local`
- **Default:** `7718850412` (fallback if env var not set)
- **Format:** International format (no + sign in code, just the number)
- **Location:** Configured in `src/lib/submitProject.ts`

When users submit forms, they will be automatically redirected to WhatsApp with a pre-filled message containing all their project details.

---

## Testing

After setting up:

1. Add your Supabase credentials to `.env.local`
2. Create the tables in Supabase using the SQL above
3. Restart your development server (`npm run dev`)
4. Test form submission - it should:
   - Save data to Supabase
   - Open WhatsApp with pre-filled message

---

---

## Migration: Fix UUID Type Issue (If Tables Already Exist)

If you already created the tables with UUID types for user IDs, run this migration to fix the type mismatch with Clerk IDs:

```sql
-- Step 1: Create users table if it doesn't exist (with TEXT id for Clerk)
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY, -- Clerk user IDs are strings, not UUIDs
  email TEXT,
  name TEXT,
  role TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 2: Drop the foreign key constraint if it exists
ALTER TABLE project_submissions 
DROP CONSTRAINT IF EXISTS project_submissions_user_id_fkey;

-- Step 3: Change user_id column type from UUID to TEXT
ALTER TABLE project_submissions 
ALTER COLUMN user_id TYPE TEXT USING user_id::TEXT;

-- Step 4: Recreate the foreign key with TEXT type
ALTER TABLE project_submissions 
ADD CONSTRAINT project_submissions_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL;

-- Step 5: Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_project_submissions_user_id ON project_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Step 6: Update RLS policies (if needed)
DROP POLICY IF EXISTS "Allow authenticated reads" ON project_submissions;
DROP POLICY IF EXISTS "Allow users to read own projects" ON project_submissions;
DROP POLICY IF EXISTS "Allow users to insert own projects" ON project_submissions;

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
```

**Important Notes:**
- Clerk user IDs are strings like `"user_36D0TkmdnMp1B7kuxXCcZKcJ5FX"`, not UUIDs
- The `users` table must use `TEXT` for the `id` column
- The `project_submissions.user_id` column must also be `TEXT` to match

---

## Notes

- The WhatsApp redirect will work even if Supabase is not configured (it will just skip the database save)
- All form submissions are stored with `status: 'pending'` by default
- You can update the status in Supabase dashboard as you review/contact users
- The `user_id` column links projects to authenticated users, allowing them to view their own projects
- If `user_id` is NULL (anonymous submission), projects can still be queried by email as a fallback

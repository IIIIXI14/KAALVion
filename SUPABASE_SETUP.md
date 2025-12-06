# Supabase Setup Guide

## Environment Variables (.env.local)

Create or update the `.env.local` file in the root directory with the following format:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk Authentication (if using)
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
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
```

---

## Supabase Database Schema

You need to create two tables in your Supabase database:

### 1. `project_submissions` Table

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS project_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
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
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'contacted')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_project_submissions_email ON project_submissions(email);
CREATE INDEX IF NOT EXISTS idx_project_submissions_status ON project_submissions(status);
CREATE INDEX IF NOT EXISTS idx_project_submissions_submitted_at ON project_submissions(submitted_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE project_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (anonymous users can submit)
CREATE POLICY "Allow anonymous inserts" ON project_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read (optional - adjust as needed)
CREATE POLICY "Allow authenticated reads" ON project_submissions
  FOR SELECT
  TO authenticated
  USING (true);
```

### 2. `contact_submissions` Table

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
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
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (anonymous users can submit)
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read (optional - adjust as needed)
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
```

---

## WhatsApp Integration

The WhatsApp number is configured in `src/lib/submitProject.ts`:
- **Number:** 7208737077
- **Format:** International format (no + sign in code, just the number)

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

## Notes

- The WhatsApp redirect will work even if Supabase is not configured (it will just skip the database save)
- All form submissions are stored with `status: 'pending'` by default
- You can update the status in Supabase dashboard as you review/contact users

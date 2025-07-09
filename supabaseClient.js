import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project URL and API key
// https://rkdjjxswangnovmkmuaz.supabase.co
const SUPABASE_URL = 'https://rkdjjxswangnovmkmuaz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZGpqeHN3YW5nbm92bWttdWF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAzNjE2NjEsImV4cCI6MjAzNTkzNzY2MX0.9OExptFVQa5i4GbjsjNlmBpzmmivNI3S8fzUPJHyVUs';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
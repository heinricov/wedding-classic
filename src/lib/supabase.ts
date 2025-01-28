import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qstxewaenegeuknflrvj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzdHhld2FlbmVnZXVrbmZscnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNzc0NjgsImV4cCI6MjA1MzY1MzQ2OH0.etyNs3l_4A4OyvlZpe4IqPj9aYYbvNunAcVQQUS6BZo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface RSVPMessage {
  id: string;
  created_at: string;
  name: string;
  attending: string;
  number_of_guests: number;
  message: string;
  is_visible: boolean;
}

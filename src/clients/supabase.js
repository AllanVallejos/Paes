import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lsyumzoinuacsrhtqebq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzeXVtem9pbnVhY3NyaHRxZWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2Mjk3NTAsImV4cCI6MjAxMjIwNTc1MH0.n2tJ--z-wOIBn5dYeZZ_Qa1I9UY9EPBg6nlrKu7tWfQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
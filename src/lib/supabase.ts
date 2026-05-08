"use client";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debug output (safe): show presence and lengths, avoid printing full secret
console.log('ENV DEBUG: NEXT_PUBLIC_SUPABASE_URL', typeof supabaseUrl, supabaseUrl ? 'present' : 'missing');
console.log('ENV DEBUG: NEXT_PUBLIC_SUPABASE_ANON_KEY length', supabaseAnonKey ? supabaseAnonKey.length : 'missing');

// Temporary fallback for local testing only — remove before committing/publishing.
const FALLBACK_SUPABASE_URL = "https://qbmebyimhpglrvtqnkwa.supabase.co";
const FALLBACK_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFibWVieWltaHBnbHJ2dHFua3dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3MjA5MzMsImV4cCI6MjA5MTI5NjkzM30.S3AKKMNaz9iJLb6NQL_P84Dft1Y7sWb-7lFXEuhTkTI";

const finalSupabaseUrl = supabaseUrl && supabaseUrl.trim() !== "" ? supabaseUrl : FALLBACK_SUPABASE_URL;
const finalSupabaseAnonKey = supabaseAnonKey && supabaseAnonKey.trim() !== "" ? supabaseAnonKey : FALLBACK_SUPABASE_ANON_KEY;

export const supabase = createClient(finalSupabaseUrl, finalSupabaseAnonKey);

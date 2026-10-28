import { createClient } from "@supabase/supabase-js";

const url = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
const anonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(url, anonKey);

export const supabaseIsConfigured = Boolean(
  url && anonKey && !url.includes("SEU-PROJETO") && !anonKey.includes("SUA_CHAVE")
);

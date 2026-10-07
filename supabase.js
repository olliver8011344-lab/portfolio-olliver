import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://portifilo-olliver-2026.vercel.app/";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_jCHMQYQ_aI-guXembBGELg_8s4a3s6q";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
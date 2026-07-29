import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { createClient } from "@supabase/supabase-js";

const extra = (Constants.expoConfig?.extra ?? {}) as Record<string, string>;

const supabaseUrl = extra.supabaseUrl ?? "";
const supabaseAnonKey = extra.supabaseAnonKey ?? "";

if (!supabaseUrl || supabaseUrl.startsWith("https://YOUR-PROJECT")) {
  console.warn(
    "[La Tarologia] Supabase n'est pas configuré : renseignez supabaseUrl et supabaseAnonKey dans app.json (extra)."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

import { supabase } from "./supabase";

export interface AiCard {
  name: string;
  reversed: boolean;
  meaning: string;
}

export interface AiInterpretationRequest {
  locale: string;
  spreadName: string;
  intention: string;
  cards: AiCard[];
}

export async function getAiInterpretation(req: AiInterpretationRequest): Promise<string> {
  const { data, error } = await supabase.functions.invoke<{ interpretation: string; error?: string }>(
    "interpret-draw",
    { body: req }
  );
  if (error) throw new Error(error.message);
  if (data?.error) throw new Error(data.error);
  return data?.interpretation ?? "";
}

// Supabase Edge Function (Deno) — proxy sécurisé vers l'API Anthropic.
// Déployer : supabase functions deploy interpret-draw
// Clé : supabase secrets set ANTHROPIC_API_KEY=sk-ant-api03-...

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function buildPrompt(locale: string, spreadName: string, intention: string, cards: { name: string; reversed: boolean; meaning: string }[]) {
  const cardLines = cards.map((c, i) =>
    `${i + 1}. ${c.name}${c.reversed ? " (inversée)" : ""} — ${c.meaning}`
  ).join("\n");

  if (locale === "en") {
    return {
      system: `You are an expert tarot reader with deep knowledge of symbolism and Jungian psychology. Give a concise, insightful, deeply personal interpretation of this tarot draw. Be direct, warm, non-clichéd, and avoid generic phrases. 150–200 words.`,
      user: `Spread: ${spreadName}
Question / intention: ${intention || "General guidance"}

Cards drawn:
${cardLines}

Give a personal reading that directly addresses the stated intention, weaving the cards together into a coherent narrative.`,
    };
  }

  if (locale === "es") {
    return {
      system: `Eres una experta en tarot con profundo conocimiento del simbolismo y la psicología junguiana. Da una interpretación concisa, perspicaz y profundamente personal de esta tirada. Sé directa, cálida y evita los clichés. 150–200 palabras.`,
      user: `Tirada: ${spreadName}
Pregunta / intención: ${intention || "Orientación general"}

Cartas extraídas:
${cardLines}

Da una lectura personal que responda directamente a la intención planteada, tejiendo las cartas en una narrativa coherente.`,
    };
  }

  return {
    system: `Tu es une tarologue experte, profonde et bienveillante, formée au symbolisme et à la psychologie jungienne. Donne une interprétation personnelle, nuancée et directe de ce tirage. Évite les généralités, les formules creuses et les mises en garde excessives. Sois précise, chaleureuse et honnête. 150–200 mots.`,
    user: `Tirage : ${spreadName}
Question / intention : ${intention || "Guidance générale"}

Cartes tirées :
${cardLines}

Donne une lecture qui répond directement à l'intention posée, en liant les cartes entre elles dans un récit cohérent.`,
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS });
  }

  try {
    const { locale, spreadName, intention, cards } = await req.json() as {
      locale: string;
      spreadName: string;
      intention: string;
      cards: { name: string; reversed: boolean; meaning: string }[];
    };

    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) throw new Error("ANTHROPIC_API_KEY not configured");

    const { system, user } = buildPrompt(locale, spreadName, intention, cards);

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 450,
        system,
        messages: [{ role: "user", content: user }],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Anthropic API error: ${err}`);
    }

    const data = await res.json();
    const interpretation = data.content?.[0]?.text ?? "";

    return new Response(
      JSON.stringify({ interpretation }),
      { headers: { ...CORS, "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: (e as Error).message }),
      { status: 500, headers: { ...CORS, "Content-Type": "application/json" } }
    );
  }
});

// Map card IDs → remote image URIs (Supabase Storage or any https URL).
// null = no image yet → card renders with the gradient + icon design.
// To add an image, paste the URI returned after uploading to Supabase Storage:
//   const { data } = supabase.storage.from("cards").getPublicUrl("maj-00.png");
//   → data.publicUrl is the string to paste here.

const CARD_IMAGES: Record<string, string | null> = {
  // ── Arcanes Majeurs ───────────────────────────────────────────
  "maj-00": null, // Le Fou
  "maj-01": null, // Le Bateleur
  "maj-02": null, // La Prêtresse
  "maj-03": null, // L'Impératrice
  "maj-04": null, // L'Empereur
  "maj-05": null, // Le Pape
  "maj-06": null, // L'Amoureux
  "maj-07": null, // Le Chariot
  "maj-08": null, // La Justice
  "maj-09": null, // L'Hermite
  "maj-10": null, // La Roue de Fortune
  "maj-11": null, // La Force
  "maj-12": null, // Le Pendu
  "maj-13": null, // La Mort
  "maj-14": null, // La Tempérance
  "maj-15": null, // Le Diable
  "maj-16": null, // La Maison-Dieu
  "maj-17": null, // L'Étoile
  "maj-18": null, // La Lune
  "maj-19": null, // Le Soleil
  "maj-20": null, // Le Jugement
  "maj-21": null, // Le Monde

  // ── Bâtons ───────────────────────────────────────────────────
  "bat-01": null, // As de Bâtons
  "bat-02": null, // Deux de Bâtons
  "bat-03": null, // Trois de Bâtons
  "bat-04": null, // Quatre de Bâtons
  "bat-05": null, // Cinq de Bâtons
  "bat-06": null, // Six de Bâtons
  "bat-07": null, // Sept de Bâtons
  "bat-08": null, // Huit de Bâtons
  "bat-09": null, // Neuf de Bâtons
  "bat-10": null, // Dix de Bâtons
  "bat-11": null, // Valet de Bâtons
  "bat-12": null, // Chevalier de Bâtons
  "bat-13": null, // Reine de Bâtons
  "bat-14": null, // Roi de Bâtons

  // ── Coupes ───────────────────────────────────────────────────
  "cou-01": null, // As de Coupes
  "cou-02": null, // Deux de Coupes
  "cou-03": null, // Trois de Coupes
  "cou-04": null, // Quatre de Coupes
  "cou-05": null, // Cinq de Coupes
  "cou-06": null, // Six de Coupes
  "cou-07": null, // Sept de Coupes
  "cou-08": null, // Huit de Coupes
  "cou-09": null, // Neuf de Coupes
  "cou-10": null, // Dix de Coupes
  "cou-11": null, // Valet de Coupes
  "cou-12": null, // Chevalier de Coupes
  "cou-13": null, // Reine de Coupes
  "cou-14": null, // Roi de Coupes

  // ── Épées ────────────────────────────────────────────────────
  "epe-01": null, // As d'Épées
  "epe-02": null, // Deux d'Épées
  "epe-03": null, // Trois d'Épées
  "epe-04": null, // Quatre d'Épées
  "epe-05": null, // Cinq d'Épées
  "epe-06": null, // Six d'Épées
  "epe-07": null, // Sept d'Épées
  "epe-08": null, // Huit d'Épées
  "epe-09": null, // Neuf d'Épées
  "epe-10": null, // Dix d'Épées
  "epe-11": null, // Valet d'Épées
  "epe-12": null, // Chevalier d'Épées
  "epe-13": null, // Reine d'Épées
  "epe-14": null, // Roi d'Épées

  // ── Deniers ──────────────────────────────────────────────────
  "den-01": null, // As de Deniers
  "den-02": null, // Deux de Deniers
  "den-03": null, // Trois de Deniers
  "den-04": null, // Quatre de Deniers
  "den-05": null, // Cinq de Deniers
  "den-06": null, // Six de Deniers
  "den-07": null, // Sept de Deniers
  "den-08": null, // Huit de Deniers
  "den-09": null, // Neuf de Deniers
  "den-10": null, // Dix de Deniers
  "den-11": null, // Valet de Deniers
  "den-12": null, // Chevalier de Deniers
  "den-13": null, // Reine de Deniers
  "den-14": null, // Roi de Deniers
};

export function getCardImageUri(cardId: string): string | null {
  return CARD_IMAGES[cardId] ?? null;
}

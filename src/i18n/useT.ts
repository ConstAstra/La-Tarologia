import { useLocale } from "@/context/LocaleContext";
import { STRINGS } from "./strings";

// Renvoie le dictionnaire de chaînes de la langue active, typé sur la forme du
// dictionnaire français (les trois langues sont écrites avec les mêmes clés).
export function useT() {
  const { locale } = useLocale();
  return STRINGS[locale] as typeof STRINGS.fr;
}

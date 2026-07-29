export type Locale = "fr" | "en" | "es";

export const LOCALES: { code: Locale; label: string; nativeLabel: string }[] = [
  { code: "fr", label: "French", nativeLabel: "Français" },
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
];

export const DEFAULT_LOCALE: Locale = "fr";

export function isSupportedLocale(code: string | undefined | null): code is Locale {
  return !!code && LOCALES.some((l) => l.code === code);
}

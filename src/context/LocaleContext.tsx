import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import { DEFAULT_LOCALE, Locale, isSupportedLocale } from "@/i18n/locales";

const STORAGE_KEY = "latarologia.locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isReady: boolean;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  isReady: false,
});

function detectDeviceLocale(): Locale {
  try {
    const tag = Localization.getLocales()[0]?.languageCode;
    if (isSupportedLocale(tag)) return tag;
  } catch {
    // ignore, fall back below
  }
  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (isSupportedLocale(stored)) {
        setLocaleState(stored);
      } else {
        setLocaleState(detectDeviceLocale());
      }
      setIsReady(true);
    });
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    AsyncStorage.setItem(STORAGE_KEY, next).catch(() => {});
  };

  return <LocaleContext.Provider value={{ locale, setLocale, isReady }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

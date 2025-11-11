'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  dictionaries,
  fallbackLocale,
  Locale,
  TranslationDictionary,
} from './dictionaries';

interface TranslationContextValue {
  locale: Locale;
  dictionary: TranslationDictionary;
  setLocale: (locale: Locale) => void;
}

const TranslationContext = createContext<TranslationContextValue | undefined>(
  undefined,
);

interface TranslationProviderProps {
  defaultLocale?: Locale;
  children: ReactNode;
}

export function TranslationProvider({
  defaultLocale = fallbackLocale,
  children,
}: TranslationProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
  }, []);

  const value = useMemo<TranslationContextValue>(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslationContext(): TranslationContextValue {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error(
      'useTranslationContext must be used within a TranslationProvider',
    );
  }

  return context;
}


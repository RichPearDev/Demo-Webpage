'use client';

import { useTranslationContext } from '@/i18n/TranslationProvider';

export function useTranslations() {
  const { dictionary, locale, setLocale } = useTranslationContext();
  return { dictionary, locale, setLocale };
}


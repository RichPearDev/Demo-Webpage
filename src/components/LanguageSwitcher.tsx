'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { useTranslations } from '@/hooks/useTranslations';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40';

export default function LanguageSwitcher() {
  const { locale, setLocale, dictionary } = useTranslations();
  const [open, setOpen] = useState(false);

  const toggleLocale = (nextLocale: (typeof siteConfig.supportedLocales)[number]) => {
    if (nextLocale !== locale) {
      setLocale(nextLocale);
    }
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={dictionary.languageSwitcher.ariaLabel}
        className={`flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 ${FOCUS_RING}`}
      >
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs uppercase tracking-widest">
          {locale.toUpperCase()}
        </span>
        <span className="text-xs text-white/70">/
          {siteConfig.supportedLocales
            .filter((candidate) => candidate !== locale)
            .map((candidate) => candidate.toUpperCase())
            .join(' / ')}
        </span>
        <svg
          className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M3 4.5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 min-w-[140px] overflow-hidden rounded-2xl border border-white/10 bg-black/90 text-sm text-white shadow-2xl backdrop-blur-xl"
            role="menu"
          >
            {siteConfig.supportedLocales.map((candidate) => (
              <li key={candidate} className="border-b border-white/5 last:border-none" role="none">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={locale === candidate}
                  onClick={() => toggleLocale(candidate)}
                  className={`flex w-full items-center justify-between px-4 py-2 text-left transition hover:bg-white/10 ${FOCUS_RING}`}
                >
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em]">
                    {candidate.toUpperCase()}
                  </span>
                  {locale === candidate && (
                    <span aria-hidden="true" className="text-[#fc4c02]">
                      ●
                    </span>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

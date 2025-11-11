'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import ScrollLink from './ScrollLink';
import LanguageSwitcher from './LanguageSwitcher';
import { siteConfig } from '@/config/site';
import { useTranslations } from '@/hooks/useTranslations';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { dictionary } = useTranslations();
  const logo = siteConfig.company.logo;

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.3 }}
        className="fixed z-50 w-full text-white shadow-sm"
        aria-label={dictionary.footer.navigationHeading}
      >
        <div className="absolute inset-0 z-10 bg-black/70 backdrop-blur-md" />
        <div className="container relative z-20 mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3 text-xl font-bold">
              <Image
                src={logo.src}
                alt={dictionary.brand.logoAlt}
                width={logo.width}
                height={logo.height}
                priority
              />
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              {siteConfig.navigation.map((item) => (
                <ScrollLink
                  key={item.id}
                  href={item.href}
                  className="text-lg font-semibold text-white transition-colors hover:text-[#fc4c02]"
                >
                  {dictionary.nav[item.labelKey]}
                </ScrollLink>
              ))}
              <LanguageSwitcher />
            </div>

            <button
              className="z-20 md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={dictionary.navToggleLabel}
              aria-expanded={isOpen}
              type="button"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="flex flex-col items-center gap-6 pb-10 md:hidden">
              <div className="flex w-full flex-col gap-6 px-4">
                {siteConfig.navigation.map((item) => (
                  <ScrollLink
                    key={item.id}
                    href={item.href}
                    className="rounded-lg bg-[#fc4c02] py-3 text-center text-2xl font-semibold text-white transition-colors hover:bg-orange-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {dictionary.nav[item.labelKey]}
                  </ScrollLink>
                ))}
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollLink from '@/components/ScrollLink';
import { siteConfig } from '@/config/site';
import { useTranslations } from '@/hooks/useTranslations';
import { withBasePath } from '@/lib/basePath';

const heroTransition = { duration: 0.8 };

export default function HeroSection() {
  const { dictionary } = useTranslations();
  const servicesHref = `#${dictionary.sections.services.id}`;
  const contactHref = `#${dictionary.sections.contact.id}`;
  const backgroundImage = withBasePath(siteConfig.hero.backgroundImage);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={dictionary.hero.backgroundAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#fc4c02]/35" />
        <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, ...heroTransition }}
        className="container relative z-10 mx-auto px-4"
      >
        <div className="mx-auto max-w-4xl text-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, ...heroTransition }}
            className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
          >
            {dictionary.hero.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, ...heroTransition }}
            className="mb-10 text-lg text-white/80 md:text-2xl"
          >
            {dictionary.hero.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, ...heroTransition }}
            className="mx-auto mb-10 max-w-2xl text-sm uppercase tracking-[0.4em] text-white/60"
          >
            {dictionary.brand.tagline}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, ...heroTransition }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ScrollLink
                href={servicesHref}
                className="inline-block rounded-full border border-white/40 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white/20"
                aria-label={dictionary.hero.primaryCtaAria}
              >
                {dictionary.hero.primaryCta}
              </ScrollLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ScrollLink
                href={contactHref}
                className="inline-block rounded-full border border-[#fc4c02] bg-[#fc4c02] px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-500"
                aria-label={dictionary.hero.secondaryCtaAria}
              >
                {dictionary.hero.secondaryCta}
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { useTranslations } from '@/hooks/useTranslations';

export default function ServicesSection() {
  const { dictionary } = useTranslations();
  const section = dictionary.sections.services;

  return (
    <section
      id={section.id}
      className="relative overflow-hidden py-10 md:py-20"
    >
      <div className="absolute inset-0">
        <Image
          src={siteConfig.services.backgroundImage}
          alt={section.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#fc4c02]/40" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          {section.title}
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mb-12 grid w-full gap-6 md:grid-cols-3"
          role="list"
          aria-label={section.highlightsAria}
        >
          {section.highlights.map((item) => (
            <motion.li
              key={item}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-6 text-center text-white shadow-lg backdrop-blur-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors group-hover:bg-white/20">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7h16M4 12h12M4 17h8"
                  />
                </svg>
              </span>
              <span className="text-lg font-semibold leading-relaxed text-white">
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

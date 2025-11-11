'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { useTranslations } from '@/hooks/useTranslations';
import { withBasePath } from '@/lib/basePath';

export default function MaterialsSection() {
  const { dictionary } = useTranslations();
  const section = dictionary.sections.materials;
  const backgroundImage = withBasePath(siteConfig.materials.backgroundImage);

  return (
    <section
      id={section.id}
      className="relative overflow-hidden py-10 md:py-20"
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={section.title}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-[#fc4c02]/30" />
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
        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label={section.ariaLabel}
        >
          {siteConfig.materials.items.map((material, index) => {
            const cardContent = section.cards[material.id];

            if (!cardContent) {
              return null;
            }

            return (
              <motion.article
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl border border-white/30 bg-white/95 shadow-xl backdrop-blur"
                role="listitem"
                aria-label={`${cardContent.title} - ${cardContent.description}`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {cardContent.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{cardContent.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                        {section.colorToggleLabel}
                      </span>
                      <div
                        className="flex gap-1"
                        role="list"
                        aria-label={`${cardContent.title} ${section.colorToggleLabel}`}
                      >
                        {material.colorClasses.map((color, colorIndex) => (
                          <span
                            key={`${material.id}-${colorIndex}`}
                            className={`h-3 w-3 rounded-full ${color}`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <dl className="mt-6 space-y-4">
                    {siteConfig.materials.statsOrder.map((statKey) => {
                      const label = cardContent.stats[statKey];
                      const value = material.stats[statKey];
                      if (label === undefined || value === undefined) {
                        return null;
                      }
                      return (
                        <div key={statKey}>
                          <dt className="text-sm text-gray-500">{label}</dt>
                          <dd className="mt-2 flex items-center gap-3">
                            <div className="flex-1 overflow-hidden rounded-full bg-gray-200">
                              <div
                                className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500"
                                style={{ width: `${value}%` }}
                                aria-hidden="true"
                              />
                            </div>
                            <span className="min-w-[3ch] text-sm font-semibold text-gray-700">
                              {value}%
                            </span>
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { useTranslations } from '@/hooks/useTranslations';
import { withBasePath } from '@/lib/basePath';

export default function PrintersSection() {
  const { dictionary } = useTranslations();
  const section = dictionary.sections.printers;
  const backgroundImage = withBasePath(siteConfig.printers.backgroundImage);
  const printerItems = siteConfig.printers.items.map((item) => ({
    ...item,
    image: withBasePath(item.image),
  }));

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
          className="object-cover object-bottom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-[#fc4c02]/35" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center text-4xl font-bold text-white"
        >
          {section.title}
        </motion.h2>
        <div className="grid grid-cols-1 gap-16 text-white/80 lg:grid-cols-2">
          {printerItems.map((item, index) => {
            const copy = section.cards[index];
            if (!copy) {
              return null;
            }
            return (
              <motion.figure
                key={item.image}
                className="mx-4 space-y-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: item.hoverScale ?? 1.05 }}
                  className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl"
                >
                  <Image
                    src={item.image}
                    alt={copy.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
                <figcaption className="text-center text-sm text-white/70">
                  <a
                    href={copy.creditUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {copy.credit}
                  </a>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

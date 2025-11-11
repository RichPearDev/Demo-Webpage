'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/config/site';
import { useTranslations } from '@/hooks/useTranslations';

export default function ContactSection() {
  const { dictionary } = useTranslations();
  const section = dictionary.sections.contact;

  return (
    <section
      id={section.id}
      className="relative overflow-hidden py-10 md:py-20"
    >
      <div className="absolute inset-0">
        <Image
          src={siteConfig.contactSection.backgroundImage}
          alt={section.backgroundAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-[#fc4c02]/40" />
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-2xl rounded-3xl border border-white/15 bg-black/30 p-8 text-white shadow-2xl backdrop-blur-xl lg:max-w-[66%]"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

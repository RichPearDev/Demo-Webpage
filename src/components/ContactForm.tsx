'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const motionTransition = { duration: 0.8 };

export default function ContactForm() {
  const { dictionary } = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      // Placeholder async action to mimic server-side processing
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setSelectedFile(null);
    } catch (error) {
      console.error('Error sending message placeholder:', error);
      setStatus('error');
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-md"
    >
      <div className="sr-only" aria-live="polite">
        {status === 'sending' && dictionary.contactForm.sending}
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={motionTransition}
      >
        <label htmlFor="name" className="block text-sm font-medium text-white">
          {dictionary.contactForm.nameLabel}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
          className="mt-1 block w-full rounded-md border border-white/30 bg-white/20 px-4 py-3 text-lg text-white placeholder-white/50 focus:border-[#fc4c02] focus:outline-none focus:ring-2 focus:ring-[#fc4c02]/40"
          placeholder={dictionary.contactForm.namePlaceholder}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, ...motionTransition }}
      >
        <label htmlFor="email" className="block text-sm font-medium text-white">
          {dictionary.contactForm.emailLabel}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          className="mt-1 block w-full rounded-md border border-white/30 bg-white/20 px-4 py-3 text-lg text-white placeholder-white/50 focus:border-[#fc4c02] focus:outline-none focus:ring-2 focus:ring-[#fc4c02]/40"
          placeholder={dictionary.contactForm.emailPlaceholder}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, ...motionTransition }}
      >
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white"
        >
          {dictionary.contactForm.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          autoComplete="off"
          className="mt-1 block w-full rounded-md border border-white/30 bg-white/20 px-4 py-3 text-lg text-white placeholder-white/50 focus:border-[#fc4c02] focus:outline-none focus:ring-2 focus:ring-[#fc4c02]/40"
          placeholder={dictionary.contactForm.messagePlaceholder}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, ...motionTransition }}
      >
        <label
          htmlFor="file"
          className="mb-3 block text-sm font-medium text-white"
        >
          {dictionary.contactForm.attachmentLabel}
        </label>
        <div className="relative">
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="file"
            className="flex h-32 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-white/30 bg-white/20 px-4 transition hover:border-white/50 hover:bg-white/30 focus-within:border-[#fc4c02] focus-within:ring-2 focus-within:ring-[#fc4c02]/20"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <svg
                className="mb-3 h-10 w-10 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="mb-2 text-sm text-white/70">
                <span className="font-semibold text-[#fc4c02]">
                  {dictionary.contactForm.attachmentPrimaryAction}
                </span>{' '}
                {dictionary.contactForm.attachmentSecondaryText}
              </p>
              <p className="text-xs text-white/50">
                {dictionary.contactForm.attachmentHelp}
              </p>
            </div>
          </label>
        </div>
        {selectedFile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-lg border border-[#fc4c02]/30 bg-[#fc4c02]/20 p-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-[#fc4c02]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-white">
                    {dictionary.contactForm.fileSelected}: {selectedFile.name}
                  </p>
                  <p className="text-xs text-white/70">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedFile(null)}
                className="text-white/50 transition-colors hover:text-white"
              >
                <span className="sr-only">
                  {dictionary.contactForm.removeAttachment}
                </span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-md bg-white px-6 py-4 text-lg font-semibold text-[#fc4c02] transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'sending'
          ? dictionary.contactForm.sending
          : dictionary.contactForm.submit}
      </motion.button>

      {status === 'success' && (
        <p className="text-center text-[#fc4c02]" aria-live="polite">
          {dictionary.contactForm.successMessage}
        </p>
      )}

      {status === 'error' && (
        <p className="text-center text-red-400" aria-live="assertive">
          {dictionary.contactForm.errorMessage}
        </p>
      )}
    </form>
  );
}

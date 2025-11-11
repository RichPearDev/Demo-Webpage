'use client';

import Image from 'next/image';
import ScrollLink from './ScrollLink';
import { siteConfig } from '@/config/site';
import { useTranslations } from '@/hooks/useTranslations';
import { withBasePath } from '@/lib/basePath';

export default function Footer() {
  const { dictionary } = useTranslations();
  const { company, contact, poweredBy } = siteConfig;
  const { overlayOpacity } = siteConfig.footer;
  const backgroundImage = withBasePath(siteConfig.footer.backgroundImage);
  const logoSrc = withBasePath(company.logo.src);
  const googleMapsEmbedKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;
  const googleMapsEmbedSrc = googleMapsEmbedKey
    ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsEmbedKey}&q=${encodeURIComponent(
        siteConfig.map.query,
      )}&zoom=${siteConfig.map.zoom}`
    : siteConfig.map.fallbackEmbedUrl;
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${company.name}`,
    `ORG:${company.legalName}`,
    contact.phone ? `TEL:${contact.phone}` : null,
    contact.email ? `EMAIL:${contact.email}` : null,
    contact.street || contact.city || contact.zip || contact.country
      ? `ADR:;;${contact.street};${contact.city};;${contact.zip};${contact.country}`
      : null,
    'END:VCARD',
  ]
    .filter(Boolean)
    .join('\n');

  const vcardHref = vcard
    ? `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`
    : undefined;
  const currentYear = new Date().getFullYear();
  const addressLines = [
    contact.street,
    [contact.city, contact.zip].filter(Boolean).join(' ').trim(),
    contact.country,
  ].filter((line) => line && line !== '—');
  const hasPhone = Boolean(contact.phone && contact.phone !== '—');
  const hasEmail = Boolean(contact.email && contact.email !== '—');
  const hasLegalInfo =
    company.ico !== '—' || company.dic !== '—' || company.registration !== '—';

  return (
    <footer className="relative text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
        }}
      />
      <div className="absolute inset-0 bg-[#fc4c02]/25 mix-blend-multiply" />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <Image
                src={logoSrc}
                alt={dictionary.brand.logoAlt}
                width={company.logo.width}
                height={company.logo.height}
                className="mb-4"
              />
              <p className="max-w-sm text-sm text-white/80">
                {dictionary.brand.tagline}
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-2xl font-semibold">
                {dictionary.footer.navigationHeading}
              </h4>
              <ul className="space-y-2">
                {siteConfig.navigation.map((item) => (
                  <li key={item.id}>
                    <ScrollLink
                      href={item.href}
                      className="text-white transition-colors hover:text-[#fc4c02]"
                    >
                      {dictionary.nav[item.labelKey]}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-2xl font-semibold">
                {dictionary.footer.contactHeading}
              </h4>
              <address className="not-italic space-y-2 text-sm text-white/80">
                <div>
                  <span className="block font-semibold text-white">
                    {dictionary.footer.addressLabel}:
                  </span>
                  <span className="block">
                    {addressLines.length > 0
                      ? addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))
                      : dictionary.footer.addressPlaceholder}
                  </span>
                </div>
                {hasPhone && (
                  <div>
                    <span className="block font-semibold text-white">
                      {dictionary.footer.phoneLabel}:
                    </span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-white underline-offset-4 transition-colors hover:text-[#fc4c02] hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>
                )}
                {hasEmail && (
                  <div>
                    <span className="block font-semibold text-white">
                      {dictionary.footer.emailLabel}:
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-white underline-offset-4 transition-colors hover:text-[#fc4c02] hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                )}
              </address>
              {vcardHref && (
                <div className="mt-4">
                  <a
                    href={vcardHref}
                    download={`${company.name.replace(/\s+/g, '_')}_contact.vcf`}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#fc4c02] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                  >
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    {dictionary.footer.saveContact}
                  </a>
                </div>
              )}
            </div>
            <div>
              <h4 className="mb-4 text-2xl font-semibold">
                {dictionary.footer.legalHeading}
              </h4>
              <ul className="space-y-2 text-sm text-white/80">
                {hasLegalInfo ? (
                  <>
                    <li>
                      IČ: {company.ico} | DIČ: {company.dic}
                    </li>
                    <li>{company.registration}</li>
                  </>
                ) : (
                  <li>{dictionary.footer.legalPlaceholder}</li>
                )}
                <li>{company.legalName}</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <h4 className="text-center text-3xl font-semibold">
              {dictionary.footer.mapHeading}
            </h4>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <iframe
                title={dictionary.footer.mapTitle}
                style={{ border: 'none' }}
                src={googleMapsEmbedSrc}
                width="100%"
                height="280"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/70">
            <p>
              &copy; {currentYear} {company.name}. {dictionary.footer.rightsReserved}
            </p>
            <p className="mt-2">
              {dictionary.footer.poweredBy}{' '}
              <a
                href={poweredBy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline-offset-4 transition-colors hover:text-[#fc4c02] hover:underline"
              >
                {dictionary.footer.poweredByName}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { dictionaries } from '@/i18n/dictionaries';
import { TranslationProvider } from '@/i18n/TranslationProvider';
import { withBasePath } from '@/lib/basePath';

const inter = Inter({ subsets: ['latin'] });
const defaultDictionary = dictionaries[siteConfig.defaultLocale];

export const metadata: Metadata = {
  title: {
    default: defaultDictionary.metadata.defaultTitle,
    template: defaultDictionary.metadata.titleTemplate,
  },
  description: defaultDictionary.metadata.description,
  keywords: defaultDictionary.metadata.keywords,
  authors: [{ name: siteConfig.company.legalName }],
  creator: siteConfig.company.legalName,
  publisher: siteConfig.company.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: `${siteConfig.defaultLocale}_CZ`,
    url: siteConfig.baseUrl,
    siteName: siteConfig.company.name,
    title: defaultDictionary.metadata.ogTitle,
    description: defaultDictionary.metadata.ogDescription,
    images: [
      {
        url: '/photo-main4.jpeg',
        width: 1200,
        height: 630,
        alt: defaultDictionary.hero.backgroundAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultDictionary.metadata.twitterTitle,
    description: defaultDictionary.metadata.twitterDescription,
    images: ['/photo-main4.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const company = siteConfig.company;
  const contact = siteConfig.contact;

  const organizationLdJson = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.legalName,
    alternateName: company.name,
    url: siteConfig.baseUrl,
    logo: `${siteConfig.baseUrl}${company.logo.src}`,
    description: defaultDictionary.metadata.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.street,
      addressLocality: contact.city,
      postalCode: contact.zip,
      addressCountry: contact.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contact.phone.replace(/\s+/g, ''),
      contactType: 'customer service',
      email: contact.email,
      availableLanguage: siteConfig.supportedLocales,
    },
    vatID: company.dic,
    taxID: company.ico,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '3D printing services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: defaultDictionary.sections.services.highlights[0],
            description: defaultDictionary.sections.services.highlights[0],
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: defaultDictionary.sections.services.highlights[1],
            description: defaultDictionary.sections.services.highlights[1],
          },
        },
      ],
    },
  };

  return (
    <html lang={siteConfig.defaultLocale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={siteConfig.theme.primaryHex} />
        <link rel="icon" href={withBasePath('/favicon.ico')} />
        <link rel="apple-touch-icon" href={withBasePath('/favicon.ico')} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationLdJson),
          }}
        />
      </head>
      <body className={inter.className}>
        <TranslationProvider defaultLocale={siteConfig.defaultLocale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}

import type { Locale, TranslationDictionary } from '@/i18n/dictionaries';

type NavKey = keyof TranslationDictionary['nav'];

export interface NavigationItem {
  id: string;
  href: string;
  labelKey: NavKey;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  ico: string;
  dic: string;
  registration: string;
  logo: {
    src: string;
    width: number;
    height: number;
  };
}

export interface ContactInfo {
  street: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
}

export interface MaterialConfig {
  id: string;
  colorClasses: string[];
  stats: Record<string, number>;
}

export interface PrinterConfig {
  image: string;
  altKeyIndex: number;
  initialScale?: number;
  hoverScale?: number;
}

export const siteConfig = {
  defaultLocale: 'cs' as Locale,
  supportedLocales: ['cs', 'en'] as Locale[],
  baseUrl: 'https://voxelforge.studio',
  theme: {
    primaryHex: '#fc4c02',
  },
  navigation: [
    { id: 'services', href: '#services', labelKey: 'services' },
    { id: 'materials', href: '#materials', labelKey: 'materials' },
    { id: 'printers', href: '#printers', labelKey: 'printers' },
    { id: 'contact', href: '#contact', labelKey: 'contact' },
  ] satisfies NavigationItem[],
  company: {
    name: 'VoxelForge Studio',
    legalName: 'VoxelForge Studio s.r.o.',
    ico: '—',
    dic: '—',
    registration: 'Firemní údaje jsou dostupné na vyžádání.',
    logo: {
      src: '/voxelforge-logo.svg',
      width: 220,
      height: 60,
    },
  } satisfies CompanyInfo,
  contact: {
    street: 'Technologická 12',
    city: 'Praha 7',
    zip: '170 00',
    country: 'Česká republika',
    phone: '+420 000 000 000',
    email: 'info@voxelforge.studio',
  } satisfies ContactInfo,
  poweredBy: {
    name: 'Studio Umbra',
    url: 'https://studioumbra.example',
  },
  hero: {
    backgroundImage: '/photo-main4.jpeg',
  },
  services: {
    backgroundImage: '/photo-main3.jpeg',
  },
  materials: {
    backgroundImage: '/photo-main2.jpeg',
    statsOrder: ['temperature', 'strength', 'uvResistance'],
    items: [
      {
        id: 'pla',
        colorClasses: [
          'bg-red-500',
          'bg-blue-500',
          'bg-orange-500',
          'bg-yellow-500',
          'bg-purple-500',
          'bg-orange-500',
        ],
        stats: {
          temperature: 52,
          strength: 65,
          uvResistance: 55,
        },
      },
      {
        id: 'petg',
        colorClasses: [
          'bg-red-500',
          'bg-blue-500',
          'bg-orange-500',
          'bg-yellow-500',
          'bg-purple-500',
          'bg-orange-500',
        ],
        stats: {
          temperature: 68,
          strength: 53,
          uvResistance: 75,
        },
      },
      {
        id: 'abs',
        colorClasses: [
          'bg-red-500',
          'bg-blue-500',
          'bg-orange-500',
          'bg-yellow-500',
          'bg-purple-500',
          'bg-orange-500',
        ],
        stats: {
          temperature: 90,
          strength: 45,
          uvResistance: 30,
        },
      },
      {
        id: 'tpu',
        colorClasses: [
          'bg-red-500',
          'bg-blue-500',
          'bg-orange-500',
          'bg-yellow-500',
          'bg-purple-500',
          'bg-orange-500',
        ],
        stats: {
          temperature: 73,
          strength: 50,
          uvResistance: 30,
        },
      },
      {
        id: 'pc',
        colorClasses: [
          'bg-red-500',
          'bg-blue-500',
          'bg-orange-500',
          'bg-yellow-500',
          'bg-purple-500',
          'bg-orange-500',
        ],
        stats: {
          temperature: 93,
          strength: 63,
          uvResistance: 95,
        },
      },
      {
        id: 'asa',
        colorClasses: [
          'bg-red-500',
          'bg-blue-500',
          'bg-orange-500',
          'bg-yellow-500',
          'bg-purple-500',
          'bg-orange-500',
        ],
        stats: {
          temperature: 93,
          strength: 45,
          uvResistance: 95,
        },
      },
    ] satisfies MaterialConfig[],
  },
  printers: {
    backgroundImage: '/photo-main.jpeg',
    items: [
      {
        image: '/MMU3_whole.jpg',
        altKeyIndex: 0,
        initialScale: 1.15,
        hoverScale: 1.2,
      },
      {
        image: '/P1.jpg',
        altKeyIndex: 1,
        initialScale: 1.15,
        hoverScale: 1.2,
      },
    ] as PrinterConfig[],
  },
  contactSection: {
    backgroundImage: '/contact-photo.jpeg',
  },
  footer: {
    backgroundImage: '/photo-footer.jpeg',
    overlayOpacity: 0.35,
  },
  map: {
    query: 'Technologická 12, Praha 7',
    zoom: 15,
    fallbackEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.051870715393!2d14.438259777044599!3d50.10802607154045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f4fa2d7f2d%3A0x55bb7d500cf8d890!2sTechnologick%C3%A1%2012%2C%20170%2000%20Praha%207!5e0!3m2!1scs!2scz!4v1731352200000!5m2!1scs!2scz',
  },
} as const;

export type SiteConfig = typeof siteConfig;

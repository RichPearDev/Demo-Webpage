export type Locale = 'cs' | 'en';

export interface TranslationDictionary {
  locale: Locale;
  languageSwitcher: {
    label: string;
    ariaLabel: string;
    nextLocaleLabel: Record<Locale, string>;
  };
  brand: {
    logoAlt: string;
    tagline: string;
  };
  navToggleLabel: string;
  nav: {
    services: string;
    materials: string;
    printers: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    primaryCtaAria: string;
    secondaryCta: string;
    secondaryCtaAria: string;
    backgroundAlt: string;
  };
  sections: {
    services: {
      id: string;
      title: string;
      highlights: string[];
      highlightsAria: string;
    };
    materials: {
      id: string;
      title: string;
      ariaLabel: string;
      colorToggleLabel: string;
      cards: Record<
        string,
        {
          title: string;
          description: string;
          stats: Record<string, string>;
        }
      >;
    };
    printers: {
      id: string;
      title: string;
      cards: Array<{
        alt: string;
        credit: string;
        creditUrl: string;
      }>;
    };
    contact: {
      id: string;
      title: string;
      backgroundAlt: string;
      description: string;
      note: string;
      responseTime: string;
    };
  };
  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    attachmentLabel: string;
    attachmentPrimaryAction: string;
    attachmentSecondaryText: string;
    attachmentHelp: string;
    removeAttachment: string;
    submit: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    fileSelected: string;
  };
  footer: {
    navigationHeading: string;
    contactHeading: string;
    legalHeading: string;
    mapHeading: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    saveContact: string;
    poweredBy: string;
    rightsReserved: string;
    mapTitle: string;
    poweredByName: string;
    addressPlaceholder: string;
    legalPlaceholder: string;
  };
  metadata: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
}

const cs: TranslationDictionary = {
  locale: 'cs',
  languageSwitcher: {
    label: 'Jazyk',
    ariaLabel: 'Přepnout jazyk webu',
    nextLocaleLabel: {
      cs: 'Čeština',
      en: 'English',
    },
  },
  brand: {
    logoAlt: 'VoxelForge Studio - minimalistické logo společnosti',
    tagline: 'Digitální dílna pro produktové týmy a inovátory.',
  },
  navToggleLabel: 'Přepnout navigaci',
  nav: {
    services: 'Služby',
    materials: 'Materiály',
    printers: 'Technologie',
    contact: 'Kontakt',
  },
  hero: {
    title: 'Precizní 3D tisk bez starostí',
    subtitle:
      'Špičkové prototypy a malé série s důrazem na kvalitu, udržitelnost a otevřenou komunikaci.',
    primaryCta: 'Co tiskneme',
    primaryCtaAria: 'Přejít na přehled služeb a parametrů 3D tisku',
    secondaryCta: 'Napište nám',
    secondaryCtaAria: 'Přejít na kontaktní formulář',
    backgroundAlt: 'Abstraktní 3D scéna s futuristickými tvary',
  },
  sections: {
    services: {
      id: 'services',
      title: 'Co pro vás zajistíme',
      highlights: [
        'Technická konzultace před výrobou',
        'Kontrolní měření a dokončení dílů',
        'Expresní prototypy do 48 hodin',
      ],
      highlightsAria: 'Klíčové služby a procesy 3D tisku',
    },
    materials: {
      id: 'materials',
      title: 'Materiály',
      ariaLabel: 'Seznam dostupných 3D tiskových materiálů',
      colorToggleLabel: 'Dostupné barvy',
      cards: {
        pla: {
          title: 'PLA',
          description:
            'Snadno tisknutelný a ekologický materiál ideální pro prototypy a dekorace. Nevhodný do tepla nebo venkovních podmínek kvůli deformaci už při 52 °C.',
          stats: {
            temperature: 'Teplotní odolnost (52 °C)',
            strength: 'Pevnost (65 MPa)',
            uvResistance: 'UV odolnost',
          },
        },
        petg: {
          title: 'PETG',
          description:
            'Pevný a chemicky odolný materiál vhodný na funkční díly. Částečně odolává UV záření, ale není ideální pro dlouhodobé venkovní použití.',
          stats: {
            temperature: 'Teplotní odolnost (68 °C)',
            strength: 'Pevnost (53 MPa)',
            uvResistance: 'UV odolnost',
          },
        },
        abs: {
          title: 'ABS',
          description:
            'Odolný plast s možností chemického vyhlazení acetonem, vhodný pro technické výtisky. Není UV stabilní.',
          stats: {
            temperature: 'Teplotní odolnost (90 °C)',
            strength: 'Pevnost (45 MPa)',
            uvResistance: 'UV odolnost',
          },
        },
        tpu: {
          title: 'TPU',
          description:
            'Flexibilní materiál pro kryty, těsnění nebo tlumicí prvky. Nevhodný pro přesné nebo vysoce zatěžované konstrukce.',
          stats: {
            temperature: 'Teplotní odolnost (73 °C)',
            strength: 'Pevnost (50 MPa)',
            uvResistance: 'UV odolnost',
          },
        },
        pc: {
          title: 'PC',
          description:
            'Velmi pevný a teplotně odolný plast vhodný pro mechanicky namáhané díly.',
          stats: {
            temperature: 'Teplotní odolnost (93 °C)',
            strength: 'Pevnost (63 MPa)',
            uvResistance: 'UV odolnost',
          },
        },
        asa: {
          title: 'ASA',
          description:
            'Materiál vysoce odolný vůči UV i počasí, ideální pro venkovní součástky. Mechanicky pevný a rozměrově stabilní, nástupce ABS.',
          stats: {
            temperature: 'Teplotní odolnost (93 °C)',
            strength: 'Pevnost (45 MPa)',
            uvResistance: 'UV odolnost',
          },
        },
      },
    },
    printers: {
      id: 'printers',
      title: 'Technologie, na které spoléháme',
      cards: [
        {
          alt: 'Prusa MK3S+ připravená na precizní tisk prototypů',
          credit: '© Prusa Research',
          creditUrl: 'https://prusa3d.com',
        },
        {
          alt: 'Bambu Lab P1S při výrobě funkčních prototypů',
          credit: '© Bambu Lab',
          creditUrl: 'https://bambulab.com/en',
        },
      ],
    },
    contact: {
      id: 'contact',
      title: 'Spojte se s námi',
      backgroundAlt: 'Oranžový gradient s 3D objekty symbolizující spolupráci',
      description:
        'Napište nám, co potřebujete vytisknout. Ozveme se nejpozději do jednoho pracovního dne.',
      note: 'Sdílené podklady používáme pouze pro zpracování poptávky.',
      responseTime: 'Reagujeme zpravidla do 24 hodin v pracovních dnech.',
    },
  },
  contactForm: {
    nameLabel: 'Jméno',
    namePlaceholder: 'Vaše jméno',
    emailLabel: 'Email',
    emailPlaceholder: 'např. jana@firma.cz',
    messageLabel: 'Zpráva',
    messagePlaceholder: 'Jak vám můžeme pomoci?',
    attachmentLabel: 'Příloha (volitelné)',
    attachmentPrimaryAction: 'Klikněte pro nahrání',
    attachmentSecondaryText: 'nebo přetáhněte soubor',
    attachmentHelp: 'Bezpečné nahrání, maximálně 10 MB.',
    removeAttachment: 'Odebrat soubor',
    submit: 'Odeslat zprávu',
    sending: 'Odesílání...',
    successMessage: 'Děkujeme! Ozveme se co nejdříve.',
    errorMessage:
      'Odeslání se nepodařilo. Zkuste to prosím znovu nebo napište později.',
    fileSelected: 'Vybraný soubor',
  },
  footer: {
    navigationHeading: 'Navigace',
    contactHeading: 'Kontakt',
    legalHeading: 'Firemní informace',
    mapHeading: 'Kde působíme',
    addressLabel: 'Sídlo',
    phoneLabel: 'Telefon',
    emailLabel: 'Email',
    saveContact: 'Uložit kontakt',
    poweredBy: 'Vyvinuto týmem',
    poweredByName: 'Studio Umbra',
    rightsReserved: 'Všechna práva vyhrazena.',
    mapTitle: 'Mapa regionů, kde VoxelForge Studio působí',
    addressPlaceholder: 'Údaje sdělíme po navázání spolupráce.',
    legalPlaceholder: 'Firemní údaje jsou dostupné na vyžádání.',
  },
  metadata: {
    defaultTitle: 'Precizní zakázkový 3D tisk | VoxelForge Studio',
    titleTemplate: '%s | VoxelForge Studio',
    description:
      'VoxelForge Studio nabízí zakázkový 3D tisk s důrazem na kvalitu, udržitelnost a důslednou kontrolu výstupů.',
    keywords: [
      '3D tisk',
      'Zakázkový 3D tisk',
      'Prototypy',
      'Malosériová výroba',
      'VoxelForge Studio',
      'Průmyslový design',
    ],
    ogTitle: 'VoxelForge Studio – spolehlivý 3D tisk',
    ogDescription:
      'Partner pro precizní prototypy a malé série. Od první konzultace po finální dodání.',
    twitterTitle: 'VoxelForge Studio | Precizní 3D tisk na zakázku',
    twitterDescription:
      'Špičková kvalita, transparentní komunikace a férové termíny pro vaše projekty.',
  },
};

const en: TranslationDictionary = {
  locale: 'en',
  languageSwitcher: {
    label: 'Language',
    ariaLabel: 'Toggle site language',
    nextLocaleLabel: {
      cs: 'Czech',
      en: 'English',
    },
  },
  brand: {
    logoAlt: 'VoxelForge Studio minimalist company logo',
    tagline: 'A digital workshop for product teams and innovators.',
  },
  navToggleLabel: 'Toggle navigation',
  nav: {
    services: 'Services',
    materials: 'Materials',
    printers: 'Technology',
    contact: 'Contact',
  },
  hero: {
    title: 'Reliable 3D printing without the guesswork',
    subtitle:
      'High-end prototypes and short runs with a focus on quality, sustainability, and clear communication.',
    primaryCta: 'What we print',
    primaryCtaAria: 'Skip to the services overview',
    secondaryCta: 'Write to us',
    secondaryCtaAria: 'Skip to the contact form',
    backgroundAlt: 'Abstract 3D scene with futuristic shapes',
  },
  sections: {
    services: {
      id: 'services',
      title: 'How we help',
      highlights: [
        'Pre-print engineering review',
        'Dimensional QA and finishing',
        'Express prototypes within 48 hours',
      ],
      highlightsAria: 'Key production services we provide',
    },
    materials: {
      id: 'materials',
      title: 'Materials',
      ariaLabel: 'Available 3D printing materials',
      colorToggleLabel: 'Available colours',
      cards: {
        pla: {
          title: 'PLA',
          description:
            'Easy-to-print and eco-friendly material ideal for prototypes and decorative pieces. Not suitable for heat or outdoor use due to deformation around 52 °C.',
          stats: {
            temperature: 'Heat resistance (52 °C)',
            strength: 'Strength (65 MPa)',
            uvResistance: 'UV resistance',
          },
        },
        petg: {
          title: 'PETG',
          description:
            'Durable and chemically resistant material for functional parts. Offers partial UV resistance but is not ideal for long-term outdoor exposure.',
          stats: {
            temperature: 'Heat resistance (68 °C)',
            strength: 'Strength (53 MPa)',
            uvResistance: 'UV resistance',
          },
        },
        abs: {
          title: 'ABS',
          description:
            'Robust plastic that can be smoothed with acetone, well-suited for technical prints. Not UV stable.',
          stats: {
            temperature: 'Heat resistance (90 °C)',
            strength: 'Strength (45 MPa)',
            uvResistance: 'UV resistance',
          },
        },
        tpu: {
          title: 'TPU',
          description:
            'Flexible, rubber-like material for covers, seals, or damping parts. Unsuitable for precise or highly stressed structures.',
          stats: {
            temperature: 'Heat resistance (73 °C)',
            strength: 'Strength (50 MPa)',
            uvResistance: 'UV resistance',
          },
        },
        pc: {
          title: 'PC',
          description:
            'Extremely strong and heat-resistant plastic for mechanically stressed parts.',
          stats: {
            temperature: 'Heat resistance (93 °C)',
            strength: 'Strength (63 MPa)',
            uvResistance: 'UV resistance',
          },
        },
        asa: {
          title: 'ASA',
          description:
            'Highly UV and weather resistant material ideal for outdoor components. Mechanically strong and dimensionally stable, a successor to ABS.',
          stats: {
            temperature: 'Heat resistance (93 °C)',
            strength: 'Strength (45 MPa)',
            uvResistance: 'UV resistance',
          },
        },
      },
    },
    printers: {
      id: 'printers',
      title: 'Tools we rely on',
      cards: [
        {
          alt: 'Prusa MK3S+ primed for precise prototype printing',
          credit: '© Prusa Research',
          creditUrl: 'https://prusa3d.com',
        },
        {
          alt: 'Bambu Lab P1S delivering functional prototypes',
          credit: '© Bambu Lab',
          creditUrl: 'https://bambulab.com/en',
        },
      ],
    },
    contact: {
      id: 'contact',
      title: "Let's collaborate",
      backgroundAlt: 'Warm gradient with 3D shapes representing collaboration',
      description:
        'Tell us how we can help. We respond within one business day.',
      note: 'Shared files are used solely to process your request.',
      responseTime: 'We usually reply within 24 hours on business days.',
    },
  },
  contactForm: {
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'name@company.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your project',
    attachmentLabel: 'Attachment (optional)',
    attachmentPrimaryAction: 'Click to upload',
    attachmentSecondaryText: 'or drag & drop a file',
    attachmentHelp: 'Secure upload, up to 10 MB.',
    removeAttachment: 'Remove file',
    submit: 'Send message',
    sending: 'Sending...',
    successMessage: 'Thanks! We will reply shortly.',
    errorMessage: 'Something went wrong. Please try again or reach out later.',
    fileSelected: 'File selected',
  },
  footer: {
    navigationHeading: 'Navigation',
    contactHeading: 'Contact',
    legalHeading: 'Business info',
    mapHeading: 'Where we work',
    addressLabel: 'Location',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    saveContact: 'Save contact',
    poweredBy: 'Crafted by',
    poweredByName: 'Studio Umbra',
    rightsReserved: 'All rights reserved.',
    mapTitle: 'Regions served by VoxelForge Studio',
    addressPlaceholder: 'We share details once we start working together.',
    legalPlaceholder: 'Business details available upon request.',
  },
  metadata: {
    defaultTitle: 'Reliable on-demand 3D printing | VoxelForge Studio',
    titleTemplate: '%s | VoxelForge Studio',
    description:
      'VoxelForge Studio delivers custom 3D printing with meticulous QA, sustainable material choices, and transparent collaboration.',
    keywords: [
      '3D printing',
      'On-demand 3D printing',
      'Rapid prototyping',
      'Short-run production',
      'VoxelForge Studio',
      'Product development',
    ],
    ogTitle: 'VoxelForge Studio – dependable 3D printing',
    ogDescription:
      'Your partner for precise prototypes and short-run manufacturing with proactive support.',
    twitterTitle: 'VoxelForge Studio | Reliable on-demand 3D printing',
    twitterDescription:
      'Premium quality, sustainable materials, and transparent timelines for your next project.',
  },
};
export const dictionaries: Record<Locale, TranslationDictionary> = {
  cs,
  en,
};

export const fallbackLocale: Locale = 'cs';

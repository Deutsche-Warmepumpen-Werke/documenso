// Mirrors packages/emails/src/brand.ts and layout.ts in the Curia repo so Documenso mails match the rest of DWW's mail.

export const DWW_COLOR = {
  ink: '#17243d',
  copy: '#3d4f69',
  muted: '#64748b',
  border: '#e4eaf2',
  divider: '#edf1f7',
  brand: '#006fb8',
} as const;

export const DWW_FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export const DWW_PROFILE = {
  legalName: 'Deutsche Wärmepumpen Werke GmbH',
  shortName: 'Deutsche Wärmepumpen Werke',
  team: 'Ihr Team der Deutschen Wärmepumpen Werke',
  address: 'Am Obstgut 11, 04425 Taucha',
  contact: [
    { label: 'info@aero-2.de', href: 'mailto:info@aero-2.de' },
    { label: 'aero-2.de', href: 'https://aero-2.de' },
  ],
  legal: [
    'Sitz der Gesellschaft: Taucha',
    'HRB 42471',
    'Amtsgericht Leipzig',
    'Geschäftsführer: Mathias Hammer, Philipp Unger',
  ],
  imprint: 'https://aero-2.de/impressum',
  privacy: 'https://www.aero-2.de/datenschutzerklarung',
  logo: {
    url: 'https://imagedelivery.net/_fwiQnrTUnOZcWcQKO0vzQ/aeecd7f0-adc2-4b59-f65c-eb7446b42c00/public',
    width: 140,
    height: 36,
  },
  // AGPL-3.0 §13: users of the modified instance must be able to get its source.
  source: 'https://github.com/Deutsche-Warmepumpen-Werke/documenso',
} as const;

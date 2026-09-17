import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kmfiber-website.vercel.app'),
  title: {
    default: 'K.M.FIBER Ι.Κ.Ε. | Τηλεπικοινωνιακές Υποδομές & Δίκτυα Οπτικών Ινών',
    template: '%s | K.M.FIBER Ι.Κ.Ε.'
  },
  description: 'Εξειδικευμένες εργασίες ανάπτυξης τηλεπικοινωνιακών δικτύων οπτικών ινών FTTH/FTTB, οριζόντιων διατρήσεων, εγκατάστασης εξοπλισμού και συντήρησης. Αρ. ΓΕΜΗ: 188525832000, ΑΦΜ: 803064377.',
  keywords: [
    'K.M.FIBER',
    'KM FIBER',
    'οπτικές ίνες',
    'FTTH',
    'FTTB',
    'οριζόντιες διατρήσεις',
    'τηλεπικοινωνιακά δίκτυα',
    'συγκόλληση οπτικών ινών',
    'fusion splicing',
    'OTDR μετρήσεις',
    'ΓΕΜΗ 188525832000',
    'ΑΦΜ 803064377',
    'Άργος Ορεστικό',
    'Καστοριά'
  ],
  authors: [{ name: 'K.M.FIBER Ι.Κ.Ε.' }],
  creator: 'K.M.FIBER Ι.Κ.Ε.',
  publisher: 'K.M.FIBER Ι.Κ.Ε.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    url: 'https://kmfiber-website.vercel.app',
    siteName: 'K.M.FIBER Ι.Κ.Ε.',
    title: 'K.M.FIBER Ι.Κ.Ε. | Τηλεπικοινωνιακές Υποδομές & Δίκτυα Οπτικών Ινών',
    description: 'Εξειδικευμένες υπηρεσίες εγκατάστασης οπτικών ινών FTTH/FTTB, οριζόντιων διατρήσεων και τηλεπικοινωνιακού εξοπλισμού. Αρ. ΓΕΜΗ: 188525832000 | ΑΦΜ: 803064377.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K.M.FIBER Ι.Κ.Ε. | Τηλεπικοινωνιακές Υποδομές',
    description: 'Δίκτυα Οπτικών Ινών FTTH/FTTB, Οριζόντιες Διατρήσεις & Εγκαταστάσεις Εξοπλισμού Τηλεπικοινωνιών.',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TelecommunicationsProvider',
    name: 'K.M.FIBER Ι.Κ.Ε.',
    alternateName: 'K.M.FIBER P.C.',
    description: 'Εξειδικευμένες εργασίες ανάπτυξης τηλεπικοινωνιακών δικτύων οπτικών ινών FTTH/FTTB, οριζόντιων διατρήσεων, εγκατάστασης εξοπλισμού και συντήρησης δικτυακών υποδομών.',
    url: 'https://kmfiber-website.vercel.app',
    telephone: '+306932426214',
    email: 'stathismonocholias@gmail.com',
    taxID: '803064377',
    identifier: '188525832000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Παππά Εμμανουήλ 3',
      addressLocality: 'Άργος Ορεστικό',
      postalCode: '52200',
      addressRegion: 'Καστοριά',
      addressCountry: 'GR'
    }
  };

  return (
    <html lang="el" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#090d16] text-slate-100 min-h-screen antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}

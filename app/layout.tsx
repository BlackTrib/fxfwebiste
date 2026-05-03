import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CookieConsent } from '@/components/cookie-consent'
import { BackToTop } from '@/components/back-to-top'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true,
  // Only load weights we actually use
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Web Design & Development București | FXF Web Solution',
  description:
    'Agenție web din București. Creăm site-uri profesionale, magazine online și campanii Google Ads. Peste 150 proiecte livrate. Solicită consultanță gratuită!',
  keywords: [
    'web design Romania',
    'creare site',
    'creare site de prezentare',
    'magazin online',
    'e-commerce Romania',
    'SEO Romania',
    'optimizare SEO',
    'agentie web',
    'FXF Web Solution',
    'web development',
    'dezvoltare web',
    'site profesional',
    'web design Bucuresti',
    'creare site pret',
  ],
  authors: [{ name: 'FXF Web Solution' }],
  creator: 'FXF Web Solution',
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
  alternates: {
    canonical: 'https://fxf.ro',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://fxf.ro',
    siteName: 'FXF Web Solution',
    title: 'Web Design & Development București | FXF Web Solution',
    description:
      'Agenție web din București. Creăm site-uri profesionale, magazine online și campanii Google Ads. Peste 150 proiecte livrate. Consultanță gratuită!',
    images: [
      {
        url: 'https://fxf.ro/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FXF Web Solution - Agenție Web București',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & Development București | FXF Web Solution',
    description: 'Agenție web din București. Site-uri profesionale, magazine online, SEO și Google Ads. Consultanță gratuită!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2d5a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Structured data JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://fxf.ro/#website',
        url: 'https://fxf.ro',
        name: 'FXF Web Solution',
        description: 'Agenție web profesională din România - Web Design, Dezvoltare Web, SEO și Marketing Digital',
        publisher: { '@id': 'https://fxf.ro/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://fxf.ro/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'ro-RO',
      },
      {
        '@type': 'Organization',
        '@id': 'https://fxf.ro/#organization',
        name: 'FXF Web Solution',
        url: 'https://fxf.ro',
        logo: {
          '@type': 'ImageObject',
          url: 'https://fxf.ro/logo.png',
          width: 512,
          height: 512,
        },
        description: 'Agenție web din București specializată în creare site-uri profesionale, magazine online, optimizare SEO și campanii Google Ads.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'RO',
          addressLocality: 'București',
          addressRegion: 'Ilfov',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+40-785-277-566',
          contactType: 'customer service',
          availableLanguage: ['Romanian', 'English'],
        },
        sameAs: [
          'https://www.facebook.com/fxfwebsolution',
          'https://www.instagram.com/fxfwebsolution',
          'https://www.linkedin.com/company/fxfwebsolution',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '53',
          bestRating: '5',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://fxf.ro/#localbusiness',
        name: 'FXF Web Solution',
        image: 'https://fxf.ro/og-image.jpg',
        priceRange: '€€',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'RO',
          addressLocality: 'București',
          addressRegion: 'Ilfov',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 44.4268,
          longitude: 26.1025,
        },
        url: 'https://fxf.ro',
        telephone: '+40-785-277-566',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicii Web Development',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Design Profesional',
                description: 'Creare site-uri de prezentare moderne, responsive și optimizate pentru conversii.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Magazine Online E-Commerce',
                description: 'Dezvoltare magazin e-commerce complet cu PrestaShop sau alte platforme.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Optimizare SEO',
                description: 'Servicii SEO tehnic și on-page pentru creșterea vizibilității în Google.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Google Ads Management',
                description: 'Campanii PPC optimizate pentru ROI maxim și conversii.',
              },
            },
          ],
        },
      },
    ],
  }

  return (
    <html lang="ro" data-scroll-behavior="smooth" className={`${inter.variable} ${plusJakarta.variable} bg-background`}>
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/og-image.jpg" type="image/jpeg" />
        <link rel="preload" as="image" href="/logo.png" type="image/png" />
        {/* Resource hints for better loading priority */}
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  )
}

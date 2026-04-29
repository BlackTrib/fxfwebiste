import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Solicită Ofertă Gratuită | FXF București',
  description: 'Contactează FXF Web Solution din București pentru web design, SEO și Google Ads. Consultanță gratuită, răspuns în 24h. Telefon: +40 785 277 566.',
  keywords: [
    'contact agentie web',
    'oferta web design',
    'consultanta web gratuita',
    'contact fxf',
    'cerere oferta site',
    'pret site web',
    'contact web development',
    'oferta magazin online',
  ],
  openGraph: {
    title: 'Contact | Solicită Ofertă Gratuită | FXF București',
    description: 'Contactează FXF pentru web design și SEO în București. Consultanță gratuită, răspuns în 24h. Telefon: +40 785 277 566.',
    url: 'https://fxf.ro/contact',
  },
  alternates: {
    canonical: 'https://fxf.ro/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

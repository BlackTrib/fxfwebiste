import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/home/hero'
import { Stats } from '@/components/home/stats'
import { ServicesOverview } from '@/components/home/services-overview'
import { Differentiators } from '@/components/home/differentiators'
import { PortfolioPreview } from '@/components/home/portfolio-preview'
import { Process } from '@/components/home/process'
import { Testimonials } from '@/components/home/testimonials'
import { FAQ } from '@/components/home/faq'
import { CTAFinal } from '@/components/home/cta-final'
import { SEOContent } from '@/components/home/seo-content'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cât costă realizarea unui site web profesional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prețurile variază în funcție de complexitate. Un site de prezentare standard începe de la 1.000€, magazinele online de la 2.500€, iar aplicațiile web custom de la 5.000€. Oferim consultanță gratuită pentru a estima exact costurile proiectului tău.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât durează dezvoltarea unui website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Site de prezentare: 2-4 săptămâni. Magazin online: 4-8 săptămâni. Aplicații web complexe: 8-16 săptămâni. Oferim timeline exact înainte de a începe, cu milestones clare și deadline-uri respectate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot să administrez singur site-ul după lansare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolut! Toate site-urile noastre vin cu un CMS intuitiv. Oferim training gratuit la lansare și documentație pentru a actualiza texte, imagini și produse fără cunoștințe tehnice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Site-ul va fi optimizat pentru Google (SEO)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toate proiectele noastre includ SEO tehnic de bază: structură URL-uri, meta tags, Schema markup, sitemap, Core Web Vitals optimizate. Pentru campanii SEO complete oferim pachete separate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Oferiți mentenanță și suport după lansare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da! Oferim pachete lunare de mentenanță care includ: actualizări de securitate, backup-uri automate zilnice, monitorizare uptime 24/7 și suport tehnic prioritar. Prețuri de la 100€/lună.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <div className="below-fold">
          <ServicesOverview />
        </div>
        <div className="below-fold">
          <Differentiators />
        </div>
        <div className="below-fold">
          <PortfolioPreview />
        </div>
        <div className="below-fold">
          <Process />
        </div>
        <div className="below-fold">
          <Testimonials />
        </div>
        <div className="below-fold">
          <FAQ />
        </div>
        <div className="below-fold">
          <SEOContent />
        </div>
        <div className="below-fold">
          <CTAFinal />
        </div>
      </main>
      <Footer />
    </>
  )
}

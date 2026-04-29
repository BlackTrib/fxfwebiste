'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Reveal } from '@/components/ui/reveal'

const faqs = [
  { 
    q: 'Cât costă realizarea unui site web profesional?', 
    a: 'Prețurile variază în funcție de complexitate. Un site de prezentare standard începe de la 1.000€, magazinele online de la 2.500€, iar aplicațiile web custom de la 5.000€. Oferim consultanță gratuită pentru a estima exact costurile proiectului tău.' 
  },
  { 
    q: 'Cât durează dezvoltarea unui website?', 
    a: 'Site de prezentare: 2-4 săptămâni. Magazin online: 4-8 săptămâni. Aplicații web complexe: 8-16 săptămâni. Oferim timeline exact înainte de a începe, cu milestones clare și deadline-uri respectate.' 
  },
  { 
    q: 'Pot să administrez singur site-ul după lansare?', 
    a: 'Absolut! Toate site-urile noastre vin cu un CMS (Content Management System) intuitiv. Oferim training gratuit la lansare și documentație pentru a actualiza texte, imagini și produse fără cunoștințe tehnice.' 
  },
  { 
    q: 'Ce se întâmplă dacă nu sunt mulțumit de design?', 
    a: 'Lucrăm iterativ cu feedback constant. Ai dreptul la revizuiri până ești 100% mulțumit. Comunicăm clar numărul de runde de revizuiri incluse și nu lansăm nimic fără aprobarea ta finală.' 
  },
  { 
    q: 'Includeți hosting și domeniu în preț?', 
    a: 'Hosting-ul și domeniul sunt costuri separate (anuale). Recomandăm soluții profesionale precum Vercel sau hosting dedicat. Le gestionăm noi sau te ghidăm să le achiziționezi. Costul anual e între 100-300€.' 
  },
  { 
    q: 'Oferiți mentenanță și suport după lansare?', 
    a: 'Da! Oferim pachete lunare de mentenanță care includ: actualizări de securitate, backup-uri automate zilnice, monitorizare uptime 24/7, optimizări de performanță și suport tehnic prioritar. Prețuri de la 100€/lună.' 
  },
  { 
    q: 'Site-ul va fi optimizat pentru Google (SEO)?', 
    a: 'Toate proiectele noastre includ SEO tehnic de bază: structură URL-uri, meta tags, Schema markup, sitemap, Core Web Vitals optimizate. Pentru campanii SEO complete (link building, content), oferim pachete separate.' 
  },
  { 
    q: 'Lucrați cu clienți din afara României?', 
    a: 'Da, lucrăm remote cu clienți din toată Europa. Comunicarea se face prin video call, email și platforme de project management. Facturăm în EUR și emitem factură fiscală.' 
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-14 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Header */}
          <Reveal direction="left" className="lg:col-span-1">
            <p className="text-accent-brand text-xs font-semibold uppercase tracking-widest mb-1">Întrebări frecvente</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-3">
              Ai întrebări despre serviciile noastre?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Am compilat răspunsurile la cele mai frecvente întrebări despre procesul nostru de 
              web development, prețuri, termene și suport.
            </p>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <HelpCircle size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground mb-1">Nu găsești răspunsul?</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Contactează-ne direct și îți răspundem în maxim 4 ore în zilele lucrătoare.
                  </p>
                  <Link href="/contact" className="text-xs font-semibold text-primary hover:text-accent-brand transition-colors">
                    Trimite o întrebare →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right - Accordion */}
          <Reveal direction="right" delay={100} className="lg:col-span-2">
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-lg overflow-hidden bg-card">
                  <button
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-secondary/30 transition-colors"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="font-medium text-sm text-foreground">{faq.q}</span>
                    <ChevronDown size={16} className={cn('text-muted-foreground shrink-0 transition-transform', open === i && 'rotate-180')} />
                  </button>
                  <div className={cn('overflow-hidden transition-all duration-200', open === i ? 'max-h-48' : 'max-h-0')}>
                    <p className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

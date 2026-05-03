'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const projects = [
  { 
    name: 'Diva Home', 
    cat: 'Magazin online', 
    desc: 'Migrare magazin pe PrestaShop optimizat cu design elegant premium, mega menu cu 15+ categorii, filtre avansate de produs, checkout simplificat și optimizare SEO completă.',
    result: '+37%', 
    metric: 'Creștere vânzări în 3 luni', 
    tags: ['E-Commerce', 'PrestaShop', 'SEO'], 
    color: 'bg-amber-500',
    tech: 'PrestaShop, Custom Theme'
  },
  { 
    name: 'MKT Solutions', 
    cat: 'Magazin online', 
    desc: 'Salvare completă a datelor dintr-un magazin PrestaShop aproape abandonat, migrare pe platformă modernă și lansare campanii Google Ads pentru revenire spectaculoasă.',
    result: '4x', 
    metric: 'Vânzări online în 3 luni', 
    tags: ['E-Commerce', 'PrestaShop', 'Google Ads'], 
    color: 'bg-orange-500',
    tech: 'PrestaShop, Google Ads'
  },
  { 
    name: 'ePresta', 
    cat: 'Site de prezentare', 
    desc: 'Site de prezentare premium cu design dark și dramatic pentru agenție PrestaShop, pagină de contact optimizată pentru conversii și portofoliu vizual cu proiecte realizate.',
    result: '+85%', 
    metric: 'Lead-uri în primele 3 luni', 
    tags: ['Web Design', 'WordPress', 'SEO'], 
    color: 'bg-slate-500',
    tech: 'WordPress, Custom Theme'
  },
]

const industries = ['E-Commerce', 'Medical', 'B2B', 'SaaS', 'Retail', 'HoReCa', 'Imobiliare', 'Consultanță']

export function PortfolioPreview() {
  return (
    <section className="py-14 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <Reveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <p className="text-accent-brand text-xs font-semibold uppercase tracking-widest mb-1">Portofoliu Web Design</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2 lg:whitespace-nowrap">
              Proiecte web cu rezultate măsurabile
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Peste 150 de proiecte de web design și dezvoltare web pentru clienți din diverse 
              industrii. Fiecare proiect vine cu date concrete de performanță și ROI verificabil.
            </p>
          </div>
          <Link href="/portofoliu" className="text-sm font-medium text-primary hover:text-accent-brand flex items-center gap-1 transition-colors shrink-0">
            Vezi toate proiectele <ArrowRight size={14} />
          </Link>
        </Reveal>

        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {projects.map((p, i) => (
            <Reveal key={p.name} direction="scale" delay={i * 100}>
            <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 card-hover h-full">
              {/* Result area */}
              <div className="bg-gradient-to-br from-secondary/80 to-secondary/50 p-5 relative">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-primary">{p.result}</p>
                  <p className="text-sm text-muted-foreground">{p.metric}</p>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-md bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={12} className="text-foreground" />
                </button>
              </div>
              
              {/* Info */}
              <div className="p-5">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{p.cat}</span>
                <h3 className="font-semibold text-base text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">{p.desc}</p>
                
                {/* Tech used */}
                <p className="text-[10px] text-muted-foreground mb-2">
                  <span className="font-semibold">Tech:</span> {p.tech}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-green-600 font-medium mb-3">
                  <TrendingUp size={12} />
                  Rezultate verificate
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Industries */}
        <div className="bg-secondary/50 border border-border rounded-xl p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-foreground">Industrii servite</p>
              <p className="text-xs text-muted-foreground">Experiență dovedită în multiple sectoare din Romania</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((ind) => (
                <span key={ind} className="text-xs font-medium text-muted-foreground bg-background px-3 py-1.5 rounded-md border border-border">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

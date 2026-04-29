'use client'

import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const testimonials = [
  { 
    quote: 'Magazinul nostru online a fost gata în doar 6 săptămâni, cu toate integrările cerute: plăți card, curier și facturare automată. În primele 3 luni am avut peste 500 de comenzi. Investiția s-a amortizat rapid!', 
    name: 'Alexandru Popa', 
    role: 'Fondator, AutoParts Express', 
    result: '+420% comenzi',
    project: 'Magazin online piese auto'
  },
  { 
    quote: 'Am lucrat cu alte agenții înainte, dar FXF e la alt nivel. În primele 6 luni am triplat vânzările față de site-ul vechi. Suportul post-lansare este exceptional - răspund în ore, nu zile.', 
    name: 'Maria Ionescu', 
    role: 'Fondator, Velvet Fashion Store', 
    result: '+300% vânzări',
    project: 'Magazin online fashion'
  },
  { 
    quote: 'De când FXF administrează serverul nostru dedicat, nu am mai avut niciun downtime. Monitorizare 24/7, backup-uri automate și răspuns în maxim 30 de minute la orice problemă. Liniște totală pentru business.', 
    name: 'Cristian Dragomir', 
    role: 'CTO, DataFlow Systems', 
    result: '99.98% uptime',
    project: 'Administrare server dedicat'
  },
]

const badges = [
  '150+ proiecte finalizate',
  '98% satisfacție clienți',
  '8+ ani experiență',
]

export function Testimonials() {
  return (
    <section className="py-14 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <Reveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <p className="text-accent-brand text-xs font-semibold uppercase tracking-widest mb-1">Testimoniale clienți</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2 lg:whitespace-nowrap">
              Ce spun clienții noștri despre colaborare
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Recenzii verificate de la companii care au colaborat cu FXF Web Solution pentru 
              proiecte de web design, magazine online și marketing digital.
            </p>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="text-xs font-medium text-muted-foreground bg-card border border-border px-3 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 100}>
            <figure className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-sm transition-all h-full">
              {/* Quote icon */}
              <div className="flex items-center justify-between mb-3">
                <Quote size={20} className="text-primary/20" />
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground text-sm leading-relaxed mb-3">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              
              {/* Project type */}
              <p className="text-[10px] text-muted-foreground mb-2">
                <span className="font-semibold">Proiect:</span> {t.project}
              </p>
              
              {/* Result */}
              <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded w-fit mb-3">
                {t.result}
              </div>
              
              {/* Author */}
              <figcaption className="border-t border-border pt-3">
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

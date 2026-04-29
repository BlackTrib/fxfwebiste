'use client'

import Link from 'next/link'
import { ArrowRight, MessageSquare, FileText, Palette, Code2, Rocket, HeartHandshake } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const steps = [
  { 
    num: '01', 
    icon: MessageSquare,
    title: 'Analiză & Discovery', 
    desc: 'Înțelegem afacerea ta, publicul țintă, competitorii și obiectivele de business. Identificăm oportunitățile digitale.',
    deliverables: 'Brief complet, analiza competitorilor, user personas',
    time: '3-5 zile' 
  },
  { 
    num: '02', 
    icon: FileText,
    title: 'Propunere & Strategie', 
    desc: 'Primești oferta detaliată cu specificații tehnice, timeline exact și buget transparent. Fără surprize.',
    deliverables: 'Propunere tehnică, contract, wireframes',
    time: '2-4 zile' 
  },
  { 
    num: '03', 
    icon: Palette,
    title: 'Design UI/UX', 
    desc: 'Creăm design-ul în Figma cu feedback în timp real. Iterăm până când ești 100% mulțumit de aspectul vizual.',
    deliverables: 'Mockups complete, design system, assets',
    time: '7-14 zile' 
  },
  { 
    num: '04', 
    icon: Code2,
    title: 'Development', 
    desc: 'Transformăm design-ul în cod funcțional, cu testare pe multiple dispozitive și browsere. Cod clean și documentat.',
    deliverables: 'Website funcțional, CMS configurat, integrări',
    time: '10-25 zile' 
  },
  { 
    num: '05', 
    icon: Rocket,
    title: 'Lansare & Go-Live', 
    desc: 'Deploy pe hosting performant, configurare DNS, SSL, analytics și instrumente de monitorizare. Training pentru echipa ta.',
    deliverables: 'Site live, Google Analytics, training sesion',
    time: '2-3 zile' 
  },
  { 
    num: '06', 
    icon: HeartHandshake,
    title: 'Suport Continuu', 
    desc: 'Mentenanță proactivă cu update-uri de securitate, backup-uri automate și suport tehnic dedicat pentru orice nevoie.',
    deliverables: 'Rapoarte lunare, backup-uri, prioritate suport',
    time: 'Ongoing' 
  },
]

export function Process() {
  return (
    <section className="py-14 bg-primary">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <Reveal direction="up" className="text-center mb-8 max-w-2xl mx-auto">
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">Procesul nostru de lucru</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">
            De la idee la site funcțional în 6 pași clari
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Un proces structurat și transparent pentru dezvoltarea proiectului tău web. 
            Știi întotdeauna în ce etapă te afli și ce urmează.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {steps.map((step, i) => (
            <Reveal key={step.num} direction="up" delay={i * 80}>
            <div className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/8 transition-colors h-full">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-white/20">{step.num}</span>
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyber to-cyber/70 flex items-center justify-center shadow-sm shadow-cyber/30">
                    <step.icon size={16} className="text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <span className="text-[10px] font-medium text-white/40 bg-white/5 px-2 py-1 rounded">{step.time}</span>
              </div>
              <h3 className="font-semibold text-white text-sm mb-2">{step.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-3">{step.desc}</p>
              <p className="text-[10px] text-white/30">
                <span className="text-white/50 font-medium">Livrabile:</span> {step.deliverables}
              </p>
            </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal direction="scale" delay={400}>
        <div className="text-center bg-white/5 border border-white/10 rounded-xl p-6">
          <p className="text-white/60 text-sm mb-4">
            Consultanța inițială este gratuită și fără obligații. Discutăm despre proiectul tău și 
            îți oferim o estimare realistă de timp și buget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-cyber transition-colors"
          >
            Începe un proiect acum <ArrowRight size={14} />
          </Link>
        </div>
        </Reveal>
      </div>
    </section>
  )
}

'use client'

import { Rocket, Zap, Users, Target, Lock, Handshake } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const items = [
  { icon: Rocket, title: 'Dezvoltare custom', desc: 'Cod scris de la zero, nu template-uri modificate. Fiecare proiect este unic și adaptat nevoilor tale.' },
  { icon: Zap, title: 'Performanță optimă', desc: 'Core Web Vitals optimizate, Lighthouse 90+. Site-uri rapide care convertesc mai bine.' },
  { icon: Users, title: 'Echipă internă', desc: 'Fără outsourcing sau intermediari. Lucrezi direct cu developerii și designerii noștri.' },
  { icon: Target, title: 'Orientare pe ROI', desc: 'KPIs clari, rapoarte lunare și optimizări continue. Măsurăm și îmbunătățim constant.' },
  { icon: Lock, title: 'Securitate completă', desc: 'SSL gratuit, backup-uri automate, protecție DDoS și conformitate GDPR pentru Romania.' },
  { icon: Handshake, title: 'Parteneriat pe termen lung', desc: 'Suport tehnic continuu, mentenanță proactivă și consultanță strategică post-lansare.' },
]

export function Differentiators() {
  return (
    <section className="py-14 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left */}
          <Reveal direction="left" className="lg:col-span-2">
            <p className="text-accent-brand text-xs font-semibold uppercase tracking-widest mb-1">De ce să alegi FXF</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-3">
              Diferența dintre o agenție web și un partener digital real
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Site-uri frumoase face multă lume. Site-uri care generează vânzări și transformă 
              vizitatorii în clienți? Asta e cu totul altă poveste. La FXF, ne concentrăm pe 
              rezultate măsurabile, nu doar pe estetică.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Fiecare proiect de web development pe care îl livrăm este construit cu focus pe 
              conversii, optimizare SEO și experiență utilizator. Folosim tehnologii moderne 
              precum React, Next.js și WordPress pentru a crea soluții scalabile.
            </p>
            
          </Reveal>

          {/* Right - Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
            {items.map((item, i) => (
              <Reveal key={item.title} direction="right" delay={i * 80}>
              <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/20 hover:shadow-sm transition-all h-full">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon size={18} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { Monitor, ShoppingCart, Wrench, Search, BarChart2, Code2, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal, RevealGroup } from '@/components/ui/reveal'

const services = [
  { 
    icon: Monitor, 
    title: 'Web Design Profesional', 
    desc: 'Creăm site-uri de prezentare moderne, responsive și optimizate pentru conversii. Design personalizat adaptat identității brandului tău.',
    features: ['Design UI/UX personalizat', 'Mobile-first responsive', 'Optimizare viteză încărcare'],
    href: '/servicii/web-design', 
    popular: true 
  },
  { 
    icon: ShoppingCart, 
    title: 'Magazine Online E-Commerce', 
    desc: 'Dezvoltăm platforme e-commerce complete cu sisteme de plată securizate, gestiune stoc și integrări cu curieri.',
    features: ['Plăți online securizate', 'Gestiune produse intuitivă', 'Integrări curieri Romania'],
    href: '/servicii/magazin-online' 
  },
  { 
    icon: Wrench, 
    title: 'Mentenanță Web', 
    desc: 'Pachete lunare de întreținere site cu backup-uri automate, actualizări de securitate și suport tehnic dedicat.',
    features: ['Backup-uri zilnice automate', 'Actualizări de securitate', 'Suport tehnic prioritar'],
    href: '/servicii/mentenanta-web' 
  },
  { 
    icon: Search, 
    title: 'Optimizare SEO', 
    desc: 'Servicii SEO complete pentru poziționare organică în Google. SEO tehnic, on-page și off-page pentru trafic calificat.',
    features: ['Audit SEO complet', 'Optimizare on-page', 'Link building strategic'],
    href: '/servicii/optimizare-seo' 
  },
  { 
    icon: BarChart2, 
    title: 'Google Ads & PPC', 
    desc: 'Campanii publicitare Google Ads gestionate profesional pentru ROI măsurabil și cost per achiziție optimizat.',
    features: ['Campanii Search & Display', 'Remarketing avansat', 'Rapoarte lunare detaliate'],
    href: '/servicii/google-ads' 
  },
  { 
    icon: Code2, 
    title: 'Dezvoltare Custom', 
    desc: 'Aplicații web personalizate, integrări API, automatizări și soluții software la comandă pentru nevoi specifice.',
    features: ['Aplicații web custom', 'Integrări API & CRM', 'Automatizări workflow'],
    href: '/servicii' 
  },
]

const stack = ['Next.js', 'React', 'TypeScript', 'Node.js', 'PrestaShop', 'WordPress', 'Shopify', 'OpenCart']

export function ServicesOverview() {
  return (
    <section className="py-14 bg-secondary/30" id="servicii">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <Reveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <p className="text-accent-brand text-xs font-semibold uppercase tracking-widest mb-1">Servicii Web Development</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2 lg:whitespace-nowrap">
              Servicii complete de dezvoltare web
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Oferim o gamă completă de servicii digitale pentru afaceri din Romania: de la 
              web design și creare site-uri până la magazine online, SEO și marketing digital.
            </p>
          </div>
          <Link href="/servicii" className="text-sm font-medium text-primary hover:text-accent-brand flex items-center gap-1 transition-colors shrink-0">
            Toate serviciile <ArrowRight size={14} />
          </Link>
        </Reveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              direction="up"
              delay={i * 80}
              as="div"
              className="group relative bg-card border border-border rounded-xl p-5 hover:border-primary/30 card-hover"
            >
              <Link href={s.href} className="flex flex-col h-full">
                {s.popular && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
                <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <s.icon size={20} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-1 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{s.desc}</p>
                
                {/* Features list */}
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Tech Stack Bar */}
        <Reveal direction="up" delay={300}>
        <div className="bg-secondary/50 border border-border rounded-xl p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-foreground">Tehnologii folosite</p>
              <p className="text-xs text-muted-foreground">Stack modern pentru performanță și scalabilitate</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {stack.map((tech) => (
                <span key={tech} className="text-xs font-medium text-muted-foreground bg-background px-3 py-1.5 rounded-md border border-border hover:border-primary/30 hover:text-primary transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}

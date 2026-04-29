import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  BarChart2, ArrowRight, Check, Target, TrendingUp, Zap, 
  DollarSign, Search, ShoppingCart, Eye, Users,
  LineChart, MousePointer, Megaphone, PieChart, Award, Clock
} from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Google Ads București | Campanii PPC & ROI | FXF Web',
  description: 'Campanii Google Ads profesionale în București. Search, Display și Shopping cu ROI măsurabil. Management PPC cu focus pe conversii reale. Solicită audit gratuit!',
  keywords: [
    'google ads romania',
    'campanii google ads',
    'ppc romania',
    'management google ads',
    'agentie google ads',
    'publicitate google',
    'google adwords',
    'reclame google',
    'campanii ppc',
    'google shopping',
    'google ads pret',
    'specialist google ads',
  ],
  openGraph: {
    title: 'Google Ads București | Campanii PPC & ROI | FXF Web',
    description: 'Campanii Google Ads în București care aduc clienți, nu doar clicuri. ROI măsurabil, rapoarte transparente și optimizare continuă.',
    url: 'https://fxf.ro/servicii/google-ads',
  },
  alternates: {
    canonical: 'https://fxf.ro/servicii/google-ads',
  },
}

const services = [
  {
    icon: Search,
    title: 'Campanii Search',
    desc: 'Anunțuri text în rezultatele de căutare Google. Ajungi la clienți exact în momentul când caută activ ce oferi — cel mai înalt intent de cumpărare.',
  },
  {
    icon: Eye,
    title: 'Campanii Display',
    desc: 'Banere vizuale pe milioane de site-uri din rețeaua Google. Ideal pentru awareness, remarketing și pentru a rămâne în mintea potențialilor clienți.',
  },
  {
    icon: ShoppingCart,
    title: 'Google Shopping',
    desc: 'Anunțuri cu imagine și preț direct în căutare. Esențial pentru magazine online — clienții văd produsul înainte de a da click.',
  },
  {
    icon: Users,
    title: 'Remarketing',
    desc: 'Recapturează vizitatorii care au plecat fără să cumpere. Anunțuri personalizate care îi urmăresc pe web și îi aduc înapoi.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Max',
    desc: 'Campanii automatizate care folosesc AI-ul Google pentru a afișa anunțuri pe toate canalele: Search, Display, YouTube, Gmail, Maps.',
  },
  {
    icon: LineChart,
    title: 'Optimizare Conversii',
    desc: 'Setare corectă tracking conversii, configurare Google Tag Manager, optimizare landing pages și testare A/B pentru rezultate maxime.',
  },
]

const benefits = [
  { icon: Zap, title: 'Rezultate imediate', desc: 'Trafic și lead-uri din prima zi. Anunțurile tale apar instant în Google. Clienți interesați vin imediat.' },
  { icon: Target, title: 'Targeting precis', desc: 'Ajungi exact la publicul dorit. Filtrare după cuvinte cheie, locație și interese. Fiecare click vine de la cineva care caută ceea ce oferi.' },
  { icon: DollarSign, title: 'Control buget', desc: 'Plătești doar pentru click-uri reale. Fără obligații pe termen lung. Controlezi zi de zi cum se cheltuiesc banii.' },
  { icon: PieChart, title: 'Măsurabil 100%', desc: 'Rapoarte detaliate pe fiecare click. Tracking conversii și ROI complet. Transparență totală asupra rezultatelor.' },
]

const process = [
  { step: '01', title: 'Audit & Strategie', desc: 'Analizăm contul existent (dacă există), competiția și definim obiectivele. Creăm strategia de campanie.' },
  { step: '02', title: 'Cercetare Keywords', desc: 'Identificăm cuvintele cheie cu potențial maxim: volum, cost per click, competiție și relevanță pentru afacerea ta.' },
  { step: '03', title: 'Structurare Campanii', desc: 'Creăm structura optimă de campanii, grupuri de anunțuri și segmentare pentru control și optimizare eficientă.' },
  { step: '04', title: 'Redactare Anunțuri', desc: 'Scriem anunțuri persuasive cu headline-uri puternice, call-to-action clar și extensii relevante.' },
  { step: '05', title: 'Setare Tracking', desc: 'Configurăm corect conversiile în Google Ads și Analytics. Fără tracking corect, nu poți optimiza.' },
  { step: '06', title: 'Optimizare Continuă', desc: 'Monitorizăm zilnic, ajustăm licitările, adăugăm negative keywords și optimizăm pentru ROI maxim.' },
]

const included = [
  'Audit cont Google Ads existent (dacă e cazul)',
  'Cercetare și selecție cuvinte cheie',
  'Structurare campanii optimă',
  'Redactare anunțuri performante',
  'Extensii anunțuri (sitelinks, callouts, etc.)',
  'Setare conversii și Google Analytics 4',
  'Negative keywords pentru a evita irosirea bugetului',
  'A/B testing anunțuri',
  'Optimizare landing pages (recomandări)',
  'Raport detaliat săptămânal/lunar',
  'Meeting lunar de strategie',
  'Suport continuu prin email/chat',
]

const faqs = [
  {
    q: 'Cât ar trebui să aloc ca buget pentru Google Ads?',
    a: 'Depinde de industrie și competiție. Pentru majoritatea afacerilor, recomandăm minimum 500-1000€/lună pentru rezultate semnificative. Începem cu un test pentru a determina costul per conversie și apoi scalăm.'
  },
  {
    q: 'Cât durează până văd rezultate?',
    a: 'Primele rezultate apar în primele zile. Dar pentru optimizare completă și date suficiente pentru decizii, recomandăm minimum 2-3 luni de rulare consistentă.'
  },
  {
    q: 'Care este diferența între Google Ads și SEO?',
    a: 'Google Ads = rezultate imediate, plătești per click, oprești oricând. SEO = rezultate în 3-6 luni, trafic gratuit, efecte pe termen lung. Ideal este să le combini.'
  },
  {
    q: 'Cum mă asigur că nu irosesc banii?',
    a: 'Prin: cercetare corectă de keywords, negative keywords agresive, tracking conversii corect, optimizare continuă și transparență totală în rapoarte. Noi nu avem interes să irosești bani — câștigăm când tu câștigi.'
  },
  {
    q: 'Ce primesc în raportul lunar?',
    a: 'Impresii, clicuri, CTR, cost per click, conversii, cost per conversie, ROI, comparație cu luna anterioară, acțiuni efectuate și recomandări pentru luna următoare.'
  },
  {
    q: 'Pot gestiona singur campaniile Google Ads?',
    a: 'Da, dar este ușor să irosești bani fără experiență. Platforma este complexă și schimbările frecvente necesită atenție constantă. Un specialist îți economisește timp și optimizează rezultatele.'
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Management București',
  description: 'Campanii Google Ads profesionale în București. Search, Display și Shopping cu ROI măsurabil și management PPC cu focus pe conversii reale.',
  provider: {
    '@type': 'Organization',
    name: 'FXF Web Solution',
    url: 'https://fxf.ro',
  },
  areaServed: { '@type': 'City', name: 'București' },
  url: 'https://fxf.ro/servicii/google-ads',
  serviceType: 'Google Ads PPC',
}

export default function GoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'oklch(0.55 0.22 250)' }} />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <BarChart2 size={14} />
                Publicitate performantă
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Google Ads
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2" style={{ color: 'oklch(0.72 0.14 70)' }}>
                  Campanii PPC care aduc clienți, nu doar clicuri
                </span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Setăm și gestionăm campanii Google Ads cu focus pe ROI. Structură corectă, 
                tracking precis, optimizare continuă și transparență totală asupra rezultatelor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Solicită audit gratuit
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#servicii"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all duration-200"
                >
                  Vezi tipurile de campanii
                </a>
              </div>
              </div>
              <PageHeroVisual page="google-ads" />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="bg-white rounded-xl p-6 border border-border">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Campaign Types */}
        <section className="py-14 bg-white" id="servicii">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Tipuri de campanii
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Alegem formatul potrivit pentru obiectivele tale
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fiecare tip de campanie are avantajele sale. Le combinăm strategic pentru rezultate maxime.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.title} className="bg-secondary/40 rounded-2xl p-6 hover:bg-secondary/60 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-14 bg-secondary/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                  Serviciu complet
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                  Ce include managementul Google Ads
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Nu doar setăm campaniile și te lăsăm singur. Gestionăm, optimizăm și raportăm 
                  continuu pentru a maximiza rezultatele.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all hover:-translate-y-0.5"
                >
                  Solicită ofertă personalizată <ArrowRight size={14} />
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-border">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check size={15} className="text-accent-brand mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Procesul nostru
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Cum gestionăm campaniile tale
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item) => (
                <div key={item.step} className="bg-secondary/40 rounded-2xl p-6 relative overflow-hidden group hover:bg-secondary/60 transition-colors">
                  <span className="absolute -top-4 -right-2 font-display text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <span className="inline-block text-xs font-bold text-accent-brand bg-accent-brand/10 px-2.5 py-1 rounded-full mb-3">
                      Pasul {item.step}
                    </span>
                    <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-14 bg-secondary/40">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <h2 className="font-display text-3xl font-bold text-primary mb-6">
                De ce să investești în Google Ads pentru afacerea ta?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Google Ads</strong> este cea mai eficientă platformă de publicitate online pentru majoritatea afacerilor. 
                De ce? Pentru că ajungi la potențiali clienți exact în momentul când caută activ ce oferi tu. 
                Nu speri sa te vada — esti acolo cand te cauta.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Spre deosebire de social media advertising unde întrerupi utilizatorul, în <strong>Google Search</strong> 
                răspunzi unei nevoi active. Acest lucru înseamnă rată de conversie mai mare și cost per achiziție mai mic 
                în multe industrii.
              </p>
              
              <h3 className="font-display text-xl font-bold text-primary mt-10 mb-4">
                Când are sens să folosești Google Ads?
              </h3>
              <ul className="text-muted-foreground space-y-3 mb-6">
                <li><strong>Ai nevoie de rezultate rapide:</strong> SEO durează luni, Ads-urile funcționează din prima zi.</li>
                <li><strong>Poți măsura o conversie:</strong> Formular completat, apel telefonic, comandă plasată.</li>
                <li><strong>Competiția face deja Ads:</strong> Dacă nu ești acolo, ei îți iau clienții.</li>
                <li><strong>Ai buget de test:</strong> Minimum 500€/lună pentru date semnificative.</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-primary mt-10 mb-4">
                Management Google Ads profesional în România
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La FXF Web Solution, gestionăm campanii Google Ads pentru afaceri din România cu focus pe ROI, 
                nu pe metrici de vanitate. Rapoarte transparente, optimizare continuă și comunicare constantă. 
                Câștigăm când tu câștigi — de aceea ne interesează rezultatele reale, nu clicurile goale.
              </p>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Întrebări frecvente
              </p>
              <h2 className="font-display text-3xl font-bold text-primary text-balance">
                Ce trebuie să știi despre Google Ads
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-secondary/40 rounded-xl border border-border group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-foreground hover:text-primary transition-colors">
                    {faq.q}
                    <span className="ml-4 shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center group-open:bg-primary group-open:text-white transition-colors">
                      <svg className="w-3 h-3 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              Gata să atragi mai mulți clienți?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Solicită un audit gratuit al contului tău Google Ads sau hai să discutăm despre o strategie nouă.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5"
            >
              Solicită audit gratuit <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-xl font-bold text-center text-foreground mb-8">
              Servicii complementare
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/servicii/optimizare-seo" className="flex items-center gap-2 bg-secondary/60 px-5 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <Search size={16} className="text-primary" />
                SEO pentru trafic organic
              </Link>
              <Link href="/servicii/web-design" className="flex items-center gap-2 bg-secondary/60 px-5 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <MousePointer size={16} className="text-primary" />
                Landing Pages optimizate
              </Link>
              <Link href="/servicii/magazin-online" className="flex items-center gap-2 bg-secondary/60 px-5 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <ShoppingCart size={16} className="text-primary" />
                Google Shopping pentru e-commerce
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

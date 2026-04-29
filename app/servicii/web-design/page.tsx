import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  Monitor, ArrowRight, Check, Code2, Palette, Zap, Shield, 
  Smartphone, Search, BarChart2, Clock, Users, Layers,
  Globe, Gauge, Lock, FileCode, Database, Cloud
} from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Web Design București | Creare Site Profesional | FXF',
  description: 'Creare site-uri profesionale în București. Design modern, responsive, optimizat SEO. PageSpeed 90+, cod curat, suport inclus. Solicită ofertă gratuită!',
  keywords: [
    'web design romania',
    'creare site web',
    'dezvoltare website',
    'site de prezentare',
    'web development',
    'design website',
    'firma web design',
    'agentie web design',
    'creare site profesional',
    'site responsive',
    'web design bucuresti',
    'web design pret',
  ],
  openGraph: {
    title: 'Web Design București | Creare Site Profesional | FXF',
    description: 'Creăm site-uri profesionale în București care convertesc vizitatori în clienți. Design modern, cod curat, PageSpeed 90+.',
    url: 'https://fxf.ro/servicii/web-design',
  },
  alternates: {
    canonical: 'https://fxf.ro/servicii/web-design',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design Profesional București',
  description: 'Creare site-uri de prezentare profesionale, responsive și optimizate SEO pentru afaceri din București și România.',
  provider: {
    '@type': 'Organization',
    name: 'FXF Web Solution',
    url: 'https://fxf.ro',
  },
  areaServed: { '@type': 'City', name: 'București' },
  url: 'https://fxf.ro/servicii/web-design',
  serviceType: 'Web Design',
}

const features = [
  {
    icon: Palette,
    title: 'Design Personalizat',
    desc: 'Fiecare proiect este unic. Nu folosim template-uri generice — creăm design-uri originale care reflectă identitatea brandului tău și diferențiază afacerea de competiție.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Site-ul tău va arăta impecabil pe orice dispozitiv — desktop, tabletă sau mobil. Peste 60% din traficul web vine de pe mobile, iar noi ne asigurăm că experiența este perfectă.',
  },
  {
    icon: Zap,
    title: 'Performanță Maximă',
    desc: 'Viteză de încărcare sub 3 secunde garantată. Optimizăm imagini, cod și infrastructură pentru scoruri PageSpeed Insights de 90+ pe toate metricile.',
  },
  {
    icon: Search,
    title: 'SEO Integrat',
    desc: 'Structură corectă de heading-uri, meta tag-uri optimizate, schema markup, sitemap și toate elementele tehnice pentru o indexare excelentă în Google.',
  },
  {
    icon: Shield,
    title: 'Securitate & SSL',
    desc: 'Certificat SSL gratuit, protecție împotriva atacurilor, actualizări de securitate și backup-uri automate pentru liniștea ta completă.',
  },
  {
    icon: Code2,
    title: 'Cod Curat & Modern',
    desc: 'Folosim tehnologii moderne (React, Next.js, TypeScript) pentru cod performant, ușor de întreținut și scalabil pe măsură ce afacerea crește.',
  },
]

const process = [
  { step: '01', title: 'Descoperire & Analiză', desc: 'Înțelegem afacerea, publicul țintă, competiția și obiectivele. Analizăm ce funcționează și ce nu în industria ta.' },
  { step: '02', title: 'Strategie & Wireframing', desc: 'Creăm arhitectura informațională și wireframe-uri pentru structura optimă a site-ului, focusată pe conversii.' },
  { step: '03', title: 'Design UI/UX', desc: 'Proiectăm interfața vizuală completă — culori, tipografie, butoane, layout-uri — toate aliniate la brandul tău.' },
  { step: '04', title: 'Dezvoltare', desc: 'Transformăm design-ul în cod funcțional, cu atenție la detalii, performanță și compatibilitate cross-browser.' },
  { step: '05', title: 'Testare & QA', desc: 'Testăm pe toate dispozitivele și browserele. Verificăm formulare, link-uri, viteză, SEO tehnic și accesibilitate.' },
  { step: '06', title: 'Lansare & Suport', desc: 'Lansăm site-ul, configurăm analytics și îți oferim training. Rămânem alături de tine cu suport post-lansare.' },
]

const technologies = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Layers },
  { name: 'TypeScript', icon: FileCode },
  { name: 'Node.js', icon: Database },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Vercel', icon: Cloud },
  { name: 'WordPress', icon: Globe },
  { name: 'Headless CMS', icon: Gauge },
]

const faqs = [
  {
    q: 'Cât durează realizarea unui site web?',
    a: 'Un site de prezentare standard durează între 2-4 săptămâni, în funcție de complexitate și de viteza feedback-ului. Proiectele mai complexe pot dura 6-8 săptămâni.'
  },
  {
    q: 'Ce informații trebuie să vă furnizez pentru a începe?',
    a: 'Avem nevoie de: logo (dacă există), texte și imagini pentru conținut, informații despre servicii/produse, date de contact și, ideal, exemple de site-uri care vă plac ca stil.'
  },
  {
    q: 'Pot să îmi actualizez singur conținutul site-ului?',
    a: 'Da! Toate site-urile noastre vin cu un sistem de administrare (CMS) intuitiv. Primești training și documentație pentru a putea edita texte, imagini și pagini fără cunoștințe tehnice.'
  },
  {
    q: 'Site-ul va fi optimizat pentru Google?',
    a: 'Absolut. Fiecare site include optimizare SEO tehnică: structură corectă de heading-uri, meta tag-uri, schema markup, sitemap XML, robots.txt și viteze de încărcare excelente.'
  },
  {
    q: 'Oferiți găzduire pentru site?',
    a: 'Da, oferim pachete de gazduire pe servere high-performance, rapide si securizate. Alternativ, putem configura site-ul pe hostingul preferat de tine.'
  },
  {
    q: 'Ce se întâmplă după lansarea site-ului?',
    a: 'Oferim suport tehnic post-lansare inclus în preț (1-3 luni, în funcție de pachet). Pentru mentenanță continuă, avem pachete lunare separate.'
  },
]

const benefits = [
  { icon: Users, title: 'Mai mulți clienți', desc: 'Un site profesional generează încredere și transformă vizitatorii în clienți plătitori.' },
  { icon: Globe, title: 'Prezență 24/7', desc: 'Site-ul tău lucrează non-stop, prezentând afacerea și generând lead-uri chiar și când dormi.' },
  { icon: BarChart2, title: 'Credibilitate', desc: '75% din consumatori judecă credibilitatea unei companii după aspectul site-ului web.' },
  { icon: Clock, title: 'Economie de timp', desc: 'Un site bine structurat răspunde automat la întrebările frecvente și reduce apelurile telefonice.' },
]

export default function WebDesignPage() {
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
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'oklch(0.55 0.22 250)' }} />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <Monitor size={14} />
                Serviciu principal
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Web Design & Development
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2" style={{ color: 'oklch(0.72 0.14 70)' }}>
                  Site-uri care convertesc vizitatori în clienți
                </span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Creăm site-uri de prezentare profesionale, cu design modern, cod curat și performanță excelentă. 
                Fiecare proiect este gândit strategic pentru a genera rezultate reale pentru afacerea ta.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Solicită ofertă gratuită
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/portofoliu"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all duration-200"
                >
                  Vezi exemple de lucrări
                </Link>
              </div>
              </div>
              <PageHeroVisual page="web-design" />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-10 bg-secondary/50">
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

        {/* What's Included */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Ce primești
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Tot ce ai nevoie pentru un site de succes
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nu doar un site frumos — ci o soluție completă, gândită pentru performanță, 
                vizibilitate și conversii.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Procesul nostru
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Cum lucrăm la proiectul tău
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Un proces clar și transparent, cu comunicare constantă la fiecare pas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 border border-border relative overflow-hidden group hover:border-primary/30 transition-colors">
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

        {/* Technologies */}
        <section className="py-10 bg-background border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-muted-foreground text-sm font-medium">Tehnologii și platforme pe care le folosim</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => {
                const Icon = tech.icon
                return (
                  <div key={tech.name} className="flex items-center gap-2 bg-secondary/60 px-4 py-2.5 rounded-xl">
                    <Icon size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="py-14 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <h2 className="font-display text-3xl font-bold text-primary mb-6">
                De ce ai nevoie de un site web profesional în 2026?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                În era digitală, prezența online nu mai este opțională — este esențială. Un <strong>site web profesional</strong> reprezintă 
                cartea de vizită a afacerii tale în mediul online, fiind de multe ori primul contact pe care potențialii clienți îl au cu brandul tău.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Studiile arată că <strong>75% din consumatori</strong> judecă credibilitatea unei companii după aspectul site-ului web. 
                Un design învechit, o viteză de încărcare slabă sau lipsa optimizării pentru dispozitive mobile pot costa afacerea ta 
                clienți valoroși în fiecare zi.
              </p>
              
              <h3 className="font-display text-xl font-bold text-primary mt-10 mb-4">
                Ce diferențiază un site web bun de unul excelent?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Un site excelent nu este doar frumos vizual — este strategic. Combină <strong>design atractiv</strong> cu <strong>funcționalitate intuitivă</strong>, 
                <strong>viteză de încărcare rapidă</strong> și <strong>optimizare pentru motoarele de căutare</strong>. 
                Fiecare element, de la structura meniului până la plasarea butoanelor de acțiune, este gândit pentru a ghida vizitatorul spre conversie.
              </p>
              
              <h3 className="font-display text-xl font-bold text-primary mt-10 mb-4">
                Servicii complete de web design în România
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La FXF Web Solution, oferim <strong>servicii complete de creare site-uri web</strong> pentru afaceri din România. 
                De la site-uri de prezentare simple până la platforme complexe cu funcționalități avansate, adaptăm soluția 
                la nevoile și bugetul fiecărui client.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Folosim tehnologii moderne precum <strong>React, Next.js și TypeScript</strong> pentru a construi site-uri rapide, 
                scalabile și ușor de întreținut. Fiecare proiect include optimizare SEO, design responsive și suport post-lansare.
              </p>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Întrebări frecvente
              </p>
              <h2 className="font-display text-3xl font-bold text-primary text-balance">
                Ce trebuie să știi despre web design
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-border group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-foreground hover:text-primary transition-colors">
                    {faq.q}
                    <span className="ml-4 shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center group-open:bg-primary group-open:text-white transition-colors">
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
        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              Gata să îți construiești prezența online?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Solicită o consultanță gratuită și hai să discutăm cum putem transforma viziunea ta în realitate digitală.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5"
            >
              Solicită ofertă gratuită <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-10 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-xl font-bold text-center text-foreground mb-8">
              Servicii complementare
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/servicii/optimizare-seo" className="flex items-center gap-2 bg-secondary/60 px-5 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <Search size={16} className="text-primary" />
                Optimizare SEO
              </Link>
              <Link href="/servicii/mentenanta-web" className="flex items-center gap-2 bg-secondary/60 px-5 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <Lock size={16} className="text-primary" />
                Mentenanță Web
              </Link>
              <Link href="/servicii/google-ads" className="flex items-center gap-2 bg-secondary/60 px-5 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <BarChart2 size={16} className="text-primary" />
                Google Ads
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

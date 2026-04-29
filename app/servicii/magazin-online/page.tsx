import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  ShoppingCart, ArrowRight, Check, CreditCard, Package, Truck, 
  Shield, BarChart2, Search, Smartphone, Zap, Users,
  Store, Wallet, Globe, Lock, RefreshCw, HeadphonesIcon
} from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Creare Magazin Online București | E-Commerce | FXF',
  description: 'Creare magazine online în București cu WooCommerce, PrestaShop sau Shopify. Plăți online, stoc, curierat integrat, design optimizat conversii. Solicită ofertă gratuită!',
  keywords: [
    'creare magazin online',
    'magazin online romania',
    'e-commerce romania',
    'creare site vanzari',
    'platforma e-commerce',
    'magazin online pret',
    'dezvoltare e-commerce',
    'shop online',
    'woocommerce romania',
    'shopify romania',
    'prestashop romania',
    'prestashop magazin online',
    'creare magazin prestashop',
    'magazin online profesional',
    'creare site produse',
  ],
  openGraph: {
    title: 'Creare Magazin Online București | E-Commerce | FXF',
    description: 'Magazine online cu WooCommerce, PrestaShop sau Shopify care vând 24/7. Plăți online, gestionare stoc și curierat integrat în București.',
    url: 'https://fxf.ro/servicii/magazin-online',
  },
  alternates: {
    canonical: 'https://fxf.ro/servicii/magazin-online',
  },
}

const features = [
  {
    icon: CreditCard,
    title: 'Plăți Online Integrate',
    desc: 'Acceptă plăți cu cardul (Stripe, Netopia, PayU), transfer bancar și ramburs. Procesare sigură și conformă PCI-DSS pentru încrederea clienților.',
  },
  {
    icon: Package,
    title: 'Gestionare Produse & Stoc',
    desc: 'Panou de administrare intuitiv pentru adăugare produse, categorii, variante (mărimi, culori), gestionare stoc și prețuri promoționale.',
  },
  {
    icon: Truck,
    title: 'Integrare Curierat',
    desc: 'Conectare automată cu FAN Courier, Cargus, DPD, Sameday și alți curieri. Generare automată AWB și tracking pentru clienți.',
  },
  {
    icon: Search,
    title: 'SEO E-Commerce',
    desc: 'Optimizare specifică pentru magazine online: URL-uri prietenoase, schema markup pentru produse, imagini optimizate și conținut unic.',
  },
  {
    icon: Smartphone,
    title: 'Design Mobile-First',
    desc: 'Peste 70% din cumpărăturile online se fac de pe mobil. Magazinul tău va fi perfect optimizat pentru experiența de cumpărare pe smartphone.',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Rapoarte',
    desc: 'Dashboard cu vânzări în timp real, cele mai vândute produse, abandon coș, sursă trafic și toate datele necesare pentru decizii informate.',
  },
]

const benefits = [
  { icon: Store, title: 'Vânzări 24/7', desc: 'Magazinul tău vinde non-stop, chiar și când dormi.' },
  { icon: Globe, title: 'Piață nelimitată', desc: 'Ajungi la clienți din toată țara, nu doar din zona ta.' },
  { icon: Wallet, title: 'Costuri reduse', desc: 'Fără chirie, utilități sau angajați pentru un magazin fizic.' },
  { icon: RefreshCw, title: 'Scalabilitate', desc: 'Crești inventarul fără limite de spațiu fizic.' },
]

const platforms = [
  { name: 'Custom (Next.js)', recommended: true },
  { name: 'WooCommerce', recommended: false },
  { name: 'Shopify', recommended: false },
  { name: 'PrestaShop', recommended: false },
]

const included = [
  'Design personalizat, orientat pe conversii',
  'Catalog produse nelimitat',
  'Coș de cumpărături optimizat',
  'Checkout simplificat (mai puțini pași = mai multe vânzări)',
  'Cont client și istoric comenzi',
  'Sistem de wishlist și comparare produse',
  'Cupoane de reducere și promoții',
  'Email-uri automate (comandă, livrare, abandon coș)',
  'Blog integrat pentru SEO',
  'Integrare social media',
  'SSL și securitate avansată',
  'Training administrare și documentație',
]

const faqs = [
  {
    q: 'Ce platformă e-commerce este mai bună pentru afacerea mea?',
    a: 'Depinde de nevoile tale. Pentru magazine cu volum mare și nevoi de personalizare, recomandăm soluții custom cu Next.js. PrestaShop este ideal pentru magazine medii-mari cu multe produse și funcționalități avansate. WooCommerce este perfect pentru bugete mai mici sau integrare cu WordPress, iar Shopify este excelent pentru început rapid. Te ajutăm să alegi varianta potrivită.'
  },
  {
    q: 'Cât costă crearea unui magazin online?',
    a: 'Prețurile pornesc de la 2.500€ pentru un magazin complet. Costul final depinde de numărul de produse, funcționalități speciale, integrări și nivelul de personalizare dorit. Oferim consultanță gratuită pentru a stabili bugetul corect.'
  },
  {
    q: 'Cât durează dezvoltarea unui magazin online?',
    a: 'Un magazin online standard durează între 4-8 săptămâni. Proiectele complexe cu funcționalități custom pot dura 2-3 luni. Timpul exact depinde de numărul de produse de importat și de feedback-ul în timpul dezvoltării.'
  },
  {
    q: 'Pot să adaug singur produse noi?',
    a: 'Absolut! Primești acces la un panou de administrare intuitiv unde poți adăuga produse, modifica prețuri, gestiona stocul și procesa comenzile. Oferim training complet și documentație.'
  },
  {
    q: 'Ce metode de plată pot integra?',
    a: 'Integrăm orice procesor de plăți: Stripe, Netopia, PayU, Mobilpay, plată la livrare (ramburs), transfer bancar. De asemenea, putem integra rate prin Oney sau alte soluții de tip "buy now, pay later".'
  },
  {
    q: 'Oferiți suport după lansare?',
    a: 'Da! Toate pachetele includ 3-6 luni de suport tehnic gratuit. Pentru mentenanță continuă și asistență pe termen lung, avem pachete lunare separate.'
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Creare Magazin Online București',
  description: 'Creare magazine online profesionale în București cu WooCommerce, PrestaShop sau Shopify. Plăți online, gestionare stoc și curierat integrat.',
  provider: {
    '@type': 'Organization',
    name: 'FXF Web Solution',
    url: 'https://fxf.ro',
  },
  areaServed: { '@type': 'City', name: 'București' },
  url: 'https://fxf.ro/servicii/magazin-online',
  serviceType: 'E-Commerce Development',
}

export default function MagazinOnlinePage() {
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
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'oklch(0.55 0.22 250)' }} />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <ShoppingCart size={14} />
                E-Commerce profesional
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Creare Magazin Online
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2" style={{ color: 'oklch(0.72 0.14 70)' }}>
                  Platforme e-commerce care vând 24/7
                </span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Construim magazine online complete, gata să vândă din prima zi. Plăți integrate, 
                gestionare stoc, integrare curierat și un design care transformă vizitatorii în cumpărători.
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
                  Vezi magazine realizate
                </Link>
              </div>
              </div>
              <PageHeroVisual page="magazin-online" />
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

        {/* Features */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Funcționalități incluse
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Un magazin online complet, nu doar un catalog de produse
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fiecare funcționalitate este gândită pentru a maximiza vânzările și a simplifica administrarea.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="bg-secondary/40 rounded-2xl p-6 hover:bg-secondary/60 transition-colors">
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

        {/* What's Included */}
        <section className="py-14 bg-secondary/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                  Pachet complet
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                  Ce este inclus în magazinul tău online
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Nu doar un site cu produse — ci o soluție completă de vânzare online, 
                  cu toate instrumentele necesare pentru a crește.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all hover:-translate-y-0.5"
                >
                  Solicită consultanță gratuită <ArrowRight size={14} />
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

        {/* Platforms */}
        <section className="py-16 bg-white border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-muted-foreground text-sm font-medium">Platforme și tehnologii pe care lucrăm</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform) => (
                <div key={platform.name} className={`flex items-center gap-2 px-5 py-3 rounded-xl ${platform.recommended ? 'bg-primary text-white' : 'bg-secondary/60 text-foreground'}`}>
                  <ShoppingCart size={16} />
                  <span className="text-sm font-medium">{platform.name}</span>
                  {platform.recommended && (
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full ml-1">Recomandat</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <h2 className="font-display text-3xl font-bold text-primary mb-6">
                De ce să alegi un magazin online profesional?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Piața de <strong>e-commerce din România</strong> crește cu peste 20% anual. Tot mai mulți consumatori preferă 
                să cumpere online, iar afacerile care nu au o prezență digitală riscă să piardă o parte semnificativă din piață.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Un <strong>magazin online profesional</strong> nu este doar un catalog de produse — este o mașinărie de vânzări 
                care funcționează non-stop. Cu plăți integrate, gestionare automată a stocului și integrare cu firme de curierat, 
                poți vinde în toată țara fără efort manual.
              </p>
              
              <h3 className="font-display text-xl font-bold text-primary mt-10 mb-4">
                Avantajele unui magazin online față de un magazin fizic
              </h3>
              <ul className="text-muted-foreground space-y-3 mb-6">
                <li><strong>Costuri mai mici:</strong> Fără chirie, utilități sau angajați pentru un spațiu fizic.</li>
                <li><strong>Acoperire națională:</strong> Vinzi în toată România, nu doar în zona ta.</li>
                <li><strong>Deschis 24/7:</strong> Clienții pot cumpăra oricând, inclusiv noaptea sau în weekend.</li>
                <li><strong>Scalabilitate:</strong> Crești inventarul fără limite de spațiu fizic.</li>
                <li><strong>Date și analize:</strong> Înțelegi comportamentul clienților și optimizezi continuu.</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-primary mt-10 mb-4">
                Platforme E-Commerce: PrestaShop, WooCommerce și Shopify
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Alegerea platformei potrivite este esențială pentru succesul magazinului tău online. Iată ce oferă fiecare:
              </p>
              <ul className="text-muted-foreground space-y-3 mb-6">
                <li><strong>PrestaShop:</strong> Platformă open-source puternică, ideală pentru magazine medii și mari. Oferă peste 600 de funcționalități native, gestionare avansată a produselor, multi-valută și multi-limbă. Perfect pentru afaceri care au nevoie de control total și scalabilitate.</li>
                <li><strong>WooCommerce:</strong> Extensie WordPress populară, perfectă pentru bugete mai mici și integrare cu conținut existent. Ușor de administrat, cu mii de plugin-uri disponibile.</li>
                <li><strong>Shopify:</strong> Soluție hosted, ideală pentru începători. Nu necesită cunoștințe tehnice, dar are costuri lunare și comisioane pe tranzacții.</li>
                <li><strong>Custom (Next.js):</strong> Pentru magazine enterprise cu nevoi unice. Performanță maximă, SEO excelent și control total asupra experienței utilizatorului.</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-primary mt-10 mb-4">
                Crearea unui magazin online de succes în România
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La FXF Web Solution, am creat zeci de magazine online pentru afaceri din România folosind PrestaShop, WooCommerce și soluții custom. 
                Înțelegem piața locală, preferințele consumatorilor români și integrăm soluțiile de plată și curierat folosite în țară. 
                Fie că vinzi produse fizice, digitale sau servicii, construim platforma potrivită pentru afacerea ta.
              </p>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-secondary/40">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Întrebări frecvente
              </p>
              <h2 className="font-display text-3xl font-bold text-primary text-balance">
                Ce trebuie să știi despre magazinele online
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
        <section className="py-14 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              Pregătit să vinzi online?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Solicită o consultanță gratuită și hai să discutăm despre magazinul online perfect pentru afacerea ta.
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-xl font-bold text-center text-foreground mb-8">
              Servicii complementare pentru magazinul tău
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/servicii/optimizare-seo" className="flex items-center gap-2 bg-secondary/60 px-5 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <Search size={16} className="text-primary" />
                SEO E-Commerce
              </Link>
              <Link href="/servicii/google-ads" className="flex items-center gap-2 bg-secondary/60 px-5 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <BarChart2 size={16} className="text-primary" />
                Google Shopping Ads
              </Link>
              <Link href="/servicii/mentenanta-web" className="flex items-center gap-2 bg-secondary/60 px-5 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                <HeadphonesIcon size={16} className="text-primary" />
                Suport & Mentenanță
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

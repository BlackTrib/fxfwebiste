import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Monitor, ShoppingCart, Wrench, Search, BarChart2, ArrowRight, Check, Code2, Layers, Zap, Shield, Clock, Users } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Servicii Web Design & SEO București | FXF Web Solution',
  description: 'Web design, magazine online, SEO și Google Ads în București. Servicii complete de dezvoltare web cu rezultate măsurabile. Solicită ofertă gratuită acum!',
  keywords: [
    'servicii web development',
    'web design romania',
    'creare site web',
    'magazin online',
    'optimizare seo',
    'google ads romania',
    'mentenanta website',
    'agentie web romania',
    'dezvoltare web',
    'e-commerce romania',
  ],
  openGraph: {
    title: 'Servicii Web Design & SEO București | FXF Web Solution',
    description: 'Web design, e-commerce, SEO și Google Ads. Servicii complete pentru prezența ta digitală. Consultanță gratuită, rezultate măsurabile.',
    url: 'https://fxf.ro/servicii',
  },
  alternates: {
    canonical: 'https://fxf.ro/servicii',
  },
}

const services = [
  {
    id: 'web-design',
    href: '/servicii/web-design',
    icon: Monitor,
    title: 'Web Design & Development',
    subtitle: 'Site-uri profesionale care convertesc vizitatori în clienți',
    desc: 'Creăm site-uri de prezentare cu design modern, cod curat și performanță excelentă. Fiecare proiect este gândit strategic, de la structura informațională la optimizarea pentru conversii. Folosim tehnologii moderne precum React și Next.js pentru viteză și scalabilitate.',
    features: [
      'Design personalizat, de la zero',
      'Responsive impecabil pe orice dispozitiv',
      'Viteză PageSpeed 90+ garantată',
      'Optimizare SEO integrat',
      'CMS intuitiv pentru administrare',
      'SSL, securitate și backup incluse',
    ],
    forWho: 'Ideal pentru: antreprenori, IMM-uri, cabinete medicale, firme de servicii, startupuri.',
    color: 'bg-blue-50',
  },
  {
    id: 'ecommerce',
    href: '/servicii/magazin-online',
    icon: ShoppingCart,
    title: 'Creare Magazin Online',
    subtitle: 'Platforme e-commerce complete care vând 24/7',
    desc: 'Construim magazine online profesionale cu plăți integrate, gestionare stoc și integrare curierat. Design orientat pe conversii, experiență de cumpărare optimizată și toate funcționalitățile necesare pentru a vinde online cu succes.',
    features: [
      'Design modern orientat pe conversie',
      'Plăți online: card, transfer, ramburs',
      'Gestionare produse, categorii și stoc',
      'Integrare cu firme de curierat',
      'SEO e-commerce integrat',
      'Rapoarte și analytics vânzări',
    ],
    forWho: 'Ideal pentru: retaileri, branduri, producători, importatori, artizani.',
    color: 'bg-emerald-50',
  },
  {
    id: 'mentenanta',
    href: '/servicii/mentenanta-web',
    icon: Wrench,
    title: 'Mentenanță & Suport Tehnic',
    subtitle: 'Actualizări, backup-uri, securitate — liniște totală',
    desc: 'Un site fără mentenanță este un site vulnerabil. Oferim actualizări regulate, backup-uri automate, monitorizare uptime 24/7 și suport tehnic rapid. Tu te concentrezi pe afacere, noi ne ocupăm de partea tehnică.',
    features: [
      'Actualizări CMS, plugin-uri și teme',
      'Backup automat zilnic sau săptămânal',
      'Monitorizare uptime 24/7',
      'Scanare și curățare malware',
      'Optimizare performanță continuă',
      'Suport tehnic prin email și chat',
    ],
    forWho: 'Ideal pentru: orice afacere care are un site și vrea să îl păstreze funcțional și sigur.',
    color: 'bg-amber-50',
  },
  {
    id: 'seo',
    href: '/servicii/optimizare-seo',
    icon: Search,
    title: 'Optimizare SEO',
    subtitle: 'Vizibilitate organică pe Google, rezultate pe termen lung',
    desc: 'Creștem vizibilitatea afacerii tale în rezultatele organice Google. Audit tehnic complet, optimizare on-page, cercetare cuvinte cheie, creație conținut și link building etic pentru trafic calificat și durabil.',
    features: [
      'Audit SEO tehnic complet',
      'Cercetare cuvinte cheie relevante',
      'Optimizare on-page (titluri, meta, structură)',
      'Creație conținut optimizat SEO',
      'Link building natural și etic',
      'Raport lunar cu progres și recomandări',
    ],
    forWho: 'Ideal pentru: afaceri care vor trafic organic consistent și vizibilitate locală sau națională.',
    color: 'bg-purple-50',
  },
  {
    id: 'ads',
    href: '/servicii/google-ads',
    icon: BarChart2,
    title: 'Google Ads & Marketing Digital',
    subtitle: 'Campanii PPC care aduc clienți, nu doar clicuri',
    desc: 'Setăm și gestionăm campanii Google Ads cu focus pe ROI. Structură corectă, tracking precis, optimizare continuă și transparență totală. Campanii Search, Display, Shopping și Performance Max pentru rezultate măsurabile.',
    features: [
      'Audit cont Google Ads existent',
      'Structurare campanii Search, Display, Shopping',
      'Cercetare și selecție cuvinte cheie',
      'Setare conversii și tracking corect',
      'Optimizare licitare și bugete',
      'Raport detaliat cu ROI',
    ],
    forWho: 'Ideal pentru: afaceri cu buget de publicitate și obiective clare de generare lead-uri sau vânzări.',
    color: 'bg-rose-50',
  },
]

const stats = [
  { value: '120+', label: 'Proiecte livrate' },
  { value: '8+', label: 'Ani experiență' },
  { value: '95%', label: 'Clienți mulțumiți' },
  { value: '90+', label: 'Scor PageSpeed mediu' },
]

const whyUs = [
  { icon: Code2, title: 'Cod curat & modern', desc: 'Folosim tehnologii actuale (React, Next.js, TypeScript) pentru performanță și scalabilitate.' },
  { icon: Layers, title: 'Abordare strategică', desc: 'Nu doar executăm — gândim strategic fiecare proiect pentru rezultate reale.' },
  { icon: Shield, title: 'Securitate prioritară', desc: 'SSL, backup-uri, actualizări și practici de securitate pentru liniștea ta.' },
  { icon: Clock, title: 'Suport post-lansare', desc: 'Nu te lăsăm singur după livrare. Suport inclus și mentenanță disponibilă.' },
  { icon: Zap, title: 'Performanță garantată', desc: 'Site-uri rapide cu scoruri PageSpeed 90+. Viteza contează pentru SEO și conversii.' },
  { icon: Users, title: 'Comunicare transparentă', desc: 'Ești implicat la fiecare pas. Fără surprize, fără costuri ascunse.' },
]

export default function ServiciiPage() {
  return (
    <>
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
                <Layers size={14} />
                Servicii complete de web development
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Servicii Web Development
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2" style={{ color: 'oklch(0.72 0.14 70)' }}>
                  Tot ce ai nevoie pentru prezența ta online
                </span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                De la primul pixel la prima vânzare — web design, e-commerce, SEO și marketing digital, 
                gestionate de o echipă specializată cu peste 8 ani experiență.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Solicită consultanță gratuită
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/portofoliu"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all duration-200"
                >
                  Vezi portofoliul
                </Link>
              </div>
            </div>
            <PageHeroVisual page="servicii" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-accent-brand">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Serviciile noastre
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Soluții complete pentru afacerea ta online
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fie că ai nevoie de un site de prezentare, magazin online, optimizare SEO sau campanii Google Ads, 
                oferim servicii profesionale cu rezultate măsurabile.
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, i) => {
                const Icon = service.icon
                const isEven = i % 2 === 0
                return (
                  <div
                    key={service.id}
                    className={`rounded-3xl p-8 lg:p-10 ${service.color} border border-border/50`}
                  >
                    <div className={`grid lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Text */}
                      <div className={!isEven ? 'lg:col-start-2' : ''}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                          <Icon size={22} className="text-primary" />
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2 text-balance">
                          {service.title}
                        </h3>
                        <p className="text-accent-brand font-medium text-sm mb-4">{service.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                        <p className="text-xs text-muted-foreground mb-6 italic">{service.forWho}</p>
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5"
                        >
                          Află mai multe despre acest serviciu <ArrowRight size={14} />
                        </Link>
                      </div>

                      {/* Features list */}
                      <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                        <div className="bg-white rounded-2xl p-6 border border-border">
                          <h4 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
                            Ce include
                          </h4>
                          <ul className="space-y-3">
                            {service.features.map((f) => (
                              <li key={f} className="flex items-start gap-2.5">
                                <Check size={15} className="text-accent-brand mt-0.5 shrink-0" />
                                <span className="text-sm text-foreground/80">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                De ce să lucrezi cu noi
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                O echipă pe care te poți baza
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nu suntem o fabrică de site-uri. Suntem parteneri de încredere care înțeleg că fiecare afacere este unică.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUs.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-white rounded-2xl p-6 border border-border card-hover">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-14 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <h2 className="font-display text-3xl font-bold text-primary mb-6">
                Servicii profesionale de web development în România
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La <strong>FXF Web Solution</strong>, oferim servicii complete de dezvoltare web pentru afaceri din România. 
                Fie că ai nevoie de un <strong>site de prezentare profesional</strong>, un <strong>magazin online complet</strong> 
                sau servicii de <strong>optimizare SEO</strong> și <strong>Google Ads</strong>, avem expertiza și experiența 
                necesară pentru a-ți construi prezența digitală de succes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cu peste <strong>8 ani de experiență</strong> și <strong>120+ proiecte livrate</strong>, înțelegem nevoile 
                afacerilor românești și livrăm soluții care funcționează. Nu construim doar site-uri frumoase — construim 
                instrumente de business care generează rezultate reale: mai mulți clienți, mai multe vânzări, mai multă vizibilitate.
              </p>
              
              <h3 className="font-display text-xl font-bold text-primary mt-10 mb-4">
                Abordare completă pentru prezența ta online
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Multe agenții se specializează pe un singur serviciu. Noi oferim o <strong>abordare integrată</strong>: 
                de la design și development, la SEO și marketing digital. Această abordare asigură consistență, 
                eficiență și rezultate mai bune pe termen lung.
              </p>
              <ul className="text-muted-foreground space-y-3 mb-6">
                <li><strong>Web Design:</strong> Site-uri responsive, moderne și optimizate pentru conversii.</li>
                <li><strong>E-Commerce:</strong> Magazine online complete cu plăți, stoc și integrare curierat.</li>
                <li><strong>SEO:</strong> Vizibilitate organică pe Google pentru trafic calificat și durabil.</li>
                <li><strong>Google Ads:</strong> Campanii PPC cu focus pe ROI și rezultate măsurabile.</li>
                <li><strong>Mentenanță:</strong> Actualizări, backup-uri și suport tehnic pentru liniște totală.</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-primary mt-10 mb-4">
                Partenerul tău de încredere pentru dezvoltare web
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Alegerea unei agenții web este o decizie importantă. La FXF Web Solution, construim relații pe termen lung, 
                nu proiecte one-time. Comunicare transparentă, prețuri clare, suport post-lansare inclus și o echipă care 
                înțelege că succesul tău este și succesul nostru.
              </p>
            </article>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              Nu știi ce serviciu ți se potrivește?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Contactează-ne pentru o consultanță gratuită. Analizăm situația ta și îți recomandăm cea mai bună abordare.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5"
            >
              Solicită consultanță gratuită <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

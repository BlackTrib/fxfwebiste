import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Portofoliu Web Design București | FXF Web Solution',
  description:
    'Peste 150 proiecte web livrate în România. Studii de caz cu rezultate reale: site-uri, magazine online și SEO. Descoperă cum am crescut afaceri din București și țară.',
  keywords: [
    'portofoliu web design',
    'proiecte site-uri',
    'studii de caz web',
    'exemple site-uri',
    'web design Romania',
    'magazine online',
    'rezultate marketing digital',
  ],
  openGraph: {
    title: 'Portofoliu Web Design București | FXF Web Solution',
    description: 'Peste 150 proiecte web livrate în România cu rezultate măsurabile. Site-uri, magazine online și campanii SEO de succes.',
    url: 'https://fxf.ro/portofoliu',
  },
  alternates: {
    canonical: 'https://fxf.ro/portofoliu',
  },
}

const projects = [
  {
    name: 'Diva Home',
    category: 'Magazin online',
    tags: ['E-Commerce', 'PrestaShop', 'Găzduire Web', 'Mentenanță'],
    challenge:
      'Magazin de mobilier și decorațiuni interioare cu o platformă veche, lentă și neoptimizată. Rata de conversie scăzută și trafic organic aproape inexistent pe cuvintele cheie importante din nișa home & living.',
    solution:
      'Am migrat magazinul pe PrestaShop optimizat, am implementat un design elegant care reflectă brandul premium, mega menu intuitiv cu 15+ categorii, filtre avansate de produs, checkout simplificat și optimizare SEO completă. Găzduire web performantă și contract de mentenanță pentru actualizări continue.',
    result: '+37% vânzări în primele 3 luni',
    resultDetail: 'Trafic organic crescut cu 78% în 6 luni. Catalog de peste 3.000 de produse.',
    color: 'bg-amber-50',
    accent: 'text-amber-700',
    accentBg: 'bg-amber-100',
    image: '/portfolio/divahome.jpg',
    url: 'https://divahome.ro',
  },
  {
    name: 'Wrap King',
    category: 'Site de prezentare',
    tags: ['Web Design', 'WordPress', 'SEO', 'Găzduire Web'],
    challenge:
      'Atelier auto specializat în colantare și detailing fără prezență online. Clienții găseau greu informații despre servicii, nu existau programări online și concurența domina rezultatele Google.',
    solution:
      'Am creat un site de prezentare premium cu design dark și accente portocaliu care reflectă brandul. Secțiuni dedicate pentru fiecare serviciu (colantare, folii solare, inscripționări, tunning Maxton), galerie foto cu proiecte realizate, sistem de programări online și optimizare SEO locală pentru București.',
    result: '+62% programări online în primele 3 luni',
    resultDetail: 'Trafic organic crescut cu 140% în 6 luni. Poziție Top 3 Google pentru "colantare auto București".',
    color: 'bg-orange-50',
    accent: 'text-orange-700',
    accentBg: 'bg-orange-100',
    image: '/portfolio/wrapking.jpg',
    url: 'https://wrapking.ro',
  },
  {
    name: 'Aroma Florilor',
    category: 'Magazin online',
    tags: ['E-Commerce', 'PrestaShop', 'Web Design', 'Găzduire Web'],
    challenge:
      'Floristerie cu vânzări doar în magazinul fizic, fără prezeță online. Nicio comandă online, pierdere de vânzări din zona metropolitană și imposibilitate de a livra cadouri speciale la distanță.',
    solution:
      'Am dezvoltat un magazin online PrestaShop elegant cu design premium în culori roz și alb, catalog complet de aranjamente florale cu imagini profesionale, sistem de programare a livrărilor, opciuni pentru ocazii speciale (aniversări, nuntă, condoleanțe), și integrare cu sistemul logistic.',
    result: '+200% vânzări în primele 3 luni',
    resultDetail: 'Tranziție de la magazin fizic la digital. Peste 100 de comenzi lunar online. Expansiune pe piața de livrare flori.',
    color: 'bg-pink-50',
    accent: 'text-pink-700',
    accentBg: 'bg-pink-100',
    image: '/portfolio/aromaflorilor.jpg',
    url: 'https://aromaflorilor.ro',
  },
  {
    name: 'IRAGAZZI',
    category: 'Site de prezentare',
    tags: ['Web Design', 'WordPress', 'SEO', 'Găzduire Web'],
    challenge:
      'Barbershop premium fără prezență online. Programările se făceau doar telefonic, clienții noi nu puteau descoperi locația, și nu exista o modalitate de a prezenta serviciile și atmosfera unică a frizeriei.',
    solution:
      'Am creat un site de prezentare elegant cu design dark și accente aurii care reflectă atmosfera premium a barbershop-ului. Secțiuni pentru servicii, galerie foto profesională, sistem de programări online, testimoniale clienți cu rating 4.9/5 și statistici de încredere (7+ ani experiență, 1000+ clienți).',
    result: '+62% programări online în primele 3 luni',
    resultDetail: 'Numărul clienților în frizerie s-a dublat după prezența online. Rating 4.9/5 pe Google cu 150+ review-uri.',
    color: 'bg-amber-50',
    accent: 'text-amber-700',
    accentBg: 'bg-amber-100',
    image: '/portfolio/iragazzi.jpg',
    url: 'https://iragazzi.ro',
  },
  {
    name: 'Sixty8',
    category: 'Magazin online',
    tags: ['E-Commerce', 'PrestaShop', 'Web Design', 'Mentenanță'],
    challenge:
      'Nișă sensibilă (CBD/Vape) care necesită conformitate legală strictă, educarea clienților și construirea încrederii. Competiție mare pe piață și marketing restrictiv.',
    solution:
      'Am dezvoltat un magazin PrestaShop cu design vibrant și modern (neon, culori bold) care atrage target audience-ul. Catalog extins 1000+ produse cu descrieri detaliate, filtrare avansată, sistem de recomandări, și conformitate legală completă.',
    result: '+28% vânzări în primele 3 luni',
    resultDetail: 'Trafic organic crescut cu 41% în 6 luni. Catalog de peste 1.000 de produse active.',
    color: 'bg-purple-50',
    accent: 'text-purple-700',
    accentBg: 'bg-purple-100',
    image: '/portfolio/sixty8.jpg',
    url: 'https://sixty8.net',
  },
  {
    name: 'ePresta',
    category: 'Site de prezentare',
    tags: ['Web Design', 'WordPress', 'SEO', 'Găzduire Web', 'Mentenanță'],
    challenge:
      'Agenție specializată în crearea de magazine PrestaShop fără o prezență online convingătoare. Site-ul vechi nu genera lead-uri calificate, rata de conversie a paginii de contact era extrem de scăzută și compania pierdea clienți potențiali în fața concurenței.',
    solution:
      'Am creat un site de prezentare premium cu design dark și dramatic (fundaluri cu nori, mockup-uri de magazine), secțiuni dedicate serviciilor, portofoliu vizual cu proiecte realizate, pagină de contact optimizată pentru conversii și testimoniale clienți. WordPress cu SEO complet și mentenanță.',
    result: 'Lead-uri calificate +85%',
    resultDetail: 'Rata de conversie a paginii de contact: de la 1.2% la 4.8%.',
    color: 'bg-slate-50',
    accent: 'text-slate-700',
    accentBg: 'bg-slate-100',
    image: '/portfolio/epresta.jpg',
    url: 'https://epresta.ro',
  },
  {
    name: 'WeLovePuzzle',
    category: 'Magazin online',
    tags: ['E-Commerce', 'PrestaShop', 'Web Design'],
    challenge:
      'Magazin online existent pe o versiune veche de PrestaShop, lent și greu de administrat. Catalog de 10.000+ produse dezorganizat, fără filtrare eficientă după număr de piese, brand sau categorie de vârstă, și design învechit.',
    solution:
      'Am migrat și modernizat magazinul pe ultima versiune PrestaShop cu design fresh (alb cu accente magenta), sistem avansat de filtrare (număr piese, brand, adulți/copii), mega menu pentru navigare rapidă, și optimizare performanță cu lazy loading și cache.',
    result: '+31% vânzări în primele 3 luni',
    resultDetail: 'Trafic organic crescut cu 28% în 6 luni. Catalog de peste 10.000 de produse organizate eficient.',
    color: 'bg-pink-50',
    accent: 'text-pink-600',
    accentBg: 'bg-pink-100',
    image: '/portfolio/welovepuzzle.jpg',
    url: 'https://welovepuzzle.com',
  },
  {
    name: 'Copacking Logistica',
    category: 'Site de prezentare',
    tags: ['Web Design', 'WordPress', 'SEO', 'Găzduire Web'],
    challenge:
      'Companie de logistică fără prezență online. Clienții B2B nu puteau găsi informații despre servicii, capacități de depozitare și zone de livrare acoperite. Concurența domina căutările Google.',
    solution:
      'Am creat un site de prezentare modern cu design industrial (gri/alb cu accente portocalii) care comunică profesionalism și eficiență. Secțiuni dedicate serviciilor logistice, prezentare depozite și flotă, formulare de contact B2B și optimizare SEO pentru București și Ilfov.',
    result: '+71% vânzări în primele 3 luni',
    resultDetail: 'Numărul clienților care au avut nevoie de servicii de logistică s-a triplat după prezența online.',
    color: 'bg-gray-50',
    accent: 'text-orange-600',
    accentBg: 'bg-orange-100',
    image: '/portfolio/copacking.jpg',
    url: 'https://copacking.ro',
  },
  {
    name: 'MKT Solutions',
    category: 'Magazin online',
    tags: ['E-Commerce', 'PrestaShop', 'Mentenanță', 'Google Ads'],
    challenge:
      'Magazin online PrestaShop aproape abandonat, vechi și depășit. Datele produselor și clienților erau în pericol de pierdere. Fără trafic, fără vânzări și fără prezență pe Google.',
    solution:
      'Am salvat integral baza de date din magazinul vechi, migrat pe PrestaShop modern cu design nou (dark cu accente orange), reorganizat catalog de echipament de construcție, și lansat campanii agresive Google Ads pentru atragere trafic.',
    result: 'Vânzări online 4x în primele 3 luni',
    resultDetail: 'ROI campanie Google Ads: 420%. Revenire spectaculoasă din abandon la magazin activ.',
    color: 'bg-orange-50',
    accent: 'text-orange-700',
    accentBg: 'bg-orange-100',
    image: '/portfolio/mktsolutions.jpg',
    url: 'https://mktsolutions.ro',
  },
  {
    name: 'Magazin DDD',
    category: 'Magazin online',
    tags: ['E-Commerce', 'PrestaShop', 'Web Design'],
    challenge:
      'Companie de servicii DDD (dezinsecție, dezinfecție, deratizare) cu un magazin online vechi și depășit de tehnologie. Platforma era lentă, greu de administrat și nu mai răspundea cerințelor clienților B2B și B2C.',
    solution:
      'Am modernizat complet magazinul pe PrestaShop cu design curat (alb cu accente galbene), catalog reorganizat pe categorii (insecticide, raticide, capcane, pompe de stropit), filtre avansate pentru produse profesionale, și optimizare SEO pentru nișa DDD.',
    result: '+38% vânzări în primele 3 luni',
    resultDetail: 'Trafic organic crescut cu 40% în 6 luni. Catalog de peste 2.000 de produse.',
    color: 'bg-yellow-50',
    accent: 'text-yellow-700',
    accentBg: 'bg-yellow-100',
    image: '/portfolio/magazinddd.jpg',
    url: 'https://magazinddd.ro',
  },
];

export default function PortofoliuPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-14 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-white/40 font-semibold text-sm uppercase tracking-widest mb-3">
                  Portofoliu Web Design & Development
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 text-balance">
                  Proiecte web cu rezultate reale și măsurabile
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  Magazinele noastre online înregistrează creșteri de vânzări între 28% și 4x în primele 3 luni. 
                  Site-urile de prezentare dublează sau triplează clienții, iar campaniile Google Ads 
                  generează ROI de peste 400%. Nu ne lăudăm cu estetica — ne lăudăm cu rezultatele.
                </p>
                <p className="text-white/50 text-sm">
                  Fiecare studiu de caz include: provocarea clientului, soluția implementată și 
                  rezultatele concrete măsurate după lansare.
                </p>
              </div>
              <PageHeroVisual page="portofoliu" />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-8">
              {projects.map((project, i) => (
                <article
                  key={project.name}
                  className="bg-card border border-border rounded-2xl overflow-hidden card-hover"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Visual - Screenshot full width top on mobile, left on desktop */}
                    {project.image ? (
                      <div className={`relative w-full lg:w-1/2 shrink-0 overflow-hidden img-hover-zoom ${i % 2 !== 0 ? 'lg:order-last lg:border-l lg:border-l-border' : 'lg:border-r lg:border-r-border'} border-b lg:border-b-0 border-border`}>
                        <div className="relative w-full" style={{ aspectRatio: '606/388' }}>
                          <Image
                            src={project.image}
                            alt={`Screenshot ${project.name}`}
                            fill
                            className="object-contain"
                            quality={100}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={i === 0}
                          />
                        </div>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md hover:bg-white transition-colors z-10"
                          >
                            Vizitează site-ul
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className={`${project.color} lg:w-2/5 shrink-0 min-h-56 flex items-center justify-center p-10 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                        <div className="w-full max-w-xs space-y-3">
                          <div className="flex items-center gap-2 mb-4">
                            <div className={`w-8 h-8 rounded-lg ${project.accentBg} flex items-center justify-center`}>
                              <span className={`font-bold text-xs ${project.accent}`}>
                                {project.name.slice(0, 2).toUpperCase()}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="h-2 bg-black/10 rounded w-24" />
                            </div>
                          </div>
                          <div className="h-4 bg-black/10 rounded w-3/4" />
                          <div className="h-2.5 bg-black/6 rounded w-full" />
                          <div className="h-2.5 bg-black/6 rounded w-5/6" />
                          <div className="h-8 w-28 bg-black/12 rounded-lg mt-4" />
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${project.accent}`}>
                          {project.category}
                        </span>
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="font-display text-xl font-bold text-foreground mb-4">
                        {project.name}
                      </h2>

                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                            Provocarea
                          </p>
                          <p className="text-xs text-foreground/80 leading-relaxed">{project.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                            Soluția noastră
                          </p>
                          <p className="text-xs text-foreground/80 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      {/* Result */}
                      <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-green-500 mt-1 shrink-0" />
                        <div>
                          <p className="font-bold text-green-800 text-xs">{project.result}</p>
                          <p className="text-green-700 text-xs mt-0.5">{project.resultDetail}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 text-balance">
              Vrei rezultate similare pentru afacerea ta?
            </h2>
            <p className="text-white/60 text-base mb-6">
              Consultanță gratuită pentru a discuta despre proiectul tău web și oportunitățile de creștere.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5"
            >
              Solicită ofertă gratuită <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

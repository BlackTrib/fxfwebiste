import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  Wrench, ArrowRight, Check, Shield, RefreshCw, Clock, 
  AlertTriangle, Zap, HardDrive, Mail, BarChart2,
  Lock, CloudUpload, Bug, Gauge, HeadphonesIcon, FileText
} from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Mentenanță Website București | Suport Tehnic | FXF',
  description: 'Mentenanță website profesională în București. Actualizări securitate, backup-uri automate, monitorizare 24/7. Pachete de la 100 lei/lună. Solicită ofertă azi!',
  keywords: [
    'mentenanta website',
    'mentenanta site',
    'suport tehnic site',
    'actualizare website',
    'backup site web',
    'securitate website',
    'mentenanta wordpress',
    'administrare site web',
    'monitorizare website',
    'update site',
    'intretinere site',
    'mentenanta web romania',
  ],
  openGraph: {
    title: 'Mentenanță Website București | Suport Tehnic | FXF',
    description: 'Actualizări, backup-uri, securitate și suport tehnic 24/7 pentru site-ul tău din București. Pachete de la 100 lei/lună.',
    url: 'https://fxf.ro/servicii/mentenanta-web',
  },
  alternates: {
    canonical: 'https://fxf.ro/servicii/mentenanta-web',
  },
}

const features = [
  {
    icon: RefreshCw,
    title: 'Actualizări CMS & Plugin-uri',
    desc: 'Actualizăm regulat PrestaShop, WooCommerce, WordPress, OpenCart, Shopify și Framework custom pentru a preveni vulnerabilități de securitate și a asigura compatibilitatea.',
  },
  {
    icon: CloudUpload,
    title: 'Backup Automat Zilnic',
    desc: 'Backup-uri automate zilnice ale bazei de date și fișierelor, stocate în locații separate. Restaurare rapidă în caz de probleme.',
  },
  {
    icon: Shield,
    title: 'Securitate & Firewall',
    desc: 'Monitorizare continuă pentru malware, firewall activ, protecție DDoS și scanări de securitate regulate pentru a ține hackerii la distanță.',
  },
  {
    icon: Gauge,
    title: 'Optimizare Performanță',
    desc: 'Monitorizăm și optimizăm viteza de încărcare, curățăm baza de date, comprimăm imagini și menținem scoruri PageSpeed excelente.',
  },
  {
    icon: Clock,
    title: 'Monitorizare Uptime 24/7',
    desc: 'Verificări automate la fiecare minut. Dacă site-ul cade, primim alertă instant și intervenim imediat pentru restaurare.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suport Tehnic Prioritar',
    desc: 'Echipă dedicată pentru întrebări și probleme. Timp de răspuns garantat și rezolvare rapidă pentru orice situație.',
  },
]

const risks = [
  { icon: Bug, title: 'Vulnerabilități de securitate', desc: 'Plugin-uri neactualizate pot fi exploatate de hackeri.' },
  { icon: AlertTriangle, title: 'Site spart sau infectat', desc: 'Malware-ul poate infecta vizitatorii și distruge reputația.' },
  { icon: Zap, title: 'Viteză scăzută', desc: 'Performanța se degradează în timp fără optimizare.' },
  { icon: HardDrive, title: 'Pierdere date', desc: 'Fără backup, o eroare poate șterge totul iremediabil.' },
]

const plans = [
  {
    name: 'Basic',
    price: '100',
    period: '/lună',
    desc: 'Pentru site-uri de prezentare cu trafic moderat',
    features: [
      'Actualizări lunare CMS & plugin-uri',
      'Backup săptămânal',
      'Monitorizare uptime',
      'Raport lunar de activitate',
      'Suport email (48h răspuns)',
      'Audit SEO lunar',
    ],
    cta: 'Alege Basic',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '150',
    period: '/lună',
    desc: 'Pentru afaceri care depind de prezența online',
    features: [
      'Actualizări săptămânale',
      'Backup zilnic automat',
      'Monitorizare uptime 24/7',
      'Scanare securitate săptămânală',
      'Optimizare performanță',
      'Suport prioritar (24h răspuns)',
      'Raport detaliat lunar',
      'Audit SEO lunar',
    ],
    cta: 'Cel mai popular',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '300',
    period: '/lună',
    desc: 'Pentru magazine online și apps dedicate',
    features: [
      'Actualizări zilnice + testare',
      'Backup în timp real',
      'Monitorizare avansată + alertare',
      'Firewall & protecție DDoS',
      'Optimizare continuă',
      'Suport telefonic prioritar (4h răspuns)',
      'Manager de cont dedicat',
      'Audit SEO lunar',
    ],
    cta: 'Alege Enterprise',
    highlight: false,
  },
]

const faqs = [
  {
    q: 'De ce am nevoie de mentenanță pentru site-ul meu?',
    a: 'Un site web necesită actualizări regulate de securitate, backup-uri și optimizări pentru a funcționa corect. Fără mentenanță, riscă să fie spart, să devină lent sau să se defecteze. Este ca o mașină — are nevoie de revizie periodică.'
  },
  {
    q: 'Ce se întâmplă dacă site-ul meu este spart?',
    a: 'Intervenim de urgență pentru a curăța malware-ul, restaura dintr-un backup curat și întări securitatea. Pentru clienții cu pachete de mentenanță, această intervenție este inclusă fără costuri suplimentare.'
  },
  {
    q: 'Pot anula abonamentul oricând?',
    a: 'Da, nu există contract pe perioadă determinată. Poți anula abonamentul oricând, cu 30 de zile preaviz. Îți predăm toate datele și accesele necesare.'
  },
  {
    q: 'Ce modificări sunt incluse în pachet?',
    a: 'Modificări de conținut (text, imagini), ajustări minore de design, adăugare pagini simple, actualizări informații contact. Funcționalități noi sau redesign major sunt estimate separat.'
  },
  {
    q: 'Lucrați și cu site-uri făcute de alte agenții?',
    a: 'Da! Putem prelua mentenanța oricărui site construit cu PrestaShop, WooCommerce, WordPress, OpenCart, Shopify sau Framework custom. Facem mai întâi un audit tehnic pentru a înțelege starea actuală. Serviciile noastre includ administrarea completă a găzduirii, monitorizarea continuă, backup-uri zilnice, actualizări de securitate și suport tehnic personalizat 24/7.'
  },
]

export default function MentenantaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <Wrench size={14} />
                Protecție continuă
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Mentenanță Website
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2" style={{ color: 'oklch(0.72 0.14 70)' }}>
                  Suport tehnic & actualizări — liniște totală
                </span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Un site fără mentenanță este un site vulnerabil. Îți oferim actualizări regulate, 
                backup-uri automate, monitorizare 24/7 și suport tehnic rapid pentru ca tu să te concentrezi pe afacere.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Solicită ofertă gratuită
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#pachete"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all duration-200"
                >
                  Vezi pachetele
                </a>
              </div>
              </div>
              <PageHeroVisual page="mentenanta-web" />
            </div>
          </div>
        </section>

        {/* Risks */}
        <section className="py-16 bg-destructive/5 border-y border-destructive/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-destructive font-semibold text-sm uppercase tracking-widest mb-2">
                Riscuri fără mentenanță
              </p>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Ce se poate întâmpla cu un site neîntreținut
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {risks.map((risk) => {
                const Icon = risk.icon
                return (
                  <div key={risk.title} className="bg-white rounded-xl p-5 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-destructive" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-sm mb-1">{risk.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{risk.desc}</p>
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
                Ce facem pentru tine
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Servicii complete de mentenanță website
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ne ocupăm de tot ce ține de sănătatea tehnică a site-ului tău.
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

        {/* Plans */}
        <section className="py-14 bg-secondary/40" id="pachete">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Pachete de mentenanță
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Alege pachetul potrivit pentru tine
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fără contract pe perioadă lungă. Poți anula oricând.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-200 ${
                    plan.highlight
                      ? 'bg-primary border-primary text-primary-foreground shadow-2xl scale-[1.02]'
                      : 'bg-white border-border hover:border-border/60 hover:shadow-md'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 text-xs font-bold px-4 py-1 rounded-full shadow-md">
                      Cel mai popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className={`font-display font-bold text-xl mb-1 ${plan.highlight ? 'text-white' : 'text-foreground'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 ${plan.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>
                      {plan.desc}
                    </p>
                    <div className="flex items-end gap-1">
                      <span className={`font-display text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-primary'}`}>
                        {plan.price}€
                      </span>
                      <span className={`text-sm mb-1 ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-green-400' : 'text-accent-brand'}`}
                        />
                        <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-foreground/80'}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      plan.highlight
                        ? 'bg-white text-primary hover:bg-white/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    Solicită ofertă <ArrowRight size={14} />
                  </Link>
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
                De ce este importantă mentenanța unui website?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Un <strong>website fără mentenanță</strong> este ca o mașină fără revizie — funcționează o vreme, dar riscurile cresc 
                in fiecare zi. Plugin-uri neactualizate devin tinte pentru hackeri, baza de date se umfla si incetineste site-ul, 
                iar problemele mici se transformă în crize costisitoare.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Mentenanța profesională a website-ului</strong> previne aceste probleme înainte să apară. Cu actualizări regulate, 
                backup-uri automate și monitorizare 24/7, site-ul tău rămâne rapid, sigur și funcțional în permanență.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                <strong>Condiții contractuale:</strong> Serviciile de mentenanță se contractează pentru o perioadă minimă de 12 luni, cu achitarea integrală a întregii perioade la semnarea contractului. Această abordare ne permite să oferim tarife competitive și să asigurăm continuitatea serviciilor la cel mai înalt standard de calitate.
              </p>
              
              <h3 className="font-display text-xl font-bold text-primary mt-10 mb-4">
                Ce include un serviciu complet de mentenanță website?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Platformele pe care lucrăm includ PrestaShop, WooCommerce, WordPress, OpenCart, Shopify și Framework custom.
              </p>
              <ul className="text-muted-foreground space-y-3 mb-6">
                <li><strong>Administrarea contului de găzduire:</strong> Ne asigurăm că mediul de găzduire este bine configurat și funcționează la parametri optimi, gestionând toate aspectele tehnice legate de spațiu, performanță și resurse alocate.</li>
                <li><strong>Monitorizarea și asigurarea funcționalității continue:</strong> Realizăm monitorizarea constantă a funcționării site-ului pentru a preveni problemele înainte ca acestea să afecteze utilizatorii finali.</li>
                <li><strong>Intervenție rapidă în caz de probleme:</strong> Oferim suport prompt și intervenții rapide pentru a soluționa orice probleme tehnice apărute, minimizând timpii de nefuncționare.</li>
                <li><strong>Consultanță și suport tehnic personalizat:</strong> Disponibilitate 24/7 pentru orice solicitare de asistență tehnică sau consultanță, oferindu-vă soluții rapide și eficiente.</li>
                <li><strong>Analiză periodică a rapoartelor tehnice:</strong> Efectuăm analize periodice ale rapoartelor de performanță și starea tehnică, identificând eventualele optimizări necesare.</li>
                <li><strong>Îmbunătățirea continuă a sistemului de securitate:</strong> Implementăm și actualizăm constant măsuri de securitate pentru a proteja site-ul de amenințările cibernetice.</li>
                <li><strong>Tutoriale video personalizate:</strong> La cerere, oferim tutoriale video detaliate cu instrucțiuni clare despre administrarea și gestionarea platformei.</li>
                <li><strong>Suport tehnic:</strong> Ajutor rapid pentru orice problemă sau întrebare.</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-primary mt-10 mb-4">
                Mentenanță website în România — servicii profesionale
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La FXF Web Solution, oferim <strong>servicii complete de mentenanță website</strong> pentru afaceri din România. 
                Indiferent dacă ai un site de prezentare, blog sau magazin online, ne asigurăm că funcționează perfect în fiecare zi. 
                Tu te concentrezi pe afacere, noi ne ocupăm de partea tehnică.
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
                Ce trebuie să știi despre mentenanța web
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
              Protejează-ți investiția digitală
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Nu aștepta până când apare o problemă. Începe mentenanța preventivă și bucură-te de liniște.
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

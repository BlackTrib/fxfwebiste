import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight, Target, Zap, Heart, Shield, Users, TrendingUp, Award, CheckCircle2, MapPin, Clock, Briefcase } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Despre FXF Web Solution | Agenție Web București',
  description:
    'Agenție web din București cu 150+ proiecte și 8+ ani experiență. Echipă internă de developeri, designeri și specialiști SEO. Transparență 100%, rezultate măsurabile.',
  keywords: [
    'agenție web România',
    'firma web design',
    'web development România',
    'echipa web design',
    'agenție digitală',
    'SEO România',
    'marketing digital',
    'FXF Web Solution',
  ],
  openGraph: {
    title: 'Despre FXF Web Solution | Agenție Web București',
    description: 'Agenție web din București cu 150+ proiecte și 94% rată de retenție. Echipă internă de developeri și specialiști SEO. Consultanță gratuită!',
    url: 'https://fxf.ro/despre',
  },
  alternates: {
    canonical: 'https://fxf.ro/despre',
  },
}

const values = [
  {
    icon: Target,
    title: 'Orientați pe Rezultate',
    desc: 'Fiecare proiect are KPI-uri clare, rapoarte lunare și optimizări continue. Un site nu e frumos dacă nu convertește.',
  },
  {
    icon: Shield,
    title: 'Transparență 100%',
    desc: 'Prețuri clare de la start, fără costuri ascunse. Termene respectate și comunicare directă în fiecare etapă.',
  },
  {
    icon: Heart,
    title: 'Parteneriat pe Termen Lung',
    desc: 'Nu dispărem după lansare. Oferim suport continuu și evoluții conform nevoilor în continuă schimbare ale afacerii tale.',
  },
]

const team = [
  {
    name: 'Madalin Ivan',
    role: 'Founder & Project Manager',
    expertise: ['System Admin', 'E-Commerce Platform', 'SEO Tehnic'],
    desc: 'Fondatorul FXF Web Solution, cu experienta solida in administrarea sistemelor si platformelor e-commerce. Coordoneaza proiectele de la concept la lansare, asigurand livrarea la timp si calitatea serviciului prestat.',
  },
  {
    name: 'George Burlibasa',
    role: 'Lead Developer & Project Manager',
    expertise: ['Full Stack', 'System Admin', 'A.I Developer'],
    desc: 'Lead Developer cu pasiune pentru arhitecturi scalabile și soluții inovatoare. Gestionează proiectele complexe end-to-end, combină expertiza tehnică cu managementul eficient al resurselor și asigură livrarea de cod de cea mai înaltă calitate.',
  },
  {
    name: 'Andrei Palaghia',
    role: 'SEO & Performance Specialist',
    expertise: ['SEO Audit', 'Google Ads', 'Analytics'],
    desc: 'Specialist SEO cu experienta vasta in optimizare tehnica si campanii de marketing digital. Gestioneaza strategii SEO si campanii Google Ads cu ROAS de 3-5x, asigurand vizibilitate maxima si conversii optime pentru clientii nostri.',
  },
]

const stats = [
  { number: '150+', label: 'Proiecte Finalizate', desc: 'Web design, e-commerce, aplicații custom' },
  { number: '94%', label: 'Retenție Clienți', desc: 'Se întorc pentru noi proiecte' },
  { number: '8+', label: 'Ani Experiență', desc: 'În industria web development' },
  { number: '4h', label: 'Timp Răspuns', desc: 'Suport tehnic prioritar' },
]

const industries = [
  'E-Commerce & Retail',
  'Medical & Sănătate',
  'B2B & Corporații',
  'SaaS & Tech',
  'HoReCa',
  'Imobiliare',
  'Consultanță',
  'Educație',
]

export default function DespreNoi() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-14 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/50 font-semibold text-sm uppercase tracking-widest mb-3">
                Despre FXF Web Solution
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 text-balance">
                Agenție web care transformă ideile în rezultate digitale reale
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                FXF Web Solution este o agenție de web design și dezvoltare web din România, 
                specializată în crearea de site-uri profesionale, magazine online și strategii 
                digitale eficiente. Cu peste 8 ani de experiență și 150+ proiecte livrate, suntem 
                parteneri de încredere pentru afaceri care vor să crească online.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: MapPin, text: 'România' },
                  { icon: Clock, text: '8+ ani experiență' },
                  { icon: Briefcase, text: '150+ proiecte' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-white/60 text-sm">
                    <item.icon size={14} />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <PageHeroVisual page="despre" />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mission */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/0 border border-primary/10 rounded-xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Target size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary mb-3">Misiunea Noastră</h3>
                <p className="text-foreground text-sm leading-relaxed mb-3">
                  Sa oferim solutii web de inalta calitate care genereaza vanzari reale si crestere
                  măsurabilă pentru fiecare client din România.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Construim site-uri și magazine online care nu doar arată profesional, ci și funcționează. 
                  Fiecare proiect este o investiție calculată în succesul digital al business-ului tău.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-accent-brand/5 to-accent-brand/0 border border-accent-brand/10 rounded-xl p-8">
                <div className="w-12 h-12 rounded-xl bg-accent-brand/10 flex items-center justify-center mb-5">
                  <Zap size={24} className="text-accent-brand" />
                </div>
                <h3 className="font-display font-bold text-xl text-accent-brand mb-3">Viziunea Noastră</h3>
                <p className="text-foreground text-sm leading-relaxed mb-3">
                  Să devenim referința în industria web development din România pentru agenții care 
                  combină excelență tehnică cu strategie de business solidă.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Într-o piață dominată de promisiuni vagi, FXF se diferențiază prin transparență, 
                  responsabilitate și rezultate concrete documentate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story + Stats */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                  Povestea noastră
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-5 text-balance">
                  De la frustrare la soluție
                </h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    FXF Web Solution a fost fondată din frustrare. Am văzut prea mulți antreprenori din 
                    România care investeau în site-uri care nu funcționau: template-uri generice, cod 
                    instabil, zero suport post-lansare și niciun ROI măsurabil.
                  </p>
                  <p>
                    Am decis că putem face diferit. Am construit o echipă mică dar puternică — developeri 
                    care scriu cod calitativ, designeri obsedați cu UX și specialiști în SEO care înțeleg 
                    cum să transformi vizitatorii în clienți plătitori.
                  </p>
                  <p>
                    Astăzi, după peste 150 de proiecte livrate pentru clienți din e-commerce, medical, 
                    B2B și SaaS, mesajul nostru rămâne același: transparență, calitate și rezultate 
                    măsurabile. Fiecare client e un partener, nu doar o factură.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/20 transition-colors"
                  >
                    <p className="font-display text-4xl font-bold text-primary mb-1">{stat.number}</p>
                    <p className="font-semibold text-foreground text-sm mb-1">{stat.label}</p>
                    <p className="text-muted-foreground text-xs">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Principiile noastre
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary leading-tight text-balance">
                Valorile care ne ghidează în fiecare proiect
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Echipa FXF
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary leading-tight text-balance">
                Specialiștii din spatele proiectelor tale
              </h2>
              <p className="text-muted-foreground text-sm mt-3">
                O echipă internă de profesioniști dedicați, fără outsourcing sau intermediari.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {team.map((member) => (
                <div key={member.name} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-accent-brand/15 flex items-center justify-center mb-4">
                    <Users size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-0.5">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {member.expertise.map((skill) => (
                      <span key={skill} className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-secondary/50 border border-border rounded-xl p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    Experiență în diverse industrii
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Am colaborat cu succes cu companii din toate sectoarele importante din România.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <span key={ind} className="text-xs font-medium text-muted-foreground bg-background px-3 py-1.5 rounded-md border border-border">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                De ce să alegi FXF
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary leading-tight text-balance">
                Ce ne diferențiază de alte agenții web
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { icon: Award, title: 'Calitate High-Tech', desc: 'Cod clean, design modern, performanta de nivel enterprise pe fiecare proiect, indiferent de buget.' },
                { icon: TrendingUp, title: 'Rezultate Măsurabile', desc: 'Google Analytics, conversion tracking, rapoarte lunare cu ROI. Nu estimări vagi, ci date concrete.' },
                { icon: Zap, title: 'Livrare la Termen', desc: 'Proces streamlined, planificare precisă și deadline-uri respectate de fiecare dată. Fără surprize.' },
                { icon: Shield, title: 'Securitate & Suport', desc: 'Backup-uri zilnice, SSL inclus, monitoring 24/7 și răspuns la probleme în maxim 4 ore.' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-14 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <article className="prose prose-sm max-w-none">
              <h2 className="font-display text-2xl font-bold text-primary mb-4">
                Agenție web profesională din România - FXF Web Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>FXF Web Solution</strong> este o agenție de web design și dezvoltare web cu sediul în România, 
                fondata cu misiunea de a oferi servicii digitale de top pentru afaceri locale si internationale. 
                Cu o echipă internă de developeri, designeri și specialiști SEO, oferim soluții complete pentru 
                prezența ta online.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De-a lungul anilor, am colaborat cu peste <strong>150 de clienți</strong> din diverse industrii: 
                e-commerce, medical, B2B, SaaS, HoReCa, imobiliare și consultanță. Fiecare proiect a fost abordat 
                cu aceeași dedicare pentru calitate și rezultate, indiferent de dimensiune sau buget.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ce ne diferențiază? <strong>Transparența 100%</strong>, comunicarea clară, suportul post-lansare 
                inclus și focusul pe ROI măsurabil. Nu livrăm doar site-uri frumoase — construim instrumente de 
                business care generează lead-uri, vânzări și creștere sustenabilă pentru partenerii noștri.
              </p>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
              Gata să lucrăm împreună?
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Consultanța inițială este gratuită și fără obligații. Discutăm despre proiectul tău 
              și îți oferim recomandări personalizate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-xl font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5"
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

import Link from 'next/link'
import { MapPin, Building2, Briefcase, GraduationCap } from 'lucide-react'

const locations = [
  'București', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța', 'Brașov', 'Craiova', 'Sibiu'
]

const services = [
  { title: 'Web Design România', href: '/servicii/web-design', desc: 'Servicii profesionale de web design pentru afaceri din Romania' },
  { title: 'Creare Site de Prezentare', href: '/servicii/web-design', desc: 'Site-uri de prezentare moderne pentru companii și freelanceri' },
  { title: 'Dezvoltare Magazin Online', href: '/servicii/magazin-online', desc: 'Platforme e-commerce complete cu plăți și gestiune stoc' },
  { title: 'Optimizare SEO Site', href: '/servicii/optimizare-seo', desc: 'Servicii SEO pentru poziționare în prima pagină Google' },
  { title: 'Mentenanță Website', href: '/servicii/mentenanta-web', desc: 'Pachete de întreținere și suport tehnic pentru site-uri' },
  { title: 'Campanii Google Ads', href: '/servicii/google-ads', desc: 'Gestionare campanii PPC cu ROI măsurabil' },
]

export function SEOContent() {
  return (
    <section className="py-14 bg-secondary/20 border-t border-border">
      <div className="max-w-6xl mx-auto px-5">
        {/* Main SEO content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {/* About */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Agenție Web Development România - FXF Web Solution
            </h2>
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
              <p>
                <strong>FXF Web Solution</strong> este o agenție de web design și dezvoltare web din România, 
                specializată în crearea de site-uri profesionale, magazine online și aplicații web personalizate. 
                Cu peste 8 ani de experiență și 150+ proiecte finalizate, oferim soluții digitale complete 
                pentru afaceri mici, medii și corporații.
              </p>
              <p>
                Echipa noastră de developeri și designeri creează website-uri moderne, responsive și optimizate 
                pentru motoarele de căutare (SEO). Folosim tehnologii de ultimă generație precum React, Next.js, 
                WordPress, PrestaShop, OpenCart, Shopify și WooCommerce pentru a livra proiecte de înaltă calitate 
                care generează rezultate măsurabile: mai mult trafic, mai multe conversii și mai multe vânzări.
              </p>
              <p>
                Colaborăm cu clienți din diverse industrii: e-commerce, medical, B2B, SaaS, retail, HoReCa 
                și consultanță. Indiferent de dimensiunea proiectului, oferim aceeași atenție la detalii și 
                dedicare pentru rezultate.
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-lg text-primary mb-4 flex items-center gap-2">
              <Briefcase size={18} />
              Servicii Web
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href={s.href} className="group block">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</span>
                    <span className="block text-xs text-muted-foreground">{s.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground mb-1">Servicii web development în toată România</h3>
                <p className="text-xs text-muted-foreground">
                  Lucrăm remote cu clienți din toate orașele mari. Comunicare online, rezultate locale.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <span key={loc} className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md">
                  Web Design {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

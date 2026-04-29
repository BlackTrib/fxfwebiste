'use client'

import Link from 'next/link'
import { Mail, Phone, ArrowRight, MapPin, Star, CheckCircle2, Code2 } from 'lucide-react'

const services = [
  { href: '/servicii/web-design', label: 'Web Design Profesional' },
  { href: '/servicii/magazin-online', label: 'Magazine Online E-Commerce' },
  { href: '/servicii/mentenanta-web', label: 'Mentenanță Web' },
  { href: '/servicii/optimizare-seo', label: 'Optimizare SEO' },
  { href: '/servicii/google-ads', label: 'Google Ads & PPC' },
  { href: 'https://fxfweb.ro', label: 'Găzduire Web' },
]

const company = [
  { href: '/despre', label: 'Despre noi' },
  { href: '/portofoliu', label: 'Portofoliu' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/contact', label: 'Contact' },
  { href: '/termeni', label: 'Termeni și condiții' },
  { href: '/confidentialitate', label: 'Politică confidențialitate' },
]

const badges = [
  'Consultanță gratuită',
  'Profesionalism',
  'Suport 24/7',
  'GDPR Compliant',
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">

      {/* Top CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Gata să începi?</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Transformă-ți afacerea cu un site{' '}
              <span className="text-cyber">profesional</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cyber text-primary px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Solicită ofertă gratuită <ArrowRight size={14} />
            </Link>
            <Link
              href="/portofoliu"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-white/40 hover:text-white transition-all"
            >
              Vezi portofoliu
            </Link>
          </div>
        </div>
      </div>

      {/* Badges strip */}
      <div className="border-b border-white/10 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-0">
          <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:gap-x-6 gap-x-4 gap-y-2">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-cyber shrink-0" />
                <span className="text-white/50 text-xs">{b}</span>
              </div>
            ))}
          </div>
          <div className="sm:ml-auto flex items-center gap-1">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={11} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-white/40 text-xs ml-1">4.9/5 — 53 recenzii</span>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-mono text-sm font-bold bg-white/10 text-white border border-white/20">
                {'</>'}
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-base tracking-wide text-white">FXF <span className="ml-0.5">WEB</span></span>
                <span className="text-[8px] font-medium tracking-[0.48em] uppercase text-white/50">SOLUTION</span>
              </div>
            </div>

            <p className="text-white/50 text-xs leading-relaxed mb-5">
              Agentie web high-tech din Romania specializata in creare site-uri profesionale, 
              magazine online și soluții digitale complete pentru afaceri.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 text-xs text-white/50">
              <a href="tel:+40785277566" className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Phone size={11} />
                </div>
                +40 785 277 566
              </a>
              <a href="mailto:office@fxf.ro" className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Mail size={11} />
                </div>
                office@fxf.ro
              </a>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
                  <MapPin size={11} />
                </div>
                FXF Creative Agency SRL
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-white/30 mb-4">Servicii</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/55 text-xs hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-cyber transition-colors shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-white/30 mb-4">Companie</h3>
            <ul className="space-y-2.5">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/55 text-xs hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-cyber transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working hours & quick info */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-white/30 mb-4">Program</h3>
            <div className="space-y-2 mb-6">
              {[
                { day: 'Luni — Vineri', hours: '10:00 — 18:00' },
                { day: 'Sâmbătă', hours: 'Închis' },
                { day: 'Duminică', hours: 'Închis' },
              ].map((row) => (
                <div key={row.day} className="flex items-center justify-between gap-4">
                  <span className="text-white/40 text-xs">{row.day}</span>
                  <span className="text-white/70 text-xs font-medium">{row.hours}</span>
                </div>
              ))}
            </div>

            {/* Stack snippet */}
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <p className="text-[9px] text-white/30 uppercase tracking-wider font-semibold mb-2">Stack folosit</p>
              <div className="flex flex-wrap gap-1">
                {['Next.js', 'React', 'TypeScript', 'Node.js', 'PrestaShop', 'WooCommerce', 'OpenCart', 'WordPress', 'Shopify', 'Vercel'].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[10px]">
            &copy; {new Date().getFullYear()} FXF Creative Agency SRL. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-1 text-white/25 text-[10px]">
            <span>Realizat cu</span>
            <span className="text-red-400 mx-0.5">♥</span>
            <span>în Romania</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

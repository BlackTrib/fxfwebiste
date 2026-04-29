'use client'

import { Users, Award, Target, TrendingUp, Briefcase, ShoppingCart, Search, BarChart2, Wrench, Code2, Mail, Phone, MessageSquare, Star, FolderOpen, CheckCircle2 } from 'lucide-react'

// Despre page - floating team/agency stats
function DespreVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central card */}
      <div className="relative bg-white/10 border border-white/20 rounded-2xl p-6 w-64 backdrop-blur-sm animate-[float_4s_ease-in-out_infinite]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <Briefcase size={18} className="text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">FXF Web Solution</p>
            <p className="text-white/50 text-xs">Agenție Web România</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: '150+', label: 'Proiecte' },
            { value: '8+', label: 'Ani exp.' },
            { value: '94%', label: 'Retenție' },
            { value: '4h', label: 'Răspuns' },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 rounded-lg p-2.5 text-center">
              <p className="text-white font-bold text-base">{s.value}</p>
              <p className="text-white/50 text-[10px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute top-4 right-4 bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_3s_ease-in-out_infinite_0.5s] flex items-center gap-2">
        <Award size={14} className="text-yellow-300" />
        <span className="text-white text-xs font-semibold">Agenție High-Tech</span>
      </div>
      <div className="absolute bottom-6 left-4 bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_3.5s_ease-in-out_infinite_1s] flex items-center gap-2">
        <Users size={14} className="text-emerald-300" />
        <span className="text-white text-xs font-semibold">Echipă Internă</span>
      </div>
      <div className="absolute top-1/2 -right-2 bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_4s_ease-in-out_infinite_0.8s] flex items-center gap-2">
        <Target size={14} className="text-blue-300" />
        <span className="text-white text-xs font-semibold">Rezultate Reale</span>
      </div>
    </div>
  )
}

// Servicii page - floating service icons
function ServiciiVisual() {
  const services = [
    { icon: Code2, label: 'Web Design', color: 'text-blue-300', top: '5%', left: '50%', delay: '0s' },
    { icon: ShoppingCart, label: 'E-Commerce', color: 'text-emerald-300', top: '25%', left: '85%', delay: '0.4s' },
    { icon: Search, label: 'SEO', color: 'text-purple-300', top: '70%', left: '80%', delay: '0.8s' },
    { icon: BarChart2, label: 'Google Ads', color: 'text-rose-300', top: '70%', left: '15%', delay: '1.2s' },
    { icon: Wrench, label: 'Mentenanță', color: 'text-amber-300', top: '25%', left: '10%', delay: '1.6s' },
  ]
  return (
    <div className="relative w-full h-full">
      {/* Central hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 border border-white/20 rounded-full w-20 h-20 flex items-center justify-center animate-[spin_20s_linear_infinite] backdrop-blur-sm">
        <Code2 size={28} className="text-white animate-[spin_20s_linear_infinite_reverse]" />
      </div>

      {/* Orbiting service cards */}
      {services.map((s, i) => (
        <div
          key={s.label}
          className="absolute bg-white/10 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm flex items-center gap-2 -translate-x-1/2"
          style={{
            top: s.top,
            left: s.left,
            animation: `float ${3 + i * 0.3}s ease-in-out infinite ${s.delay}`,
          }}
        >
          <s.icon size={14} className={s.color} />
          <span className="text-white text-[11px] font-semibold whitespace-nowrap">{s.label}</span>
        </div>
      ))}

      {/* Performance badge */}
      <div className="absolute bottom-[5%] left-[55%] bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_3.5s_ease-in-out_infinite_0.5s] z-10">
        <p className="text-white font-bold text-sm">8+ ani</p>
        <p className="text-white/50 text-[10px]">experiență</p>
      </div>
    </div>
  )
}

// Portofoliu page - floating project cards
function PortofoliuVisual() {
  const projects = [
    { name: 'Diva Home', type: 'E-Commerce', result: '+37% vânzări', color: 'bg-amber-400/20', dot: 'bg-amber-400' },
    { name: 'MKT Solutions', type: 'E-Commerce', result: '4x vânzări', color: 'bg-orange-400/20', dot: 'bg-orange-400' },
    { name: 'ePresta', type: 'Web Design', result: '+85% lead-uri', color: 'bg-slate-400/20', dot: 'bg-slate-400' },
  ]
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-3 w-64">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm flex items-center gap-3"
            style={{ animation: `float ${3.5 + i * 0.5}s ease-in-out infinite ${i * 0.6}s` }}
          >
            <div className={`w-9 h-9 rounded-lg ${p.color} flex items-center justify-center shrink-0`}>
              <FolderOpen size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">{p.name}</p>
              <p className="text-white/50 text-[10px]">{p.type}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
              <span className="text-white/70 text-[10px] font-semibold whitespace-nowrap">{p.result}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-4 right-0 bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_3s_ease-in-out_infinite]">
        <p className="text-yellow-300 font-bold text-sm flex items-center gap-1">
          <Star size={12} className="fill-yellow-300" /> 4.9/5
        </p>
        <p className="text-white/50 text-[10px]">Rating clienți</p>
      </div>

      <div className="absolute bottom-4 left-0 bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_4s_ease-in-out_infinite_1s] flex items-center gap-2">
        <CheckCircle2 size={14} className="text-emerald-400" />
        <span className="text-white text-xs font-semibold">150+ proiecte</span>
      </div>
    </div>
  )
}

// Contact page - floating contact info animation
function ContactVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Chat-style card */}
      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 w-64 backdrop-blur-sm animate-[float_4s_ease-in-out_infinite]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-emerald-400/30 flex items-center justify-center">
            <MessageSquare size={14} className="text-emerald-300" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">FXF Support</p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-white/50 text-[10px]">Online acum</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-white/15 rounded-lg rounded-tl-none px-3 py-2 max-w-[85%]">
            <p className="text-white/90 text-xs">Bună! Cu ce te pot ajuta?</p>
          </div>
          <div className="bg-primary/60 rounded-lg rounded-tr-none px-3 py-2 max-w-[85%] ml-auto">
            <p className="text-white text-xs">Vreau un site profesional!</p>
          </div>
          <div className="bg-white/15 rounded-lg rounded-tl-none px-3 py-2 max-w-[85%]">
            <p className="text-white/90 text-xs">Perfact! Completează formularul...</p>
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-0 bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_3s_ease-in-out_infinite_0.5s] flex items-center gap-2">
        <Phone size={13} className="text-emerald-300" />
        <span className="text-white text-xs font-semibold">+40 785 277 566</span>
      </div>

      <div className="absolute bottom-6 left-0 bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_3.5s_ease-in-out_infinite_1s] flex items-center gap-2">
        <Mail size={13} className="text-blue-300" />
        <span className="text-white text-xs font-semibold">contact@fxf.ro</span>
      </div>

      <div className="absolute top-1/2 -right-2 bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_4s_ease-in-out_infinite_0.8s]">
        <p className="text-white font-bold text-sm">{'<'} 4h</p>
        <p className="text-white/50 text-[10px]">Timp răspuns</p>
      </div>
    </div>
  )
}

// Web Design page visual
function WebDesignVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative bg-white/10 border border-white/20 rounded-2xl p-5 w-64 backdrop-blur-sm animate-[float_4s_ease-in-out_infinite]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-400/20 flex items-center justify-center">
            <Code2 size={18} className="text-blue-300" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Web Design</p>
            <p className="text-white/50 text-xs">Site-uri profesionale</p>
          </div>
        </div>
        <div className="space-y-2">
          {['Design responsive', 'Cod performant', 'SEO optimizat'].map((item, i) => (
            <div key={item} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2" style={{ animation: `float ${3 + i * 0.3}s ease-in-out infinite ${i * 0.3}s` }}>
              <CheckCircle2 size={12} className="text-emerald-400" />
              <span className="text-white/80 text-xs">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_3s_ease-in-out_infinite_0.5s]">
        <p className="text-white font-bold text-sm">100+</p>
        <p className="text-white/50 text-[10px]">Site-uri create</p>
      </div>
    </div>
  )
}

// E-Commerce page visual
function MagazinOnlineVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative bg-white/10 border border-white/20 rounded-2xl p-5 w-64 backdrop-blur-sm animate-[float_4s_ease-in-out_infinite]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center">
            <ShoppingCart size={18} className="text-emerald-300" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">E-Commerce</p>
            <p className="text-white/50 text-xs">Magazine online</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {['PrestaShop', 'WooCommerce', 'Shopify', 'OpenCart'].map((p, i) => (
            <div key={p} className="bg-white/10 rounded-lg px-2 py-1.5 text-center" style={{ animation: `float ${3 + i * 0.2}s ease-in-out infinite ${i * 0.2}s` }}>
              <span className="text-white/80 text-[10px] font-semibold">{p}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-4 bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_3.5s_ease-in-out_infinite_1s] flex items-center gap-2">
        <TrendingUp size={14} className="text-emerald-300" />
        <span className="text-white text-xs font-semibold">+200% vânzări</span>
      </div>
    </div>
  )
}

// SEO page visual
function SeoVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative bg-white/10 border border-white/20 rounded-2xl p-5 w-64 backdrop-blur-sm animate-[float_4s_ease-in-out_infinite]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-400/20 flex items-center justify-center">
            <Search size={18} className="text-purple-300" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">SEO Optimization</p>
            <p className="text-white/50 text-xs">Poziționare Google</p>
          </div>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/60 text-[10px]">Poziție medie</span>
            <span className="text-emerald-400 text-xs font-bold">#3</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div className="bg-emerald-400 h-2 rounded-full w-4/5 animate-pulse" />
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-0 bg-white/15 border border-white/20 rounded-xl px-3 py-2 backdrop-blur-sm animate-[float_3s_ease-in-out_infinite_0.5s]">
        <p className="text-white font-bold text-sm">+180%</p>
        <p className="text-white/50 text-[10px]">Trafic organic</p>
      </div>
    </div>
  )
}

// Google Ads page visual
function GoogleAdsVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative bg-white/10 border border-white/20 rounded-2xl p-5 w-64 backdrop-blur-sm animate-[float_4s_ease-in-out_infinite]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-rose-400/20 flex items-center justify-center">
            <BarChart2 size={18} className="text-rose-300" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Google Ads</p>
            <p className="text-white/50 text-xs">Campanii PPC</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'ROAS', value: '4.5x' },
            { label: 'CTR', value: '8.2%' },
            { label: 'CPA', value: '-35%' },
            { label: 'Conv.', value: '+120%' },
          ].map((s, i) => (
            <div key={s.label} className="bg-white/10 rounded-lg p-2 text-center" style={{ animation: `float ${3 + i * 0.2}s ease-in-out infinite ${i * 0.2}s` }}>
              <p className="text-white font-bold text-sm">{s.value}</p>
              <p className="text-white/50 text-[10px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Mentenanta page visual
function MentenantaVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative bg-white/10 border border-white/20 rounded-2xl p-5 w-64 backdrop-blur-sm animate-[float_4s_ease-in-out_infinite]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center">
            <Wrench size={18} className="text-amber-300" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Mentenanță Web</p>
            <p className="text-white/50 text-xs">Suport 24/7</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { icon: CheckCircle2, text: 'Backup zilnic', color: 'text-emerald-400' },
            { icon: CheckCircle2, text: 'Securitate SSL', color: 'text-blue-400' },
            { icon: CheckCircle2, text: 'Uptime 99.9%', color: 'text-purple-400' },
          ].map((item, i) => (
            <div key={item.text} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2" style={{ animation: `float ${3 + i * 0.3}s ease-in-out infinite ${i * 0.3}s` }}>
              <item.icon size={12} className={item.color} />
              <span className="text-white/80 text-xs">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

type PageType = 'despre' | 'servicii' | 'portofoliu' | 'contact' | 'web-design' | 'magazin-online' | 'optimizare-seo' | 'google-ads' | 'mentenanta-web'

export function PageHeroVisual({ page }: { page: PageType }) {
  return (
    <div className="hidden lg:flex relative w-full h-72 items-center justify-center">
      {page === 'despre' && <DespreVisual />}
      {page === 'servicii' && <ServiciiVisual />}
      {page === 'portofoliu' && <PortofoliuVisual />}
      {page === 'contact' && <ContactVisual />}
      {page === 'web-design' && <WebDesignVisual />}
      {page === 'magazin-online' && <MagazinOnlineVisual />}
      {page === 'optimizare-seo' && <SeoVisual />}
      {page === 'google-ads' && <GoogleAdsVisual />}
      {page === 'mentenanta-web' && <MentenantaVisual />}
    </div>
  )
}

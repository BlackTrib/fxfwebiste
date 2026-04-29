import Link from 'next/link'
import { ArrowRight, Star, Zap, Shield, Gauge, CheckCircle2, ChevronDown } from 'lucide-react'

const benefits = [
  'Consultanță gratuită',
  'Tehnologii moderne',
  'Suport tehnic 24/7',
  'Garanția proiectului',
]

// Web development themed floating elements with animations
const floatingElements = [
  { symbol: '</>', x: '8%', y: '15%', size: 'text-2xl', anim: 'animate-float-slow', delay: '0s', color: 'text-cyber/20' },
  { symbol: '{ }', x: '85%', y: '20%', size: 'text-3xl', anim: 'animate-float-medium', delay: '0.5s', color: 'text-white/15' },
  { symbol: '<div>', x: '12%', y: '70%', size: 'text-lg', anim: 'animate-float-fast', delay: '1s', color: 'text-accent-brand/15' },
  { symbol: 'const', x: '78%', y: '75%', size: 'text-base', anim: 'animate-float-slow', delay: '0.3s', color: 'text-cyber/15' },
  { symbol: '=>', x: '92%', y: '45%', size: 'text-xl', anim: 'animate-float-medium', delay: '0.8s', color: 'text-white/12' },
  { symbol: '[ ]', x: '5%', y: '45%', size: 'text-xl', anim: 'animate-float-fast', delay: '0.2s', color: 'text-accent-brand/12' },
  { symbol: '</html>', x: '88%', y: '85%', size: 'text-sm', anim: 'animate-float-slow', delay: '1.2s', color: 'text-white/10' },
  { symbol: '( )', x: '15%', y: '88%', size: 'text-lg', anim: 'animate-float-medium', delay: '0.6s', color: 'text-cyber/12' },
  { symbol: '/*', x: '75%', y: '12%', size: 'text-base', anim: 'animate-float-fast', delay: '0.4s', color: 'text-white/15' },
  { symbol: '*/', x: '82%', y: '55%', size: 'text-base', anim: 'animate-float-slow', delay: '0.9s', color: 'text-accent-brand/10' },
  { symbol: '<>', x: '25%', y: '25%', size: 'text-lg', anim: 'animate-float-medium', delay: '0.7s', color: 'text-cyber/15' },
  { symbol: ';;', x: '70%', y: '35%', size: 'text-xl', anim: 'animate-float-fast', delay: '0.1s', color: 'text-white/12' },
]

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-primary overflow-hidden">
      {/* Floating code elements with animations - hidden on mobile to avoid overlap */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        {floatingElements.map((el, i) => (
          <div
            key={i}
            className={`absolute font-mono font-bold ${el.size} ${el.color} ${el.anim} select-none drop-shadow-sm`}
            style={{
              left: el.x,
              top: el.y,
              animationDelay: el.delay,
            }}
          >
            {el.symbol}
          </div>
        ))}
      </div>

      {/* Static gradient mesh background - no animation for better LCP */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.4) 0%, transparent 70%)',
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)',
            right: '5%',
            bottom: '10%',
          }}
        />
      </div>

      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 pt-24 pb-14 lg:pb-16 lg:pt-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8 items-center">
          {/* Content - 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-white/60 text-xs font-medium">Agenție web development high-tech</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
              Servicii profesionale de{' '}
              <span style={{ color: 'oklch(0.72 0.14 70)' }}>web design</span>{' '}
              și{' '}
              <span style={{ color: 'oklch(0.72 0.14 70)' }}>dezvoltare web</span>{' '}
              pentru afaceri din Romania
            </h1>

            {/* Description - more SEO content */}
            <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              FXF Web Solution este o agenție de web development cu sediul în București, România, 
              specializată în crearea de site-uri profesionale, magazine online și aplicații web 
              personalizate. Oferim soluții digitale complete: de la web design modern și 
              responsive până la optimizare SEO și campanii Google Ads cu ROI măsurabil.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { icon: Zap, label: 'Site-uri rapide' },
                { icon: Shield, label: 'Securitate avansată' },
                { icon: Gauge, label: 'Optimizare SEO' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-1.5 text-white/60 text-sm">
                  <f.icon size={14} className="text-cyber" />
                  {f.label}
                </div>
              ))}
            </div>

            {/* Benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle2 size={14} className="text-green-400 shrink-0" />
                  {b}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-cyber hover:text-primary transition-colors"
              >
                Solicită ofertă gratuită
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/portofoliu"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors"
              >
                Vezi portofoliu
              </Link>
            </div>
          </div>

          {/* Code Window - 2 cols */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative animate-float-slow">
              {/* Glow */}
              <div className="absolute -inset-4 bg-accent-brand/10 rounded-2xl blur-2xl" />
              
              <div className="relative bg-[#0d1117] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-white/30 text-[10px] font-mono ml-2">fxf-project.tsx</span>
                </div>

                {/* Code */}
                <div className="p-4 font-mono text-xs leading-relaxed">
                  <div><span className="text-[#ff7b72]">const</span> <span className="text-[#d2a8ff]">website</span> <span className="text-white/50">=</span> <span className="text-[#ff7b72]">await</span> <span className="text-[#79c0ff]">FXF</span><span className="text-white/50">.</span><span className="text-[#d2a8ff]">build</span><span className="text-white/50">{'({'}</span></div>
                  <div className="pl-4"><span className="text-[#79c0ff]">type</span><span className="text-white/50">:</span> <span className="text-[#a5d6ff]">&apos;professional&apos;</span><span className="text-white/50">,</span></div>
                  <div className="pl-4"><span className="text-[#79c0ff]">design</span><span className="text-white/50">:</span> <span className="text-[#a5d6ff]">&apos;custom&apos;</span><span className="text-white/50">,</span></div>
                  <div className="pl-4"><span className="text-[#79c0ff]">responsive</span><span className="text-white/50">:</span> <span className="text-[#ff7b72]">true</span><span className="text-white/50">,</span></div>
                  <div className="pl-4"><span className="text-[#79c0ff]">seo</span><span className="text-white/50">:</span> <span className="text-[#a5d6ff]">&apos;optimized&apos;</span><span className="text-white/50">,</span></div>
                  <div className="pl-4"><span className="text-[#79c0ff]">performance</span><span className="text-white/50">:</span> <span className="text-[#a5d6ff]">&apos;fast&apos;</span><span className="text-white/50">,</span></div>
                  <div className="pl-4"><span className="text-[#79c0ff]">support</span><span className="text-white/50">:</span> <span className="text-[#a5d6ff]">&apos;24/7&apos;</span></div>
                  <div><span className="text-white/50">{'}'});</span></div>
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <span className="text-[#8b949e]">// Rezultate garantate</span>
                  </div>
                  <div className="text-[#3fb950]">✓ Lighthouse Score: 98/100</div>
                  <div className="text-[#3fb950]">✓ Mobile-First Design</div>
                  <div className="text-[#3fb950]">✓ SEO Optimizat</div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl px-3 py-2 flex items-center gap-2 animate-float-medium" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 rounded-md bg-green-50 flex items-center justify-center text-green-600 text-sm font-bold">
                  +48%
                </div>
                <div className="text-[11px]">
                  <p className="font-semibold text-foreground">Conversii medii</p>
                  <p className="text-muted-foreground">pentru clienții noștri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span className="text-white/30 text-[10px] font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
        </div>
        <ChevronDown size={14} className="text-white/30 animate-bounce" style={{ animationDelay: '0.15s' }} />
      </div>
    </section>
  )
}

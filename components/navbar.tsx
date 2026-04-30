'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Monitor, ShoppingCart, Wrench, Search, BarChart2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  { href: '/servicii/web-design', label: 'Web Design', icon: Monitor },
  { href: '/servicii/magazin-online', label: 'E-Commerce', icon: ShoppingCart },
  { href: '/servicii/mentenanta-web', label: 'Mentenanță', icon: Wrench },
  { href: '/servicii/optimizare-seo', label: 'SEO', icon: Search },
  { href: '/servicii/google-ads', label: 'Google Ads', icon: BarChart2 },
]

const links = [
  { href: '/', label: 'Acasă' },
  { href: '/despre', label: 'Despre' },
  { href: '/servicii', label: 'Servicii', dropdown: true },
  { href: '/portofoliu', label: 'Portofoliu' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setDropdown(false)
  }, [pathname])

  const light = scrolled || !isHome

  return (
    <header className={cn(
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled ? 'py-2' : 'py-3'
    )}>
      <div className={cn(
        'absolute inset-0 transition-all duration-300',
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm' 
          : isHome ? 'bg-transparent' : 'bg-white/80 backdrop-blur-sm'
      )} />

      <div className="max-w-6xl mx-auto px-5 relative">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className={cn(
              'w-9 h-9 rounded-lg flex items-center justify-center font-mono text-sm font-bold transition-all',
              light 
                ? 'bg-primary text-white' 
                : 'bg-white/10 text-white border border-white/20'
            )}>
              {'</>'}
            </div>
            <div className="flex flex-col leading-none">
              <span className={cn(
                'font-display font-bold text-base tracking-wide transition-colors',
                light ? 'text-primary' : 'text-white'
              )}>FXF <span className="ml-0.5">WEB</span></span>
              <span className={cn(
                'text-[8px] font-medium tracking-[0.48em] uppercase transition-colors',
                light ? 'text-muted-foreground' : 'text-white/50'
              )}>SOLUTION</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              link.dropdown ? (
                <div 
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <button className={cn(
                    'px-3 py-1.5 rounded-md text-[13px] font-medium flex items-center gap-1 transition-colors',
                    pathname.startsWith('/servicii')
                      ? light ? 'text-primary bg-white shadow-sm border border-border/50' : 'text-white bg-white/20'
                      : light ? 'text-foreground/70 hover:text-foreground' : 'text-white/70 hover:text-white'
                  )}>
                    {link.label}
                    <ChevronDown size={12} className={cn('transition-transform', dropdown && 'rotate-180')} />
                  </button>
                  
                  {/* Dropdown */}
                  <div className={cn(
                    'absolute top-full left-0 pt-2 transition-all duration-200',
                    dropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  )}>
                    <div className="bg-white rounded-lg shadow-xl border border-border/50 p-1.5 min-w-[180px]">
                      {services.map((s) => {
                        const Icon = s.icon
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] text-foreground/80 hover:bg-secondary hover:text-primary transition-colors"
                          >
                            <Icon size={14} className="text-muted-foreground" />
                            {s.label}
                          </Link>
                        )
                      })}
                      <div className="border-t border-border/50 mt-1 pt-1">
                        <Link
                          href="/servicii"
                          className="flex items-center px-3 py-2 rounded-md text-[13px] text-primary font-medium hover:bg-primary/5 transition-colors"
                        >
                          Toate serviciile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors',
                    pathname === link.href
                      ? 'text-primary bg-white shadow-sm border border-border/50'
                      : light ? 'text-foreground/70 hover:text-foreground' : 'text-white/70 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all',
                light
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-white text-primary hover:bg-white/90'
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Solicită ofertă
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              light ? 'text-foreground hover:bg-secondary' : 'text-white hover:bg-white/10'
            )}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'lg:hidden fixed inset-x-0 transition-all duration-300',
        open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
      )} style={{ top: scrolled ? '56px' : '64px' }}>
        <div className="bg-white border-b border-border/50 shadow-lg p-2">
          {links.map((link) =>
            link.dropdown ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileServices(!mobileServices)}
                  className={cn(
                    'w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    pathname.startsWith('/servicii')
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground/70 hover:bg-secondary'
                  )}
                >
                  {link.label}
                  <ChevronDown size={14} className={cn('transition-transform', mobileServices && 'rotate-180')} />
                </button>
                <div className={cn(
                  'overflow-hidden transition-all duration-300',
                  mobileServices ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}>
                  <div className="ml-3 mt-1 border-l-2 border-border pl-3 space-y-0.5">
                    {services.map((s) => {
                      const Icon = s.icon
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          className={cn(
                            'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors',
                            pathname === s.href
                              ? 'text-primary font-semibold bg-primary/5'
                              : 'text-foreground/70 hover:bg-secondary hover:text-primary'
                          )}
                        >
                          <Icon size={14} className="text-muted-foreground" />
                          {s.label}
                        </Link>
                      )
                    })}
                    <Link
                      href="/servicii"
                      className="flex items-center px-3 py-2 rounded-lg text-sm text-primary font-medium hover:bg-primary/5 transition-colors"
                    >
                      Toate serviciile
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground/70 hover:bg-secondary'
                )}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="border-t border-border/50 mt-2 pt-2">
            <Link
              href="/contact"
              className="block px-4 py-2.5 rounded-lg text-sm font-semibold bg-primary text-white text-center"
            >
              Solicită ofertă
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

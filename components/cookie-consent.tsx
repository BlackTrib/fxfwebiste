'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie, ShieldCheck, BarChart2, Settings2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type ConsentState = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (!stored) {
      // Small delay so it doesn't pop immediately on load
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const acceptAll = () => {
    const full: ConsentState = { necessary: true, analytics: true, marketing: true }
    localStorage.setItem('cookie-consent', JSON.stringify(full))
    setVisible(false)
  }

  const acceptNecessary = () => {
    const minimal: ConsentState = { necessary: true, analytics: false, marketing: false }
    localStorage.setItem('cookie-consent', JSON.stringify(minimal))
    setVisible(false)
  }

  const saveCustom = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 pointer-events-none">
      <div
        className={cn(
          'pointer-events-auto max-w-2xl mx-auto bg-primary text-primary-foreground rounded-2xl shadow-2xl border border-white/10',
          'animate-in slide-in-from-bottom-4 fade-in duration-500'
        )}
      >
        {/* Main content */}
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Cookie size={18} className="text-cyber" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base">Setări cookie-uri</h3>
                <p className="text-white/50 text-xs">Conform GDPR & legislație RO</p>
              </div>
            </div>
            <button
              onClick={acceptNecessary}
              className="text-white/40 hover:text-white transition-colors p-1 shrink-0"
              aria-label="Închide"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Folosim cookie-uri pentru a îmbunătăți experiența pe site, a analiza traficul și a personaliza conținutul.
            Poți alege ce categorii accepți sau le poți accepta pe toate.{' '}
            <Link href="/politica-cookies" className="text-cyber underline underline-offset-2 hover:text-white transition-colors">
              Politica cookies
            </Link>
          </p>

          {/* Details toggle */}
          {showDetails && (
            <div className="space-y-2.5 mb-4 border-t border-white/10 pt-4">
              {/* Necessary */}
              <div className="flex items-center justify-between gap-3 bg-white/5 rounded-lg px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={15} className="text-cyber shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Necesare</p>
                    <p className="text-xs text-white/40">Funcționare de bază a site-ului</p>
                  </div>
                </div>
                <div className="w-9 h-5 bg-cyber/80 rounded-full flex items-center justify-end px-0.5 cursor-not-allowed opacity-60">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between gap-3 bg-white/5 rounded-lg px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <BarChart2 size={15} className="text-accent-brand shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Analitice</p>
                    <p className="text-xs text-white/40">Google Analytics, statistici vizitatori</p>
                  </div>
                </div>
                <button
                  onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                  className={cn(
                    'w-9 h-5 rounded-full flex items-center px-0.5 transition-colors duration-200',
                    consent.analytics ? 'bg-cyber/80 justify-end' : 'bg-white/20 justify-start'
                  )}
                  aria-label="Toggle analytics"
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between gap-3 bg-white/5 rounded-lg px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <Settings2 size={15} className="text-accent-brand shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Marketing</p>
                    <p className="text-xs text-white/40">Meta Pixel, remarketing, reclame personalizate</p>
                  </div>
                </div>
                <button
                  onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                  className={cn(
                    'w-9 h-5 rounded-full flex items-center px-0.5 transition-colors duration-200',
                    consent.marketing ? 'bg-cyber/80 justify-end' : 'bg-white/20 justify-start'
                  )}
                  aria-label="Toggle marketing"
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </button>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={acceptAll}
              className="bg-cyber text-primary font-semibold text-sm px-4 py-2 rounded-lg hover:bg-cyber/90 transition-colors"
            >
              Accepta toate
            </button>
            <button
              onClick={acceptNecessary}
              className="bg-white/10 text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-white/15 transition-colors"
            >
              Doar necesare
            </button>
            {showDetails ? (
              <button
                onClick={saveCustom}
                className="bg-white/10 text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-white/15 transition-colors"
              >
                Salveaza preferintele
              </button>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                className="text-white/50 hover:text-white text-sm underline underline-offset-2 transition-colors px-1"
              >
                Personalizeaza
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

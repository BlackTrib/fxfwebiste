'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Inapoi sus"
      className={cn(
        'fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary border border-white/10 text-white shadow-lg',
        'flex items-center justify-center',
        'hover:bg-accent-brand hover:scale-110 hover:shadow-accent-brand/30 hover:shadow-xl transition-all duration-300',
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <ChevronUp size={18} strokeWidth={2.5} />
    </button>
  )
}

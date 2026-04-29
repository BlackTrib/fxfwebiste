'use client'

import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right' | 'scale'
  delay?: number
  duration?: number
  threshold?: number
  as?: keyof JSX.IntrinsicElements
}

export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  as: Component = 'div',
}: RevealProps) {
  const { ref, isRevealed } = useReveal({ threshold })

  const directionClass = {
    up: 'reveal-up',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[direction]

  return (
    <Component
      ref={ref as any}
      className={cn('reveal', directionClass, isRevealed && 'revealed', className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </Component>
  )
}

// Wrapper for staggered children animations
interface RevealGroupProps {
  children: ReactNode
  className?: string
  stagger?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
}

export function RevealGroup({
  children,
  className,
  stagger = 100,
  direction = 'up',
}: RevealGroupProps) {
  const { ref, isRevealed } = useReveal({ threshold: 0.05 })

  return (
    <div ref={ref} className={cn('reveal-stagger', className)}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              className={cn('reveal', `reveal-${direction}`, isRevealed && 'revealed')}
              style={{ animationDelay: `${i * stagger}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}

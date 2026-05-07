'use client'

import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll'

interface RevealProps {
  children: React.ReactNode
  className?: string
}

export function RevealOnScroll({ children, className = '' }: RevealProps) {
  const ref = useRevealOnScroll()

  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`}>
      {children}
    </div>
  )
}

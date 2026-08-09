import type { ReactNode } from 'react'
import { FadeIn } from './Reveal'
import { cn } from '@/lib/utils'

export default function SectionHeader({
  eyebrow,
  title,
  desc,
  align = 'center',
}: {
  eyebrow: string
  title: ReactNode
  desc?: string
  align?: 'center' | 'left'
}) {
  return (
    <FadeIn
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl',
      )}
    >
      <p className="text-xs font-medium tracking-[0.25em] text-[#A05B38] mb-4">{eyebrow}</p>
      <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-snug font-bold text-[#3A322A] tracking-tight">
        {title}
      </h2>
      {desc && <p className="mt-4 text-[#7C7062] leading-relaxed">{desc}</p>}
    </FadeIn>
  )
}

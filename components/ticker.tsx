import { Asterisk } from 'lucide-react'
import { categories } from '@/lib/categories'

export function Ticker() {
  const items = [...categories, ...categories]

  return (
    <div
      className="overflow-hidden border-y-2 border-ink bg-ink py-3 text-background"
      aria-hidden="true"
    >
      <div className="ticker-track flex w-max items-center gap-6 whitespace-nowrap">
        {items.map((c, i) => (
          <span key={`${c.slug}-${i}`} className="flex items-center gap-6">
            <span className="font-display text-lg font-bold uppercase tracking-wide">{c.name}</span>
            <Asterisk className="size-5 text-sun" />
          </span>
        ))}
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Lock, ShieldBan, Sparkles } from 'lucide-react'

const pill =
  'inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-card px-3 py-1.5 font-semibold text-ink shadow-pop-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-14">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-mint px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
        <Sparkles className="size-3.5" aria-hidden="true" />
        The ultimate list of alternatives
      </p>
      <h1 className="max-w-4xl text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
        Skip the hunt. Find the <span className="marker">best free</span> alternatives.
      </h1>
      <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
        Hand-picked lists across movies, anime, manga, sports, games, music and more. Pick a
        category and dive in.
      </p>

      <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
        <span>Browse safe, use</span>
        <Link href="/adblockers-list/" className={pill}>
          <ShieldBan className="size-4 text-coral" aria-hidden="true" />
          AdBlock
        </Link>
        <span className="inline-flex items-center gap-x-3">
          <span>and</span>
          <Link href="/list-with-best-vpn-service-2025/" className={pill}>
            <Lock className="size-4 text-coral" aria-hidden="true" />
            VPN
          </Link>
          <span>if needed.</span>
        </span>
      </p>
    </section>
  )
}

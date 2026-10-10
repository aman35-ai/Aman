import Link from 'next/link'
import { Anchor, ArchiveRestore } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
      <Link
        href="/"
        className="group flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        aria-label="YarrList home"
      >
        <span className="flex size-10 items-center justify-center rounded-xl border-2 border-ink bg-coral text-ink shadow-pop-sm transition-transform group-hover:-rotate-6">
          <Anchor className="size-5" aria-hidden="true" />
        </span>
        <span className="font-display text-2xl font-extrabold tracking-tight">YarrList</span>
      </Link>

      <a
        href="https://topweblist.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-2 text-sm font-semibold shadow-pop-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-sun hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        <ArchiveRestore className="size-4" aria-hidden="true" />
        Backups
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </header>
  )
}

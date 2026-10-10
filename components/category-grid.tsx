'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Search } from 'lucide-react'
import { categories, type Category } from '@/lib/categories'
import { cn } from '@/lib/utils'

const tints = ['bg-sun', 'bg-sky', 'bg-mint', 'bg-lilac', 'bg-coral']

function CategoryCard({ category, index }: { category: Category; index: number }) {
  const Icon = category.icon
  const tint = tints[index % tints.length]

  return (
    <li>
      <Link
        href={category.href}
        className="group relative flex h-full min-h-40 flex-col justify-between rounded-2xl border-2 border-ink bg-card p-5 shadow-pop transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <div className="flex items-start justify-between">
          <span
            className={cn(
              'flex size-12 items-center justify-center rounded-xl border-2 border-ink transition-transform group-hover:-rotate-6',
              tint,
            )}
          >
            <Icon className="size-6" aria-hidden="true" />
          </span>
          <span
            className="flex size-8 items-center justify-center rounded-full border-2 border-ink bg-background transition-colors group-hover:bg-ink group-hover:text-background"
            aria-hidden="true"
          >
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <div className="mt-6">
          <h3 className="font-display text-2xl font-extrabold tracking-tight">{category.name}</h3>
          <p className="mt-1 text-sm leading-snug text-muted">{category.blurb}</p>
        </div>
      </Link>
    </li>
  )
}

export function CategoryGrid() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const matches = (c: Category) =>
    !q || c.name.toLowerCase().includes(q) || c.blurb.toLowerCase().includes(q)

  const browse = categories.filter((c) => c.group === 'browse' && matches(c))
  const safety = categories.filter((c) => c.group === 'safety' && matches(c))
  const empty = browse.length + safety.length === 0

  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20"
      aria-labelledby="categories-heading"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="categories-heading"
          className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl"
        >
          Pick a category
        </h2>
        <div className="relative w-full sm:w-72">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter categories"
            aria-label="Filter categories"
            className="h-12 w-full rounded-full border-2 border-ink bg-card pl-10 pr-4 text-sm font-medium shadow-pop-sm placeholder:text-muted focus:bg-sun/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          />
        </div>
      </div>

      {browse.length > 0 && (
        <ul className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {browse.map((c) => (
            <CategoryCard key={c.slug} category={c} index={categories.indexOf(c)} />
          ))}
        </ul>
      )}

      {safety.length > 0 && (
        <div className="mt-14">
          <h3 className="mb-5 inline-block rounded-full border-2 border-ink bg-coral px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
            Stay protected
          </h3>
          <ul className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {safety.map((c) => (
              <CategoryCard key={c.slug} category={c} index={categories.indexOf(c)} />
            ))}
          </ul>
        </div>
      )}

      {empty && (
        <p
          role="status"
          className="rounded-2xl border-2 border-dashed border-ink p-10 text-center text-muted"
        >
          No categories match &ldquo;{query}&rdquo;.
        </p>
      )}
    </section>
  )
}

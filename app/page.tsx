import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { CategoryGrid } from '@/components/category-grid'
import { Ticker } from '@/components/ticker'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://yarrlists.net/#website',
      name: 'YarrList',
      url: 'https://yarrlists.net/',
      description:
        'Explore the best alternatives online across movies, anime, manga, torrents, games, music, ebooks, and more.',
      inLanguage: 'en',
    },
    {
      '@type': 'CollectionPage',
      name: 'YarrList - The Ultimate List of Alternatives',
      url: 'https://yarrlists.net/',
      isPartOf: { '@id': 'https://yarrlists.net/#website' },
    },
  ],
}

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem]" aria-hidden="true" />
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <CategoryGrid />
      </main>
      <footer className="border-t-2 border-ink">
        <p className="mx-auto max-w-6xl px-5 py-8 text-sm font-medium sm:px-8">
          YarrList &middot; Explore the best free alternatives online.
        </p>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

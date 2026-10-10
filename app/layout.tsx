import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
})

export const metadata: Metadata = {
  title: 'YarrList - The Ultimate List of Alternatives',
  description:
    'YarrList is the ultimate list of alternatives across movies, anime, manga, live sports, torrents, games, music, ebooks, and more. Explore the best alternatives online.',
  alternates: { canonical: 'https://yarrlists.net/' },
  openGraph: {
    type: 'website',
    siteName: 'YarrList',
    title: 'YarrList - The Ultimate List of Alternatives',
    description:
      'Explore the best alternatives online across movies, anime, manga, torrents, games, music, ebooks, and more.',
    url: 'https://yarrlists.net/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YarrList - The Ultimate List of Alternatives',
    description:
      'Explore the best alternatives online across movies, anime, manga, torrents, games, music, ebooks, and more.',
  },
}

export const viewport: Viewport = {
  themeColor: '#f6f1e7',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${bricolage.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  )
}

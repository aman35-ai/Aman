import {
  Clapperboard,
  Sparkles,
  BookOpen,
  Trophy,
  Tv,
  Magnet,
  Gamepad2,
  Music,
  BookMarked,
  Zap,
  Drama,
  Lock,
  ShieldBan,
  type LucideIcon,
} from 'lucide-react'

export type Category = {
  slug: string
  href: string
  name: string
  blurb: string
  icon: LucideIcon
  group: 'browse' | 'safety'
}

export const categories: Category[] = [
  { slug: 'movies', href: '/movies-and-tv-shows/', name: 'Movies & TV Shows', blurb: 'Films and series, from new releases to classics.', icon: Clapperboard, group: 'browse' },
  { slug: 'anime', href: '/anime-list/', name: 'Anime', blurb: 'Seasonal simulcasts and long-running favorites.', icon: Sparkles, group: 'browse' },
  { slug: 'manga', href: '/manga-list/', name: 'Manga', blurb: 'Read chapters as soon as they land.', icon: BookOpen, group: 'browse' },
  { slug: 'sports', href: '/sports-live-streaming/', name: 'Live Sports', blurb: 'Matches, fights and races as they happen.', icon: Trophy, group: 'browse' },
  { slug: 'live-tv', href: '/live-tv-list/', name: 'Live TV', blurb: 'Channels and broadcasts from around the world.', icon: Tv, group: 'browse' },
  { slug: 'torrents', href: '/torrent-sites-list/', name: 'Torrents', blurb: 'Trackers and indexes worth bookmarking.', icon: Magnet, group: 'browse' },
  { slug: 'games', href: '/games-download-sites/', name: 'Games', blurb: 'PC and console downloads, mods and repacks.', icon: Gamepad2, group: 'browse' },
  { slug: 'music', href: '/music-download-sites-list/', name: 'Music', blurb: 'Albums, singles and rare finds.', icon: Music, group: 'browse' },
  { slug: 'ebooks', href: '/ebooks-list/', name: 'eBooks', blurb: 'Novels, textbooks and audiobooks.', icon: BookMarked, group: 'browse' },
  { slug: 'comics', href: '/comics-list/', name: 'Comics', blurb: 'Superheroes, indies and graphic novels.', icon: Zap, group: 'browse' },
  { slug: 'drama', href: '/asian-drama-list/', name: 'Asian Drama', blurb: 'K, C, J and Thai dramas with subtitles.', icon: Drama, group: 'browse' },
  { slug: 'vpn', href: '/list-with-best-vpn-service-2025/', name: 'VPN', blurb: 'Keep your connection private.', icon: Lock, group: 'safety' },
  { slug: 'adblockers', href: '/adblockers-list/', name: 'AdBlockers', blurb: 'Block pop-ups, trackers and malvertising.', icon: ShieldBan, group: 'safety' },
]

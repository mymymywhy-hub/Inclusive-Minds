import type { Topic } from './types'

export const topics: Topic[] = [
  { slug: 'making-friends', title: 'Making Friends', shortLabel: 'Friends', color: 'var(--brand-primary)', icon: 'friend' },
  { slug: 'sharing', title: 'Sharing & Turn-Taking', shortLabel: 'Sharing', color: 'var(--brand-secondary)', icon: 'share' },
  { slug: 'asking-for-help', title: 'Asking for Help', shortLabel: 'Help', color: 'var(--brand-accent)', icon: 'help' },
  { slug: 'safe-adults', title: 'Safe Adults, Safe Choices', shortLabel: 'Safety', color: '#c0455a', icon: 'safeAdult' },
  { slug: 'road-safety', title: 'Road Safety', shortLabel: 'Road Safety', color: 'var(--brand-sun)', icon: 'crossSafely' },
]

export function getTopic(slug: string) {
  return topics.find((t) => t.slug === slug)
}

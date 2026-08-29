import type { AgeBand, Story, TopicSlug } from './types'

import makingFriends36 from './stories/3-6/making-friends'
import sharing36 from './stories/3-6/sharing'
import askingForHelp36 from './stories/3-6/asking-for-help'
import safeAdults36 from './stories/3-6/safe-adults'
import roadSafety36 from './stories/3-6/road-safety'

import makingFriends69 from './stories/6-9/making-friends'
import sharing69 from './stories/6-9/sharing'
import askingForHelp69 from './stories/6-9/asking-for-help'
import safeAdults69 from './stories/6-9/safe-adults'
import roadSafety69 from './stories/6-9/road-safety'

const registry: Record<AgeBand, Partial<Record<TopicSlug, Story>>> = {
  '3-6': {
    'making-friends': makingFriends36,
    sharing: sharing36,
    'asking-for-help': askingForHelp36,
    'safe-adults': safeAdults36,
    'road-safety': roadSafety36,
  },
  '6-9': {
    'making-friends': makingFriends69,
    sharing: sharing69,
    'asking-for-help': askingForHelp69,
    'safe-adults': safeAdults69,
    'road-safety': roadSafety69,
  },
}

export function getStory(ageBand: AgeBand, slug: TopicSlug): Story | undefined {
  return registry[ageBand]?.[slug]
}

export function hasStory(ageBand: AgeBand, slug: TopicSlug): boolean {
  return Boolean(registry[ageBand]?.[slug])
}

export const ageBands: { value: AgeBand; label: string }[] = [
  { value: '3-6', label: 'Early years (3–6)' },
  { value: '6-9', label: 'Primary years (6–9)' },
]

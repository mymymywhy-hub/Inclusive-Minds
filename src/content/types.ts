import type { SceneSpec } from '../illustrations/Scene'
import type { SymbolKey } from '../illustrations/AacSymbol'

export type AgeBand = '3-6' | '6-9'

export type TopicSlug = 'making-friends' | 'sharing' | 'asking-for-help' | 'safe-adults' | 'road-safety'

export type Discipline = 'Occupational Therapist' | 'Speech-Language Pathologist' | 'Behaviour Therapist' | 'Psychologist'

export interface ClinicianNote {
  discipline: Discipline
  note: string
}

export interface StoryPage {
  text: string
  symbol: { key: SymbolKey; label: string }
  scene: SceneSpec
  clinicianNote?: ClinicianNote
}

export interface Topic {
  slug: TopicSlug
  title: string
  shortLabel: string
  color: string
  icon: SymbolKey
}

export interface Story {
  slug: TopicSlug
  ageBand: AgeBand
  title: string
  subtitle: string
  ndisGoalTags: string[]
  narratorName: string
  howToUse: string[]
  pages: StoryPage[]
}

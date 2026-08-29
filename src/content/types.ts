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
  /** Procedural placeholder art, used whenever `illustration` isn't set. */
  scene: SceneSpec
  /**
   * Path (under /public) to real commissioned artwork for this page, e.g.
   * "/illustrations/3-6/making-friends/01.png". Once set, it replaces the
   * procedural `scene` entirely for this page — drop the file in and point
   * this at it, nothing else needs to change.
   */
  illustration?: string
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

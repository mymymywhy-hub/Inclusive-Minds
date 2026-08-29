import type { CharacterSpec } from '../illustrations/Character'

/**
 * A recurring cast reused across every story and every age band, on purpose:
 * Inclusive Minds' guidance is that disabled/diverse characters should turn up
 * again and again, living ordinary lives, rather than one "disability of the
 * week" character per book. Every child here gets to be the confident hero of
 * their own story at least once across the collection, not just the child who
 * needs help.
 */

export const leo = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'Leo',
  skinTone: 'fair',
  hair: 'short',
  hairColor: '#5a3d2b',
  top: '#2f8f8a',
  bottom: '#3a3a42',
  accessory: 'hearingAid',
  expression: 'happy',
  pose: 'neutral',
  ...overrides,
})

export const priya = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'Priya',
  skinTone: 'brown',
  hair: 'braids',
  hairColor: '#1e1410',
  top: '#f2994a',
  bottom: '#8e6fd6',
  mobilityAid: 'wheelchair',
  expression: 'happy',
  pose: 'neutral',
  ...overrides,
})

export const jamal = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'Jamal',
  skinTone: 'deepBrown',
  hair: 'buzz',
  hairColor: '#1a1210',
  top: '#8e6fd6',
  bottom: '#2b2b33',
  device: 'aac',
  expression: 'calm',
  pose: 'neutral',
  ...overrides,
})

export const aisha = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'Aisha',
  skinTone: 'tan',
  hair: 'hijab',
  hairColor: '#c0455a',
  top: '#f6c445',
  bottom: '#2f8f8a',
  accessory: 'glasses',
  expression: 'happy',
  pose: 'neutral',
  ...overrides,
})

export const noah = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'Noah',
  skinTone: 'porcelain',
  hair: 'curly',
  hairColor: '#b5651d',
  top: '#f2994a',
  bottom: '#2f8f8a',
  device: 'earDefenders',
  expression: 'calm',
  pose: 'neutral',
  ...overrides,
})

export const zara = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'Zara',
  skinTone: 'deepBrown',
  hair: 'locs',
  hairColor: '#1a1210',
  top: '#c0455a',
  bottom: '#f6c445',
  expression: 'happy',
  pose: 'neutral',
  ...overrides,
})

export const sam = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'Sam',
  skinTone: 'fair',
  hair: 'long',
  hairColor: '#f3d16b',
  top: '#8e6fd6',
  bottom: '#f2994a',
  mobilityAid: 'legBrace',
  expression: 'happy',
  pose: 'neutral',
  ...overrides,
})

export const ben = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'Ben',
  skinTone: 'tan',
  hair: 'bun',
  hairColor: '#2a2118',
  top: '#2f8f8a',
  bottom: '#f6c445',
  expression: 'happy',
  pose: 'neutral',
  ...overrides,
})

export const missKate = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'Miss Kate, the occupational therapist',
  skinTone: 'porcelain',
  hair: 'bun',
  hairColor: '#3a2a1a',
  top: '#2f8f8a',
  bottom: '#2b2b33',
  accessory: 'glasses',
  expression: 'calm',
  pose: 'neutral',
  ...overrides,
})

export const dad = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'Dad',
  skinTone: 'brown',
  hair: 'short',
  hairColor: '#1a1210',
  top: '#3a3a42',
  bottom: '#5c6570',
  expression: 'calm',
  pose: 'neutral',
  ...overrides,
})

export const nan = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'Nan',
  skinTone: 'fair',
  hair: 'bun',
  hairColor: '#d8d8d8',
  top: '#f2994a',
  bottom: '#8e6fd6',
  accessory: 'glasses',
  expression: 'calm',
  pose: 'neutral',
  ...overrides,
})

export const crossingGuard = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'the crossing supervisor',
  skinTone: 'deepBrown',
  hair: 'short',
  hairColor: '#1a1210',
  top: '#f6c445',
  bottom: '#2b2b33',
  expression: 'happy',
  pose: 'neutral',
  ...overrides,
})

export const stranger = (overrides: Partial<CharacterSpec> = {}): CharacterSpec => ({
  name: 'someone I do not know',
  skinTone: 'fair',
  hair: 'short',
  hairColor: '#4a4a52',
  top: '#5c6570',
  bottom: '#3a3a42',
  expression: 'calm',
  pose: 'neutral',
  ...overrides,
})

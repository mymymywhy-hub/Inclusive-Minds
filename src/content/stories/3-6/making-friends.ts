import type { Story } from '../../types'
import { leo, priya, zara, ben, jamal, aisha } from '../../cast'

const story: Story = {
  slug: 'making-friends',
  ageBand: '3-6',
  title: 'Leo Makes a Friend',
  subtitle: 'A social story about noticing others, asking to play, and trying again',
  ndisGoalTags: ['Improved Relationships', 'Increased Social & Community Participation'],
  narratorName: 'Leo',
  howToUse: [
    'Read this together before a playdate, playgroup, or the start of a new activity.',
    'Pause on the feelings pages — name the feeling out loud and let your child point to how they feel today.',
    'Swap in your own child’s name, and the names of real friends, siblings, or cousins, if that helps it land.',
    'This mirrors goals often written into NDIS plans under Improved Relationships and Increased Social & Community Participation — it pairs well with what a speech pathologist or OT is already practising in sessions.',
  ],
  pages: [
    {
      text: 'My name is Leo. This is my friend-making story.',
      symbol: { key: 'friend', label: 'Friend' },
      scene: { setting: 'park', characters: [leo({ pose: 'wave' })], caption: 'Leo waving hello' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Starting with "this is MY story" puts the child in the hero role from page one — a strengths-based framing shown to support self-efficacy in social-skills programs.',
      },
    },
    {
      text: 'At the park, I see other children playing. Some children I know. Some children are new to me.',
      symbol: { key: 'look', label: 'Look' },
      scene: { setting: 'park', characters: [priya({ pose: 'neutral' }), zara({ pose: 'wave' }), ben({ pose: 'neutral' })], caption: 'Children playing at the park' },
      clinicianNote: {
        discipline: 'Occupational Therapist',
        note: 'Noticing peers and pausing before joining is a real social-observation skill, often built step-by-step in OT-led play groups before any approach is expected.',
      },
    },
    {
      text: 'When I want to play with someone, I can feel excited. Sometimes I feel a little nervous too. Both feelings are okay.',
      symbol: { key: 'worried', label: 'Nervous' },
      scene: { setting: 'park', characters: [leo({ expression: 'worried' })], caption: 'Leo feeling a mix of excited and nervous' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Naming and normalising mixed feelings before a social task reduces anxiety and helps regulate the nervous system enough to try the next step.',
      },
    },
    {
      text: 'I can walk over, take a breath, and say, "Hi, I’m Leo. Can I play too?"',
      symbol: { key: 'question', label: 'Ask' },
      scene: { setting: 'park', characters: [leo({ pose: 'pointForward' }), zara({ expression: 'happy' })], caption: 'Leo asking to join' },
      clinicianNote: {
        discipline: 'Speech-Language Pathologist',
        note: 'A short, predictable script lowers the language load of starting a conversation — a technique used often in pragmatic-language and social-communication therapy.',
      },
    },
    {
      text: 'Some children talk with words. Some use a tablet or signs to talk. I can watch and wait for their answer, however they say it.',
      symbol: { key: 'listen', label: 'Wait & listen' },
      scene: { setting: 'park', characters: [jamal({ pose: 'neutral' }), leo({ pose: 'neutral' })], caption: 'Leo waiting for Jamal to answer on his talker' },
      clinicianNote: {
        discipline: 'Speech-Language Pathologist',
        note: 'Modelling patience with AAC users teaches every reader to be a good communication partner, not only a good talker.',
      },
    },
    {
      text: 'Sometimes someone says, "Yes, let’s play!" That feels great.',
      symbol: { key: 'happy', label: 'Happy' },
      scene: { setting: 'playground', characters: [leo({ pose: 'reachSide', expression: 'happy' }), priya({ pose: 'reachSide', expression: 'happy', flip: true })], caption: 'Leo and Priya playing together' },
    },
    {
      text: 'Sometimes someone says, "Not right now." That is okay too. It is not about me — maybe they want to play alone today.',
      symbol: { key: 'noThankYou', label: 'Not now' },
      scene: { setting: 'park', characters: [leo({ expression: 'calm' }), ben({ pose: 'neutral', expression: 'calm' })], caption: 'Leo hearing "not right now"' },
      clinicianNote: {
        discipline: 'Behaviour Therapist',
        note: 'Offering a calm, non-blaming reason for "no" helps prevent a rejection spiral, a reframe used often in social-skills coaching to build resilience.',
      },
    },
    {
      text: 'If that happens, I can ask someone else, or play nearby until I feel ready to try again.',
      symbol: { key: 'choice', label: 'Choice' },
      scene: { setting: 'park', characters: [leo({ pose: 'neutral' }), aisha({ pose: 'wave' })], caption: 'Leo choosing what to try next' },
      clinicianNote: {
        discipline: 'Occupational Therapist',
        note: 'Giving two concrete backup options (instead of "just keep trying") turns a big ask into a manageable choice, reducing decision overload.',
      },
    },
    {
      text: 'Making a new friend can take practice. Every time I try, I am learning. I am a good friend, and I can make friends in my own way.',
      symbol: { key: 'friend', label: 'Friend' },
      scene: { setting: 'playground', characters: [leo({ expression: 'confident' }), priya({}), jamal({}), aisha({})], caption: 'Leo and friends together' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Ending on effort-based praise ("every time I try, I am learning") builds a growth mindset rather than tying self-worth to the outcome.',
      },
    },
  ],
}

export default story

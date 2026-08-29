import type { Story } from '../../types'
import { jamal, missKate, dad } from '../../cast'

const story: Story = {
  slug: 'asking-for-help',
  ageBand: '3-6',
  title: "Jamal's Asking-for-Help Story",
  subtitle: 'A social story about noticing I need help, and that asking for it in any way is strong',
  ndisGoalTags: ['Improved Daily Living Skills', 'Improved Relationships', 'Support Coordination'],
  narratorName: 'Jamal',
  howToUse: [
    'Read this alongside your child\'s actual "ask for help" tools — their AAC device, a help card, a keyword sign, or a phrase they already use.',
    'Page 4 is the heart of it: speaking, signing, and pressing a button on a talker are shown as equally valid ways of asking. Please keep whichever mode is really your child\'s.',
    'This maps onto NDIS goals like Improved Daily Living Skills and Support Coordination — it is a good one to read with a speech pathologist, OT, or key support worker so the exact people and words match your child\'s own support team.',
  ],
  pages: [
    {
      text: 'My name is Jamal. This is my asking-for-help story.',
      symbol: { key: 'help', label: 'Help' },
      scene: { setting: 'therapyRoom', characters: [jamal({ pose: 'wave' })], caption: 'Jamal waving hello' },
    },
    {
      text: 'Sometimes I get stuck, or hurt, or the room feels too loud. My body tells me when I need help.',
      symbol: { key: 'loudNoise', label: 'Too loud' },
      scene: { setting: 'classroom', characters: [jamal({ expression: 'worried' })], caption: 'Jamal noticing the room feels loud' },
      clinicianNote: {
        discipline: 'Occupational Therapist',
        note: 'Naming the body cue first (stuck, hurt, loud) builds interoceptive awareness — noticing a need before it becomes a crisis is the real first skill here.',
      },
    },
    {
      text: 'Asking for help is a strong thing to do, not a hard thing.',
      symbol: { key: 'help', label: 'Strong' },
      scene: { setting: 'therapyRoom', characters: [jamal({ expression: 'confident' })], caption: 'Jamal feeling confident' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Reframing help-seeking as strength (not weakness or failure) removes the shame that often stops children asking at all.',
      },
    },
    {
      text: 'I can ask for help in different ways: I can say it, I can sign it, or I can press a button on my talker.',
      symbol: { key: 'help', label: 'My way' },
      scene: { setting: 'therapyRoom', characters: [jamal({ device: 'aac', pose: 'pointForward' })], caption: 'Jamal using his talker' },
      clinicianNote: {
        discipline: 'Speech-Language Pathologist',
        note: 'All communication modes — spoken words, sign, AAC — count equally as "asking." Multimodal communication is the goal, not speech specifically.',
      },
    },
    {
      text: 'I can ask a safe grown-up, like Dad, my teacher, or Miss Kate, my occupational therapist.',
      symbol: { key: 'safeAdult', label: 'Safe grown-up' },
      scene: { setting: 'therapyRoom', characters: [jamal({}), missKate({ pose: 'reachSide', flip: true })], caption: 'Jamal asking Miss Kate for help' },
    },
    {
      text: 'If I feel too overwhelmed to find words, I can hand someone my help card, or point to the help symbol.',
      symbol: { key: 'choice', label: 'Help card' },
      scene: { setting: 'classroom', characters: [jamal({ expression: 'worried', pose: 'handUp' })], caption: 'Jamal reaching for his help card' },
      clinicianNote: {
        discipline: 'Behaviour Therapist',
        note: 'A low-effort backup (a card, a symbol, a single point) keeps a way to communicate open even when a child is too dysregulated for their usual words or device navigation.',
      },
    },
    {
      text: 'Sometimes I have to wait a little for help. I can take slow breaths while I wait.',
      symbol: { key: 'calmDown', label: 'Wait calmly' },
      scene: { setting: 'classroom', characters: [jamal({ expression: 'calm' })], caption: 'Jamal breathing slowly while he waits' },
    },
    {
      text: 'When someone helps me, I can say "thank you" in my own way.',
      symbol: { key: 'thankYou', label: 'Thank you' },
      scene: { setting: 'therapyRoom', characters: [jamal({ expression: 'happy' }), dad({ pose: 'reachSide', flip: true })], caption: 'Jamal thanking Dad for helping' },
    },
    {
      text: 'Everybody needs help sometimes — grown-ups too. Asking for help, in my own way, is one of my strongest skills.',
      symbol: { key: 'happy', label: 'Proud' },
      scene: { setting: 'therapyRoom', characters: [jamal({ expression: 'confident', device: 'aac' })], caption: 'Jamal feeling proud' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Closing by normalising that everyone — including adults — needs help sometimes removes the last bit of stigma and ends the story on competence, not deficit.',
      },
    },
  ],
}

export default story

import type { Story } from '../../types'
import { sam, missKate } from '../../cast'

const story: Story = {
  slug: 'asking-for-help',
  ageBand: '6-9',
  title: "Sam's Self-Advocacy Story",
  subtitle: 'A social story about noticing what kind of help I need, asking for it clearly, and asking again if I need to',
  ndisGoalTags: ['Improved Daily Living Skills', 'Improved Learning', 'Support Coordination'],
  narratorName: 'Sam',
  howToUse: [
    'This version moves from "asking for help" toward self-advocacy: naming a specific need, not just a general one, which matters more as school and social demands grow.',
    'If your child uses specific accommodations (extra time, a lift instead of stairs, a break card, a scribe), swap the examples on page 5 for their actual ones.',
    'Page 7 is worth rehearsing: it is okay, and often necessary, to go back and clarify with an adult who has misunderstood — that is a life skill, not a complaint.',
  ],
  pages: [
    {
      text: 'My name is Sam. This is my self-advocacy story — my grown-up way of saying "asking for help."',
      symbol: { key: 'help', label: 'Self-advocacy' },
      scene: { setting: 'classroom', characters: [sam({ pose: 'wave' })], caption: 'Sam waving hello' },
    },
    {
      text: 'As I get older, there are more kinds of help I might need — help with schoolwork, help with my body, or help with big feelings.',
      symbol: { key: 'choice', label: 'Different kinds' },
      scene: { setting: 'classroom', characters: [sam({})], caption: 'Sam thinking about different kinds of help' },
    },
    {
      text: 'It is not always easy to tell if I need help. My body might feel tired, a task might feel too big, or I might notice I am getting frustrated fast.',
      symbol: { key: 'worried', label: 'Notice the signs' },
      scene: { setting: 'classroom', characters: [sam({ expression: 'worried' })], caption: 'Sam noticing he needs help' },
      clinicianNote: {
        discipline: 'Occupational Therapist',
        note: 'Naming body-based and task-based cues (tired, too big, frustrated fast) builds the interoceptive awareness that has to come before a child can ask for help at the right moment, not after they have already melted down.',
      },
    },
    {
      text: 'I can ask for help in the way that works for me — saying it out loud, writing a note, using my planner, or asking a friend to help me tell the teacher.',
      symbol: { key: 'help', label: 'My way' },
      scene: { setting: 'classroom', characters: [sam({ pose: 'pointForward' })], caption: 'Sam choosing how to ask' },
      clinicianNote: {
        discipline: 'Speech-Language Pathologist',
        note: 'As literacy and peer relationships develop, the "valid ways to ask" list grows too — a note or a friend relaying a message counts exactly the same as saying it aloud.',
      },
    },
    {
      text: 'Sometimes I need to explain exactly what kind of help I need, like "Can I use the lift today, my leg brace is sore," instead of just saying "I need help." Being specific helps people help me faster.',
      symbol: { key: 'question', label: 'Be specific' },
      scene: { setting: 'classroom', characters: [sam({ pose: 'pointForward' }), missKate({ flip: true })], caption: 'Sam explaining exactly what he needs' },
      clinicianNote: {
        discipline: 'Behaviour Therapist',
        note: 'Specificity training — naming the exact need rather than a vague "help" — shortens the time between asking and getting the right support, which reduces the frustration that builds while waiting.',
      },
    },
    {
      text: 'If the first person I ask cannot help right then, I do not give up — I can ask again, or find another trusted adult, like my SSO, my OT, or the school nurse.',
      symbol: { key: 'safeAdult', label: 'Try again' },
      scene: { setting: 'therapyRoom', characters: [sam({}), missKate({ pose: 'reachSide', flip: true })], caption: 'Sam trying a different trusted adult' },
    },
    {
      text: 'Sometimes grown-ups get it wrong the first time, even when they are trying to help. I can say, "That is not quite what I meant, can we try again?"',
      symbol: { key: 'question', label: 'Clarify' },
      scene: { setting: 'classroom', characters: [sam({ expression: 'confident' })], caption: 'Sam clarifying what he meant' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Giving explicit permission to correct a well-meaning adult builds resilient self-advocacy — the goal is a child who keeps communicating until the need is actually met, not one who accepts the first, imperfect attempt to silence the topic.',
      },
    },
    {
      text: 'Asking for help clearly, and asking again if I need to, is a skill I am building for life — at school, at home, and everywhere in between. I am becoming a strong self-advocate.',
      symbol: { key: 'happy', label: 'Strong advocate' },
      scene: { setting: 'classroom', characters: [sam({ expression: 'confident' })], caption: 'Sam feeling like a strong self-advocate' },
    },
  ],
}

export default story

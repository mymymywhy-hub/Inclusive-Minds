import type { Story } from '../../types'
import { leo, dad, nan } from '../../cast'

const story: Story = {
  slug: 'safe-adults',
  ageBand: '6-9',
  title: "Leo's Safe Adults Story, All Grown Up a Bit",
  subtitle: 'A social story about trusted adults, the check-first rule online and in person, and looking out for a friend',
  ndisGoalTags: ['Improved Daily Living Skills', 'Improved Relationships', 'Improved Health & Wellbeing'],
  narratorName: 'Leo',
  howToUse: [
    'This version extends the check-first and body-safety rules from the early-years story into online spaces, sleepovers, and looking out for a friend — conversations that usually start around this age.',
    'Page 6 covers keeping a friend safe even when asked to keep a secret. It is worth telling your child directly which adult to go to for exactly this situation.',
    'If anything in this story raises a concern about your child or someone they know, follow up gently and involve a GP, psychologist, school counsellor, or, for urgent safety concerns, Kids Helpline (1800 55 1800) or local authorities.',
  ],
  pages: [
    {
      text: "My name is Leo. I'm older now, and my safe adults story has grown with me.",
      symbol: { key: 'safeAdult', label: 'Growing up' },
      scene: { setting: 'livingroom', characters: [leo({ pose: 'wave' })], caption: 'Leo waving hello' },
    },
    {
      text: 'My trusted adult list still matters, and now it includes people at school and in my activities too, like my coach or my SSO, not just family.',
      symbol: { key: 'safeAdult', label: 'My growing list' },
      scene: { setting: 'classroom', characters: [leo({})], caption: 'Leo thinking about his trusted adults' },
    },
    {
      text: 'The check-first rule still applies — in person and online. I check with a trusted adult before meeting up with someone I have only spoken to through a game or an app, even if they seem nice.',
      symbol: { key: 'question', label: 'Check first, online too' },
      scene: { setting: 'bedroom', characters: [leo({ expression: 'calm' })], caption: 'Leo checking first before an online meet-up' },
      clinicianNote: {
        discipline: 'Behaviour Therapist',
        note: 'The same single "check first" rule from early childhood generalises cleanly into online contexts — it is easier for a child to hold onto one consistent rule than to try to judge who is safe based on how someone presents online.',
      },
    },
    {
      text: 'I never share my address, my school name, or photos of myself with someone I only know online, even if they ask nicely or say it is a secret.',
      symbol: { key: 'noThankYou', label: 'Keep it private' },
      scene: { setting: 'bedroom', characters: [leo({ expression: 'worried' })], caption: 'Leo keeping his information private' },
    },
    {
      text: 'My body is still mine. That includes at sleepovers, in changing rooms, and around people I know well. I can say no to anything that does not feel right, and I do not have to explain why.',
      symbol: { key: 'noThankYou', label: 'My body, still mine' },
      scene: { setting: 'bedroom', characters: [leo({ expression: 'confident' })], caption: 'Leo asserting his body autonomy' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Restating bodily autonomy as a standing rule (not just for early childhood) matters through the primary years, when children start spending more unsupervised time with peers at sleepovers, sports, and camps.',
      },
    },
    {
      text: 'If a friend tells me a secret that worries me — like someone hurting them, or making them feel unsafe — I tell a trusted adult, even if my friend asked me not to. Keeping a friend safe matters more than keeping that secret.',
      symbol: { key: 'help', label: 'Keep my friend safe' },
      scene: { setting: 'classroom', characters: [leo({ expression: 'worried' }), dad({ flip: true, expression: 'calm' })], caption: 'Leo telling Dad about a friend\'s secret' },
      clinicianNote: {
        discipline: 'Speech-Language Pathologist',
        note: 'This page gives explicit, literal permission to break a "don\'t tell" instruction when a friend\'s safety is at risk — spelling this out directly matters, since the social pressure to keep any promised secret can otherwise override a child\'s better judgement.',
      },
    },
    {
      text: 'If I am ever unsure whether something is safe, I trust that unsure feeling and I check with a safe adult. I will not always be right about who is safe just by how someone looks or acts — that is why the rules matter more than guessing.',
      symbol: { key: 'unsure', label: 'Trust the rules' },
      scene: { setting: 'livingroom', characters: [leo({ expression: 'worried' }), nan({ flip: true, expression: 'calm' })], caption: 'Leo checking his unsure feeling with Nan' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Reinforcing rule-based safety over appearance-based judgement is protective specifically because most safeguarding harm comes from people a child already knows and likes, not unfamiliar-looking strangers.',
      },
    },
    {
      text: 'I know my safe adults, online and in person. My body is mine. I speak up for myself and for my friends. That makes me safe, and it makes me a good friend too.',
      symbol: { key: 'safeAdult', label: 'Safe & strong' },
      scene: { setting: 'livingroom', characters: [leo({ expression: 'confident' }), dad({}), nan({})], caption: 'Leo with his family, feeling safe and strong' },
    },
  ],
}

export default story

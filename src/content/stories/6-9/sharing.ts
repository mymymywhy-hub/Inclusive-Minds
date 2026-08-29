import type { Story } from '../../types'
import { ben, zara, dad } from '../../cast'

const story: Story = {
  slug: 'sharing',
  ageBand: '6-9',
  title: "Ben's Fair Sharing Story",
  subtitle: 'A social story about turns, fairness, compromise, and when to ask an adult to help sort it out',
  ndisGoalTags: ['Improved Relationships', 'Improved Daily Living Skills'],
  narratorName: 'Ben',
  howToUse: [
    'This version moves past toys into the fairness disputes that come up more at this age — turns on equipment, game rules, devices, and screen time.',
    'Page 6 explicitly reframes asking an adult for help as problem-solving, not "tattling" — worth saying out loud, since peer pressure against this starts around this age.',
    'Practise the assertive script on page 4 together ("I don\'t think that\'s fair, because...") before your child needs it in the moment.',
  ],
  pages: [
    {
      text: 'My name is Ben. This is my fair sharing story.',
      symbol: { key: 'share', label: 'Fair sharing' },
      scene: { setting: 'playground', characters: [ben({ pose: 'wave' })], caption: 'Ben waving hello' },
    },
    {
      text: 'As I get older, sharing is not just about toys — it is about turns on the trampoline, controllers, seats on the bus, and who goes first in a game.',
      symbol: { key: 'turnTaking', label: 'Bigger turns' },
      scene: { setting: 'playground', characters: [ben({}), zara({ flip: true })], caption: 'Ben and Zara waiting for a turn' },
    },
    {
      text: 'Sometimes it is hard to know what is fair when a game does not have clear turns. We can agree on a way to decide together, like a timer, a roster, or taking turns choosing the game.',
      symbol: { key: 'choice', label: 'Decide together' },
      scene: { setting: 'playground', characters: [ben({ pose: 'pointForward' }), zara({ flip: true })], caption: 'Ben and Zara agreeing on a system' },
      clinicianNote: {
        discipline: 'Occupational Therapist',
        note: 'Co-creating a fairness system (a timer, a roster) before conflict starts is far more effective than negotiating fairness mid-argument, when both children are already frustrated.',
      },
    },
    {
      text: 'If I feel it is unfair, I can say so calmly: "I do not think that is fair, because..." and suggest an idea, instead of just saying no or walking away.',
      symbol: { key: 'question', label: 'Speak up calmly' },
      scene: { setting: 'playground', characters: [ben({ pose: 'pointForward' })], caption: 'Ben speaking up calmly' },
      clinicianNote: {
        discipline: 'Speech-Language Pathologist',
        note: 'This is an assertive script — clear and calm, not passive (saying nothing) or aggressive (shouting or grabbing) — a middle path many children need modelled explicitly.',
      },
    },
    {
      text: 'Sometimes the other person will not agree straight away. We might need to compromise — that means both of us give a little, so it works for both of us.',
      symbol: { key: 'share', label: 'Compromise' },
      scene: { setting: 'playground', characters: [ben({ pose: 'reachSide' }), zara({ pose: 'reachSide', flip: true, expression: 'happy' })], caption: 'Ben and Zara compromising' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Compromise is a genuinely advanced social skill — this page names it plainly as "both of us give a little," giving children concrete language for an abstract idea.',
      },
    },
    {
      text: 'If someone keeps taking more than their fair share, even after I have spoken up, it is okay to ask an adult to help sort it out. That is not tattling — that is problem-solving.',
      symbol: { key: 'help', label: 'Ask an adult' },
      scene: { setting: 'playground', characters: [ben({ pose: 'handUp' }), dad({ flip: true })], caption: 'Ben asking Dad for help sorting it out' },
      clinicianNote: {
        discipline: 'Behaviour Therapist',
        note: 'Naming this "problem-solving, not tattling" directly counters the peer pressure that often stops children this age from getting help with a genuinely unfair situation.',
      },
    },
    {
      text: 'I also get to have things that are only mine sometimes — like my own device, my special things, or my personal space — and I can say so clearly.',
      symbol: { key: 'choice', label: 'What is mine' },
      scene: { setting: 'bedroom', characters: [ben({ expression: 'confident' })], caption: 'Ben with his own things' },
    },
    {
      text: 'Fair sharing means everyone gets a turn to feel good, including me. I am getting better at working these things out with my friends.',
      symbol: { key: 'happy', label: 'Fair for everyone' },
      scene: { setting: 'playground', characters: [ben({ expression: 'confident' }), zara({})], caption: 'Ben and Zara playing fairly together' },
    },
  ],
}

export default story

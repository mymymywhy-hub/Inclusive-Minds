import type { Story } from '../../types'
import { zara, ben, jamal, leo } from '../../cast'

const story: Story = {
  slug: 'making-friends',
  ageBand: '6-9',
  title: "Zara's Friendship Story",
  subtitle: 'A social story about joining groups, handling "not now", and friendship that fits who I am',
  ndisGoalTags: ['Improved Relationships', 'Increased Social & Community Participation'],
  narratorName: 'Zara',
  howToUse: [
    'This version is written for children navigating shifting friendship groups, group play, and the sting of being left out sometimes — talk through a real recent example together if your child has one.',
    'Page 8 gives explicit permission to loop in a trusted adult when a friendship problem doesn\'t resolve on its own; it is worth naming who that adult actually is for your child.',
    'Page 7 is deliberate: it validates having one or two close friends as just as valuable as a big group, which matters for children who find large groups overwhelming.',
  ],
  pages: [
    {
      text: 'My name is Zara. This is my friend-making story, for when things get a little more complicated at school.',
      symbol: { key: 'friend', label: 'Friends' },
      scene: { setting: 'classroom', characters: [zara({ pose: 'wave' })], caption: 'Zara waving hello' },
    },
    {
      text: 'Friendships change more as I get older. Sometimes a friend I have had for years finds new friends too, and that can happen without anyone doing anything wrong.',
      symbol: { key: 'worried', label: 'Changing' },
      scene: { setting: 'playground', characters: [zara({ expression: 'worried' }), ben({ pose: 'wave', flip: true })], caption: 'Zara noticing friendships shifting' },
    },
    {
      text: 'If I want to join a group that is already playing or talking, I can watch for a moment first, to find a good time to ask — like a pause in the game, not right in the middle of the exciting part.',
      symbol: { key: 'look', label: 'Watch first' },
      scene: { setting: 'playground', characters: [zara({}), ben({}), jamal({ flip: true })], caption: 'Zara watching for a good moment to join' },
      clinicianNote: {
        discipline: 'Occupational Therapist',
        note: 'Reading the natural pause points in fast-moving group play is a real, teachable skill — scaffolded here as one concrete thing to watch for, rather than an abstract "read the room."',
      },
    },
    {
      text: 'I can say something like, "That looks fun, can I join?" or ask a question about what they are doing. A question about their game is often an easier way in than just announcing myself.',
      symbol: { key: 'question', label: 'Ask in' },
      scene: { setting: 'playground', characters: [zara({ pose: 'pointForward' }), ben({ expression: 'happy', flip: true })], caption: 'Zara asking to join the game' },
      clinicianNote: {
        discipline: 'Speech-Language Pathologist',
        note: 'Question-based entry bids ("what are you playing?") are consistently more successful in peer-play research than declarative entry bids ("I want to play"), so this page gives the higher-success script.',
      },
    },
    {
      text: 'Sometimes a group says not right now, or that they are in the middle of something. That can sting, but it usually is not personal — I can try a different group, or ask this same group again later.',
      symbol: { key: 'noThankYou', label: 'Not now' },
      scene: { setting: 'playground', characters: [zara({ expression: 'calm' })], caption: 'Zara handling "not right now"' },
      clinicianNote: {
        discipline: 'Behaviour Therapist',
        note: 'A calm, non-catastrophic explanation for rejection prevents the all-or-nothing thinking ("nobody likes me") that can shut down future attempts to connect.',
      },
    },
    {
      text: 'Being a good friend also means noticing when someone else looks left out, and inviting them in — the way I would want to be invited.',
      symbol: { key: 'friend', label: 'Include others' },
      scene: { setting: 'playground', characters: [zara({ pose: 'reachSide' }), jamal({ pose: 'reachSide', flip: true })], caption: 'Zara inviting Jamal to join' },
      illustration: '/illustrations/6-9/making-friends/06.png',
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Practising reciprocity — extending the invitation you\'d want yourself — builds empathy and gives a child an active, prosocial role rather than only a receiving one.',
      },
    },
    {
      text: 'Friendship is not only about being included in a big group. One or two close friends who really get me count just as much.',
      symbol: { key: 'happy', label: 'Quality counts' },
      scene: { setting: 'library', characters: [zara({ expression: 'happy' }), leo({ flip: true, expression: 'happy' })], caption: 'Zara with a close friend' },
      illustration: '/illustrations/6-9/making-friends/07.png',
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Explicitly valuing depth over breadth matters for children, especially some autistic and introverted children, who thrive with fewer, deeper friendships rather than large-group belonging.',
      },
    },
    {
      text: 'If I keep feeling left out even after trying different strategies, that is something worth telling a trusted grown-up, like my teacher or my parents, so we can problem-solve together.',
      symbol: { key: 'safeAdult', label: 'Tell a grown-up' },
      scene: { setting: 'classroom', characters: [zara({ pose: 'handUp' })], caption: 'Zara telling a trusted grown-up' },
      illustration: '/illustrations/6-9/making-friends/08.png',
    },
    {
      text: 'Making and keeping friends takes practice at every age. I am allowed to do friendship in the way that suits me, and that makes me a good friend to have.',
      symbol: { key: 'friend', label: 'My way' },
      scene: { setting: 'playground', characters: [zara({ expression: 'confident' }), ben({}), jamal({}), leo({})], caption: 'Zara with her friends' },
      illustration: '/illustrations/6-9/making-friends/09.png',
    },
  ],
}

export default story

import type { Story } from '../../types'
import { priya, leo, zara } from '../../cast'

const story: Story = {
  slug: 'sharing',
  ageBand: '3-6',
  title: 'Priya and the Sharing Game',
  subtitle: 'A social story about turns, trading, and it being okay to say no to one special thing',
  ndisGoalTags: ['Improved Relationships', 'Improved Daily Living Skills'],
  narratorName: 'Priya',
  howToUse: [
    'Read this before a playdate, sibling play, or group activity where shared toys or equipment come up.',
    'If your family uses a visual timer or turn card at home, hold it up on the matching page so the story links straight to your real routine.',
    'Page 8 is deliberate: current practice favours children having a genuine choice about their most special items, not blanket forced sharing — talk through which toys are "always shareable" and which are "sometimes mine only" together.',
  ],
  pages: [
    {
      text: 'My name is Priya. This is my sharing story.',
      symbol: { key: 'share', label: 'Share' },
      scene: { setting: 'frontyard', characters: [priya({ pose: 'wave' })], caption: 'Priya waving hello' },
      illustration: '/illustrations/3-6/sharing/01.png',
    },
    {
      text: 'I like to play with my toys and games. Sometimes a friend wants to play with the same toy as me.',
      symbol: { key: 'question', label: 'Same toy' },
      scene: { setting: 'livingroom', characters: [priya({ pose: 'pointForward' }), leo({ pose: 'pointForward', flip: true })], caption: 'Priya and Leo both wanting the same toy' },
    },
    {
      text: 'When it is hard to share, I can feel frustrated. That feeling is normal. I can take a slow breath.',
      symbol: { key: 'worried', label: 'Frustrated' },
      scene: { setting: 'livingroom', characters: [priya({ expression: 'worried' })], caption: 'Priya feeling frustrated' },
      clinicianNote: {
        discipline: 'Behaviour Therapist',
        note: 'Naming the feeling and pairing it with one simple regulation step (a breath) before any "sharing rule" is taught — regulation always comes before skill-teaching.',
      },
    },
    {
      text: 'I can say, "You can have a turn after me," or "Let’s trade — you can have this one."',
      symbol: { key: 'turnTaking', label: 'Turns' },
      scene: { setting: 'livingroom', characters: [priya({ pose: 'reachSide' }), leo({ pose: 'reachSide', flip: true, expression: 'happy' })], caption: 'Priya offering a turn' },
      illustration: '/illustrations/3-6/sharing/04.png',
      clinicianNote: {
        discipline: 'Speech-Language Pathologist',
        note: 'Two short, ready-made scripts give a child words to reach for in the moment, instead of needing to invent language while already frustrated.',
      },
    },
    {
      text: 'We can use a turn-taking timer or a turn card, so we both know when the turn changes.',
      symbol: { key: 'wait', label: 'Wait' },
      scene: { setting: 'livingroom', characters: [priya({}), zara({ flip: true })], caption: 'Priya and Zara using a timer' },
      clinicianNote: {
        discipline: 'Occupational Therapist',
        note: 'A visual timer turns an abstract wait into something a child can see counting down, which lowers anxiety around "how much longer."',
      },
    },
    {
      text: 'While I wait for my turn, I can do something else fun, like build or draw, until it is my turn again.',
      symbol: { key: 'play', label: 'Something else' },
      scene: { setting: 'livingroom', characters: [priya({ expression: 'calm' })], caption: 'Priya drawing while she waits' },
    },
    {
      text: 'When my friend shares with me, I can say "thank you."',
      symbol: { key: 'thankYou', label: 'Thank you' },
      scene: { setting: 'livingroom', characters: [priya({ expression: 'happy' }), leo({ flip: true, expression: 'happy' })], caption: 'Priya saying thank you' },
      illustration: '/illustrations/3-6/sharing/07.png',
    },
    {
      text: 'If there is one special toy I really do not want to share, I can say so before we start playing. That is okay — I get to choose what I share.',
      symbol: { key: 'choice', label: 'My choice' },
      scene: { setting: 'livingroom', characters: [priya({ pose: 'handUp', expression: 'confident' })], caption: 'Priya choosing what to share' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Sharing works best when it is a genuine choice, not a demand. Letting a child protect one special item respects bodily and object autonomy and reduces meltdown triggers.',
      },
    },
    {
      text: 'Sharing helps everyone have fun together. I am learning to share, and that makes me a great friend.',
      symbol: { key: 'friend', label: 'Friend' },
      scene: { setting: 'playground', characters: [priya({ expression: 'confident' }), leo({}), zara({})], caption: 'Priya playing happily with friends' },
    },
  ],
}

export default story

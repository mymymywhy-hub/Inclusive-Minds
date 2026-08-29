import type { Story } from '../../types'
import { priya, sam, crossingGuard } from '../../cast'

const story: Story = {
  slug: 'road-safety',
  ageBand: '6-9',
  title: "Priya's Road Safety Story, Wheels and All",
  subtitle: 'A social story about crossing safely, kerb cuts, visibility, and waiting for a friend who needs more time',
  ndisGoalTags: ['Improved Daily Living Skills', 'Improved Health & Wellbeing'],
  narratorName: 'Priya',
  howToUse: [
    'This version adds wheelchair-specific road safety detail — kerb cuts, visibility, driveways, and needing a little more crossing time — content not always covered in generic road safety resources.',
    'Page 7 flips the usual script: Priya models patience for a friend who needs more time, which is a good prompt for a conversation about how classmates can support each other near roads.',
    'If your child uses a different mobility aid (a walker, crutches, a scooter), talk through which of Priya\'s tips apply the same way for them.',
  ],
  pages: [
    {
      text: 'My name is Priya. This is my road safety story, wheels and all.',
      symbol: { key: 'crossSafely', label: 'Road safety' },
      scene: { setting: 'street', characters: [priya({ pose: 'wave' })], caption: 'Priya waving hello' },
    },
    {
      text: 'I get around using my wheelchair, so a few road safety steps look a little different for me — but Stop, Look, Listen, Wait is still exactly the same routine.',
      symbol: { key: 'stop', label: 'Same routine' },
      scene: { setting: 'street', characters: [priya({})], caption: 'Priya at the edge of the footpath' },
    },
    {
      text: 'I look for a kerb cut — that is the smooth ramp down to the road — so my wheels can cross safely. Sometimes I need to go a little out of my way to find one, and that is still the safest path.',
      symbol: { key: 'look', label: 'Find the ramp' },
      scene: { setting: 'street', characters: [priya({ pose: 'pointForward' })], caption: 'Priya looking for a kerb cut' },
    },
    {
      text: 'Crossing can take me a bit more time than walking, so I start crossing as soon as it is clearly safe, and I do not rush in a way that feels unsteady. Drivers are used to giving pedestrians using wheelchairs a little extra time.',
      symbol: { key: 'wait', label: 'Take my time' },
      scene: { setting: 'street', characters: [priya({})], caption: 'Priya crossing steadily' },
      clinicianNote: {
        discipline: 'Occupational Therapist',
        note: 'Naming "start early, go steady" as the safe strategy — rather than "hurry up" — reduces the risk of an unsafe, rushed crossing and matches real OT guidance for wheeled mobility users.',
      },
    },
    {
      text: 'Reflective strips on my chair and bright colours help drivers see me, especially in the early morning, evening, or on a dull day.',
      symbol: { key: 'look', label: 'Be seen' },
      scene: { setting: 'street', characters: [priya({})], caption: 'Priya wearing bright, visible colours' },
      clinicianNote: {
        discipline: 'Occupational Therapist',
        note: 'Visibility aids matter more for pedestrians who sit lower to the ground than a walking adult, a practical detail specific to wheeled mobility that general road safety lessons often miss.',
      },
    },
    {
      text: 'Driveways can be tricky, because a driver reversing might not see me straight away. I pause and check driveways are clear before I cross in front of them, even on the footpath.',
      symbol: { key: 'stop', label: 'Check driveways' },
      scene: { setting: 'frontyard', characters: [priya({})], caption: 'Priya checking a driveway is clear' },
    },
    {
      text: 'If a friend takes more time to cross — using a wheelchair, a walking frame, or just being extra careful — I wait with them and match their pace, instead of rushing ahead.',
      symbol: { key: 'holdHand', label: 'Wait together' },
      scene: { setting: 'street', characters: [priya({ pose: 'reachSide' }), sam({ pose: 'reachSide', flip: true, expression: 'happy' })], caption: 'Priya waiting with Sam' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Modelling patience for a friend who needs more time builds reciprocal, inclusive peer behaviour — safety habits and social habits reinforcing each other.',
      },
    },
    {
      text: 'My wheels do not change the rules — stop, look, listen, wait, and take the safest path across. I know how to move through my world safely, in my own way.',
      symbol: { key: 'crossSafely', label: 'My way, safely' },
      scene: { setting: 'street', characters: [priya({ expression: 'confident' }), crossingGuard({ flip: true })], caption: 'Priya crossing confidently with the crossing supervisor' },
    },
  ],
}

export default story

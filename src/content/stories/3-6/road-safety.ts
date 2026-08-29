import type { Story } from '../../types'
import { noah, dad, crossingGuard } from '../../cast'

const story: Story = {
  slug: 'road-safety',
  ageBand: '3-6',
  title: "Noah's Road Safety Story",
  subtitle: 'A social story about footpaths, holding hands, and the Stop, Look, Listen, Wait routine',
  ndisGoalTags: ['Improved Daily Living Skills', 'Improved Health & Wellbeing'],
  narratorName: 'Noah',
  howToUse: [
    'Practise "Stop, Look, Listen, Wait" out loud at a real, quiet crossing straight after reading — the words become a strategy your child can say to themselves.',
    'If your child is a flight risk near roads, this story names holding hands or a safety strap directly and without shame — pair it with whatever equipment or strategy your OT has already recommended.',
    'Noah\'s ear defenders are shown as a normal, helpful tool, not a big deal — bring your child\'s own along if that helps them stay regulated near traffic noise.',
  ],
  pages: [
    {
      text: 'My name is Noah. This is my road safety story.',
      symbol: { key: 'crossSafely', label: 'Road safety' },
      scene: { setting: 'frontyard', characters: [noah({ pose: 'wave' })], caption: 'Noah waving hello' },
    },
    {
      text: 'Roads are for cars, trucks, and bikes. Footpaths are for walking. I stay on the footpath until it is time to cross.',
      symbol: { key: 'home', label: 'Footpath' },
      scene: { setting: 'street', characters: [noah({})], caption: 'Noah standing on the footpath' },
    },
    {
      text: 'Cars can be loud and fast, and that can feel like a lot for my ears and my body. I can wear my ear defenders if I need to.',
      symbol: { key: 'loudNoise', label: 'Loud' },
      scene: { setting: 'street', characters: [noah({ device: 'earDefenders', expression: 'calm' })], caption: 'Noah wearing his ear defenders' },
      clinicianNote: {
        discipline: 'Occupational Therapist',
        note: 'Naming a real sensory tool as a normal safety strategy — not a last resort — helps a child stay regulated enough to actually use the safety steps that follow.',
      },
    },
    {
      text: 'Near a road, I hold hands with my safe adult, or hold onto the pram or my safety strap. This keeps my body safe and close.',
      symbol: { key: 'holdHand', label: 'Hold hands' },
      scene: { setting: 'street', characters: [noah({ pose: 'reachSide' }), dad({ pose: 'reachSide', flip: true })], caption: 'Noah holding Dad\'s hand near the road' },
      clinicianNote: {
        discipline: 'Behaviour Therapist',
        note: 'Staying physically connected near roads is one of the most effective protective strategies for children at higher risk of running toward roads, and it is presented here as simply part of the routine, not a punishment.',
      },
    },
    {
      text: 'When we get to a crossing, we STOP at the edge of the footpath.',
      symbol: { key: 'stop', label: 'Stop' },
      scene: { setting: 'street', characters: [noah({ expression: 'calm' }), dad({ flip: true })], caption: 'Noah and Dad stopping at the crossing' },
    },
    {
      text: 'We LOOK for cars — right, left, and right again.',
      symbol: { key: 'look', label: 'Look' },
      scene: { setting: 'street', characters: [noah({ pose: 'pointForward' })], caption: 'Noah looking for cars' },
    },
    {
      text: 'We LISTEN for cars too, especially quiet electric cars and bikes that can be hard to hear.',
      symbol: { key: 'listen', label: 'Listen' },
      scene: { setting: 'street', characters: [noah({})], caption: 'Noah listening for cars' },
    },
    {
      text: 'We WAIT until the road is clear, or until the green man or the crossing supervisor says it is safe. Then we walk straight across — we do not run.',
      symbol: { key: 'wait', label: 'Wait' },
      scene: { setting: 'street', characters: [noah({}), crossingGuard({ flip: true, pose: 'handUp' })], caption: 'Noah waiting for the crossing supervisor' },
      clinicianNote: {
        discipline: 'Occupational Therapist',
        note: 'Walking (not running) is stated explicitly, since impulsivity can make the last, most dangerous step — stepping off the kerb — the hardest one to slow down.',
      },
    },
    {
      text: 'Stop, look, listen, wait. I am learning to cross safely, and I always stay close to my safe adult near roads.',
      symbol: { key: 'crossSafely', label: 'Safe crossing' },
      scene: { setting: 'street', characters: [noah({ expression: 'confident' }), dad({ pose: 'reachSide', flip: true })], caption: 'Noah crossing safely with Dad' },
    },
  ],
}

export default story

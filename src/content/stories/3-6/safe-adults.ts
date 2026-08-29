import type { Story } from '../../types'
import { aisha, nan, dad, crossingGuard } from '../../cast'

const story: Story = {
  slug: 'safe-adults',
  ageBand: '3-6',
  title: "Aisha's Safe Adults Story",
  subtitle: 'A social story about my safe-adult list, my body being mine, and always checking first',
  ndisGoalTags: ['Improved Daily Living Skills', 'Improved Relationships'],
  narratorName: 'Aisha',
  howToUse: [
    'Fill in the "safe adult" page together with your family\'s real names before reading — a personalised list is more meaningful and more memorable than a generic one.',
    'This story deliberately avoids "all strangers are dangerous" messaging. Most safeguarding harm comes from people children already know, and fear-based rules can be confusing or overwhelming, especially for literal or anxious thinkers. The focus here is on consistent rules (check first, my body is mine, tell my safe adult) rather than judging people by how unfamiliar they seem.',
      'Practise the "helper" page in real places you visit often — point out who could be a helper at the shops, the park, or on public transport.',
    'If this story raises anything upsetting, follow up gently and loop in your child\'s psychologist, GP, or the NDIS Quality and Safeguards Commission if there are safety concerns.',
  ],
  pages: [
    {
      text: 'My name is Aisha. This is my safe adults story.',
      symbol: { key: 'safeAdult', label: 'Safe adult' },
      scene: { setting: 'frontyard', characters: [aisha({ pose: 'wave' })], caption: 'Aisha waving hello' },
    },
    {
      text: 'There are grown-ups who keep me safe. I call them my safe adults. Mum, Dad, my teacher, and my auntie are on my list.',
      symbol: { key: 'safeAdult', label: 'My list' },
      scene: { setting: 'livingroom', characters: [aisha({}), dad({ pose: 'reachSide', flip: true }), nan({ pose: 'reachSide' })], caption: 'Aisha with her safe adults' },
    },
    {
      text: 'My body belongs to me. If someone wants a hug or a tickle and I do not want it, I can say "no thank you," and that is allowed.',
      symbol: { key: 'noThankYou', label: 'My body, my choice' },
      scene: { setting: 'livingroom', characters: [aisha({ pose: 'handUp', expression: 'confident' })], caption: 'Aisha saying no thank you' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Teaching bodily autonomy — that a child\'s "no" to touch is always valid, even with people they love — is protective and is consistent, non-negotiable safeguarding practice.',
      },
    },
    {
      text: 'Before I go anywhere, take a treat, or get in a car, I check first with my safe adult — even if I know the person a little.',
      symbol: { key: 'question', label: 'Check first' },
      scene: { setting: 'frontyard', characters: [aisha({ pose: 'pointForward' }), dad({ flip: true })], caption: 'Aisha checking first with Dad' },
      clinicianNote: {
        discipline: 'Behaviour Therapist',
        note: 'One consistent "always check first" rule is far easier for a child to apply than trying to judge whether a person seems safe — and it works the same whether someone is a total stranger or a familiar face.',
      },
    },
    {
      text: 'If I feel unsure about someone, I can trust that feeling in my tummy. I do not have to be polite if something feels wrong.',
      symbol: { key: 'worried', label: 'My feeling matters' },
      scene: { setting: 'frontyard', characters: [aisha({ expression: 'worried' })], caption: 'Aisha noticing an unsure feeling' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Explicitly giving permission to prioritise an internal alarm signal over "being polite" matters most for children who have been taught to comply with adults by default.',
      },
    },
    {
      text: 'If I ever feel lost or unsafe, I look for a helper — someone wearing a uniform, or a grown-up with children — and use my loud voice or my talker to say, "I need help."',
      symbol: { key: 'help', label: 'Find a helper' },
      scene: { setting: 'street', characters: [aisha({ expression: 'worried', pose: 'handUp' }), crossingGuard({ flip: true })], caption: 'Aisha finding a helper' },
    },
    {
      text: 'Some secrets are fun, like a surprise party — those are okay. But if a secret makes me feel yucky, or someone says "don\'t tell," I always tell my safe adult anyway.',
      symbol: { key: 'safeAdult', label: 'Always tell' },
      scene: { setting: 'livingroom', characters: [aisha({ expression: 'worried' }), nan({ pose: 'reachSide', flip: true, expression: 'calm' })], caption: 'Aisha telling Nan about a secret' },
      clinicianNote: {
        discipline: 'Speech-Language Pathologist',
        note: 'Naming the exact permission — "you can always tell, even if someone said don\'t" — in plain, literal language is essential safeguarding vocabulary many children need spelled out directly.',
      },
    },
    {
      text: 'I do not need to be scared of everyone I don\'t know yet — most people are kind. I just remember my safe rules: check first, my body is mine, and I can always ask for help.',
      symbol: { key: 'happy', label: 'Confident, not scared' },
      scene: { setting: 'park', characters: [aisha({ expression: 'confident' })], caption: 'Aisha feeling confident, not scared' },
      clinicianNote: {
        discipline: 'Psychologist',
        note: 'Keeping the message rule-based rather than fear-based prevents the anxiety and social withdrawal that blanket "strangers are dangerous" messaging can cause.',
      },
    },
    {
      text: 'I know my safe adults. My body is mine. I can always ask for help. I am safe, and I am strong.',
      symbol: { key: 'safeAdult', label: 'Safe & strong' },
      scene: { setting: 'livingroom', characters: [aisha({ expression: 'confident' }), dad({}), nan({})], caption: 'Aisha with her family' },
    },
  ],
}

export default story

export type SkinTone = 'porcelain' | 'fair' | 'tan' | 'brown' | 'deepBrown'
export type HairStyle = 'short' | 'curly' | 'long' | 'braids' | 'hijab' | 'bun' | 'buzz' | 'locs'
export type Accessory = 'none' | 'glasses' | 'hearingAid' | 'glassesAndHearingAid'
export type MobilityAid = 'none' | 'wheelchair' | 'legBrace'
export type Device = 'none' | 'aac' | 'fidget' | 'earDefenders'
export type Expression = 'happy' | 'calm' | 'worried' | 'surprised' | 'confident' | 'sad'
export type Pose = 'neutral' | 'wave' | 'handUp' | 'pointForward' | 'reachSide' | 'coveredEars'

export interface CharacterSpec {
  skinTone: SkinTone
  hair: HairStyle
  hairColor: string
  top: string
  bottom: string
  accessory?: Accessory
  mobilityAid?: MobilityAid
  device?: Device
  expression: Expression
  pose: Pose
  flip?: boolean
  name: string
}

/** Warm "ink" outline colour used on every shape for the hand-drawn storybook look. */
const INK = '#3a2f28'
const INK_W = 2.2

const SKIN: Record<SkinTone, string> = {
  porcelain: '#f6d8c4',
  fair: '#f0c19a',
  tan: '#c98d5f',
  brown: '#93613c',
  deepBrown: '#5b3a24',
}

function Hair({ style, color }: { style: HairStyle; color: string; flip?: boolean }) {
  const ink = { stroke: INK, strokeWidth: INK_W, strokeLinejoin: 'round' as const }
  switch (style) {
    case 'short':
      return <path d="M14 16 Q30 -2 46 16 Q46 6 30 4 Q14 6 14 16 Z" fill={color} {...ink} />
    case 'buzz':
      return <path d="M15 15 Q30 4 45 15 Q45 10 30 8 Q15 10 15 15 Z" fill={color} opacity={0.6} stroke={INK} strokeWidth={1.4} />
    case 'curly':
      return (
        <g fill={color} {...ink}>
          <circle cx="16" cy="14" r="6" />
          <circle cx="23" cy="7" r="7" />
          <circle cx="30" cy="4" r="7" />
          <circle cx="37" cy="7" r="7" />
          <circle cx="44" cy="14" r="6" />
        </g>
      )
    case 'long':
      return (
        <path
          d="M14 14 Q14 0 30 0 Q46 0 46 14 L48 46 Q46 50 42 46 L40 20 L20 20 L18 46 Q14 50 12 46 Z"
          fill={color}
          {...ink}
        />
      )
    case 'braids':
      return (
        <g fill={color} {...ink}>
          <path d="M14 16 Q30 -2 46 16 Q46 6 30 4 Q14 6 14 16 Z" />
          <rect x="6" y="14" width="7" height="26" rx="3.5" />
          <rect x="47" y="14" width="7" height="26" rx="3.5" />
          <circle cx="9.5" cy="39" r="3" fill="#e0a95c" stroke={INK} strokeWidth={1.4} />
          <circle cx="50.5" cy="39" r="3" fill="#e0a95c" stroke={INK} strokeWidth={1.4} />
        </g>
      )
    case 'locs':
      return (
        <g fill={color} {...ink}>
          <path d="M14 16 Q30 -2 46 16 Q46 6 30 4 Q14 6 14 16 Z" />
          {[10, 17, 24, 31, 38, 45].map((x) => (
            <rect key={x} x={x} y="10" width="4.5" height="24" rx="2.2" />
          ))}
        </g>
      )
    case 'bun':
      return (
        <g fill={color} {...ink}>
          <path d="M14 16 Q30 -2 46 16 Q46 6 30 4 Q14 6 14 16 Z" />
          <circle cx="30" cy="-4" r="8" />
        </g>
      )
    case 'hijab':
      return (
        <path
          d="M9 20 Q9 -6 30 -6 Q51 -6 51 20 L54 52 Q48 58 42 52 L42 26 Q42 16 30 16 Q18 16 18 26 L18 52 Q12 58 6 52 Z"
          fill={color}
          {...ink}
        />
      )
    default:
      return null
  }
}

function Cheeks() {
  return (
    <g fill="#f0855e" opacity={0.4}>
      <ellipse cx="21" cy="24.5" rx="3.4" ry="2.3" />
      <ellipse cx="39" cy="24.5" rx="3.4" ry="2.3" />
    </g>
  )
}

function Face({ expression }: { expression: Expression }) {
  switch (expression) {
    case 'happy':
      return (
        <g>
          <Cheeks />
          <circle cx="24" cy="19" r="2.3" fill="#2b2b33" />
          <circle cx="36" cy="19" r="2.3" fill="#2b2b33" />
          <circle cx="23.3" cy="18.2" r="0.7" fill="#fff" />
          <circle cx="35.3" cy="18.2" r="0.7" fill="#fff" />
          <path d="M22 24 Q30 31 38 24" stroke="#2b2b33" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>
      )
    case 'confident':
      return (
        <g>
          <Cheeks />
          <circle cx="24" cy="19" r="2.3" fill="#2b2b33" />
          <circle cx="36" cy="19" r="2.3" fill="#2b2b33" />
          <circle cx="23.3" cy="18.2" r="0.7" fill="#fff" />
          <circle cx="35.3" cy="18.2" r="0.7" fill="#fff" />
          <path d="M23 25 L37 25" stroke="#2b2b33" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M20 15 L27 13" stroke="#2b2b33" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M40 15 L33 13" stroke="#2b2b33" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      )
    case 'calm':
      return (
        <g>
          <path d="M21 19 Q24 17 27 19" stroke="#2b2b33" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M33 19 Q36 17 39 19" stroke="#2b2b33" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M24 25 Q30 28 36 25" stroke="#2b2b33" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </g>
      )
    case 'worried':
      return (
        <g>
          <circle cx="24" cy="20" r="2.2" fill="#2b2b33" />
          <circle cx="36" cy="20" r="2.2" fill="#2b2b33" />
          <path d="M20 14 L27 17" stroke="#2b2b33" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M40 14 L33 17" stroke="#2b2b33" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M25 27 Q30 24 35 27" stroke="#2b2b33" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>
      )
    case 'sad':
      return (
        <g>
          <circle cx="24" cy="20" r="2" fill="#2b2b33" />
          <circle cx="36" cy="20" r="2" fill="#2b2b33" />
          <path d="M20 15 L27 17" stroke="#2b2b33" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M40 15 L33 17" stroke="#2b2b33" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M24 29 Q30 25 36 29" stroke="#2b2b33" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>
      )
    case 'surprised':
      return (
        <g>
          <circle cx="24" cy="19" r="2.8" fill="#2b2b33" />
          <circle cx="36" cy="19" r="2.8" fill="#2b2b33" />
          <path d="M19 13 L26 16" stroke="#2b2b33" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M41 13 L34 16" stroke="#2b2b33" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="30" cy="27" r="3.4" fill="none" stroke="#2b2b33" strokeWidth="2" />
        </g>
      )
  }
}

function Arm({
  side,
  pose,
  skin,
  sleeve,
}: {
  side: 'left' | 'right'
  pose: Pose
  skin: string
  sleeve: string
}) {
  const isRight = side === 'right'
  const shoulderX = isRight ? 44 : 16
  const shoulderY = 38
  let rotate = 6 * (isRight ? 1 : -1)
  if (pose === 'wave' && isRight) rotate = -150
  if (pose === 'handUp' && isRight) rotate = -172
  if (pose === 'pointForward' && isRight) rotate = -95
  if (pose === 'reachSide') rotate = isRight ? -90 : 90
  if (pose === 'coveredEars') rotate = isRight ? -150 : 150

  const handY = pose === 'coveredEars' ? 14 : 32
  return (
    <g transform={`rotate(${rotate} ${shoulderX} ${shoulderY})`}>
      <rect x={shoulderX - 6} y={shoulderY} width="12" height="30" rx="6" fill={sleeve} stroke={INK} strokeWidth={INK_W} strokeLinejoin="round" />
      <circle cx={shoulderX} cy={shoulderY + handY} r="6.5" fill={skin} stroke={INK} strokeWidth={INK_W} />
    </g>
  )
}

function Wheelchair({ seatColor }: { seatColor: string }) {
  const metal = '#8a8f98'
  const metalLight = '#c7cbd1'
  return (
    <g>
      {/* big rear wheel, drawn large and clear */}
      <circle cx="18" cy="84" r="19" fill="#fbf8f2" stroke={metal} strokeWidth="4" />
      <circle cx="18" cy="84" r="12.5" fill="none" stroke={metalLight} strokeWidth="2" />
      <circle cx="18" cy="84" r="2.6" fill={metal} />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180
        return (
          <line
            key={deg}
            x1={18 + 3 * Math.cos(rad)}
            y1={84 + 3 * Math.sin(rad)}
            x2={18 + 12 * Math.cos(rad)}
            y2={84 + 12 * Math.sin(rad)}
            stroke={metalLight}
            strokeWidth="1.6"
          />
        )
      })}
      {/* seat + frame strut + footrest + front caster */}
      <rect x="13" y="62" width="33" height="11" rx="5" fill={seatColor} stroke={INK} strokeWidth={INK_W} />
      <line x1="40" y1="72" x2="42" y2="93" stroke={metal} strokeWidth="3.4" strokeLinecap="round" />
      <rect x="36" y="93" width="15" height="4.5" rx="2.2" fill={metal} />
      <circle cx="44" cy="99" r="5.5" fill="#fbf8f2" stroke={metal} strokeWidth="3" />
      <ellipse cx="43" cy="97" rx="5.5" ry="3.2" fill="#4a4a52" stroke={INK} strokeWidth="1.4" />
    </g>
  )
}

/** A friendly, hand-drawn-style child character with an inked outline on every
 *  shape. Deliberately varied and reused consistently across every story
 *  rather than tying one trait to one story. */
export default function Character({ spec, scale = 1 }: { spec: CharacterSpec; scale?: number }) {
  const skin = SKIN[spec.skinTone]
  const seated = spec.mobilityAid === 'wheelchair'
  return (
    <g
      role="img"
      aria-label={spec.name}
      filter="url(#sketchy)"
      transform={`scale(${spec.flip ? -scale : scale} ${scale}) translate(${spec.flip ? -60 : 0} 0)`}
    >
      {/* grounding shadow */}
      <ellipse cx="28" cy={seated ? 106 : 100} rx={seated ? 30 : 21} ry="4.5" fill="#2b2b33" opacity={0.12} />

      {/* legs / wheelchair */}
      {seated ? (
        <Wheelchair seatColor={spec.bottom} />
      ) : (
        <g>
          <rect x="17" y="70" width="10" height="26" rx="5" fill={spec.bottom} stroke={INK} strokeWidth={INK_W} strokeLinejoin="round" />
          <rect x="33" y="70" width="10" height="26" rx="5" fill={spec.bottom} stroke={INK} strokeWidth={INK_W} strokeLinejoin="round" />
          <ellipse cx="22" cy="97" rx="7" ry="4" fill="#4a4a52" stroke={INK} strokeWidth={INK_W} />
          <ellipse cx="38" cy="97" rx="7" ry="4" fill="#4a4a52" stroke={INK} strokeWidth={INK_W} />
          {spec.mobilityAid === 'legBrace' && (
            <rect x="18" y="78" width="8" height="14" rx="2" fill="#dfe3e8" stroke={INK} strokeWidth="1.4" />
          )}
        </g>
      )}

      {/* torso */}
      <rect x="14" y="32" width="32" height="40" rx="14" fill={spec.top} stroke={INK} strokeWidth={INK_W} strokeLinejoin="round" />

      {/* arms */}
      <Arm side="left" pose={spec.pose} skin={skin} sleeve={spec.top} />
      <Arm side="right" pose={spec.pose} skin={skin} sleeve={spec.top} />

      {/* head */}
      <circle cx="30" cy="20" r="16" fill={skin} stroke={INK} strokeWidth={INK_W} />
      {spec.hair !== 'hijab' && <Face expression={spec.expression} />}
      <Hair style={spec.hair} color={spec.hairColor} flip={spec.flip} />
      {spec.hair === 'hijab' && <Face expression={spec.expression} />}

      {/* accessories */}
      {(spec.accessory === 'glasses' || spec.accessory === 'glassesAndHearingAid') && (
        <g stroke={INK} strokeWidth="2" fill="none">
          <circle cx="24" cy="19" r="5.2" />
          <circle cx="36" cy="19" r="5.2" />
          <line x1="29.2" y1="19" x2="30.8" y2="19" />
        </g>
      )}
      {(spec.accessory === 'hearingAid' || spec.accessory === 'glassesAndHearingAid') && (
        <g>
          <path d="M43 12 Q50 16 47 26" stroke="#f2994a" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M43 12 Q50 16 47 26" stroke={INK} strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <circle cx="44" cy="24" r="2.6" fill="#f2994a" stroke={INK} strokeWidth="1.2" />
        </g>
      )}
      {spec.device === 'aac' && (
        <g transform="translate(19,54)">
          <rect width="22" height="16" rx="2.5" fill="#2b2b33" stroke={INK} strokeWidth="1.6" />
          <rect x="2" y="2" width="18" height="12" rx="1.5" fill="#eef3f6" />
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <rect key={`${r}-${c}`} x={3.5 + c * 5.4} y={3.5 + r * 3.6} width="4" height="2.6" rx="0.6" fill="#2f8f8a" />
            )),
          )}
        </g>
      )}
      {spec.device === 'fidget' && (
        <g transform="translate(20,56)">
          <rect width="16" height="10" rx="3" fill="#8e6fd6" stroke={INK} strokeWidth="1.4" />
          <circle cx="5" cy="5" r="2.4" fill="#fbf8f2" />
          <circle cx="11" cy="5" r="2.4" fill="#fbf8f2" />
        </g>
      )}
      {spec.device === 'earDefenders' && (
        <g>
          {/* big padded over-ear headphones, drawn bold and clear */}
          <path
            d="M8 22 Q8 -10 30 -10 Q52 -10 52 22"
            fill="none"
            stroke="#8e6fd6"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M8 22 Q8 -10 30 -10 Q52 -10 52 22"
            fill="none"
            stroke={INK}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <ellipse cx="8" cy="23" rx="8" ry="11" fill="#8e6fd6" stroke={INK} strokeWidth={INK_W} />
          <ellipse cx="52" cy="23" rx="8" ry="11" fill="#8e6fd6" stroke={INK} strokeWidth={INK_W} />
          <ellipse cx="8" cy="23" rx="4.6" ry="7" fill="#a68ee0" />
          <ellipse cx="52" cy="23" rx="4.6" ry="7" fill="#a68ee0" />
        </g>
      )}
    </g>
  )
}

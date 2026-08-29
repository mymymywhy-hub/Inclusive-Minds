import Character, { type CharacterSpec } from './Character'

export type Setting =
  | 'park'
  | 'classroom'
  | 'playground'
  | 'livingroom'
  | 'street'
  | 'frontyard'
  | 'kitchen'
  | 'library'
  | 'bedroom'
  | 'therapyRoom'

export interface SceneSpec {
  setting: Setting
  characters: CharacterSpec[]
  caption?: string
}

function Backdrop({ setting }: { setting: Setting }) {
  switch (setting) {
    case 'park':
      return (
        <g>
          <rect width="400" height="220" fill="#cdeaea" />
          <circle cx="330" cy="45" r="22" fill="#f6c445" opacity={0.9} />
          <rect y="150" width="400" height="70" fill="#a8d98a" />
          <path d="M60 150 L60 95 Q60 80 75 80 Q90 80 90 95 L90 150 Z" fill="#7fb56a" />
          <rect x="70" y="120" width="10" height="30" fill="#8a6640" />
          <rect x="300" y="130" width="60" height="10" rx="4" fill="#c79a63" />
          <rect x="315" y="140" width="6" height="20" fill="#8a6640" />
          <rect x="345" y="140" width="6" height="20" fill="#8a6640" />
        </g>
      )
    case 'playground':
      return (
        <g>
          <rect width="400" height="220" fill="#bfe3f7" />
          <rect y="160" width="400" height="60" fill="#e3c793" />
          <rect x="40" y="90" width="8" height="70" fill="#e0653c" />
          <rect x="120" y="90" width="8" height="70" fill="#e0653c" />
          <rect x="40" y="88" width="88" height="8" fill="#e0653c" />
          <path d="M60 96 Q84 140 108 96" stroke="#2f8f8a" strokeWidth="4" fill="none" />
          <rect x="55" y="150" width="10" height="10" fill="#2f8f8a" />
          <rect x="103" y="150" width="10" height="10" fill="#2f8f8a" />
          <path d="M250 160 L300 100 L320 160 Z" fill="#f2994a" />
          <rect x="298" y="130" width="24" height="6" fill="#fbf8f2" />
        </g>
      )
    case 'street':
      return (
        <g>
          <rect width="400" height="220" fill="#cdeaea" />
          <rect y="170" width="400" height="50" fill="#5c6570" />
          {[10, 60, 110, 160, 210, 260, 310, 360].map((x) => (
            <rect key={x} x={x} y="192" width="30" height="6" fill="#fbf8f2" />
          ))}
          <rect x="150" y="0" width="10" height="170" fill="#8a8f98" />
          <circle cx="155" cy="0" r="0" />
          <g transform="translate(130,-6)">
            <rect width="60" height="6" fill="#8a8f98" />
          </g>
          <circle cx="145" cy="8" r="9" fill="#e0653c" />
          <rect x="60" y="150" width="18" height="20" fill="#c79a63" />
          <rect x="330" y="150" width="18" height="20" fill="#c79a63" />
        </g>
      )
    case 'frontyard':
      return (
        <g>
          <rect width="400" height="220" fill="#cdeaea" />
          <rect y="150" width="400" height="70" fill="#a8d98a" />
          <rect x="150" y="70" width="110" height="90" fill="#f2c07a" />
          <path d="M145 72 L205 30 L265 72 Z" fill="#b06a3f" />
          <rect x="190" y="115" width="30" height="45" fill="#7a4a2a" />
          <circle cx="216" cy="137" r="2" fill="#f6c445" />
          <rect x="160" y="90" width="20" height="18" fill="#eef3f6" />
          <rect x="230" y="90" width="20" height="18" fill="#eef3f6" />
        </g>
      )
    case 'classroom':
      return (
        <g>
          <rect width="400" height="220" fill="#fbf1de" />
          <rect y="170" width="400" height="50" fill="#e3c793" />
          <rect x="20" y="20" width="90" height="60" rx="4" fill="#eef3f6" stroke="#8e6fd6" strokeWidth="3" />
          <rect x="35" y="35" width="60" height="10" rx="2" fill="#8e6fd6" opacity={0.5} />
          <rect x="35" y="55" width="40" height="10" rx="2" fill="#f2994a" opacity={0.6} />
          <circle cx="330" cy="150" r="40" fill="#a8d98a" opacity={0.6} />
          <rect x="250" y="160" width="80" height="8" rx="4" fill="#c79a63" />
        </g>
      )
    case 'library':
      return (
        <g>
          <rect width="400" height="220" fill="#f3e7f7" />
          <rect y="180" width="400" height="40" fill="#e3c793" />
          <rect x="30" y="20" width="340" height="90" fill="#b98a5a" />
          {Array.from({ length: 16 }).map((_, i) => (
            <rect key={i} x={38 + i * 21} y="28" width="14" height="74" fill={['#2f8f8a', '#f2994a', '#8e6fd6', '#f6c445'][i % 4]} rx="2" />
          ))}
          <circle cx="330" cy="150" r="34" fill="#eef3f6" />
        </g>
      )
    case 'kitchen':
      return (
        <g>
          <rect width="400" height="220" fill="#fdf2e3" />
          <rect y="160" width="400" height="60" fill="#e3c793" />
          <rect x="20" y="30" width="360" height="40" fill="#eef3f6" />
          <circle cx="374" cy="46" r="16" fill="#8e6fd6" opacity={0.5} />
        </g>
      )
    case 'bedroom':
      return (
        <g>
          <rect width="400" height="220" fill="#eef1fb" />
          <rect y="170" width="400" height="50" fill="#d8c9ea" />
          <rect x="30" y="90" width="120" height="70" fill="#f2994a" opacity={0.7} rx="6" />
          <rect x="30" y="90" width="120" height="18" fill="#fbf8f2" rx="6" />
          <circle cx="320" cy="50" r="24" fill="#f6c445" opacity={0.8} />
        </g>
      )
    case 'therapyRoom':
      return (
        <g>
          <rect width="400" height="220" fill="#e4f4ee" />
          <rect y="170" width="400" height="50" fill="#cfe8dd" />
          <rect x="6" y="150" width="55" height="20" rx="6" fill="#f2994a" opacity={0.6} />
          <circle cx="378" cy="48" r="20" fill="#8e6fd6" opacity={0.35} />
        </g>
      )
    default: // livingroom
      return (
        <g>
          <rect width="400" height="220" fill="#fdf2e3" />
          <rect y="170" width="400" height="50" fill="#e3c793" />
          <rect x="4" y="150" width="60" height="20" rx="8" fill="#8e6fd6" opacity={0.4} />
          <circle cx="376" cy="46" r="22" fill="#f2994a" opacity={0.45} />
        </g>
      )
  }
}

const LAYOUT: Record<number, number[]> = {
  1: [200],
  2: [140, 260],
  3: [90, 200, 310],
  4: [70, 165, 260, 340],
}

export default function Illustration({ spec }: { spec: SceneSpec }) {
  const xs = LAYOUT[Math.min(spec.characters.length, 4)] ?? LAYOUT[1]
  const scale = spec.characters.length > 2 ? 1.1 : 1.4
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" role="img" aria-label={spec.caption ?? 'Story illustration'}>
      <Backdrop setting={spec.setting} />
      {spec.characters.map((c, i) => (
        <g key={i} transform={`translate(${xs[i] - 30 * scale} ${190 - 100 * scale})`}>
          <Character spec={c} scale={scale} />
        </g>
      ))}
    </svg>
  )
}

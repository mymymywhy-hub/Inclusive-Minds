export type SymbolKey =
  | 'friend'
  | 'share'
  | 'help'
  | 'stop'
  | 'look'
  | 'listen'
  | 'safeAdult'
  | 'unsure'
  | 'happy'
  | 'worried'
  | 'wait'
  | 'choice'
  | 'crossSafely'
  | 'home'
  | 'turnTaking'
  | 'sorry'
  | 'thankYou'
  | 'noThankYou'
  | 'holdHand'
  | 'loudNoise'
  | 'calmDown'
  | 'play'
  | 'question'

const STROKE = { stroke: '#2b2b33', strokeWidth: 3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' }

function Glyph({ symbol }: { symbol: SymbolKey }) {
  switch (symbol) {
    case 'friend':
      return (
        <g {...STROKE}>
          <circle cx="17" cy="16" r="7" fill="#fbf8f2" />
          <circle cx="35" cy="16" r="7" fill="#fbf8f2" />
          <path d="M8 38 Q8 26 17 26 Q26 26 26 38" />
          <path d="M26 38 Q26 26 35 26 Q44 26 44 38" />
        </g>
      )
    case 'share':
      return (
        <g {...STROKE}>
          <rect x="6" y="20" width="16" height="16" rx="3" fill="#fbf8f2" />
          <rect x="30" y="12" width="16" height="16" rx="3" fill="#fbf8f2" />
          <path d="M22 28 L30 20" />
          <path d="M25 20 L30 20 L30 25" />
        </g>
      )
    case 'help':
      return (
        <g {...STROKE}>
          <circle cx="26" cy="26" r="18" fill="#fbf8f2" />
          <path d="M20 20 Q20 14 26 14 Q32 14 32 20 Q32 24 26 26 L26 30" />
          <circle cx="26" cy="36" r="1.6" fill="#2b2b33" stroke="none" />
        </g>
      )
    case 'stop':
      return (
        <g {...STROKE}>
          <path d="M16 8 H36 L44 16 V36 L36 44 H16 L8 36 V16 Z" fill="#fbf8f2" />
          <path d="M18 18 L34 34 M34 18 L18 34" />
        </g>
      )
    case 'look':
      return (
        <g {...STROKE}>
          <path d="M6 26 Q26 10 46 26 Q26 42 6 26 Z" fill="#fbf8f2" />
          <circle cx="26" cy="26" r="6" />
        </g>
      )
    case 'listen':
      return (
        <g {...STROKE}>
          <path d="M14 24 V32 Q14 40 22 40" />
          <rect x="8" y="18" width="12" height="18" rx="6" fill="#fbf8f2" />
          <circle cx="24" cy="41" r="4" fill="#fbf8f2" />
        </g>
      )
    case 'safeAdult':
      return (
        <g {...STROKE}>
          <circle cx="26" cy="14" r="8" fill="#fbf8f2" />
          <path d="M10 44 Q10 28 26 28 Q42 28 42 44" fill="#fbf8f2" />
          <path d="M18 34 L23 39 L35 27" stroke="#2f8f8a" />
        </g>
      )
    case 'unsure':
      return (
        <g {...STROKE}>
          <circle cx="26" cy="14" r="8" fill="#fbf8f2" />
          <path d="M10 44 Q10 28 26 28 Q42 28 42 44" fill="#fbf8f2" strokeDasharray="4 4" />
          <path d="M26 36 v6" />
        </g>
      )
    case 'happy':
      return (
        <g {...STROKE}>
          <circle cx="26" cy="26" r="18" fill="#fbf8f2" />
          <circle cx="19" cy="22" r="1.8" fill="#2b2b33" stroke="none" />
          <circle cx="33" cy="22" r="1.8" fill="#2b2b33" stroke="none" />
          <path d="M17 30 Q26 38 35 30" />
        </g>
      )
    case 'worried':
      return (
        <g {...STROKE}>
          <circle cx="26" cy="26" r="18" fill="#fbf8f2" />
          <circle cx="19" cy="23" r="1.8" fill="#2b2b33" stroke="none" />
          <circle cx="33" cy="23" r="1.8" fill="#2b2b33" stroke="none" />
          <path d="M18 34 Q26 28 34 34" />
        </g>
      )
    case 'wait':
      return (
        <g {...STROKE}>
          <circle cx="26" cy="26" r="18" fill="#fbf8f2" />
          <path d="M26 14 V26 L34 31" />
        </g>
      )
    case 'choice':
      return (
        <g {...STROKE}>
          <rect x="6" y="14" width="14" height="14" rx="3" fill="#fbf8f2" />
          <rect x="32" y="24" width="14" height="14" rx="3" fill="#fbf8f2" />
          <path d="M26 6 L26 42" strokeDasharray="3 4" />
        </g>
      )
    case 'crossSafely':
      return (
        <g {...STROKE}>
          <path d="M6 40 H46" />
          {[10, 20, 30, 40].map((x) => (
            <path key={x} d={`M${x} 40 V30`} />
          ))}
          <circle cx="26" cy="14" r="6" fill="#fbf8f2" />
          <path d="M26 20 V30" />
        </g>
      )
    case 'home':
      return (
        <g {...STROKE}>
          <path d="M8 26 L26 10 L44 26" />
          <path d="M14 24 V42 H38 V24" fill="#fbf8f2" />
        </g>
      )
    case 'turnTaking':
      return (
        <g {...STROKE}>
          <path d="M10 20 A16 16 0 1 1 10 33" fill="none" />
          <path d="M10 12 L10 20 L18 20" />
        </g>
      )
    case 'sorry':
      return (
        <g {...STROKE}>
          <circle cx="26" cy="26" r="18" fill="#fbf8f2" />
          <path d="M18 32 Q26 26 34 32" />
          <path d="M17 20 q2 -3 4 0" />
        </g>
      )
    case 'thankYou':
      return (
        <g {...STROKE}>
          <path d="M12 30 V16 Q12 12 16 12 H30 L38 20 V30" fill="#fbf8f2" />
          <path d="M18 22 L24 28 L34 16" stroke="#2f8f8a" />
        </g>
      )
    case 'noThankYou':
      return (
        <g {...STROKE}>
          <circle cx="26" cy="26" r="18" fill="#fbf8f2" />
          <path d="M17 17 L35 35 M35 17 L17 35" />
        </g>
      )
    case 'holdHand':
      return (
        <g {...STROKE}>
          <path d="M8 30 Q8 18 20 18 L34 18 Q46 18 46 30 L46 34 H8 Z" fill="#fbf8f2" />
          <path d="M18 18 V10 M26 18 V8 M34 18 V10" />
        </g>
      )
    case 'loudNoise':
      return (
        <g {...STROKE}>
          <path d="M8 20 H16 L26 10 V42 L16 32 H8 Z" fill="#fbf8f2" />
          <path d="M34 16 Q42 26 34 36" />
          <path d="M38 10 Q50 26 38 42" />
        </g>
      )
    case 'calmDown':
      return (
        <g {...STROKE}>
          <path d="M8 30 Q16 18 26 30 Q36 42 44 30" />
          <circle cx="26" cy="14" r="4" fill="#fbf8f2" />
        </g>
      )
    case 'play':
      return (
        <g {...STROKE}>
          <circle cx="26" cy="26" r="18" fill="#fbf8f2" />
          <path d="M22 17 L35 26 L22 35 Z" fill="#2b2b33" stroke="none" />
        </g>
      )
    case 'question':
      return (
        <g {...STROKE}>
          <circle cx="26" cy="26" r="18" fill="#fbf8f2" />
          <path d="M20 20 Q20 14 26 14 Q32 14 32 20 Q32 24 26 26 L26 30" />
          <circle cx="26" cy="36" r="1.6" fill="#2b2b33" stroke="none" />
        </g>
      )
  }
}

export default function AacSymbol({ symbol, label, size = 44 }: { symbol: SymbolKey; label: string; size?: number }) {
  return (
    <div
      className="inline-flex flex-col items-center gap-1 shrink-0"
      role="img"
      aria-label={label}
    >
      <div
        className="rounded-2xl bg-white border-2 border-brand-primary/30 shadow-sm flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 52 52" width={size * 0.72} height={size * 0.72}>
          <Glyph symbol={symbol} />
        </svg>
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-wide text-brand-ink/60 text-center leading-tight max-w-[64px]">
        {label}
      </span>
    </div>
  )
}

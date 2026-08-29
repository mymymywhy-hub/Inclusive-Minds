import { ageBands } from '../content'
import type { AgeBand } from '../content/types'

export default function AgeBandToggle({ value, onChange }: { value: AgeBand; onChange: (v: AgeBand) => void }) {
  return (
    <div role="radiogroup" aria-label="Choose an age range" className="inline-flex bg-white rounded-full p-1 shadow-sm border border-black/5">
      {ageBands.map((b) => (
        <button
          key={b.value}
          type="button"
          role="radio"
          aria-checked={value === b.value}
          onClick={() => onChange(b.value)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
            value === b.value ? 'bg-brand-primary text-white' : 'text-brand-ink/70 hover:bg-brand-bg'
          }`}
        >
          {b.label}
        </button>
      ))}
    </div>
  )
}

import type { ClinicianNote } from '../content/types'

const BADGE: Record<ClinicianNote['discipline'], { abbr: string; color: string }> = {
  'Occupational Therapist': { abbr: 'OT', color: '#2f8f8a' },
  'Speech-Language Pathologist': { abbr: 'SLP', color: '#8e6fd6' },
  'Behaviour Therapist': { abbr: 'BT', color: '#f2994a' },
  Psychologist: { abbr: 'PSY', color: '#c0455a' },
}

export default function ClinicianNoteCard({ note }: { note: ClinicianNote }) {
  const badge = BADGE[note.discipline]
  return (
    <div className="rounded-2xl bg-brand-bg border border-black/5 p-4 text-left">
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className="text-[11px] font-extrabold px-2 py-0.5 rounded-full text-white"
          style={{ backgroundColor: badge.color }}
        >
          {badge.abbr}
        </span>
        <span className="text-xs font-bold text-brand-ink/70">Why this page helps · {note.discipline}</span>
      </div>
      <p className="text-sm text-brand-ink/80 leading-snug">{note.note}</p>
    </div>
  )
}

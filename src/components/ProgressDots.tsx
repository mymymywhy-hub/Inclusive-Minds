export default function ProgressDots({ total, current, onJump }: { total: number; current: number; onJump: (i: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Story pages">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === current}
          aria-label={`Page ${i + 1} of ${total}`}
          onClick={() => onJump(i)}
          className={`rounded-full transition-all ${
            i === current ? 'w-6 h-2.5 bg-brand-primary' : 'w-2.5 h-2.5 bg-brand-primary/25 hover:bg-brand-primary/50'
          }`}
        />
      ))}
    </div>
  )
}

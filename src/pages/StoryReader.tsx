import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getStory } from '../content'
import { getTopic } from '../content/topics'
import type { AgeBand, TopicSlug } from '../content/types'
import Illustration from '../illustrations/Scene'
import AacSymbol from '../illustrations/AacSymbol'
import ProgressDots from '../components/ProgressDots'
import ClinicianNoteCard from '../components/ClinicianNoteCard'

export default function StoryReader() {
  const params = useParams<{ ageBand: string; slug: string }>()
  const ageBand = params.ageBand as AgeBand
  const slug = params.slug as TopicSlug
  const story = getStory(ageBand, slug)
  const topic = getTopic(slug)

  const [page, setPage] = useState(0)
  const [showNote, setShowNote] = useState(false)
  const [showHowTo, setShowHowTo] = useState(false)

  useEffect(() => {
    setPage(0)
    setShowNote(false)
  }, [ageBand, slug])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') setPage((p) => Math.min(p + 1, (story?.pages.length ?? 1) - 1))
      if (e.key === 'ArrowLeft') setPage((p) => Math.max(p - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [story])

  if (!story || !topic) return <Navigate to="/" replace />

  const current = story.pages[page]
  const isFirst = page === 0
  const isLast = page === story.pages.length - 1

  return (
    <div className="min-h-full flex flex-col" style={{ backgroundColor: `color-mix(in srgb, ${topic.color} 10%, var(--brand-bg))` }}>
      <header className="max-w-4xl w-full mx-auto px-5 pt-6 pb-2 flex items-center justify-between gap-3">
        <Link to="/" className="text-sm font-bold text-brand-ink/60 hover:text-brand-ink shrink-0">
          ← Home
        </Link>
        <div className="text-center min-w-0">
          <h1 className="font-display font-extrabold text-brand-ink truncate">{story.title}</h1>
          <p className="text-xs text-brand-ink/50 truncate">{story.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => setShowHowTo((v) => !v)}
          className="text-sm font-bold text-brand-primary-dark shrink-0 hover:underline underline-offset-4"
        >
          For grown-ups
        </button>
      </header>

      {showHowTo && (
        <div className="max-w-4xl w-full mx-auto px-5 pb-2">
          <div className="rounded-2xl bg-white border border-black/5 p-5">
            <h2 className="font-bold text-brand-ink mb-2">How to use this story</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-brand-ink/75">
              {story.howToUse.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {story.ndisGoalTags.map((tag) => (
                <span key={tag} className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-primary/10 text-brand-primary-dark">
                  NDIS goal: {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-4xl w-full mx-auto px-5 pb-6 flex flex-col">
        <div className="flex-1 rounded-3xl bg-white shadow-sm border border-black/5 overflow-hidden flex flex-col">
          <div className="aspect-[16/9] bg-brand-bg">
            <Illustration spec={current.scene} />
          </div>
          <div className="p-6 sm:p-8 flex-1 flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <AacSymbol symbol={current.symbol.key} label={current.symbol.label} size={56} />
              <p className="font-body text-xl sm:text-2xl leading-relaxed text-brand-ink pt-1">{current.text}</p>
            </div>

            {current.clinicianNote && (
              <div>
                <button
                  type="button"
                  onClick={() => setShowNote((v) => !v)}
                  className="text-xs font-bold text-brand-primary-dark hover:underline underline-offset-4"
                  aria-expanded={showNote}
                >
                  {showNote ? 'Hide' : 'Show'} why this page helps
                </button>
                {showNote && <div className="mt-2"><ClinicianNoteCard note={current.clinicianNote} /></div>}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-5">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={isFirst}
            className="px-5 py-2.5 rounded-full font-bold text-sm bg-white border border-black/10 text-brand-ink disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-bg"
          >
            ← Back
          </button>
          <ProgressDots total={story.pages.length} current={page} onJump={setPage} />
          {isLast ? (
            <Link
              to="/"
              className="px-5 py-2.5 rounded-full font-bold text-sm text-white"
              style={{ backgroundColor: 'var(--brand-primary)' }}
            >
              Finish ✓
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(p + 1, story.pages.length - 1))}
              className="px-5 py-2.5 rounded-full font-bold text-sm text-white"
              style={{ backgroundColor: 'var(--brand-primary)' }}
            >
              Next →
            </button>
          )}
        </div>
      </main>
    </div>
  )
}

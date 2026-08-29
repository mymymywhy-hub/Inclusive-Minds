import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import AgeBandToggle from '../components/AgeBandToggle'
import TopicCard from '../components/TopicCard'
import { topics } from '../content/topics'
import type { AgeBand } from '../content/types'

export default function Home() {
  const [ageBand, setAgeBand] = useState<AgeBand>('3-6')

  return (
    <div className="min-h-full">
      <header className="max-w-5xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <Logo />
        <Link
          to="/about"
          className="text-sm font-bold text-brand-primary-dark hover:underline underline-offset-4"
        >
          For families &amp; professionals
        </Link>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-16">
        <section className="text-center py-10">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-ink leading-tight">
            Storybooks that help every child <br className="hidden sm:block" />
            feel ready for the world
          </h1>
          <p className="mt-4 text-brand-ink/70 max-w-2xl mx-auto text-lg">
            Social stories about making friends, sharing, asking for help, staying safe around people you don't
            know, and crossing the road — written with occupational therapy, speech pathology, behaviour support
            and psychology practice in mind, and with a cast that looks like real, diverse Australian classrooms.
          </p>
          <div className="mt-7 flex justify-center">
            <AgeBandToggle value={ageBand} onChange={setAgeBand} />
          </div>
        </section>

        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          aria-label="Story topics"
        >
          {topics.map((t) => (
            <TopicCard key={t.slug} topic={t} ageBand={ageBand} />
          ))}
        </section>

        <section className="mt-14 rounded-3xl bg-white border border-black/5 p-7 sm:p-9">
          <h2 className="font-display text-2xl font-extrabold text-brand-ink mb-3">Meet the cast</h2>
          <p className="text-brand-ink/70 max-w-3xl">
            Leo, Priya, Jamal, Aisha, Noah, Zara, Ben and Sam turn up again and again across these stories, doing
            ordinary things — not one "disability of the week" character per book. Each of them gets to be the
            confident narrator of their own story at least once, whether they use a wheelchair, an AAC device,
            hearing aids, a leg brace, ear defenders, or none of the above.
          </p>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-6 pb-10 text-center text-xs text-brand-ink/40">
        Draft content for review — see{' '}
        <Link to="/about" className="underline">
          For families &amp; professionals
        </Link>{' '}
        for sources and how to use these stories safely.
      </footer>
    </div>
  )
}

import { Link } from 'react-router-dom'
import type { AgeBand, Topic } from '../content/types'
import { hasStory } from '../content'
import AacSymbol from '../illustrations/AacSymbol'

export default function TopicCard({ topic, ageBand }: { topic: Topic; ageBand: AgeBand }) {
  const available = hasStory(ageBand, topic.slug)
  const content = (
    <div
      className={`group relative flex flex-col items-center gap-3 rounded-3xl bg-white p-6 text-center shadow-sm border border-black/5 transition-transform ${
        available ? 'hover:-translate-y-1 hover:shadow-md' : 'opacity-60'
      }`}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{ backgroundColor: `color-mix(in srgb, ${topic.color} 18%, white)` }}
      >
        <AacSymbol symbol={topic.icon} label="" size={48} />
      </div>
      <h3 className="font-display font-bold text-lg text-brand-ink">{topic.title}</h3>
      {available ? (
        <span className="text-xs font-semibold text-brand-primary-dark">Read the story →</span>
      ) : (
        <span className="text-xs font-semibold text-brand-ink/50">Coming soon</span>
      )}
    </div>
  )
  if (!available) return <div aria-disabled="true">{content}</div>
  return (
    <Link to={`/story/${ageBand}/${topic.slug}`} className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/40 rounded-3xl">
      {content}
    </Link>
  )
}

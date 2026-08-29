/**
 * Placeholder wordmark. Swap this for the real Inclusive Minds logo file
 * (drop it in /public and replace the <svg> below with an <img src="/logo.svg" />)
 * once it's uploaded — nothing else in the app needs to change.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 38 38" aria-hidden="true">
        <circle cx="19" cy="19" r="18" fill="var(--brand-primary)" />
        <circle cx="13" cy="16" r="5.5" fill="var(--brand-sun)" />
        <circle cx="24" cy="14" r="4.5" fill="var(--brand-secondary)" />
        <circle cx="21" cy="24" r="6" fill="var(--brand-bg)" />
        <path d="M15 24 Q19 20 25 22" stroke="var(--brand-accent)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </svg>
      <span className="font-display font-extrabold text-xl leading-tight text-brand-ink">
        Inclusive Minds
        <span className="block text-[11px] font-semibold tracking-wide text-brand-primary-dark uppercase -mt-0.5">
          Social Stories
        </span>
      </span>
    </div>
  )
}

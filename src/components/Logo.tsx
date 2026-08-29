import LogoMark from './LogoMark'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={38} />
      <span className="font-display font-extrabold text-xl leading-tight text-brand-ink">
        Inclusive Minds
        <span className="block text-[11px] font-semibold tracking-wide text-brand-primary-dark uppercase -mt-0.5">
          Social Stories
        </span>
      </span>
    </div>
  )
}

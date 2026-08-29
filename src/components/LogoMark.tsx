/** The Inclusive Minds arch-and-dot mark, as its own piece so it can be reused
 *  in the header wordmark and dropped straight into the favicon. */
export default function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="15 50.5 170 170" aria-hidden="true">
      <path
        d="M56 146 A46 46 0 0 1 144 146"
        fill="none"
        stroke="#2e5b45"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <circle cx="100" cy="158" r="30" fill="#c96b45" />
    </svg>
  )
}

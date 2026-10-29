/** Bandeau de texte défilant, utilisé comme transition entre deux sections. */
export default function Marquee({ items, reverse = false }) {
  const track = [...items, ...items]

  return (
    <div className="marquee border-y border-line bg-paper" aria-hidden="true">
      <div className={`marquee-track ${reverse ? 'is-reverse' : ''}`}>
        {track.concat(track).map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}

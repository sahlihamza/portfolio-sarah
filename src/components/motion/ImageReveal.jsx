import useInView from './useInView'

/**
 * Image dévoilée par un rideau (clip-path) avec dézoom léger.
 * L'élément observé n'est jamais rogné, sinon l'observer ne se déclencherait pas.
 */
export default function ImageReveal({ className = '', delay = 0, children }) {
  const [ref, visible] = useInView({ threshold: 0.05, rootMargin: '0px 0px -4% 0px' })

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
    >
      <div className={`img-reveal ${visible ? 'is-visible' : ''}`}>
        <div className="img-zoom">{children}</div>
      </div>
    </div>
  )
}

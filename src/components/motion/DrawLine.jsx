import useInView from './useInView'

/** Filet qui se trace de gauche à droite à l'entrée dans le viewport. */
export default function DrawLine({ className = '' }) {
  const [ref, visible] = useInView({ threshold: 1, rootMargin: '0px 0px -10% 0px' })
  return <div ref={ref} aria-hidden="true" className={`draw-line ${visible ? 'is-visible' : ''} ${className}`.trim()} />
}

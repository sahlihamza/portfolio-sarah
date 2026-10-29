import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from './useInView'

/**
 * Décale légèrement le contenu au scroll. À placer dans un parent `overflow-hidden` :
 * le contenu est agrandi de 12 % pour ne jamais laisser apparaître de vide.
 */
export default function Parallax({ amount = 0.05, className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReducedMotion()) return undefined
    let frame = 0

    const update = () => {
      frame = 0
      const rect = node.parentElement.getBoundingClientRect()
      const half = window.innerHeight / 2
      const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - half) / (half + rect.height / 2)))
      node.style.transform = `translate3d(0, ${(-progress * rect.height * amount).toFixed(1)}px, 0) scale(1.12)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [amount])

  return (
    <div ref={ref} className={`will-change-transform ${className}`.trim()}>
      {children}
    </div>
  )
}

import { useRef } from 'react'

/** Le contenu est légèrement attiré par le curseur (souris uniquement). */
export default function Magnetic({ strength = 0.25, className = '', children }) {
  const ref = useRef(null)

  const onMove = (event) => {
    if (event.pointerType !== 'mouse') return
    const node = ref.current
    const rect = node.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) * strength
    const y = (event.clientY - rect.top - rect.height / 2) * strength
    node.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`
  }
  const onLeave = () => {
    ref.current.style.transform = ''
  }

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`magnetic inline-block ${className}`.trim()}
    >
      {children}
    </span>
  )
}

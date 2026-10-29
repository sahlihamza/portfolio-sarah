import useInView from './motion/useInView'

/**
 * Révélation au scroll. `variant` : "up" (défaut), "blur", "left", "right", "scale".
 * Respecte prefers-reduced-motion (rendu immédiat, sans animation).
 */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

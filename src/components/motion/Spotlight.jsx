/** Carte avec halo lumineux qui suit le curseur. */
export default function Spotlight({ as: Tag = 'div', className = '', children, ...rest }) {
  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <Tag onPointerMove={onMove} className={`spotlight ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

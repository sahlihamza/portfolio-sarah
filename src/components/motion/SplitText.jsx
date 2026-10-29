import { Fragment } from 'react'
import useInView from './useInView'

/** Titre révélé mot à mot (chaque mot monte depuis un masque). */
export default function SplitText({ as: Tag = 'h2', text, className = '', delay = 0 }) {
  const [ref, visible] = useInView({ threshold: 0.4 })

  return (
    <Tag ref={ref} aria-label={text} className={`split-text ${visible ? 'is-visible' : ''} ${className}`.trim()}>
      {text.split(' ').map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          {index > 0 && ' '}
          <span aria-hidden="true" className="split-word">
            <span style={{ transitionDelay: `${delay + index * 70}ms` }}>{word}</span>
          </span>
        </Fragment>
      ))}
    </Tag>
  )
}

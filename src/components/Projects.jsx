import { projects } from '../data/site'
import Reveal from './Reveal'
import DrawLine from './motion/DrawLine'
import ImageReveal from './motion/ImageReveal'
import Parallax from './motion/Parallax'
import SplitText from './motion/SplitText'
import { ArrowUpRight } from './Icons'

/** Les drawings (plans, coupes, moodboards) ne doivent jamais être rognés. */
const DRAWINGS = ['plan-', 'moodboard', 'coupe', 'materiaux']

/** Ratio imposé pour les visuels très horizontaux, afin d'éviter des bandes vides. */
const ASPECTS = {
  '/images/soukra-coupe.png': 'aspect-[12/5]',
  '/images/soukra-plan-masse.png': 'aspect-square',
  '/images/soukra-plan-rdc.png': 'aspect-[16/9]',
  '/images/soukra-plan-1er-etage.png': 'aspect-[12/5]',
  '/images/soukra-plan-2eme-etage.png': 'aspect-[16/9]',
  '/images/halle-plan-masse.png': 'aspect-square',
  '/images/plan-etage-v1.png': 'aspect-square',
  '/images/plan-etage-v2.png': 'aspect-square',
  '/images/tunis-plan-comparatif.png': 'aspect-[3/2]',
  '/images/tunis-materiaux.png': 'aspect-[3/2]',
}

function ProjectImage({ image }) {
  const isDrawing = DRAWINGS.some((token) => image.src.includes(token))
  const ratio = ASPECTS[image.src] ?? (image.span === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3]')

  return (
    <figure className={`min-w-0 ${image.span === 'wide' ? 'col-span-1 sm:col-span-2' : 'col-span-1'}`}>
      <ImageReveal
        className={`overflow-hidden border border-line bg-card ${
          isDrawing ? 'p-3' : 'bg-muted'
        }`}
      >
        <Parallax amount={isDrawing ? 0 : 0.05}>
        <img
          src={image.src}
          loading="lazy"
          decoding="async"
          alt={image.alt}
          className={`w-full transition-transform duration-700 ease-out ${ratio} ${
            isDrawing ? 'object-contain' : 'object-cover hover:scale-[1.03]'
          }`}
        />
        </Parallax>
      </ImageReveal>
      <figcaption className="mt-2.5 text-xs leading-relaxed text-ink-3">{image.caption}</figcaption>
    </figure>
  )
}

function ProjectBlock({ project }) {
  return (
    <Reveal as="article" id={`project-${project.id}`} className="scroll-mt-24 pt-0">
      <DrawLine />
      <div className="pt-12 md:pt-16" />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-5">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-sm font-semibold tracking-[0.18em] text-accent">
              {project.number}
            </span>
            <span className="eyebrow">{project.type}</span>
          </div>

          <SplitText as="h3" text={project.title} className="mt-4 text-3xl md:text-[2.6rem]" />
          {project.subtitle ? (
            <p className="mt-2 font-display text-lg text-ink-3">{project.subtitle}</p>
          ) : null}

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
            <div>
              <dt className="eyebrow">Localisation</dt>
              <dd className="mt-1.5 text-sm text-ink-2">{project.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">Surface</dt>
              <dd className="mt-1.5 text-sm text-ink-2">{project.surface}</dd>
            </div>
          </dl>

          <p className="mt-8 text-lg leading-relaxed text-ink">{project.summary}</p>

          <div className="mt-4 space-y-3 text-[0.975rem] leading-relaxed text-ink-2">
            {project.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <div className="project-gallery grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
            {project.images.map((image) => (
              <ProjectImage key={image.src} image={image} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projets" className="bg-muted">
      <div className="wrap py-16 md:py-24">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">02 — Projets</p>
            <SplitText text="Sélection de projets" className="mt-4 text-section" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-2">
            Quatre projets académiques et confidentiels : conception d’ensemble résidentiel,
            équipement public, et réaménagements d’étages pour des clientes privées.
          </p>
        </Reveal>

        <Reveal className="mt-12 md:mt-16">
          <ul className="border-t border-line">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={`#project-${project.id}`}
                  className="row-fill group relative flex cursor-pointer items-baseline gap-4 border-b border-line py-5 md:gap-8 md:px-3"
                >
                  <span className="font-display text-xs font-semibold tracking-[0.18em] text-accent">
                    {project.number}
                  </span>
                  <span className="flex-1 font-display text-lg transition-transform duration-200 group-hover:translate-x-1 md:text-2xl">
                    {project.title}
                  </span>
                  <span className="hidden text-xs text-ink-3 md:block">{project.location}</span>
                  <ArrowUpRight
                    width={18}
                    height={18}
                    className="shrink-0 text-ink-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {projects.map((project) => (
            <ProjectBlock key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

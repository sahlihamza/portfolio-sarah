import { about } from '../data/site'
import Reveal from './Reveal'
import Spotlight from './motion/Spotlight'
import SplitText from './motion/SplitText'

export default function About() {
  return (
    <section id="apropos">
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal variant="left" className="min-w-0 lg:col-span-5">
            <p className="eyebrow">01 — À propos</p>
            <SplitText text="Une pratique de l’espace et du trait" className="mt-4 text-section" />

            <div className="mt-8 space-y-4 leading-relaxed text-ink-2">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="min-w-0 lg:col-span-7">
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-12">
              <div>
                <h3 className="eyebrow border-b border-line pb-3">Éducation</h3>
                <ul className="mt-4 space-y-4">
                  {about.education.map((item) => (
                    <li key={item.school}>
                      <p className="font-display text-base">{item.school}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-3">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="eyebrow border-b border-line pb-3">Logiciels maîtrisés</h3>
                <ul className="mt-4 grid gap-3">
                  {about.software.map((item) => (
                    <Spotlight as="li" key={item.name} className="group flex items-center gap-3 rounded-xl border border-line bg-card p-3">
                      <img src={item.logo} alt={`Logo ${item.name}`} className="relative h-11 w-11 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110" />
                      <span className="relative min-w-0">
                        <span className="block font-display text-sm font-medium">{item.name}</span>
                        <span className="mt-0.5 block text-xs text-ink-3">{item.note}</span>
                      </span>
                    </Spotlight>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="eyebrow border-b border-line pb-3">Langues</h3>
                <ul className="mt-4 space-y-4">
                  {about.languages.map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-base">{item.name}</span>
                      <span className="text-right text-xs text-ink-3">{item.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="eyebrow border-b border-line pb-3">Qualités</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {about.qualities.map((quality) => (
                    <li
                      key={quality}
                      className="rounded-full border border-sky bg-muted/60 px-3.5 py-1.5 text-sm text-ink-2 transition-colors duration-200 hover:bg-sky"
                    >
                      {quality}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

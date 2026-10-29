import { profile } from '../data/site'
import Reveal from './Reveal'
import { ArrowDown, ArrowUpRight } from './Icons'

export default function Hero() {
  return (
    <section id="accueil" className="wrap pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="min-w-0 lg:col-span-7">
          <p className="eyebrow">Portfolio · Architecture · 2025–2026</p>

          <h1 className="mt-6 text-hero font-display">
            <span className="block">ZAITER</span>
            <span className="block text-ink-3">Sarra</span>
          </h1>

          <div className="rule mt-10" />

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl">
            {profile.role} — {profile.year} à {profile.school}. {profile.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projets"
              className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-ink px-7 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ink-2"
            >
              Voir les projets
              <ArrowDown width={16} height={16} />
            </a>
            <a
              href={profile.canva}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-ink px-7 text-sm font-medium transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              Dossier complet
              <ArrowUpRight width={16} height={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="min-w-0 lg:col-span-5">
          <figure>
            <div className="overflow-hidden border border-line bg-muted">
              <img
                src="/images/portrait.jpg"
                width="902"
                height="1600"
                loading="eager"
                decoding="async"
                alt="Portrait de Zaiter Sarra, étudiante en architecture"
                className="aspect-[3/4] w-full object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-ink-3">
              <span>Zaiter Sarra</span>
              <span>Menzel Jemil, Bizerte</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <Reveal delay={200} className="mt-16 md:mt-24">
        <dl className="grid gap-px border-t border-line pt-6 sm:grid-cols-3 sm:gap-8">
          {[
            { term: 'École', detail: profile.school },
            { term: 'Promotion', detail: profile.promo },
            { term: 'Contact', detail: profile.email },
          ].map((item) => (
            <div key={item.term} className="min-w-0">
              <dt className="eyebrow">{item.term}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-2">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}

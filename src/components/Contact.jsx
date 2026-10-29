import { profile } from '../data/site'
import Reveal from './Reveal'
import { ArrowUpRight, Mail, MapPin, Phone } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-card">
      <div className="wrap py-16 md:py-24">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">03 — Contact</p>
            <h2 className="mt-4 text-section">Parlons de votre projet.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-2">
            Disponible pour un stage, une collaboration ou une commande — réponse sous 48 h.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 md:mt-16">
          <div className="grid gap-px border-y border-line sm:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="group flex min-w-0 cursor-pointer items-start gap-3 py-6 transition-colors duration-200 hover:bg-paper sm:px-6"
            >
              <Mail className="mt-1 shrink-0 text-ink-3" />
              <span>
                <span className="eyebrow block">Email</span>
                <span className="link-underline mt-2 block font-display text-lg">{profile.email}</span>
              </span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="group flex min-w-0 cursor-pointer items-start gap-3 py-6 transition-colors duration-200 hover:bg-paper sm:px-6"
            >
              <Phone className="mt-1 shrink-0 text-ink-3" />
              <span>
                <span className="eyebrow block">Téléphone</span>
                <span className="link-underline mt-2 block font-display text-lg">{profile.phone}</span>
              </span>
            </a>

            <div className="flex items-start gap-3 py-6 sm:px-6">
              <MapPin className="mt-1 shrink-0 text-ink-3" />
              <span>
                <span className="eyebrow block">Localisation</span>
                <span className="mt-2 block font-display text-lg">{profile.location}</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-12 flex flex-col gap-6 md:mt-16 md:flex-row md:items-center md:justify-between">
          <a
            href={profile.canva}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-12 w-fit cursor-pointer items-center gap-2 rounded-full bg-ink px-7 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ink-2"
          >
            Consulter le dossier complet (14 planches)
            <ArrowUpRight width={16} height={16} />
          </a>

          <div className="flex items-center gap-4">
            <img
              src="/images/signature.png"
              width="512"
              height="304"
              loading="lazy"
              decoding="async"
              alt="Signature Zaiter Sarra"
              className="h-10 w-auto"
            />
            <span className="eyebrow">Zaiter Sarra</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

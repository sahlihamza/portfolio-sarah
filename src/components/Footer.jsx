import { profile } from '../data/site'
import { ArrowUp } from './Icons'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <p className="text-xs text-ink-3">
          © {YEAR} {profile.fullName} — Portfolio d’architecture · {profile.promo}
        </p>
        <a
          href="#accueil"
          className="link-underline inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-xs text-ink-2 transition-colors duration-200 hover:text-ink"
        >
          Haut de page
          <ArrowUp width={14} height={14} />
        </a>
      </div>
    </footer>
  )
}

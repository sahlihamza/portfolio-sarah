import { useState } from 'react'
import { nav, profile } from '../data/site'
import { ArrowUpRight, Close, Menu } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="wrap">
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          <a
            href="#accueil"
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-2 cursor-pointer"
            aria-label="Retour en haut de page"
          >
            <span className="font-display text-base font-semibold tracking-tight md:text-lg">Sarra Zaiter</span>
            <span className="hidden text-xs text-ink-3 sm:inline">— Architecture</span>
          </a>

          <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="link-underline cursor-pointer text-sm text-ink-2 transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.canva}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full border border-ink px-4 text-sm font-medium transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              Dossier complet
              <ArrowUpRight width={16} height={16} />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-ink md:hidden"
          >
            <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-line bg-paper md:hidden">
          <nav aria-label="Navigation mobile" className="wrap flex flex-col py-2">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-12 cursor-pointer items-center border-b border-line text-lg"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.canva}
              target="_blank"
              rel="noreferrer noopener"
              className="flex min-h-12 cursor-pointer items-center gap-1.5 text-lg"
            >
              Dossier complet
              <ArrowUpRight width={18} height={18} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Marquee from './components/motion/Marquee'
import ScrollProgress from './components/motion/ScrollProgress'

export default function App() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
      >
        Aller au contenu principal
      </a>

      <ScrollProgress />
      <Header />

      <main id="contenu">
        <Hero />
        <Marquee items={['Architecture', 'Conception', 'Plans & coupes', 'Maquettes 3D', 'Rendus', 'Espace']} />
        <About />
        <Marquee reverse items={['AutoCAD', 'Revit', 'Lumion', 'Twinmotion', 'Photoshop']} />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

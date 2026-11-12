import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import CursorGlow from './components/CursorGlow'

const Divider = () => (
  <div aria-hidden="true" className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-sky/40 to-transparent" />
)

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-volt-ui focus:px-4 focus:py-2 focus:text-white">
        Saltar al contenido
      </a>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main id="contenido">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

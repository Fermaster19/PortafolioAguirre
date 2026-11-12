import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { LINKS } from '../data/content'

const social = 'grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white transition hover:border-sky hover:text-sky'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg italic text-white">Desarrollando soluciones, creando oportunidades.</p>
          <p className="mt-1 text-sm text-mist">© 2026 Claudio Aguirre. Todos los derechos reservados.</p>
        </div>
        <ul className="flex gap-3">
          <li>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Claudio Aguirre (se abre en una pestaña nueva)" className={social}>
              <FaGithub aria-hidden="true" className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Claudio Aguirre (se abre en una pestaña nueva)" className={social}>
              <FaLinkedinIn aria-hidden="true" className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

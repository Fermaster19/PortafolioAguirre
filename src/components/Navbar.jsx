import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { NAV, LINKS } from '../data/content'
import useActiveSection from '../hooks/useActiveSection'

const IDS = NAV.map((n) => n.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = (id) =>
    `relative rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
      active === id ? 'text-white' : 'text-mist hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-ink/75 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" aria-label="Claudio Aguirre, ir al inicio" className="group flex items-center gap-2 font-display text-2xl font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-sky/50 bg-deep text-[17px] text-white shadow-[0_0_20px_-6px_rgba(32,185,255,0.8)] transition group-hover:border-sky">CA</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={linkClass(n.id)} aria-current={active === n.id ? 'true' : undefined}>
                {n.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-volt to-sky transition-opacity ${active === n.id ? 'opacity-100' : 'opacity-0'}`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.cv}
            download
            className="hidden items-center gap-2 rounded-xl border border-sky/40 px-4 py-2 text-sm font-medium text-white transition hover:border-sky hover:bg-sky/10 sm:inline-flex"
          >
            <Download aria-hidden="true" className="h-4 w-4 text-sky" /> Descargar CV
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-white/10 px-5 pb-6 pt-3 lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === n.id ? 'true' : undefined}
                  className={`block rounded-lg px-3 py-3 text-lg font-medium ${active === n.id ? 'text-sky' : 'text-white'}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={LINKS.cv}
            download
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-volt-ui px-4 py-3 text-sm font-medium text-white"
          >
            <Download aria-hidden="true" className="h-4 w-4" /> Descargar CV
          </a>
        </div>
      )}
    </header>
  )
}

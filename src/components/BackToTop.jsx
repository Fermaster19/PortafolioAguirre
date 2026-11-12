import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Volver arriba"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-sky/40 bg-deep/90 text-sky shadow-[0_0_30px_-8px_rgba(32,185,255,0.7)] backdrop-blur transition duration-300 hover:bg-volt-ui hover:text-white ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}

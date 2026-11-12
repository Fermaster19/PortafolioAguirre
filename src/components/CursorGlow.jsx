import { useEffect, useRef } from 'react'

/** Resplandor suave que sigue al mouse. Solo punteros finos y sin reduced-motion; el cursor nativo no se toca. */
export default function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || calm || !ref.current) return
    const el = ref.current
    let raf = 0
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.opacity = '1'
        el.style.transform = `translate3d(${e.clientX - 160}px, ${e.clientY - 160}px, 0)`
      })
    }
    const leave = () => { el.style.opacity = '0' }
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [])
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] h-80 w-80 rounded-full opacity-0 transition-opacity duration-300"
      style={{ background: 'radial-gradient(circle, rgba(32,185,255,0.10), transparent 65%)', willChange: 'transform' }}
    />
  )
}

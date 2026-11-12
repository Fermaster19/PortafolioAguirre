import { motion } from 'framer-motion'

/** Aparición al hacer scroll: corta y una sola vez. Respeta prefers-reduced-motion vía MotionConfig. */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      {children}
    </Tag>
  )
}

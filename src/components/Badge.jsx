export default function Badge({ icon: Icon, children }) {
  return (
    <li className="glass glow-hover inline-flex items-center gap-2.5 rounded-xl px-3.5 py-2 text-sm font-medium text-white">
      {Icon && <Icon aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-sky" />}
      {children}
    </li>
  )
}

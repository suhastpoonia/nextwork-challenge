import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#part1', label: '01 Replies' },
  { href: '#part2', label: '02 Videos' },
  { href: '#part3', label: '03 LinkedIn' },
  { href: '#part4', label: '04 11-Star' },
  { href: '#part5', label: '05 Strategy' },
  { href: '#part6', label: '06 Cities' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-30% 0px -50% 0px' }
    )
    sections.forEach(s => s && obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[60px] flex items-center justify-between px-10 transition-all duration-300 ${
          scrolled
            ? 'bg-void/80 backdrop-blur-xl border-b border-black/10'
            : 'bg-transparent'
        }`}
      >
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.12em] text-black no-underline uppercase"
        >
          Suhast
        </a>

        <ul className="hidden items-center gap-7 list-none m-0 p-0 md:flex">
          {links.map(({ href, label }) => {
            const id = href.slice(1)
            const isActive = active === id
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative text-[0.72rem] font-semibold tracking-[0.06em] no-underline transition-colors duration-200 pb-px ${
                    isActive ? 'text-black' : 'text-black/55 hover:text-black'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-nw-purple rounded-full"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

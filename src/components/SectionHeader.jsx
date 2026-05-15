import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionHeader({ num, label, title, subtitle }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <header ref={ref} className="mb-12">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mb-6 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-black/55"
      >
        <span>{num}</span>
        <span>{label}</span>
      </motion.p>

      <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.65fr)] md:items-start">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.1rem,5vw,4.6rem)] font-medium leading-[0.98] text-black"
          >
            {title}
          </motion.h2>
        </div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-base leading-7 text-black/62"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  )
}

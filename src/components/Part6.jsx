import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Calendar, Users } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { part6Data } from '../data/content'

function RevealBlock({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function HowToGrowSection() {
  return (
    <RevealBlock delay={0.1}>
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-nw-teal/10 border border-nw-teal/20 flex items-center justify-center">
            <Users size={14} className="text-nw-teal" />
          </div>
          <h3 className="font-display font-bold text-xl text-ink-100">How to grow them</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {part6Data.howToGrow.map(({ icon, title, desc }) => (
            <div key={title} className="px-5 py-5 rounded-xl bg-surface-2/40 border border-black/[0.07] hover:border-nw-teal/20 transition-colors duration-200">
              <span className="text-2xl mb-3 block">{icon}</span>
              <p className="font-heading font-semibold text-ink-100 text-sm mb-2">{title}</p>
              <p className="font-body text-ink-400 text-[0.82rem] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealBlock>
  )
}

function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <div ref={ref} className="mb-14">
      <div className="flex items-center gap-3 mb-7">
        <Calendar size={16} className="text-nw-coral" />
        <h3 className="font-display font-bold text-xl text-ink-100">Milestones</h3>
      </div>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[88px] top-3 bottom-3 w-px bg-gradient-to-b from-nw-teal via-nw-purple to-nw-coral opacity-30" />

        <div className="space-y-5">
          {part6Data.timeline.map(({ date, milestone, desc }, i) => (
            <motion.div
              key={date}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-6 items-start"
            >
              <div className="w-[88px] flex-shrink-0 text-right">
                <span className="font-mono text-[0.7rem] text-ink-500">{date}</span>
              </div>
              {/* Dot */}
              <div className="relative flex-shrink-0 mt-1">
                <div className={`w-3 h-3 rounded-full border-2 ${i === part6Data.timeline.length - 1 ? 'border-nw-coral bg-nw-coral/30' : 'border-nw-teal bg-nw-teal/20'}`} />
              </div>
              <div className="flex-1 pb-2">
                <p className="font-heading font-semibold text-ink-100 text-sm mb-1">{milestone}</p>
                <p className="font-body text-ink-400 text-[0.8rem] leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function IdealJourney() {
  return (
    <RevealBlock delay={0.1}>
      <div className="rounded-2xl overflow-hidden border border-nw-green/15"
        style={{ background: '#FFFFFF' }}>
        <div className="px-6 py-5 border-b border-black/[0.06]">
          <div className="flex items-center gap-3">
            <MapPin size={14} className="text-nw-green" />
            <h3 className="font-display font-bold text-base text-ink-100">Ideal learner journey at a city group event</h3>
          </div>
        </div>
        <div className="divide-y divide-black/[0.05]">
          {part6Data.idealJourney.map(({ step, detail }, i) => (
            <div key={step} className="flex items-start gap-5 px-6 py-5">
              <div className="w-7 h-7 rounded-full bg-nw-green/10 border border-nw-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="font-display font-bold text-[0.65rem] text-nw-green">{i + 1}</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-ink-100 text-sm mb-1">{step}</p>
                <p className="font-body text-ink-400 text-[0.82rem] leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealBlock>
  )
}

export default function Part6() {
  return (
    <section id="part6" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <SectionHeader
          num="06"
          label="Part 6"
          title="City groups"
          subtitle="A strategy to scale NextWork city groups from 0 to 50 US cities by end of 2026."
        />

        <Timeline />
        <HowToGrowSection />
        <IdealJourney />
      </div>
    </section>
  )
}

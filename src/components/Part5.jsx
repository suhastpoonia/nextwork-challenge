import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BarChart2, CheckSquare, Layers } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { part5Data } from '../data/content'

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

function StatStrip() {
  return (
    <RevealBlock>
      <div className="mb-12 grid gap-4 md:grid-cols-3">
        {part5Data.statCards.map(({ stat, label }) => (
          <div key={label} className="rounded-lg border border-black/[0.07] bg-white px-5 py-6 text-center">
            <p className="mb-2 font-display text-[2.6rem] font-extrabold leading-none tracking-tight text-black">{stat}</p>
            <p className="font-heading text-sm font-semibold text-ink-300">{label}</p>
          </div>
        ))}
      </div>
    </RevealBlock>
  )
}

function EssaySection({ title, paragraphs, index }) {
  return (
    <RevealBlock delay={index * 0.04}>
      <article className="mb-10 border-t border-black/15 pt-7">
        <h3 className="mb-4 font-display text-2xl font-bold text-ink-100">{title}</h3>
        <div className="space-y-4">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-4xl font-body text-[0.95rem] leading-8 text-ink-400">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </RevealBlock>
  )
}

function PillarsSection() {
  return (
    <RevealBlock delay={0.1}>
      <section className="mb-12 rounded-lg border border-black/10 bg-white p-8">
        <div className="mb-7 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-[#F8F6F0]">
            <Layers size={16} className="text-black" />
          </div>
          <div>
            <p className="font-display text-[0.62rem] font-bold uppercase tracking-[0.2em] text-black/55">The Content System I’d Run</p>
            <h3 className="font-display text-xl font-bold text-ink-100">Four pillars, simple enough to actually run</h3>
          </div>
        </div>

        <div className="grid gap-4">
          {part5Data.pillars.map(({ title, body }) => (
            <article key={title} className="rounded-lg border border-black/[0.08] bg-[#F8F6F0] p-5">
              <h4 className="mb-3 font-heading text-sm font-semibold text-ink-100">{title}</h4>
              <p className="font-body text-[0.86rem] leading-7 text-ink-400">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </RevealBlock>
  )
}

function MeasurementSection() {
  return (
    <RevealBlock delay={0.1}>
      <section className="mb-12 rounded-lg border border-black/10 bg-white p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-[#F8F6F0]">
            <BarChart2 size={16} className="text-black" />
          </div>
          <h3 className="font-display text-xl font-bold text-ink-100">How I’d measure it</h3>
        </div>
        <div className="space-y-4">
          {part5Data.measurement.map((paragraph) => (
            <p key={paragraph} className="max-w-4xl font-body text-[0.95rem] leading-8 text-ink-400">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </RevealBlock>
  )
}

function SelfAssessment() {
  const { selfAssessment } = part5Data
  return (
    <RevealBlock delay={0.1}>
      <div className="overflow-hidden rounded-lg border border-black/[0.07] bg-white">
        <div className="border-b border-black/[0.06] bg-[#F8F6F0] px-6 py-4">
          <div className="flex items-center gap-3">
            <CheckSquare size={15} className="text-black" />
            <h3 className="font-display text-base font-bold text-ink-100">Self-assessment of my Part 2 videos</h3>
          </div>
        </div>
        <div className="grid divide-y divide-black/[0.06] md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="px-6 py-5">
            <p className="mb-3 font-display text-[0.6rem] font-bold uppercase tracking-[0.2em] text-black/55">Strength</p>
            <ul className="space-y-2">
              {selfAssessment.strong.map((s) => (
                <li key={s} className="flex items-start gap-2 font-body text-[0.8rem] text-ink-400">
                  <span className="mt-0.5 flex-shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-5">
            <p className="mb-3 font-display text-[0.6rem] font-bold uppercase tracking-[0.2em] text-black/55">Improvement</p>
            <ul className="space-y-2">
              {selfAssessment.improve.map((s) => (
                <li key={s} className="flex items-start gap-2 font-body text-[0.8rem] text-ink-400">
                  <span className="mt-0.5 flex-shrink-0">→</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-5">
            <p className="mb-3 font-display text-[0.6rem] font-bold uppercase tracking-[0.2em] text-black/55">Test</p>
            <p className="font-body text-[0.82rem] leading-relaxed text-ink-400">{selfAssessment.nextTest}</p>
          </div>
        </div>
      </div>
    </RevealBlock>
  )
}

export default function Part5() {
  return (
    <section id="part5" className="py-24">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <SectionHeader
          num="05"
          label="Part 5"
          title="The growth engine"
          subtitle="What NextWork is already doing well, and what I’d build on top of it."
        />

        <StatStrip />
        {part5Data.sections.map((section, i) => (
          <EssaySection key={section.title} {...section} index={i} />
        ))}
        <PillarsSection />
        <MeasurementSection />
        <SelfAssessment />
      </div>
    </section>
  )
}

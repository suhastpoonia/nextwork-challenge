import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, AlertCircle, Zap, BarChart2, CheckSquare, ArrowRight } from 'lucide-react'
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
      <div className="grid grid-cols-3 gap-4 mb-14">
        {part5Data.keeping.map(({ stat, label, note }) => (
          <div key={label} className="text-center py-6 px-4 rounded-2xl border border-black/[0.07] bg-surface-2/40 relative overflow-hidden group hover:border-nw-coral/30 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-nw-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="font-display font-extrabold text-[2.8rem] leading-none tracking-tight text-nw-coral mb-1 relative z-10">{stat}</p>
            <p className="font-heading font-semibold text-ink-200 text-sm relative z-10">{label}</p>
            <p className="font-body text-ink-500 text-[0.72rem] mt-1 relative z-10">{note}</p>
          </div>
        ))}
      </div>
    </RevealBlock>
  )
}

function KeepDoingSection() {
  return (
    <RevealBlock delay={0.1}>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-nw-green/10 border border-nw-green/20 flex items-center justify-center">
            <TrendingUp size={14} className="text-nw-green" />
          </div>
          <h3 className="font-display font-bold text-xl text-ink-100">What's working - double down</h3>
        </div>
        <div className="grid gap-3">
          {part5Data.keepDoing.map(({ title, why }) => (
            <div key={title} className="flex gap-4 px-5 py-4 rounded-xl bg-nw-green/5 border border-nw-green/15 hover:border-nw-green/30 transition-colors duration-200">
              <div className="w-1.5 h-1.5 rounded-full bg-nw-green flex-shrink-0 mt-2" />
              <div>
                <p className="font-heading font-semibold text-ink-100 text-sm mb-1">{title}</p>
                <p className="font-body text-ink-400 text-[0.82rem] leading-relaxed">{why}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealBlock>
  )
}

function ImproveSection() {
  return (
    <RevealBlock delay={0.15}>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-nw-coral/10 border border-nw-coral/20 flex items-center justify-center">
            <AlertCircle size={14} className="text-nw-coral" />
          </div>
          <h3 className="font-display font-bold text-xl text-ink-100">What to fix</h3>
        </div>
        <div className="grid gap-5">
          {part5Data.improve.map(({ area, issue, fix }) => (
            <div key={area} className="rounded-xl overflow-hidden border border-black/[0.07]">
              <div className="px-5 py-3 bg-surface-3/50 border-b border-black/[0.06]">
                <span className="font-display text-[0.62rem] font-bold tracking-[0.18em] uppercase text-nw-coral">{area}</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-black/[0.06]">
                <div className="px-5 py-4">
                  <p className="font-display text-[0.58rem] font-bold tracking-[0.18em] uppercase text-ink-500 mb-2">Issue</p>
                  <p className="font-body text-ink-400 text-[0.82rem] leading-relaxed">{issue}</p>
                </div>
                <div className="px-5 py-4 bg-nw-coral/[0.04]">
                  <p className="font-display text-[0.58rem] font-bold tracking-[0.18em] uppercase text-nw-coral mb-2">Fix</p>
                  <p className="font-body text-ink-300 text-[0.82rem] leading-relaxed">{fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealBlock>
  )
}

function ContentSystemSection() {
  const { contentSystem } = part5Data
  return (
    <RevealBlock delay={0.1}>
      <div className="mb-12 relative rounded-2xl overflow-hidden border border-nw-purple/20"
        style={{ background: '#FFFFFF' }}>
        <div className="relative z-10 p-8">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-8 rounded-full bg-nw-purple/15 border border-nw-purple/25 flex items-center justify-center">
              <Zap size={14} className="text-nw-purple" />
            </div>
            <h3 className="font-display font-bold text-xl text-ink-100">The content system I'd run</h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Formats */}
            <div>
              <p className="font-display text-[0.62rem] font-bold tracking-[0.2em] uppercase text-nw-light mb-3">Formats</p>
              <ul className="space-y-2">
                {contentSystem.formats.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-body text-[0.82rem] text-ink-400">
                    <ArrowRight size={12} className="text-nw-purple flex-shrink-0 mt-1" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cadence */}
            <div>
              <p className="font-display text-[0.62rem] font-bold tracking-[0.2em] uppercase text-nw-light mb-3">Cadence</p>
              <p className="font-body text-ink-400 text-[0.82rem] leading-relaxed">{contentSystem.cadence}</p>
            </div>

            {/* Metrics */}
            <div>
              <p className="font-display text-[0.62rem] font-bold tracking-[0.2em] uppercase text-nw-light mb-3">Metrics</p>
              <ul className="space-y-1.5">
                {contentSystem.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-2 font-body text-[0.82rem] text-ink-400">
                    <BarChart2 size={11} className="text-nw-purple flex-shrink-0 mt-1" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Review cadence */}
            <div>
              <p className="font-display text-[0.62rem] font-bold tracking-[0.2em] uppercase text-nw-light mb-3">Review Cadence</p>
              <p className="font-body text-ink-400 text-[0.82rem] leading-relaxed">{contentSystem.review}</p>
            </div>
          </div>
        </div>
      </div>
    </RevealBlock>
  )
}

function SelfAssessment() {
  const { selfAssessment } = part5Data
  return (
    <RevealBlock delay={0.1}>
      <div className="rounded-2xl border border-black/[0.07] bg-surface-2/30 overflow-hidden">
        <div className="px-6 py-4 border-b border-black/[0.06] bg-surface-3/30">
          <div className="flex items-center gap-3">
            <CheckSquare size={15} className="text-nw-teal" />
            <h3 className="font-display font-bold text-base text-ink-100">Self-assessment of my Part 2 videos</h3>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-black/[0.06] p-0">
          <div className="px-6 py-5">
            <p className="font-display text-[0.6rem] font-bold tracking-[0.2em] uppercase text-nw-green mb-3">Strength</p>
            <ul className="space-y-2">
              {selfAssessment.strong.map((s) => (
                <li key={s} className="flex items-start gap-2 font-body text-[0.8rem] text-ink-400">
                  <span className="text-nw-green flex-shrink-0 mt-0.5">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-5">
            <p className="font-display text-[0.6rem] font-bold tracking-[0.2em] uppercase text-nw-coral mb-3">Improvement</p>
            <ul className="space-y-2">
              {selfAssessment.improve.map((s) => (
                <li key={s} className="flex items-start gap-2 font-body text-[0.8rem] text-ink-400">
                  <span className="text-nw-coral flex-shrink-0 mt-0.5">→</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-5">
            <p className="font-display text-[0.6rem] font-bold tracking-[0.2em] uppercase text-nw-teal mb-3">Test</p>
            <p className="font-body text-[0.82rem] text-ink-400 leading-relaxed">{selfAssessment.nextTest}</p>
          </div>
        </div>
      </div>
    </RevealBlock>
  )
}

export default function Part5() {
  return (
    <section id="part5" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <SectionHeader
          num="05"
          label="Part 5"
          title="The growth engine"
          subtitle="What's working, what to fix, and the content system I'd run."
        />

        <StatStrip />
        <KeepDoingSection />
        <ImproveSection />
        <ContentSystemSection />
        <SelfAssessment />
      </div>
    </section>
  )
}

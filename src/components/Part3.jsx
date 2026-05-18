import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ThumbsUp, MessageCircle, Repeat2, Send, Lightbulb } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { part3LinkedIn, part3NextSteps, part3WhyNotes } from '../data/content'

function NextWorkMark() {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="NextWork logo" className="h-full w-full">
      <circle cx="50" cy="50" r="43" fill="#1C1A18" stroke="#F7F4ED" strokeWidth="3.2" />
      <g fill="none" stroke="#F7F4ED" strokeWidth="3.2" strokeLinecap="square">
        <path d="M8 50h84" />
        <path d="M17 22C40 36 62 46 92 50" />
        <path d="M17 78C40 64 62 54 92 50" />
        <path d="M41 8C57 24 72 39 92 50" />
        <path d="M41 92C57 76 72 61 92 50" />
      </g>
    </svg>
  )
}

// ── LinkedIn Comment Card ─────────────────────────────────────────────────────
function LinkedInCard({ data, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* Learner post stub */}
      <div className="px-5 py-4 border-b border-gray-100 bg-[#F8F9FA]">
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0"
            style={{ backgroundColor: data.avatarBg }}
          >
            {data.avatarLetter}
          </div>
          <div>
            <p className="font-semibold text-[#000000E5] text-sm">{data.name}</p>
            <p className="text-[#00000099] text-xs leading-snug mt-0.5 max-w-[400px]">
              {data.postSummary}
            </p>
          </div>
        </div>
      </div>

      {/* NextWork reply */}
      <div className="px-5 py-5">
        <div className="flex items-start gap-3">
          {/* NextWork avatar */}
          <div className="w-9 h-9 rounded-full flex-shrink-0 overflow-hidden bg-[#1C1A18] p-0.5">
            <NextWorkMark />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-0.5">
              <p className="font-semibold text-[#000000E5] text-sm">NextWork</p>
              <p className="text-[#00000099] text-[0.65rem]">Just now</p>
            </div>
            <p className="text-[#00000099] text-[0.72rem] mb-2">Top of Funnel</p>

            <p className="text-[#000000E5] text-sm leading-relaxed whitespace-pre-wrap">
              {data.yourComment}
            </p>

            {/* Action row */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4">
                {[
                  { Icon: ThumbsUp, label: 'Like' },
                  { Icon: MessageCircle, label: 'Reply' },
                  { Icon: Repeat2, label: 'Repost' },
                  { Icon: Send, label: 'Send' },
                ].map(({ Icon, label }) => (
                  <button
                    key={label}
                    className="flex items-center gap-1.5 text-[#00000099] text-[0.7rem] font-semibold hover:text-[#0A66C2] transition-colors"
                  >
                    <Icon size={14} />
                    {label}
                  </button>
                ))}
              </div>
            <button className="bg-[#0A66C2] hover:bg-[#004182] transition-colors text-white text-xs font-semibold px-4 py-1.5 rounded-full">
              Comment
            </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Next Steps Box ────────────────────────────────────────────────────────────
function NextStepsBox() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-lg border border-black/10 bg-white"
    >
      <div className="relative z-10 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-full bg-nw-green/10 border border-nw-green/20 flex items-center justify-center">
            <Lightbulb size={16} className="text-nw-green" />
          </div>
          <h3 className="font-display font-bold text-xl text-ink-100">{part3NextSteps.title}</h3>
        </div>

        <p className="font-body text-ink-400 text-sm leading-relaxed mb-7">{part3NextSteps.intro}</p>

        <div className="grid gap-4">
          {part3NextSteps.sections.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-lg border border-black/[0.08] bg-[#F8F6F0] p-5"
            >
              <p className="font-heading font-semibold text-ink-100 text-sm mb-3">{title}</p>
              <div className="space-y-3">
                {body.map((paragraph) => (
                  <p key={paragraph} className="font-body text-ink-400 text-[0.82rem] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function WhyNotesBox() {
  return (
    <div className="mb-10 rounded-lg border border-black/10 bg-white p-8">
      <h3 className="mb-5 font-display text-xl font-bold text-ink-100">Why I wrote these comments</h3>
      <div className="grid gap-4">
        {part3WhyNotes.map(({ name, note }) => (
          <div key={name} className="rounded-lg border border-black/[0.08] bg-[#F8F6F0] p-5">
            <p className="mb-2 font-heading text-sm font-semibold text-ink-100">{name}</p>
            <p className="font-body text-[0.82rem] leading-relaxed text-ink-400">{note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function Part3() {
  return (
    <section id="part3" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <SectionHeader
          num="03"
          label="Part 3"
          title="Seen and celebrated"
          subtitle="Real comments for real learners and a system for making sure no learner post gets ignored."
        />

        <div className="grid gap-6 mb-10">
          {part3LinkedIn.map((item, i) => (
            <LinkedInCard key={item.id} data={item} index={i} />
          ))}
        </div>

        <WhyNotesBox />
        <NextStepsBox />
      </div>
    </section>
  )
}

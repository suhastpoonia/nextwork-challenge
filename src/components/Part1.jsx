import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Camera, Clock3, Mail, MessageCircle, MessageSquare, PlayCircle, Send, Smile } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { part1Data } from '../data/content'

const TABS = [
  { id: 'discord', Icon: MessageSquare, label: 'Discord' },
  { id: 'instagram', Icon: Camera, label: 'Instagram' },
  { id: 'email', Icon: Mail, label: 'Email' },
  { id: 'video', Icon: PlayCircle, label: 'Video' },
  { id: 'followUp', Icon: Clock3, label: 'Follow up' },
]

function DiscordBox({ data }) {
  return (
    <div className="overflow-hidden rounded-lg bg-[#313338] text-[#dbdee1] shadow-sm">
      <div className="flex items-center justify-between border-b border-black/30 bg-[#2b2d31] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none text-[#80848e]">#</span>
          <span className="text-sm font-semibold text-white">{data.channelName}</span>
        </div>
        <div className="hidden items-center gap-4 text-xs text-[#b5bac1] sm:flex">
          <span>Inbox</span>
          <span>Help</span>
        </div>
      </div>

      <div className="px-4 py-5">
        <div className="flex gap-3 rounded px-1 py-1">
          <div
            className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{ backgroundColor: data.avatarBg }}
          >
            {data.avatarLetter}
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-semibold text-white">{data.username}</span>
              <span className="text-[0.7rem] text-[#949ba4]">{data.timestamp}</span>
            </div>
            <div className="whitespace-pre-wrap text-[0.92rem] leading-7 text-[#dbdee1]">
              {data.content}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center gap-3 rounded-lg bg-[#383a40] px-4 py-3 text-sm text-[#949ba4]">
          <span className="text-xl leading-none">+</span>
          <span className="flex-1">Message #{data.channelName}</span>
          <span className="text-xs">GIF</span>
          <span>☺</span>
        </div>
      </div>
    </div>
  )
}

function InstagramBox({ data }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg border border-black/10 bg-white text-[#262626] shadow-sm">
      <div className="flex items-center gap-3 border-b border-black/10 px-4 py-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
        <span className="text-sm font-semibold">{data.username}</span>
      </div>

      <div className="px-4 py-4">
        <div className="mb-3 flex items-center gap-4">
          <button aria-label="Like" onClick={() => setLiked(!liked)} className="transition-transform active:scale-95">
            <MessageCircle size={22} className={liked ? 'fill-black text-black' : 'text-black'} />
          </button>
          <Send size={21} />
        </div>
        <p className="mb-3 text-sm font-semibold">127 likes</p>
        <p className="whitespace-pre-wrap text-sm leading-6">
          <span className="font-semibold">{data.username} </span>
          {data.content}
        </p>
        <p className="mt-3 text-xs uppercase text-black/45">{data.timestamp} ago</p>
      </div>

      <div className="flex items-center gap-3 border-t border-black/10 px-4 py-3 text-sm text-black/45">
        <Smile size={18} />
        <span>Add a comment...</span>
      </div>
    </div>
  )
}

function EmailBox({ data }) {
  return (
    <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
      <div className="max-h-[420px] overflow-y-auto whitespace-pre-wrap text-[0.94rem] leading-7 text-black">
        {data.body}
      </div>
    </article>
  )
}

function VideoBox({ data }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-3 shadow-sm">
      <video
        src={data.videoSrc}
        controls
        playsInline
        className="aspect-video w-full rounded-md bg-black object-cover"
        aria-label={`${data.label} video answer`}
      />
    </div>
  )
}

function FollowUpBox({ data }) {
  return (
    <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
      {data.followUp ? (
        <p className="whitespace-pre-wrap text-[0.94rem] leading-7 text-black">{data.followUp}</p>
      ) : (
        <p className="text-[0.94rem] leading-7 text-black/55">No follow-up was specified in the document for this answer.</p>
      )}
    </article>
  )
}

function QuestionCard({ data, index }) {
  const [activeTab, setActiveTab] = useState('discord')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  const tabs = data.followUp ? TABS : TABS.filter((tab) => tab.id !== 'followUp')

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-black/20 py-8"
    >
      <div className="mb-5 grid gap-3 md:grid-cols-[120px_1fr]">
        <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-black/55">{data.label}</p>
        <div>
          <h3 className="text-xl font-medium leading-tight text-black">{data.shortQ}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-black/60">{data.fullQ}</p>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2 md:ml-[120px]">
        {tabs.map(({ id, Icon, label }) => {
          const isActive = activeTab === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 border px-3 py-2 text-xs font-semibold transition-colors ${
                isActive
                  ? 'border-black bg-black text-white'
                  : 'border-black/20 bg-transparent text-black hover:border-black'
              }`}
            >
              <Icon size={14} />
              {label}
            </button>
          )
        })}
      </div>

      <div className="md:ml-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {activeTab === 'discord' && <DiscordBox data={data.discord} />}
            {activeTab === 'instagram' && <InstagramBox data={data.instagram} />}
            {activeTab === 'email' && <EmailBox data={data.email} />}
            {activeTab === 'video' && <VideoBox data={data} />}
            {activeTab === 'followUp' && <FollowUpBox data={data} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export default function Part1() {
  return (
    <section id="part1" className="py-24">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <SectionHeader
          num="01"
          label="Part 1"
          title="How I answer"
          subtitle="Six real learner questions and four ways to answer them."
        />

        <div>
          {part1Data.map((q, i) => (
            <QuestionCard key={q.id} data={q} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

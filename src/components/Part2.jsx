import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { part2Data } from '../data/content'

function formatLabel(video) {
  if (video.label) return video.label
  return `${video.challenge} - ${video.type === 'YouTube' ? 'Long form' : 'Short form'}`
}

function VideoCard({ video, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  const isShort = video.aspect === '9/16'

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`mx-auto w-full ${isShort ? 'max-w-[320px]' : 'max-w-[680px]'}`}
    >
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-black/65">
        {formatLabel(video)}
      </h3>
      <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
        {video.src ? (
          <video
            src={video.src}
            poster={video.poster}
            controls
            playsInline
            preload="metadata"
            className={`${isShort ? 'aspect-[9/16]' : 'aspect-video'} w-full bg-black object-cover`}
            aria-label={formatLabel(video)}
          />
        ) : (
          <div className={`${isShort ? 'aspect-[9/16]' : 'aspect-video'} flex items-center justify-center bg-white px-6 text-center text-sm text-black/55`}>
            Add video to public/media/{video.id}.mp4
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default function Part2() {
  return (
    <section id="part2" className="py-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <SectionHeader
          num="02"
          label="Part 2"
          title="Video content"
        />

        <div className="space-y-12">
          {part2Data.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

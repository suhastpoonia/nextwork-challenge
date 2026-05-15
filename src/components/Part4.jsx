import SectionHeader from './SectionHeader'
import { part4Video } from '../data/content'

function FeaturedPlayer({ video }) {
  return (
    <div className="mx-auto max-w-[820px] overflow-hidden rounded-lg border border-black/10 bg-white">
      <video
        src={video.src}
        poster={video.poster}
        controls
        playsInline
        preload="metadata"
        className="aspect-video w-full bg-black object-cover"
        aria-label={video.title}
      />
    </div>
  )
}

export default function Part4() {
  return (
    <section id="part4" className="py-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <SectionHeader
          num="04"
          label="Part 4"
          title="The first 10 touches"
          subtitle="Designing every moment so a learner feels like the house has been waiting for them specifically."
        />

        <FeaturedPlayer video={part4Video} />
      </div>
    </section>
  )
}

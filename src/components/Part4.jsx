import SectionHeader from './SectionHeader'
import { part4Interactions, part4Video } from '../data/content'

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

function InteractionRecap() {
  return (
    <div className="mt-10 grid gap-5">
      {part4Interactions.map(({ title, what, how }) => (
        <article key={title} className="rounded-lg border border-black/10 bg-white p-6">
          <h3 className="mb-4 text-lg font-semibold text-black">{title}</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-black/55">What happens</p>
              <p className="text-[0.88rem] leading-7 text-black/72">{what}</p>
            </div>
            <div>
              <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-black/55">Simplest way to achieve it</p>
              <p className="text-[0.88rem] leading-7 text-black/72">{how}</p>
            </div>
          </div>
        </article>
      ))}
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
        <InteractionRecap />
      </div>
    </section>
  )
}

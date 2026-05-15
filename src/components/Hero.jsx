import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-6 pb-16 pt-28 md:px-10">
        <div className="mb-5 overflow-hidden">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.4rem,10vw,9.5rem)] font-medium leading-[0.88] tracking-normal text-black"
          >
            Front of
          </motion.h1>
        </div>
        <div className="mb-8 overflow-hidden">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.4rem,10vw,9.5rem)] font-medium leading-[0.88] tracking-normal text-black"
          >
            House.
          </motion.h1>
        </div>

        <motion.p
          {...fadeUp(0.55)}
          className="max-w-[680px] text-[clamp(1rem,1.7vw,1.25rem)] leading-8 text-black/72"
        >
          Suhast Poonia . NextWork Top of Funnel Challenge · May 2026
        </motion.p>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-black/10 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-heading text-ink-100 text-sm">
            Suhast Poonia · May 2026
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

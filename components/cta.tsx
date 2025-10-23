"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import TextType from "./TextType"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="inscricao"
      className="py-32 px-6 md:px-20 bg-gradient-to-b from-black via-[#0C2E1F]/30 to-black"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1200px] mx-auto text-center"
      >
        <h2 className="text-5xl md:text-6xl font-black uppercase mb-8 text-balance">
          <TextType
            as="span"
            text="Desperte o Código do Futuro"
            typingSpeed={45}
            variableSpeed={{ min: 20, max: 60 }}
            initialDelay={200}
            showCursor
            hideCursorWhileTyping={false}
            startOnVisible
            className="[text-shadow:0_0_20px_rgba(10,255,157,0.35)]"
          />
        </h2>
        <p className="text-xl text-[#9E9E9E] mb-12 max-w-2xl mx-auto text-pretty">
          Não perca a oportunidade de fazer parte da maior semana acadêmica de tecnologia da UTFPR.
        </p>

        <motion.a
          href="https://forms.gle/inscricao"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-12 py-6 bg-[#00FF88] text-black text-xl font-black rounded-lg hover:bg-[#0AFF9D] hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] transition-all"
        >
          INSCREVA-SE AGORA
        </motion.a>
      </motion.div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import LetterGlitch from "@/components/letter-glitch"
import ASCIIText from "@/components/ascii-text"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "> carregando conhecimento..."

  // Efeito de digitação
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          index = 0
        }, 2000)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  // Scroll suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden text-center"
    >
      {/* Fundo animado tipo Matrix */}
      <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={["#0c2e1f", "#00ff88", "#1b5a42"]}
          glitchSpeed={50}
          smooth
          outerVignette
        />
      </div>
      <div className="absolute inset-0 bg-black/70" />

      {/* Conteúdo principal */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo ASCII centralizada */}
        <div className="flex items-center justify-center w-full mb-8">
          {/* Mobile: container menor */}
          <div className="relative w-full h-64 max-w-lg sm:hidden">
            <ASCIIText
              text="Setac²"
              asciiFontSize={6}
              textFontSize={120}
              textColor="#ffffff"
              planeBaseHeight={8}
              enableWaves
            />
          </div>
          {/* Tablet: container médio */}
          <div className="relative hidden sm:block md:hidden w-full h-64 max-w-2xl">
            <ASCIIText
              text="Setac²"
              asciiFontSize={6}
              textFontSize={120}
              textColor="#ffffff"
              planeBaseHeight={8}
              enableWaves
            />
          </div>
          {/* Desktop: container grande */}
          <div className="relative hidden md:block w-full h-80 max-w-4xl lg:h-96 lg:max-w-5xl">
            <ASCIIText
              text="Setac²"
              asciiFontSize={8}
              textFontSize={180}
              textColor="#ffffff"
              planeBaseHeight={12}
              enableWaves
            />
          </div>
          <h1 className="sr-only">Setac²</h1>
        </div>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl lg:text-3xl text-[#9E9E9E] mb-4 leading-snug">
          Inovação, Código e Conhecimento em Movimento.
        </p>

        {/* Texto animado “carregando conhecimento” */}
        <div className="font-mono text-[#00FF88] text-lg md:text-xl lg:text-2xl mb-10 h-8">
          {displayText}
          <span className="animate-pulse">_</span>
        </div>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("calendario")}
            className="px-8 py-3 border-2 border-[#00FF88] text-[#00FF88] rounded font-semibold hover:bg-[#00FF88] hover:text-black hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all"
          >
            Ver Programação
          </button>
          <button
            onClick={() => scrollToSection("cursos")}
            className="px-8 py-3 bg-[#00FF88] text-black rounded font-semibold hover:bg-[#0AFF9D] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all"
          >
            Inscreva-se
          </button>
        </div>
      </motion.div>
    </section>
  )
}

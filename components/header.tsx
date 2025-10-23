"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold text-[#00FF88]">CACIC</div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-semibold hover:text-[#00FF88] transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("calendario")}
            className="text-sm font-semibold hover:text-[#00FF88] transition-colors"
          >
            Calendário
          </button>
          <button
            onClick={() => scrollToSection("cursos")}
            className="text-sm font-semibold hover:text-[#00FF88] transition-colors"
          >
            Mini Cursos
          </button>
          <button
            onClick={() => scrollToSection("palestras")}
            className="text-sm font-semibold hover:text-[#00FF88] transition-colors"
          >
            Palestras
          </button>
        </nav>

        <button
          onClick={() => scrollToSection("inscricao")}
          className="bg-[#00FF88] text-black px-6 py-2 rounded font-semibold text-sm hover:bg-[#0AFF9D] hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-all"
        >
          Inscreva-se
        </button>
      </div>
    </motion.header>
  )
}

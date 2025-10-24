"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const schedule = [
  {
    day: "Terca-Feira",
    date: "11/11",
    events: [
      { time: "09:00", title: "Cerimônia de Abertura", type: "Cerimônia" },
      { time: "10:30", title: "Palestra de Abertura", type: "Palestra" },
      { time: "11:00", title: "Minha IA não só vê, como também (acha que) explica!", type: "Oficina" },
      { time: "13:00", title: "Workshop: Git & GitHub", type: "Oficina" },
      { time: "14:00", title: "Do zero ao deploy: desenvolvimento de Aplicativo Mobile", type: "Oficina" },
    ],
  },
  {
    day: "Quarta-feira",
    date: "12/11",
    events: [
      { time: "09:00", title: "Mesa Redonda: Incubados Sprint", type: "Mesa" },
      { time: "11:30", title: "Spring Boot na Prática: Construindo APIs que Voam", type: "Curso" },
      { time: "12:30", title: "Unity: do zero a um projeto funcional", type: "Curso" },
      { time: "14:00", title: "Palestra: Cybersegurança Essencial", type: "Palestra" },
      { time: "17:00", title: "Introdução à AWS: Da Nuvem ao Lambda", type: "Curso" },
    ],
  },
  {
    day: "Quinta-feira",
    date: "13/11",
    events: [
      { time: "09:00", title: "Mesa Redonda com os Itercambistas", type: "Mesa" },
      { time: "14:00", title: "Maratona de Programação", type: "Competição" },
      { time: "17:00", title: "Encerramento e Premiação", type: "Cerimônia" },
    ],
  },

]

export function Schedule() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="calendario" className="py-24 px-6 md:px-20 bg-black" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Programação</h2>
          <p className="text-[#9E9E9E] text-lg">Confira a agenda completa da semana</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0C2E1F]/20 border border-[#0C2E1F] rounded-lg p-6 hover:border-[#00FF88] transition-all"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#00FF88]">{day.day}</h3>
                <p className="text-[#9E9E9E]">{day.date}</p>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="border-l-2 border-[#00FF88] pl-4">
                    <p className="text-sm text-[#00FF88] font-semibold">{event.time}</p>
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-sm text-[#9E9E9E]">{event.type}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

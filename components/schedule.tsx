"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const schedule = [
  {
    day: "Segunda-feira",
    date: "12/08",
    events: [
      { time: "09:00", title: "Abertura Oficial", type: "Cerimônia" },
      { time: "10:30", title: "Palestra: O Futuro da IA", type: "Palestra" },
      { time: "14:00", title: "Workshop: React na Prática", type: "Oficina" },
    ],
  },
  {
    day: "Terça-feira",
    date: "13/08",
    events: [
      { time: "09:00", title: "Mesa Redonda: Inovação Acadêmica", type: "Mesa" },
      { time: "13:30", title: "Mini Curso: Python para Dados", type: "Curso" },
    ],
  },
  {
    day: "Quarta-feira",
    date: "14/08",
    events: [
      { time: "09:00", title: "Introdução à Inteligência Artificial", type: "Curso" },
      { time: "14:00", title: "Palestra: Blockchain e Web3", type: "Palestra" },
    ],
  },
  {
    day: "Quinta-feira",
    date: "15/08",
    events: [
      { time: "10:00", title: "Design de Interfaces Futuristas", type: "Workshop" },
      { time: "15:00", title: "Mesa: Sustentabilidade Tech", type: "Mesa" },
    ],
  },
  {
    day: "Sexta-feira",
    date: "16/08",
    events: [
      { time: "09:00", title: "Hackathon Final", type: "Competição" },
      { time: "14:00", title: "Automação e Robótica Aplicada", type: "Curso" },
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

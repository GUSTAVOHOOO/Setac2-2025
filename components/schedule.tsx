"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin } from "lucide-react"

const schedule = [
  {
    day: "Terca-Feira",
    date: "11/11",
    events: [
      { time: "08:00", title: "Recepção - Abertura Oficial da Semana Acadêmica", type: "Cerimônia", location: "Auditório Principal" },
      { time: "08:15", title: "O Mercado de Trabalho e Oportunidades no Ecossistema Iguassu Valley", type: "Palestra", location: "Auditório Principal" },
      { time: "09:30", title: "Coffee Break", type: "Intervalo", location: "Hall do Auditório" },
      { time: "10:00", title: "Minha IA não só vê, como também (acha que) explica!", type: "Oficina", location: "Lab de Informática 5" },
      { time: "13:00", title: "Do zero ao deploy: desenvolvimento de aplicativo mobile", type: "Oficina", location: "Lab de Informática 5" },
      { time: "18:00", title: "Coffee Break", type: "Intervalo", location: "Hall do Auditório" },
      ]
  },
  {
    day: "Quarta-feira",
    date: "12/11",
    events: [
      { time: "08:00", title: "Da Ideia à Inovação: A Experiencia de Incubar uma Empresa", type: "Mesa", location: "Auditório Principal" },
      { time: "09:30", title: "Coffee Break", type: "Intervalo", location: "Hall do Auditório" },
      { time: "10:00", title: "Ataques DDoS, porque este Ataque tem sido foco de Atenção na Segurança de Redes", type: "Palestra", location: "Auditório Principal" },
      { time: "15:30", title: "Unity: do Zero a um Projeto Funcional", type: "Oficina", location: "Laboratório E9" },
      { time: "18:00", title: "Coffee Break", type: "Intervalo", location: "Hall do Auditório" },
    ],
  },
  {
    day: "Quinta-feira",
    date: "13/11",
    events: [
      { time: "08:00", title: "Do Campus ao Mundo: Historias de Dupla Titulação", type: "Mesa", location: "Auditório Principal" },
      { time: "09:00", title: "Oportunidade de Pos-graduação na UTFPR-Santa Helena", type: "Palestra", location: "Auditório Principal" },
      { time: "09:45", title: "Coffee Break", type: "Intervalo", location: "Hall do Auditório" },
      { time: "10:00", title: "Primeiros Passos na Nuvem com AWS", type: "Oficina", location: "Laboratório 5" },
      { time: "13:00", title: "Maratona de Programação", type: "Competição", location: "Laboratório E9" },
      { time: "17:30", title: "Encerramento e Premiação", type: "Cerimônia", location: "Auditório Principal" },
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
                    {event.location && (
                      <div className="mt-1 flex items-center gap-2 text-xs text-[#9E9E9E]">
                        <MapPin className="size-3" aria-hidden="true" />
                        <span>{event.location}</span>
                      </div>
                    )}
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

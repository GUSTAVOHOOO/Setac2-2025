"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { CourseModal } from "./course-modal"

const courses = [
  {
    id: 1,
    title: " Minha IA não só vê, como também (acha que) explica!",
    speaker: "Lucas Buligon",
    image: "/buligon.jpg",
    date: "11/11",
    time: "09:00 - 11:00",
    description:
      " Nesta oficina prática, vamos construir um pipeline 2-em-1: uma IA que detecta os objetos e uma integração com o Gemini que usa essa informação para analisar o contexto. Você vai sair daqui com um sistema que não só vê, como também (acha que) explica a cena inteira.",
    link: "https://forms.gle/inscricao1",
  },
  {
    id: 2,
    title: "Do zero ao deploy: desenvolvimento de Aplicativo Mobile",
    speaker: "Alecsander Johan Pontes de Andrade",
    image: "/alecssander.jpeg",
    date: "11/11",
    time: "14:00 - 18:00",
    description:
      "Um mergulho prático no desenvolvimento de aplicativos móveis, explorando todo o ciclo de criação — do backend ao frontend. Serão abordados fundamentos de desenvolvimento fullstack, arquitetura e padrões de projeto, bancos de dados não relacionais, e segurança da informação com foco em autenticação. O curso também cobre versionamento de código, observabilidade em apps móveis e os princípios essenciais de CI/CD, preparando você para construir aplicações modernas, seguras e escaláveis.",
    link: "https://forms.gle/inscricao2",
  },
  {
    id: 3,
    title: "Automação e Robótica Aplicada",
    speaker: "Eng. Mariana Costa",
    image: "/professional-woman-engineer-robotics.jpg",
    date: "16/08",
    time: "14:00 - 16:00",
    description:
      "Demonstração prática de automação industrial e robótica com foco em integração de sistemas e controle inteligente.",
    link: "https://forms.gle/inscricao3",
  },
  {
    id: 4,
    title: "Blockchain e Web3",
    speaker: "Dr. Rafael Santos",
    image: "/professional-man-blockchain-developer.jpg",
    date: "14/08",
    time: "14:00 - 16:00",
    description:
      "Explore o mundo descentralizado da Web3, entendendo blockchain, smart contracts e o futuro da internet.",
    link: "https://forms.gle/inscricao4",
  },
  {
    id: 5,
    title: "Python para Ciência de Dados",
    speaker: "Dra. Juliana Oliveira",
    image: "/professional-woman-data-scientist-python.jpg",
    date: "13/08",
    time: "13:30 - 16:30",
    description:
      "Aprenda a manipular, analisar e visualizar dados usando Python, pandas, numpy e matplotlib em projetos práticos.",
    link: "https://forms.gle/inscricao5",
  },
  {
    id: 6,
    title: "React na Prática",
    speaker: "Carlos Mendes",
    image: "/professional-man-react-developer-coding.jpg",
    date: "12/08",
    time: "14:00 - 17:00",
    description:
      "Workshop hands-on de React, construindo aplicações modernas com hooks, context API e melhores práticas de desenvolvimento.",
    link: "https://forms.gle/inscricao6",
  },
]

export function Courses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null)

  return (
    <>
      <section id="cursos" className="py-24 px-6 md:px-20 bg-black" ref={ref}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Mini Cursos & Palestras</h2>
            <p className="text-[#9E9E9E] text-lg">Aprenda com especialistas da indústria</p>
          </motion.div>

          <div id="palestras" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0C2E1F]/20 border border-[#0C2E1F] rounded-lg overflow-hidden hover:border-[#00FF88] hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] hover:scale-105 transition-all cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.speaker}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-balance">{course.title}</h3>
                  <p className="text-[#00FF88] font-semibold mb-4">{course.speaker}</p>
                  <div className="flex items-center gap-2 text-sm text-[#9E9E9E]">
                    <span>{course.date}</span>
                    <span>•</span>
                    <span>{course.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </>
  )
}

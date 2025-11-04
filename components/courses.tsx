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
    time: "10:00 - 12:00",
    description:
      " Nesta oficina prática, vamos construir um pipeline 2-em-1: uma IA que detecta os objetos e uma integração com o Gemini que usa essa informação para analisar o contexto. Você vai sair daqui com um sistema que não só vê, como também (acha que) explica a cena inteira.",
    link: "https://forms.gle/YqayDs37huNihGeS6",
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
    link: "https://forms.gle/jyYoN6RVJvaiZWnb9",
  },
  {
    id: 3,
    title: "Unity: do zero a um projeto funcional",
    speaker: "Jose Carlos Seben de Souza Leite",
    image: "/jose.jpg",
    date: "12/11",
    time: "15:30 - 17:00",
    description:
      "Nosso mini curso será uma experiência teórica e prática sobre o desenvolvimento de jogos, abordando conceitos fundamentais, boas práticas e aspectos cognitivos do processo criativo. O foco principal será a engine Unity, onde trabalharemos em um projeto já estruturado, mas com detalhes faltando. Caberá aos participantes, com a orientação do instrutor, identificar e solucionar esses desafios, aplicando os conceitos aprendidos de forma prática",
    link: "https://forms.gle/5CevhgxbNEYuMsG39",
  },
  {
    id: 4,
    title: "Primeiros Passos na Nuvem com AWS",
    speaker: "Wellington de Souza Ferreira",
    image: "/wellington.jpeg",
    date: "13/11",
    time: "10:00 - 12:00",
    description:
      'Um mergulho inicial no universo da Amazon Web Services. Vamos entender o que é computação em nuvem, explorar os serviços essenciais da AWS e criar nossa primeira função Lambda na prática. Sem complicar, sem mistérios — só o prazer de descobrir como a nuvem pensa.',  
    link: "https://forms.gle/g4pKa4mxJW1FNtLc6",
  },
  {
    id: 5,
    title: "Java para o Mercado; Construindo sua Primeira API REST",
    speaker: "Giuvanne Conti",
    image: "/giuvanne.jpeg",
    date: "12/11",
    time: "13:00 - 17:00",
    description:
      "Um encontro rápido e direto com o ecossistema Spring. A proposta é entender como o Spring Boot simplifica o desenvolvimento em Java e colocar a mão na massa construindo uma API funcional, com rotas, controle e persistência. Um passo firme rumo ao desenvolvimento profissional: da ideia ao endpoint, sem enrolação.",
    link: "https://forms.gle/9irQJUGZm2qA212R8",
  },
  {
    id: 6,
    title: "Ataques DDoS, porque este Ataque tem sido foco de Atenção na Segurança de Redes",
    speaker: "Euclides Pereira Faria Junior",
    image: "/euclides.jpeg",
    date: "12/11",
    time: "10:00 - 12:00",
    description:
      "Um workshop prático sobre os fundamentos da cibersegurança, abordando as principais ameaças e como se proteger no ambiente digital. Serão discutidos tópicos como segurança em redes, proteção de dados e melhores práticas para garantir a segurança da informação.",
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

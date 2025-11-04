"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Calendar, Target, Gift } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Competition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const rulesRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToRules = () => {
    rulesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }



  return (
    <section id="competicao" className="pt-24 px-6 md:px-20 bg-black" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        {/* Micro Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Competição de Programação</h2>
          <p className="text-[#9E9E9E] text-xl mb-8">Prove seu código. Resolva desafios. Suba no placar.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                scrollToForm()
                console.log("click_competicao_cta", { origin: "header" })
              }}
              className="px-8 py-6 bg-[#00FF88] text-black text-lg font-black rounded-lg hover:bg-[#0AFF9D] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all"
            >
              Inscrever-se
            </button>
            <button
              onClick={() => {
                scrollToRules()
                console.log("open_rules", { origin: "header" })
              }}
              className="px-8 py-6 border-2 border-[#00FF88] text-[#00FF88] bg-transparent text-lg font-semibold rounded-lg hover:bg-[#00FF88] hover:text-black transition-all"
            >
              Ler Regras
            </button>
          </div>
        </motion.div>

        {/* Grid de Cards Informativos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-[#0C2E1F]/20 border-[#0C2E1F] hover:border-[#00FF88] transition-colors h-full">
              <CardHeader>
                <Trophy className="w-10 h-10 text-[#00FF88] mb-2" />
                <CardTitle className="text-xl font-bold">Como Funciona</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#9E9E9E]">
                  Desafios algorítmicos em tempo real. Resolva problemas de programação competitiva e suba no ranking.
                  <br />
                  <br />
                  <strong className="text-white">Linguagens aceitas:</strong> C, C++, Java, Python, JavaScript
                  <br />
                  <strong className="text-white">Formato:</strong> Solo ou Equipe (até 3 pessoas)
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-[#0C2E1F]/20 border-[#0C2E1F] hover:border-[#00FF88] transition-colors h-full">
              <CardHeader>
                <Calendar className="w-10 h-10 text-[#00FF88] mb-2" />
                <CardTitle className="text-xl font-bold">Cronograma</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#9E9E9E]">
                  <strong className="text-white">Inscrições:</strong> Até 13/11/2025
                  <br />
                  <strong className="text-white">Competição:</strong> 13/11/2025, 13:30 – 17:00
                  <br />
                  <strong className="text-white">Premiação:</strong> 13/11/2025, 17:30
                  <br />
                  <br />
                  <em className="text-sm">* Horários sujeitos a ajustes</em>
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-[#0C2E1F]/20 border-[#0C2E1F] hover:border-[#00FF88] transition-colors h-full">
              <CardHeader>
                <Target className="w-10 h-10 text-[#00FF88] mb-2" />
                <CardTitle className="text-xl font-bold">Critérios de Pontuação</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#9E9E9E]">
                  <strong className="text-white">Ranking por:</strong>
                  <br />
                  1. Número de problemas resolvidos
                  <br />
                  2. Tempo total (penalidade por tentativas erradas)
                  <br />
                  <br />
                  O placar pode "congelar" nos últimos 30 minutos para aumentar a tensão final.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-[#0C2E1F]/20 border-[#0C2E1F] hover:border-[#00FF88] transition-colors h-full">
              <CardHeader>
                <Gift className="w-10 h-10 text-[#00FF88] mb-2" />
                <CardTitle className="text-xl font-bold">Prêmios</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#9E9E9E]">
                  <strong className="text-white">1º Lugar:</strong> Medalha de ouro + certificado + brinde exclusivo
                  <br />
                  <strong className="text-white">2º Lugar:</strong> Medalha de prata + certificado + brinde
                  <br />
                  <strong className="text-white">3º Lugar:</strong> Medalha de bronze + certificado
                  <br />
                  <br />
                  Todos os participantes recebem certificado de participação.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Acordeão de Regras */}
        <motion.div
          ref={rulesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold uppercase mb-6 text-center">Regras da Competição</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-[#0C2E1F]">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00FF88] transition-colors">
                Formação (Solo / Equipe)
              </AccordionTrigger>
              <AccordionContent className="text-[#9E9E9E]">
                <p>
                  Participantes podem competir individualmente (solo) ou em equipes de até 3 pessoas. Equipes devem
                  compartilhar apenas um computador durante a prova. Todos os membros devem estar presentes e
                  registrados.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-[#0C2E1F]">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00FF88] transition-colors">
                Materiais Permitidos
              </AccordionTrigger>
              <AccordionContent className="text-[#9E9E9E]">
                <p>
                  <strong>Permitidos:</strong> Livros impressos, notas manuscritas, IDE offline sem acesso à internet
                  (exceto para submissão).
                </p>
                <p className="mt-2">
                  <strong>Proibidos:</strong> Comunicação com outros competidores, uso de celulares, consulta a sites
                  externos (exceto documentação oficial das linguagens), uso de código pré-escrito para problemas
                  específicos.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-[#0C2E1F]">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00FF88] transition-colors">
                Conduta e Fair Play
              </AccordionTrigger>
              <AccordionContent className="text-[#9E9E9E]">
                <p>
                  Qualquer tentativa de fraude, plágio, ou violação das regras resultará em desclassificação imediata.
                  Respeite os organizadores, fiscais e demais participantes. Mantenha um ambiente colaborativo e
                  profissional.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-[#0C2E1F]">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00FF88] transition-colors">
                Critérios de Desempate
              </AccordionTrigger>
              <AccordionContent className="text-[#9E9E9E]">
                <p>
                  Em caso de empate no número de problemas resolvidos, será considerado o menor tempo acumulado
                  (incluindo penalidades por submissões incorretas). Se persistir o empate, o primeiro a resolver o
                  último problema vence.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-[#0C2E1F]">
              <AccordionTrigger className="text-lg font-semibold hover:text-[#00FF88] transition-colors">
                Verificação e Recursos
              </AccordionTrigger>
              <AccordionContent className="text-[#9E9E9E]">
                <p>
                  Os juízes se reservam o direito de revisar qualquer submissão suspeita. Participantes podem entrar
                  com recurso até 30 minutos após o término da competição. A decisão final é dos organizadores.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

interface Course {
  id: number
  title: string
  speaker: string
  image: string
  date: string
  time: string
  description: string
  link: string
}

interface CourseModalProps {
  course: Course | null
  onClose: () => void
}

export function CourseModal({ course, onClose }: CourseModalProps) {
  useEffect(() => {
    if (course) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [course])

  return (
    <AnimatePresence>
      {course && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-black border-2 border-[#00FF88] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.speaker}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-[#00FF88] hover:text-black rounded-full transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-black uppercase mb-2 text-balance">{course.title}</h2>
              <p className="text-[#00FF88] text-xl font-semibold mb-4">{course.speaker}</p>

              <div className="flex items-center gap-4 text-[#9E9E9E] mb-6">
                <span>📅 {course.date}</span>
                <span>•</span>
                <span>🕐 {course.time}</span>
              </div>

              <p className="text-[#9E9E9E] leading-relaxed mb-8 text-pretty">{course.description}</p>

              {course.id !== 6 && (
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-[#00FF88] text-black text-center font-bold rounded hover:bg-[#0AFF9D] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all"
                >
                  Inscreva-se Agora
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

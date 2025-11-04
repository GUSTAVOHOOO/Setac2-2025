"use client"

import { Hero } from "@/components/hero"
import { Schedule } from "@/components/schedule"
import { Courses } from "@/components/courses"
import { Competition } from "@/components/competition"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Courses />
        <Competition />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Poppins, Montserrat, Roboto } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Semana Acadêmica UTFPR 2025",
  description: "Inovação, Código e Conhecimento em Movimento",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${montserrat.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

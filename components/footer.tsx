import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#0C2E1F] py-12 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#00FF88] mb-4">UTFPR</h3>
            <p className="text-[#9E9E9E] text-sm">Universidade Tecnológica Federal do Paraná</p>
          </div>



          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cacic_sh/"
                className="w-10 h-10 flex items-center justify-center border border-[#0C2E1F] rounded hover:border-[#00FF88] hover:text-[#00FF88] transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="size-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/centro-acad%C3%AAmico-ci%C3%AAncias-da-computa%C3%A7%C3%A3o-utfpr-campus-santa-helena/posts/?feedView=all"
                className="w-10 h-10 flex items-center justify-center border border-[#0C2E1F] rounded hover:border-[#00FF88] hover:text-[#00FF88] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#0C2E1F] pt-8 text-center text-sm text-[#9E9E9E]">
          <p>© 2025 UTFPR – Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

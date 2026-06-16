import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-4 border-zinc-950 bg-white">
      <div className="px-6 md:px-20 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-sm font-bold text-zinc-800 font-mono">
          © {new Date().getFullYear()} BIMO SATRIAJI. ALL RIGHTS RESERVED.
        </p>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:bimosatriaji6@gmail.com"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-950 bg-white text-zinc-950 shadow-[2px_2px_0px_#18181b] hover:bg-cyber-pink hover:text-white hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_#18181b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#18181b] transition-all transform duration-150"
            aria-label="Email"
          >
            <Mail size={16} className="stroke-[2.5px]" />
          </a>

          <a
            href="https://github.com/Noctissinnit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-950 bg-white text-zinc-950 shadow-[2px_2px_0px_#18181b] hover:bg-cyber-yellow hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_#18181b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#18181b] transition-all transform duration-150"
            aria-label="GitHub"
          >
            <Github size={16} className="stroke-[2.5px]" />
          </a>

          <a
            href="https://www.linkedin.com/in/bimo-satriaji-571885318/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-950 bg-white text-zinc-950 shadow-[2px_2px_0px_#18181b] hover:bg-cyber-blue hover:text-white hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_#18181b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#18181b] transition-all transform duration-150"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} className="stroke-[2.5px]" />
          </a>
        </div>
      </div>
    </footer>
  )
}

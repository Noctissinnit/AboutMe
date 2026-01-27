import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-white shadow-lg">
      <div className="px-10 md:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-sm font-semibold text-zinc-700">
          © {new Date().getFullYear()} Bimo Satriaji. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:bimosatriaji6@gmail.com"
            className="text-zinc-600 hover:text-primary transition transform hover:scale-125"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://github.com/Noctissinnit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-primary transition transform hover:scale-125"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/bimo-satriaji-571885318/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-primary transition transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

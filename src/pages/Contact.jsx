import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-20 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <span className="blob bg-primaryLight/10 bottom-10 left-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-cyber-yellow border-4 border-zinc-950 rounded-cartoony p-8 md:p-12 shadow-brutalist relative overflow-hidden"
      >
        {/* Decorative Corner Square */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-cyber-orange border-b-4 border-l-4 border-zinc-950 transform rotate-45 translate-x-10 -translate-y-10 hidden sm:block select-none" />

        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-zinc-950 tracking-tighter">
          LET’S WORK TOGETHER!
        </h2>

        {/* Section Subtitle */}
        <p className="text-lg md:text-xl text-zinc-900 mb-8 max-w-2xl font-bold leading-relaxed">
          Saya terbuka untuk peluang magang maupun kerja penuh waktu (full-time) sebagai Web Developer. 
          Hubungi saya jika Anda mencari seseorang yang menyukai pembuatan aplikasi web yang bersih, terstruktur, dan andal.
        </p>

        {/* Primary CTA Button */}
        <a
          href="mailto:bimosatriaji6@gmail.com"
          className="inline-flex items-center gap-2.5 bg-zinc-950 text-white border-3 border-zinc-950 px-8 py-4 rounded-cartoon font-extrabold shadow-cartoon hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150 select-none cursor-pointer"
        >
          <Mail size={20} className="stroke-[3px]" />
          <span>Send Me an Email</span>
        </a>

        {/* Social Links List */}
        <div className="flex gap-4 mt-10 flex-wrap">
          <a
            href="https://github.com/Noctissinnit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-cartoon border-3 border-zinc-950 text-zinc-950 font-extrabold bg-white shadow-cartoon hover:bg-zinc-100 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150 select-none cursor-pointer"
          >
            <Github size={18} className="stroke-[2.5px]" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/bimo-satriaji-571885318/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-cartoon border-3 border-zinc-950 text-zinc-950 font-extrabold bg-white shadow-cartoon hover:bg-cyber-blue hover:text-white hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150 select-none cursor-pointer"
          >
            <Linkedin size={18} className="stroke-[2.5px]" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://wa.link/db546m"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-cartoon border-3 border-zinc-950 text-zinc-950 font-extrabold bg-white shadow-cartoon hover:bg-cyber-green hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150 select-none cursor-pointer"
          >
            <MessageCircle size={18} className="stroke-[2.5px]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}

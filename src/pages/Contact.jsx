import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MessageCircle, Settings } from "lucide-react"
import mewoGif from "../assets/mewo.gif"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-20 py-24 bg-cyber-yellow border-b-4 border-zinc-950 overflow-hidden"
    >
      {/* Background Retro Grid Details */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(24,24,27,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <span className="blob bg-primaryLight/10 bottom-10 left-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full relative z-10"
      >

        {/* Left Info Panel */}
        <div className="flex-1">
          {/* Blueprint index tag */}
          <div className="font-mono text-[10px] font-black text-zinc-950/50 uppercase tracking-widest mb-3 select-none">
            [ 📞 SEC_05 // GET IN TOUCH ]
          </div>

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
        </div>

        {/* Right Animated Construction Widget */}
        <div className="relative w-48 h-48 border-4 border-zinc-950 rounded-cartoon bg-white shadow-cartoon flex items-center justify-center overflow-hidden shrink-0 mx-auto select-none">
          {/* Pulsing hazard light */}
          <div className="absolute top-3 right-3 flex items-center justify-center">
            <span className="w-3.5 h-3.5 rounded-full bg-cyber-orange border-2 border-zinc-950 animate-ping absolute" />
            <span className="w-3.5 h-3.5 rounded-full bg-cyber-orange border-2 border-zinc-950" />
          </div>

          {/* Background gears spinning behind the image */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="text-zinc-100 absolute"
            style={{ top: "8%", left: "8%" }}
          >
            <Settings size={80} className="stroke-[1.5px]" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="text-zinc-200/60 absolute"
            style={{ bottom: "10%", right: "10%" }}
          >
            <Settings size={60} className="stroke-[1.5px]" />
          </motion.div>

          {/* Mewo Omori GIF with subtle hover float */}
          <motion.div
            animate={{ 
              y: [0, -4, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.15 }}
            className="relative z-10 w-36 h-36 flex items-center justify-center"
          >
            <img 
              src={mewoGif} 
              alt="Mewo Omori" 
              className="w-full h-full object-contain"
              style={{ imageRendering: "pixelated" }}
            />
          </motion.div>

          {/* Under construction hazard stripes tape */}
          <div 
            className="absolute bottom-0 left-0 w-full h-6 border-t-3 border-zinc-950 select-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #FEE135, #FEE135 8px, #18181b 8px, #18181b 16px)'
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

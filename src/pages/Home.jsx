import { motion } from "framer-motion"
import profile from "../assets/profile/hero-no-white.png"
import CVButton from "../components/CVButton"

// === RETRO AUDIO SYNTHESIZER (Web Audio API) ===
const playDragSound = () => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = "triangle"
    osc.frequency.setValueAtTime(250, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(750, ctx.currentTime + 0.12)
    gain.gain.setValueAtTime(0.03, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.12)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.12)
  } catch (e) {}
}

export default function Home() {
  const marqueeItems = [
    "Laravel Framework",
    "React JS",
    "Next JS",
    "Tailwind CSS",
    "MySQL Database",
    "RESTful API",
    "Software Engineering",
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden pt-32 pb-16"
    >
      {/* === BACKGROUND ACCENTS === */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* subtle floating glows */}
        <span className="blob bg-primaryLight/15 top-20 left-10" />
        <span className="blob bg-cyber-yellow/10 bottom-20 right-20" />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
        
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-none mb-6 text-zinc-950 tracking-tighter">
            Building <span className="underline decoration-cyber-orange decoration-8 md:decoration-[10px]">Scalable</span><br />
            Web Experiences
          </h1>

          {/* Sticker-like Tech Tags */}
          <div className="flex gap-3 flex-wrap mb-8">
            {["Laravel", "React", "Tailwind", "MySQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-extrabold border-3 border-zinc-950 rounded-cartoon text-zinc-950 bg-white shadow-cartoon hover:bg-cyber-yellow hover:-translate-y-0.5 hover:shadow-cartoony transition-all duration-200 cursor-default select-none"
              >
                #{tech}
              </span>
            ))}
          </div>

          <p className="text-xl text-zinc-800 mb-6 max-w-xl font-semibold leading-relaxed">
            Backend – Frontend Web Developer dengan fokus kuat pada Laravel,
            modern UI, dan aplikasi web yang scalable.
          </p>

          <p className="text-zinc-600 mb-14 max-w-xl font-medium leading-relaxed">
            Saat ini mengejar gelar Bachelor di Software Engineering, berpengalaman
            dalam membangun sistem internal dan aplikasi web berbasis klien.
          </p>

          {/* CTA Buttons & Animated Doodle Arrow */}
          <div className="flex gap-4 flex-wrap relative">
            <a
              href="#experience"
              className="inline-flex items-center justify-center bg-zinc-950 text-white border-3 border-zinc-950 px-8 py-3.5 rounded-cartoon font-extrabold shadow-cartoon hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150"
            >
              View Experience
            </a>

            <CVButton variant="outline" />

            {/* Curvy Hand-drawn SVG Arrow pointing from bio to CTA buttons */}
            <div className="absolute left-[380px] -top-12 hidden lg:block select-none pointer-events-none w-36 h-20">
              <svg width="100%" height="100%" viewBox="0 0 120 70" fill="none" className="text-zinc-950 rotate-[-10deg]">
                <motion.path
                  d="M100,5 Q60,40 15,55"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                />
                {/* Arrowhead */}
                <motion.path
                  d="M28,48 L15,55 L22,67"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                  viewport={{ once: true }}
                />
              </svg>
              <span className="absolute right-0 -top-2 text-[10px] font-black uppercase tracking-wider font-mono text-cyber-orange bg-white border border-zinc-950 px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_#18181b] rotate-[8deg]">
                start here!
              </span>
            </div>
          </div>
        </motion.div>

        {/* Profile Image (Direct transparent PNG without frame) with Draggable badges */}
        <div className="relative mx-auto w-fit order-1 md:order-2 mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 select-none"
          >
            <img
              src={profile}
              alt="Bimo Satriaji"
              className="w-full h-full object-contain select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>

          {/* Floating Sticker: Open for work (Draggable) */}
          <motion.div
            drag
            dragSnapToOrigin
            dragElastic={0.2}
            onDragStart={playDragSound}
            whileDrag={{ scale: 1.1, rotate: 0 }}
            className="absolute -top-4 -left-6 z-30 bg-cyber-green text-zinc-950 border-3 border-zinc-950 px-4 py-2 font-extrabold text-sm uppercase tracking-wider shadow-cartoon rotate-[-6deg] select-none cursor-grab active:cursor-grabbing hover:bg-white transition-colors duration-200"
          >
            ★ OPEN FOR WORK
          </motion.div>

          {/* Floating Sticker: React Badge (Draggable) */}
          <motion.div
            drag
            dragSnapToOrigin
            dragElastic={0.25}
            onDragStart={playDragSound}
            whileDrag={{ scale: 1.15, rotate: 12 }}
            className="absolute bottom-12 -right-8 z-30 bg-white border-3 border-zinc-950 px-3 py-1.5 text-xs font-black font-mono rounded-cartoon shadow-cartoon rotate-12 select-none cursor-grab active:cursor-grabbing hover:bg-cyber-blue hover:text-white transition-colors duration-200"
          >
            ⚛ React.js
          </motion.div>

          {/* Floating Sticker: Laravel Badge (Draggable) */}
          <motion.div
            drag
            dragSnapToOrigin
            dragElastic={0.25}
            onDragStart={playDragSound}
            whileDrag={{ scale: 1.15, rotate: -6 }}
            className="absolute top-1/2 -left-12 z-30 bg-white border-3 border-zinc-950 px-3 py-1.5 text-xs font-black font-mono rounded-cartoon shadow-cartoon -rotate-6 select-none cursor-grab active:cursor-grabbing hover:bg-cyber-orange hover:text-white transition-colors duration-200"
          >
            🔥 Laravel
          </motion.div>

          {/* Floating Sticker: PHP Badge (Draggable) */}
          <motion.div
            drag
            dragSnapToOrigin
            dragElastic={0.25}
            onDragStart={playDragSound}
            whileDrag={{ scale: 1.15, rotate: -12 }}
            className="absolute top-4 -right-4 z-30 bg-white border-3 border-zinc-950 px-3 py-1.5 text-xs font-black font-mono rounded-cartoon shadow-cartoon rotate-[-12deg] select-none cursor-grab active:cursor-grabbing hover:bg-cyber-yellow transition-colors duration-200"
          >
            🐘 PHP
          </motion.div>
        </div>
      </div>

      {/* === RUNNING MARQUEE SKILLS BANNER === */}
      <div className="w-[115vw] relative left-1/2 -translate-x-1/2 overflow-hidden border-t-4 border-b-4 border-zinc-950 bg-cyber-yellow py-4 mt-20 z-20 rotate-[-1deg] shadow-cartoon">
        <motion.div 
          className="flex whitespace-nowrap gap-10 font-display text-2xl font-extrabold uppercase tracking-widest text-zinc-950"
          animate={{ x: [0, -1200] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {Array(8).fill(marqueeItems).flat().map((item, idx) => (
            <span key={idx} className="flex items-center gap-4">
              <span>{item}</span>
              <span className="w-3.5 h-3.5 bg-zinc-950 rounded-full" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

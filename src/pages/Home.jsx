import { motion } from "framer-motion"
import profile from "../assets/profile/hero-no-white.png"
import CVButton from "../components/CVButton"


export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-10 md:px-20 overflow-hidden pt-16"
    >
      {/* === LIVE BACKGROUND === */}
      <div className="absolute inset-0 -z-10">
        {/* base gradient */}
        <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-blue-100" />

        {/* floating blobs */}
        <span className="blob bg-primaryLight/50 top-20 left-10" />
        <span className="blob bg-primary/40 bottom-20 right-20" />
        <span className="blob bg-blue-200/50 top-1/2 left-1/2" />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-black">
            Building <span className="text-primary">Scalable</span><br />
            Web Experiences
          </h1>

          {/* Tech stack */}
          <div className="flex gap-3 flex-wrap mb-8">
            {["Laravel", "React", "Tailwind", "MySQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-semibold border-3 border-primary rounded-cartoony text-primary bg-primaryLight/20 hover:bg-primary hover:text-white transition-all transform hover:scale-110"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-xl text-zinc-700 mb-6 max-w-xl font-medium">
            Backend – Frontend Web Developer dengan fokus kuat pada Laravel,
            modern UI, dan aplikasi web yang scalable.
          </p>

          <p className="text-zinc-600 mb-8 max-w-xl">
            Saat ini mengejar gelar Bachelor di Software Engineering, berpengalaman
            dalam membangun sistem internal dan aplikasi web berbasis klien.
          </p>

        <div className="flex gap-4 flex-wrap">
            <a
                href="#experience"
                className="inline-block bg-primary text-white px-8 py-3 rounded-cartoony font-bold cartoon-shadow hover:scale-110 transition-all transform hover:-translate-y-1"
            >
                View Experience
            </a>

            <CVButton variant="outline" />
        </div>
        
        </motion.div>

        {/* Photo */}
        <motion.img
          src={profile}
          alt="Bimo Satriaji"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
          transition={{ 
            opacity: { duration: 0.6 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-120 h-120 object-cover rounded-2xl mx-auto"
        />
      </div>
    </section>
  )
}

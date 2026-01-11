import { motion } from "framer-motion"
import profile from "../assets/profile/profile2.png"
import CVButton from "../components/CVButton"


export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-10 md:px-20 overflow-hidden"
    >
      {/* === LIVE BACKGROUND === */}
      <div className="absolute inset-0 -z-10">
        {/* base gradient */}
        <div className="w-full h-full bg-gradient-to-br from-green-100 via-white to-green-50" />

        {/* floating blobs */}
        <span className="blob bg-green-200/40 top-20 left-10" />
        <span className="blob bg-green-300/30 bottom-20 right-20" />
        <span className="blob bg-green-100/50 top-1/2 left-1/2" />
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
                className="px-4 py-1 text-sm border border-zinc-300 rounded-full text-zinc-700 bg-white"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-xl text-zinc-600 mb-6 max-w-xl">
            Backend – Frontend Web Developer with a strong focus on Laravel,
            modern UI, and scalable web applications.
          </p>

          <p className="text-zinc-500 mb-8 max-w-xl">
            Currently pursuing a Bachelor’s degree in Software Engineering,
            experienced in building internal systems and client-based web
            applications.
          </p>

        <div className="flex gap-4 flex-wrap">
            <a
                href="#experience"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold soft-shadow hover:scale-105 transition-transform"
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
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-72 h-72 object-cover rounded-2xl border border-zinc-200 soft-shadow mx-auto"
        />
      </div>
    </section>
  )
}

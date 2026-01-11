
import { motion } from "framer-motion"
import profileImage from "../assets/profile/profile2.png"

export default function About() {
  const techStack = [
    "Laravel",
    "PHP",
    "React",
    "Tailwind CSS",
    "MySQL",
    "REST API",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section
      id="about"
      className="px-6 md:px-20 py-24 bg-gradient-to-b from-white to-emerald-50/30"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        
        {/* Image with enhanced visual effects */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl transform -rotate-6 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-3xl transform rotate-3" />
          
          {/* Profile image */}
          <div className="relative z-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <img
              src={profileImage}
              alt="Bimo Satriaji"
              className="relative w-80 h-80 object-cover rounded-3xl border-2 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Content with staggered animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-zinc-700 mb-4 leading-relaxed text-lg"
          >
            I'm a <span className="font-semibold text-emerald-700">Software Engineering student</span> 
            {' '}with a strong interest in building scalable and maintainable web applications.
            I enjoy working on real-world systems that solve practical problems.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-zinc-600 mb-4 leading-relaxed"
          >
            My experience mostly revolves around <span className="font-semibold text-zinc-800">
            Laravel-based backend systems</span> combined with clean and modern
            frontend interfaces. I'm comfortable working with role-based systems,
            internal tools, and data-driven applications.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-zinc-600 mb-10 leading-relaxed"
          >
            I value clean architecture, clear communication, and continuous learning.
            I believe good software is not only functional, but also easy to understand
            and maintain.
          </motion.p>

          {/* Tech Stack with enhanced design */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-4 text-zinc-800 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
              Tech Focus
            </h3>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  viewport={{ once: true }}
                  className="px-5 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border border-emerald-200/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Optional CTA button */}
          <motion.div 
            variants={itemVariants}
            className="mt-10"
          >
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
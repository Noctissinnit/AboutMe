import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-10 md:px-20 py-28 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-green-100" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="section-title">
          Let’s Work Together
        </h2>

        <p className="section-subtitle">
          I’m open to internship and full-time opportunities as a web developer.
          Feel free to reach out if you’re looking for someone who enjoys building
          clean, scalable, and reliable web applications.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:bimosatriaji6@gmail.com"
          className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold soft-shadow hover:scale-105 active:scale-95 transition-transform"
        >
          <Mail size={20} />
          Contact Me
        </a>
        

        {/* Social links */}
        <div className="flex gap-6 mt-10">
          <a
            href="https://github.com/Noctissinnit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-600 hover:text-black transition"
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/bimo-satriaji-571885318/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-600 hover:text-black transition"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-10 md:px-20 py-28 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-white to-primary/5" />

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
          className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-cartoony font-bold cartoon-shadow hover:scale-110 active:scale-95 transition-all transform hover:-translate-y-1"
        >
          <Mail size={20} />
          Contact Me
        </a>
        

        {/* Social links */}
        <div className="flex gap-6 mt-10 flex-wrap">
          <a
            href="https://github.com/Noctissinnit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-cartoony border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition transform hover:scale-110"
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/bimo-satriaji-571885318/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-cartoony border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition transform hover:scale-110"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://wa.link/db546m"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-cartoony border-2 border-green-500 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition transform hover:scale-110"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  )
}

import { motion } from "framer-motion"
import profileImage from "../assets/profile/profile2.png"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function About() {
  const techStack = [
    "Laravel",
    "PHP",
    "React",
    "Tailwind CSS",
    "MySQL",
    "REST API",
  ]

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:bimosatriaji6@gmail.com",
      label: "Email",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      icon: Github,
      href: "https://github.com/Noctissinnit",
      label: "GitHub",
      color: "bg-gray-900 hover:bg-black",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bimo-satriaji-571885318/",
      label: "LinkedIn",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/62",
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
    },
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
      className="px-6 md:px-20 py-24 pt-40 bg-gradient-to-b from-white via-blue-50 to-white"
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-cartoony blur-2xl transform -rotate-6 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-cartoony transform rotate-3" />
          
          {/* Profile image */}
          <div className="relative z-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primaryLight rounded-cartoony blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <img
              src={profileImage}
              alt="Bimo Satriaji"
              className="relative w-80 h-80 object-cover rounded-cartoony border-4 border-primary shadow-lg transition-transform duration-500 group-hover:scale-105 cartoon-shadow select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              About Me
            </h2>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-zinc-700 mb-4 leading-relaxed text-lg"
          >
            I'm a <span className="font-bold text-primary">Software Engineering student</span> 
            {' '}with a strong interest in building scalable and maintainable web applications.
            I enjoy working on real-world systems that solve practical problems.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-zinc-700 mb-4 leading-relaxed font-medium"
          >
            My experience mostly revolves around <span className="font-bold text-primary">
            Laravel-based backend systems</span> combined with clean and modern
            frontend interfaces. I'm comfortable working with role-based systems,
            internal tools, and data-driven applications.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-zinc-700 mb-10 leading-relaxed font-medium"
          >
            I value clean architecture, clear communication, and continuous learning.
            I believe good software is not only functional, but also easy to understand
            and maintain.
          </motion.p>

          {/* Tech Stack with enhanced design */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-4 text-black text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Tech Focus
            </h3>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  viewport={{ once: true }}
                  className="px-5 py-2.5 text-sm font-bold rounded-cartoony bg-primary text-white border-2 border-primary shadow-md hover:shadow-lg transition-all duration-300 cursor-default cartoon-shadow"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className={`p-3 rounded-cartoony text-white cartoon-shadow hover:shadow-lg transition-all transform ${social.color}`}
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
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
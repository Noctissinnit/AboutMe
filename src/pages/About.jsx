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
      color: "bg-[#f472b6] hover:bg-[#18181b] text-white",
    },
    {
      icon: Github,
      href: "https://github.com/Noctissinnit",
      label: "GitHub",
      color: "bg-[#18181b] hover:bg-[#FEE135] hover:text-[#18181b] text-white",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bimo-satriaji-571885318/",
      label: "LinkedIn",
      color: "bg-[#3b82f6] hover:bg-[#18181b] text-white",
    },
    {
      icon: MessageCircle,
      href: "https://wa.link/db546m",
      label: "WhatsApp",
      color: "bg-[#4ade80] hover:bg-[#18181b] text-white",
    },
  ]

  return (
    <section
      id="about"
      className="px-6 md:px-20 py-32 pt-40"
    >
      {/* Page Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-5xl md:text-7xl font-black text-zinc-950 tracking-tighter uppercase">
          About <span className="text-primary">Me</span>
        </h1>
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs font-mono mt-2">
          ★ Get to know more about me!
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Box 1: Profile Story (Col-span 2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-white border-3 border-zinc-950 rounded-cartoony p-8 shadow-cartoon flex flex-col justify-between cursor-default"
        >
          <div>
            <h2 className="text-3xl font-extrabold mb-4 text-zinc-950 tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-6 bg-cyber-orange rounded-full" />
              The Journey
            </h2>
            <p className="text-zinc-700 mb-4 leading-relaxed font-semibold text-lg">
              Saya adalah seorang <span className="font-extrabold text-primary underline decoration-cyber-yellow decoration-4">Mahasiswa S1 Software Engineering</span> dengan ketertarikan mendalam dalam membangun aplikasi web yang skalabel dan mudah dipelihara.
            </p>
            <p className="text-zinc-600 mb-4 leading-relaxed font-medium">
              Pengalaman saya berpusat pada sistem backend berbasis **Laravel** yang dipadukan dengan antarmuka frontend yang bersih, fungsional, dan modern. Saya sangat menyukai pengerjaan sistem otorisasi multi-role, pembuatan perangkat internal korporasi, serta optimalisasi alur pengolahan data.
            </p>
            <p className="text-zinc-600 leading-relaxed font-medium">
              Prinsip utama saya dalam menulis kode adalah menjaga keterbacaan, kebersihan arsitektur, dan kemudahan pemeliharaan sistem. Bagi saya, kode yang baik tidak hanya bekerja tetapi juga ramah terhadap pengembang lain yang akan mengelolanya di masa depan.
            </p>
          </div>
        </motion.div>

        {/* Box 2: Profile Photo (Col-span 1) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-cyber-yellow border-3 border-zinc-950 rounded-cartoony p-6 shadow-cartoon flex flex-col items-center justify-center relative group overflow-hidden"
        >
          <div className="absolute top-2 right-2 w-10 h-10 bg-white border-2 border-zinc-950 rounded-full flex items-center justify-center font-black rotate-12 group-hover:rotate-0 transition duration-300 shadow-[2px_2px_0px_#18181b] text-sm">
            BIMO
          </div>
          <div className="relative w-56 h-56 border-3 border-zinc-950 rounded-cartoon overflow-hidden shadow-cartoon bg-white rotate-[-3deg] group-hover:rotate-0 transition duration-300 select-none">
            <img
              src={profileImage}
              alt="Bimo Satriaji"
              className="w-full h-full object-cover"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className="text-center mt-5 font-mono text-zinc-950 font-black tracking-widest text-xs uppercase">
            SOFTWARE ENGINEER
          </div>
        </motion.div>

        {/* Box 3: Tech Focus (Col-span 1) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white border-3 border-zinc-950 rounded-cartoony p-6 shadow-cartoon flex flex-col justify-between cursor-default"
        >
          <div>
            <h3 className="text-xl font-extrabold mb-4 text-zinc-950 tracking-tight flex items-center gap-2">
              <span className="w-2 h-5 bg-cyber-green rounded-full" />
              Tech Focus
            </h3>
            <p className="text-xs font-semibold text-zinc-500 mb-6 font-mono uppercase">★ Technologies I use daily</p>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-xs font-extrabold rounded-cartoon bg-white text-zinc-900 border-2 border-zinc-950 shadow-[2px_2px_0px_#18181b] hover:bg-cyber-yellow hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#18181b] transition-all transform duration-150 cursor-default select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Box 4: Education & Soft Skills (Col-span 2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-white border-3 border-zinc-950 rounded-cartoony p-8 shadow-cartoon flex flex-col md:flex-row gap-6 justify-between cursor-default"
        >
          {/* Education list */}
          <div className="flex-1">
            <h3 className="text-xl font-extrabold mb-4 text-zinc-950 tracking-tight flex items-center gap-2">
              <span className="w-2 h-5 bg-cyber-blue rounded-full" />
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-black text-zinc-950">S1 SOFTWARE ENGINEERING</p>
                <p className="text-xs font-bold text-cyber-orange uppercase font-mono">Universitas Pignatelli Triputra</p>
                <p className="text-xs font-semibold text-zinc-500 font-mono">2024 - Sekarang</p>
              </div>
              <div className="border-t border-zinc-200 pt-3">
                <p className="text-sm font-black text-zinc-950">SMK REKAYASA PERANGKAT LUNAK</p>
                <p className="text-xs font-bold text-cyber-orange uppercase font-mono">SMK Negeri 2 Surakarta</p>
                <p className="text-xs font-semibold text-zinc-500 font-mono">2021 - 2024</p>
              </div>
            </div>
          </div>

          {/* Soft skills list */}
          <div className="flex-1 border-t md:border-t-0 md:border-l border-zinc-200 pt-4 md:pt-0 md:pl-6">
            <h3 className="text-xl font-extrabold mb-4 text-zinc-950 tracking-tight flex items-center gap-2">
              <span className="w-2 h-5 bg-cyber-pink rounded-full" />
              Core Strengths
            </h3>
            <ul className="grid grid-cols-2 gap-3 font-bold text-sm text-zinc-700">
              {["★ Problem Solving", "★ Team Collaboration", "★ Team Leadership", "★ Communication"].map((skill) => (
                <li key={skill} className="bg-zinc-50 border border-zinc-900 px-3 py-2 rounded-lg font-mono shadow-[1px_1px_0px_#18181b]">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Box 5: Let's Connect Social Box (Col-span 3) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:col-span-3 bg-[#ff5e36] border-[3px] border-[#18181b] rounded-cartoony p-6 md:p-8 shadow-[6px_6px_0px_#18181b] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase select-none">
              Let's build something awesome together!
            </h3>
            <p className="text-sm font-bold text-zinc-950 font-mono mt-1 select-none">
              ★ HUBUNGI SAYA MELALUI SALURAN SOSIAL MEDIA BERIKUT:
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-full border-[3px] border-[#18181b] shadow-[2px_2px_0px_#18181b] hover:shadow-[4px_4px_0px_#18181b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#18181b] transition-all transform duration-150 ${social.color}`}
                  aria-label={social.label}
                >
                  <Icon size={22} className="stroke-[2.5px]" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
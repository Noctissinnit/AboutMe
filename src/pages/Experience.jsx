import experience from "../data/experience"
import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-20 py-24 bg-zinc-200 border-b-4 border-zinc-950"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="font-mono text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 select-none">
            [ 💼 SEC_03 // CAREER TIMELINE ]
          </div>
          <h2 className="section-title">
            Experience
          </h2>
          <p className="section-subtitle">
            My professional and internship experiences in software development,
            focusing on real-world systems and collaboration.
          </p>
        </motion.div>

        {/* Experience List with Vertical Timeline Line */}
        <div className="relative space-y-10">
          {/* Vertical Line */}
          <div className="absolute left-8 top-4 bottom-4 w-1.5 bg-zinc-950 hidden sm:block rounded-full" />

          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border-3 border-zinc-950 rounded-cartoon p-6 md:p-8 shadow-cartoon hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150 relative sm:ml-16 cursor-default"
            >
              {/* Timeline Bullet Dot */}
              <div className="absolute -left-[39px] top-9 w-6 h-6 rounded-full border-3 border-zinc-950 bg-cyber-yellow hidden sm:flex items-center justify-center shadow-[2px_2px_0px_#18181b]" />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-cyber-orange font-black text-sm uppercase tracking-wider font-mono mt-1">
                    {exp.company}
                  </p>
                </div>

                <span className="text-xs font-bold bg-white text-zinc-950 border-2 border-zinc-950 px-3 py-1 rounded-cartoon shadow-[2px_2px_0px_#18181b] mt-2 md:mt-0 font-mono self-start">
                  {exp.period}
                </span>
              </div>

              {/* Timeline Points */}
              <ul className="space-y-3 font-semibold text-zinc-600">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span className="text-cyber-yellow font-black text-base select-none leading-none mt-1">★</span>
                    <span className="leading-relaxed text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import experience from "../data/experience"
import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-10 md:px-20 py-24"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14 max-w-3xl"
      >
        <h2 className="section-title">
          Experience
        </h2>
        <p className="section-subtitle">
          My professional and internship experiences in software development,
          focusing on real-world systems and collaboration.
        </p>
      </motion.div>

      {/* Experience List */}
      <div className="space-y-10">
        {experience.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border-3 border-primary rounded-cartoony p-6 md:p-8 hover:cartoon-shadow transition transform hover:scale-105"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-black">
                  {exp.role}
                </h3>
                <p className="text-primary font-bold">
                  {exp.company}
                </p>
              </div>

              <span className="text-sm font-semibold text-primary mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>

            {/* Bullet Points */}
            <ul className="list-disc list-inside text-zinc-700 space-y-2 font-medium">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

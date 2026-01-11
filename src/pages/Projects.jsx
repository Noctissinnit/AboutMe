import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import ProjectModal from "../components/ProjectModal"

const INITIAL_COUNT = 4

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [selectedProject, setSelectedProject] = useState(null)

  const visibleProjects = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length

  return (
    <>
      <section
        id="projects"
        className="px-10 md:px-20 py-24 bg-zinc-50"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            A collection of web applications I’ve built, focusing on
            clean architecture, scalability, and real-world usage.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  {...project}
                  onOpen={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setVisibleCount(projects.length)}
              className="px-8 py-4 rounded-xl border border-emerald-300 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
            >
              Load More Projects
            </button>
          </div>
        )}
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

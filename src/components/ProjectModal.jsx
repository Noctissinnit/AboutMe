import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi"

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-white rounded-cartoony p-8 overflow-y-auto max-h-[90vh] border-4 border-primary cartoon-shadow"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-700"
          >
            <FiX size={22} />
          </button>

          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-cartoony mb-6 border-3 border-primary"
          />

          {/* Title */}
          <h3 className="text-2xl font-bold mb-2 text-black">
            {project.title}
          </h3>

          <p className="text-zinc-700 mb-6 font-medium">
            {project.desc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold bg-primary text-white px-3 py-1 rounded-cartoony border border-primary"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6 text-sm text-zinc-700 leading-relaxed">
            <div>
              <h4 className="font-semibold mb-1">Problem</h4>
              <p>{project.problem}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Solution</h4>
              <p>{project.solution}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">My Role</h4>
              <p>{project.role}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-cartoony border-2 border-zinc-900 text-zinc-900 font-semibold hover:bg-zinc-900 hover:text-white transition transform hover:scale-105"
              >
                <FiGithub /> View Code
              </a>
            )}

            {project.demo && project.demo !== "" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-cartoony bg-primary text-white font-semibold hover:bg-primaryDark transition transform hover:scale-105"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

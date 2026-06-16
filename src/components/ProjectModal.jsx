import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi"

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 backdrop-blur-sm px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-white rounded-cartoon p-6 md:p-8 overflow-y-auto max-h-[90vh] border-4 border-zinc-950 shadow-brutalist"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-950 border-3 border-zinc-950 p-2 rounded-md bg-white hover:bg-cyber-yellow shadow-[2px_2px_0px_#18181b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#18181b] transition-all cursor-pointer"
          >
            <FiX size={20} className="stroke-[3px]" />
          </button>

          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-cartoon mb-6 border-3 border-zinc-950 select-none shadow-cartoon"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Title */}
          <h3 className="text-3xl font-extrabold mb-2 text-zinc-950 tracking-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-zinc-600 mb-6 font-semibold leading-relaxed">
            {project.desc}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-bold bg-zinc-100 text-zinc-900 px-3 py-1 rounded-cartoon border-2 border-zinc-950 font-mono shadow-[2px_2px_0px_#18181b]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Content Columns divided by line borders */}
          <div className="grid md:grid-cols-3 gap-6 text-sm text-zinc-700 leading-relaxed pt-6 border-t-3 border-zinc-950">
            <div className="border-b-2 md:border-b-0 md:border-r-2 border-zinc-950 pb-4 md:pb-0 md:pr-4">
              <h4 className="font-extrabold text-zinc-950 uppercase tracking-wider mb-2 font-mono text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-2 bg-cyber-orange rounded-full" />
                Problem
              </h4>
              <p className="font-semibold text-zinc-600 leading-relaxed">{project.problem}</p>
            </div>

            <div className="border-b-2 md:border-b-0 md:border-r-2 border-zinc-950 pb-4 md:pb-0 md:pr-4">
              <h4 className="font-extrabold text-zinc-950 uppercase tracking-wider mb-2 font-mono text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-2 bg-cyber-green rounded-full" />
                Solution
              </h4>
              <p className="font-semibold text-zinc-600 leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <h4 className="font-extrabold text-zinc-950 uppercase tracking-wider mb-2 font-mono text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-2 bg-cyber-yellow rounded-full" />
                My Role
              </h4>
              <p className="font-semibold text-zinc-600 leading-relaxed">{project.role}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t-3 border-zinc-950 flex gap-4 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-cartoon border-3 border-zinc-950 text-zinc-950 font-extrabold bg-white shadow-cartoon hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150"
              >
                <FiGithub className="stroke-[2.5px]" /> View Code
              </a>
            )}

            {project.demo && project.demo !== "" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-cartoon border-3 border-zinc-950 text-zinc-950 font-extrabold bg-cyber-yellow shadow-cartoon hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150"
              >
                <FiExternalLink className="stroke-[2.5px]" /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}


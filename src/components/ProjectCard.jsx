import { motion } from "framer-motion"
import { FiGithub, FiExternalLink, FiGlobe } from "react-icons/fi"

export default function ProjectCard({
  title,
  desc,
  tech,
  image,
  github,
  demo,
  website,
  onOpen,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={onOpen}
      className="group cursor-pointer bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:soft-shadow transition"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-zinc-900">
          {title}
        </h3>

        <p className="text-zinc-600 mb-4 text-sm leading-relaxed">
          {desc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition"
            >
              <FiGithub /> Code
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition"
            >
              <FiGlobe /> Website
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

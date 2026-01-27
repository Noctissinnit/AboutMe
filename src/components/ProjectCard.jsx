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
      whileHover={{ y: -8 }}
      onClick={onOpen}
      className="group cursor-pointer bg-white border-3 border-primary rounded-cartoony overflow-hidden cartoon-shadow hover:shadow-xl transition transform hover:scale-105"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover group-hover:scale-110 transition duration-300 select-none"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-black">
          {title}
        </h3>

        <p className="text-zinc-700 mb-4 text-sm leading-relaxed">
          {desc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold bg-primary text-white px-3 py-1 rounded-cartoony border border-primary"
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
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-cartoony border-2 border-zinc-900 text-zinc-900 font-semibold hover:bg-zinc-900 hover:text-white transition transform hover:scale-105"
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
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-cartoony bg-primary text-white font-semibold hover:bg-primaryDark transition transform hover:scale-105"
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
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-cartoony bg-zinc-900 text-white font-semibold hover:bg-black transition transform hover:scale-105"
            >
              <FiGlobe /> Website
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

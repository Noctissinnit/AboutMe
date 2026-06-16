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
      className="group cursor-pointer bg-white border-3 border-zinc-950 rounded-cartoon overflow-hidden shadow-cartoon hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-200"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden border-b-3 border-zinc-950 h-52 relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-300 select-none"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
        {/* Floating Category/Tech Badge */}
        <div className="absolute top-3 right-3 bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 border border-zinc-950 rounded-md font-mono shadow-[2px_2px_0px_#ff5e36]">
          PROJECT
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-extrabold mb-2 text-zinc-950 tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-zinc-600 mb-5 text-sm font-medium leading-relaxed">
          {desc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-bold bg-zinc-50 text-zinc-900 px-3 py-1 rounded-cartoon border-2 border-zinc-950 font-mono shadow-[2px_2px_0px_#18181b]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-cartoon border-2 border-zinc-950 text-zinc-950 font-extrabold bg-white shadow-[2px_2px_0px_#18181b] hover:bg-cyber-yellow hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#18181b] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150"
            >
              <FiGithub className="stroke-[2.5px]" /> Code
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-cartoon border-2 border-zinc-950 text-zinc-950 font-extrabold bg-cyber-yellow shadow-[2px_2px_0px_#18181b] hover:bg-cyber-orange hover:text-white hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#18181b] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150"
            >
              <FiExternalLink className="stroke-[2.5px]" /> Demo
            </a>
          )}

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-cartoon border-2 border-zinc-950 text-zinc-950 font-extrabold bg-cyber-blue text-white shadow-[2px_2px_0px_#18181b] hover:bg-zinc-950 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#18181b] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150"
            >
              <FiGlobe className="stroke-[2.5px]" /> Website
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

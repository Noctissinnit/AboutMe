import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

import projects from "../data/projects"
import ProjectModal from "../components/ProjectModal"

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [filterCategory, setFilterCategory] = useState("ALL")
  const [selectedProject, setSelectedProject] = useState(null)

  // 5 Latest Projects for Carousel (ordered from newest to oldest based on array definition)
  const latestProjects = [...projects].slice(-5).reverse()

  const getCategory = (project) => {
    const lpIds = [6, 7]
    if (lpIds.includes(project.id)) return "Landing Page"
    return "ERP"
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % latestProjects.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + latestProjects.length) % latestProjects.length)
  }

  // Filter projects for grid
  const filteredProjects = projects.filter((project) => {
    if (filterCategory === "ALL") return true
    return getCategory(project) === filterCategory
  })

  const prevIndex = (activeIndex - 1 + latestProjects.length) % latestProjects.length
  const nextIndex = (activeIndex + 1) % latestProjects.length

  return (
    <>
      <section
        id="projects"
        className="relative px-6 md:px-20 py-24 bg-zinc-50 border-b-4 border-zinc-950 overflow-hidden"
      >
        {/* Background Retro Grid Details */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(24,24,27,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="font-mono text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 select-none">
              [ 🛠️ SEC_02 // SELECTED PROJECTS ]
            </div>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">
              A collection of web applications I’ve built, focusing on
              clean architecture, scalability, and real-world usage.
            </p>
          </motion.div>

          {/* CAROUSEL (3-Card Peeking Slider, 5 Latest Items) */}
          <div className="relative w-full overflow-visible mb-14 py-4 select-none">
            <div className="flex items-center justify-center gap-3 md:gap-6 max-w-7xl mx-auto px-6 md:px-8">
              
              {/* Left Arrow Button */}
              <button 
                onClick={prevSlide}
                className="p-3 bg-white border-3 border-zinc-950 rounded-full shadow-[3px_3px_0px_#18181b] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_#18181b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer shrink-0 z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="stroke-[3px] text-zinc-950" />
              </button>

              {/* Left Card (Peeking) */}
              <motion.div
                key={`left-${prevIndex}`}
                initial={{ opacity: 0, scale: 0.8, x: 30 }}
                animate={{ opacity: 0.4, scale: 0.85, x: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={prevSlide}
                className="hidden lg:flex flex-col w-48 xl:w-64 shrink-0 bg-white border-4 border-zinc-950 rounded-cartoony p-4 cursor-pointer hover:opacity-60 transition-all duration-200 shadow-cartoon"
              >
                <div className="relative aspect-video w-full border-2 border-zinc-950 rounded-cartoon overflow-hidden mb-3">
                  <img 
                    src={latestProjects[prevIndex].image} 
                    alt={latestProjects[prevIndex].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-mono text-[9px] font-black text-cyber-orange uppercase mb-1">
                  {getCategory(latestProjects[prevIndex])}
                </span>
                <h4 className="text-sm font-black text-zinc-950 line-clamp-1">
                  {latestProjects[prevIndex].title}
                </h4>
              </motion.div>

              {/* Center Card (Active) */}
              <motion.div
                key={`center-${activeIndex}`}
                initial={{ opacity: 0.8, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md shrink lg:shrink-0 bg-white border-4 border-zinc-950 rounded-cartoony p-5 md:p-6 shadow-brutalist z-10"
              >
                <div className="relative aspect-video w-full border-3 border-zinc-950 rounded-cartoon overflow-hidden mb-4 shadow-cartoon">
                  <img 
                    src={latestProjects[activeIndex].image} 
                    alt={latestProjects[activeIndex].title} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-cyber-orange text-white border-2 border-zinc-950 text-[10px] font-black font-mono px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_#18181b] uppercase">
                    {getCategory(latestProjects[activeIndex])}
                  </span>
                </div>

                <div className="flex gap-1.5 flex-wrap mb-3">
                  {latestProjects[activeIndex].tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-black font-mono border-2 border-zinc-950 px-2 py-0.5 rounded bg-zinc-50 text-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-black mb-2 text-zinc-950 tracking-tight">
                  {latestProjects[activeIndex].title}
                </h3>
                <p className="text-zinc-700 text-sm font-semibold mb-5 line-clamp-2 leading-relaxed">
                  {latestProjects[activeIndex].desc}
                </p>

                <button
                  onClick={() => setSelectedProject(latestProjects[activeIndex])}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-cyber-yellow text-zinc-950 border-3 border-zinc-950 rounded-cartoon font-extrabold text-xs shadow-cartoon hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1.5px_1.5px_0px_#18181b] transition-all transform duration-150 cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight size={14} className="stroke-[3px]" />
                </button>
              </motion.div>

              {/* Right Card (Peeking) */}
              <motion.div
                key={`right-${nextIndex}`}
                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                animate={{ opacity: 0.4, scale: 0.85, x: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={nextSlide}
                className="hidden lg:flex flex-col w-48 xl:w-64 shrink-0 bg-white border-4 border-zinc-950 rounded-cartoony p-4 cursor-pointer hover:opacity-60 transition-all duration-200 shadow-cartoon"
              >
                <div className="relative aspect-video w-full border-2 border-zinc-950 rounded-cartoon overflow-hidden mb-3">
                  <img 
                    src={latestProjects[nextIndex].image} 
                    alt={latestProjects[nextIndex].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-mono text-[9px] font-black text-cyber-orange uppercase mb-1">
                  {getCategory(latestProjects[nextIndex])}
                </span>
                <h4 className="text-sm font-black text-zinc-950 line-clamp-1">
                  {latestProjects[nextIndex].title}
                </h4>
              </motion.div>

              {/* Right Arrow Button */}
              <button 
                onClick={nextSlide}
                className="p-3 bg-white border-3 border-zinc-950 rounded-full shadow-[3px_3px_0px_#18181b] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_#18181b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer shrink-0 z-20"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="stroke-[3px] text-zinc-950" />
              </button>

            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2.5 mt-8">
              {latestProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3.5 h-3.5 rounded-full border-2 border-zinc-950 transition-all duration-200 cursor-pointer ${
                    activeIndex === idx ? "bg-zinc-950 scale-125" : "bg-white hover:bg-zinc-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* PROJECT GRID WITH SIDEBAR FILTER */}
          <div className="flex flex-col md:flex-row gap-8 items-start mt-16 pt-12 border-t-4 border-zinc-950">
            {/* Left Sidebar Filter */}
            <div className="w-full md:w-56 shrink-0 md:sticky md:top-24">
              <div className="flex flex-row md:flex-col gap-3 py-1 pb-6 md:pb-4 md:pr-6 md:border-r-3 md:border-zinc-950 md:min-h-[200px] overflow-x-auto md:overflow-visible scrollbar-none w-full">
                <div className="hidden md:block mb-3 select-none">
                  <h4 className="text-xs font-mono font-black text-zinc-400 uppercase tracking-widest">[ CATEGORIES ]</h4>
                </div>
                {[{ id: "ALL", label: "Semua", emoji: "📂" }, { id: "ERP", label: "ERP", emoji: "⚙️" }, { id: "Landing Page", label: "Landing Page", emoji: "🌐" }].map((item) => {
                  const isActive = filterCategory === item.id
                  return (
                    <button
                      key={item.id}
                      onClick={() => setFilterCategory(item.id)}
                      className={`w-auto shrink-0 md:w-full text-left px-5 py-3.5 rounded-xl border-3 border-zinc-950 font-extrabold text-sm transition-all duration-100 whitespace-nowrap cursor-pointer flex items-center justify-between gap-4 ${
                        isActive
                          ? "bg-cyber-yellow text-zinc-950 translate-x-[3px] translate-y-[3px] shadow-[1px_1px_0px_#18181b]"
                          : "bg-white text-zinc-800 shadow-[4px_4px_0px_#18181b] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_#18181b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base leading-none select-none">{item.emoji}</span>
                        <span className="font-extrabold text-sm">{item.label}</span>
                      </div>
                      {isActive && <span className="hidden md:inline font-mono text-xs">➔</span>}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Grid of Project Cards */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border-3 border-zinc-950 rounded-cartoony p-4 shadow-cartoon flex flex-col justify-between hover:-translate-y-1 hover:shadow-cartoony transition-all duration-200"
                  >
                    <div>
                      <div className="relative aspect-video w-full border-2 border-zinc-950 rounded-cartoon overflow-hidden mb-3">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover animate-fade-in"
                        />
                        <span className={`absolute top-2 left-2 font-mono text-[8px] font-black px-1.5 py-0.5 rounded border-2 border-zinc-950 uppercase shadow-[1px_1px_0px_#18181b] ${
                          getCategory(project) === "Landing Page" 
                            ? "bg-cyber-blue text-white" 
                            : "bg-cyber-yellow text-zinc-950"
                        }`}>
                          {getCategory(project)}
                        </span>
                      </div>

                      <h4 className="text-base font-black text-zinc-950 mb-1.5 line-clamp-1">
                        {project.title}
                      </h4>
                      
                      <p className="text-zinc-600 text-xs font-semibold mb-4 line-clamp-2 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                          <span 
                            key={t} 
                            className="text-[8px] font-bold font-mono px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-[8px] font-bold font-mono px-1.5 py-0.5 rounded bg-zinc-50 text-zinc-400 border border-zinc-150">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-2 bg-white text-zinc-950 border-2 border-zinc-950 rounded shadow-[1.5px_1.5px_0px_#18181b] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-cartoony active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#18181b] font-mono font-black text-[10px] uppercase transition-all duration-100 cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="w-full py-12 text-center bg-white border-3 border-zinc-950 rounded-cartoon shadow-cartoon">
                  <p className="text-zinc-500 font-bold font-mono text-sm">Tidak ada project yang ditemukan.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

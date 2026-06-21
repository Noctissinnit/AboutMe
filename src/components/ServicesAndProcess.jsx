import { motion } from "framer-motion"
import { Database, Globe, Cpu, ArrowUpRight } from "lucide-react"

export default function ServicesAndProcess() {
  const services = [
    {
      title: "Custom ERP & Systems",
      icon: <Database size={22} className="text-zinc-950 stroke-[2.5px]" />,
      desc: "Automating manual business operations. Specialized in booking systems, internal ticketing, inventory, and role-based portals.",
      tech: ["Laravel", "React", "MySQL", "Role-Auth"],
      color: "bg-cyber-yellow"
    },
    {
      title: "Landing Pages",
      icon: <Globe size={22} className="text-zinc-950 stroke-[2.5px]" />,
      desc: "Premium, responsive landing pages built for speed, SEO, and visual impact. Optimized to convert visitors into paying clients.",
      tech: ["Vite", "Tailwind CSS", "Framer Motion", "SEO"],
      color: "bg-cyber-blue"
    },
    {
      title: "API & Web Tools",
      icon: <Cpu size={22} className="text-zinc-950 stroke-[2.5px]" />,
      desc: "Connecting third-party APIs, building mass mail dispatchers, Excel import/export systems, and automating background tasks.",
      tech: ["REST APIs", "SMTP", "OAuth", "Excel/PDF Gen"],
      color: "bg-cyber-orange"
    }
  ]

  const steps = [
    {
      num: "01",
      title: "Discovery & Blueprint",
      subtitle: "Planning & Strategy",
      desc: "We discuss your business challenges, define system requirements, select the tech stack, and map out the blueprint.",
      phase: "PHASE_01 // PLAN",
      color: "border-cyber-orange text-cyber-orange bg-cyber-orange/10",
      accentColor: "bg-cyber-orange"
    },
    {
      num: "02",
      title: "Agile Development",
      subtitle: "Coding & Testing",
      desc: "I build backend and frontend systems in sprints. You receive live preview links to test features and provide feedback.",
      phase: "PHASE_02 // CODE",
      color: "border-cyber-green text-cyber-green bg-cyber-green/10",
      accentColor: "bg-cyber-green"
    },
    {
      num: "03",
      title: "Delivery & Support",
      subtitle: "Launch & Handover",
      desc: "We deploy the application to your server. I hand over clean code, complete documentation, and provide post-launch support.",
      phase: "PHASE_03 // LAUNCH",
      color: "border-cyber-blue text-cyber-blue bg-cyber-blue/10",
      accentColor: "bg-cyber-blue"
    }
  ]

  return (
    <section id="services-and-process" className="relative px-6 md:px-20 py-24 bg-zinc-100 border-b-4 border-zinc-950 overflow-hidden">
      {/* Background Retro Grid Details */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(24,24,27,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 select-none">
            [ 💼 SEC_02A // SERVICES & WORKFLOW ]
          </div>
          <h2 className="section-title">Services & Workflow</h2>
          <p className="section-subtitle">
            What I build and how we make it happen—designed to deliver maximum business value with a transparent pipeline.
          </p>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* COLUMN 1: SERVICES */}
          <div className="w-full">
            <div className="flex items-center gap-2 mb-8 select-none">
              <span className="font-mono text-xs font-black text-zinc-500 uppercase tracking-wider bg-zinc-200 border-2 border-zinc-950 px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_#18181b]">
                ⚙️ SERVICES
              </span>
              <span className="h-0.5 flex-1 bg-zinc-300" />
            </div>

            <div className="flex flex-col gap-6">
              {services.map((svc, idx) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-3 border-zinc-950 rounded-xl p-5 shadow-cartoon hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_#18181b] transition-all duration-150 flex gap-4"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg border-2 border-zinc-950 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#18181b] ${svc.color} select-none`}>
                    {svc.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-zinc-950 mb-1 tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="text-zinc-600 text-xs font-semibold mb-3 leading-relaxed">
                      {svc.desc}
                    </p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1">
                      {svc.tech.map((t) => (
                        <span 
                          key={t} 
                          className="text-[8px] font-bold font-mono px-1.5 py-0.5 rounded bg-zinc-50 text-zinc-700 border border-zinc-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: WORKFLOW PROCESS */}
          <div className="w-full">
            <div className="flex items-center gap-2 mb-8 select-none">
              <span className="font-mono text-xs font-black text-zinc-500 uppercase tracking-wider bg-zinc-200 border-2 border-zinc-950 px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_#18181b]">
                🔄 PROCESS
              </span>
              <span className="h-0.5 flex-1 bg-zinc-300" />
            </div>

            <div className="relative flex flex-col gap-6 pl-14">
              {/* Vertical timeline line behind step circles */}
              <div className="absolute left-[20px] top-6 bottom-6 w-1 bg-zinc-300 border-r-2 border-zinc-950/20" />

              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-white border-3 border-zinc-950 rounded-xl p-5 shadow-cartoon hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_#18181b] transition-all duration-150 flex flex-col justify-between"
                >
                  {/* Step Bubble absolutely positioned on the timeline */}
                  <div className={`absolute -left-14 top-4.5 w-10 h-10 rounded-full border-3 border-zinc-950 flex items-center justify-center font-mono font-black text-xs ${step.accentColor} text-zinc-950 shadow-[2px_2px_0px_#18181b] z-10 select-none`}>
                    {step.num}
                  </div>

                  <div>
                    {/* Phase Badge */}
                    <div className={`inline-block font-mono text-[8px] font-black px-1.5 py-0.5 rounded border-2 border-zinc-950 uppercase mb-2 ${step.color} select-none`}>
                      {step.phase}
                    </div>

                    <h3 className="text-lg font-black text-zinc-950 mb-0.5 tracking-tight">
                      {step.title}
                    </h3>
                    <h4 className="text-[10px] font-bold text-zinc-400 font-mono uppercase tracking-wide mb-2 select-none">
                      {step.subtitle}
                    </h4>
                    
                    <p className="text-zinc-600 text-xs font-semibold leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

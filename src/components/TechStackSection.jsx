import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import techCategories from "../data/techStack"

// === RETRO SOUND GENERATORS FOR FLOPPY DRIVE ===
const playDiskInsertSound = () => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    
    // 1. Mechanical Clack (Insert)
    const osc1 = ctx.createOscillator()
    const gain1 = ctx.createGain()
    osc1.type = "triangle"
    osc1.frequency.setValueAtTime(150, ctx.currentTime)
    osc1.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.05)
    gain1.gain.setValueAtTime(0.08, ctx.currentTime)
    gain1.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.05)
    osc1.connect(gain1)
    gain1.connect(ctx.destination)
    osc1.start()
    osc1.stop(ctx.currentTime + 0.05)

    // 2. Motor Spin Hum (Read)
    const osc2 = ctx.createOscillator()
    const gain2 = ctx.createGain()
    osc2.type = "sawtooth"
    osc2.frequency.setValueAtTime(65, ctx.currentTime + 0.06)
    osc2.frequency.setValueAtTime(70, ctx.currentTime + 0.3)
    gain2.gain.setValueAtTime(0.02, ctx.currentTime + 0.06)
    gain2.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6)
    
    // Lowpass filter to make the saw wave sound like a muffled motor spin
    const filter = ctx.createBiquadFilter()
    filter.type = "lowpass"
    filter.frequency.setValueAtTime(120, ctx.currentTime)
    
    osc2.connect(filter)
    filter.connect(gain2)
    gain2.connect(ctx.destination)
    osc2.start(ctx.currentTime + 0.06)
    osc2.stop(ctx.currentTime + 0.6)
  } catch (e) {}
}

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [loadingDisk, setLoadingDisk] = useState(false)
  const [consoleLog, setConsoleLog] = useState([])
  const terminalEndRef = useRef(null)

  // Trigger console reading animation
  const handleDiskClick = (idx) => {
    if (loadingDisk) return
    playDiskInsertSound()
    setActiveCategory(idx)
    setLoadingDisk(true)
    setConsoleLog([
      `[sys] Diskette inserted in Drive A:...`,
      `[sys] Mounting FAT12 file system...`,
      `[sys] Loading sectors... ⏳`
    ])

    // Mock disk reading stages
    setTimeout(() => {
      setConsoleLog(prev => [...prev, `[sys] Verifying block integrity... OK`])
    }, 250)

    setTimeout(() => {
      setConsoleLog(prev => [...prev, `[sys] Reading catalog metadata...`])
    }, 450)

    setTimeout(() => {
      setLoadingDisk(false)
    }, 700)
  }

  return (
    <section id="stack" className="px-6 md:px-20 py-24 bg-zinc-200 border-b-4 border-zinc-950 relative overflow-hidden">
      {/* Background Retro Grid Details */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(24,24,27,0.02)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(24,24,27,0.02)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-14">
        <div className="font-mono text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 select-none">
          [ 📟 SEC_01 // TECH ARSENAL ]
        </div>
        <h2 className="section-title uppercase tracking-tighter text-5xl md:text-7xl font-black text-zinc-950">
          Tech <span className="bg-cyber-yellow px-4 border-[3px] border-zinc-950 inline-block rotate-[-2deg] shadow-cartoon">Arsenal</span>
        </h2>
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs font-mono mt-4">
          ★ CLICK A FLOPPY DISKETTE TO INSERT IT INTO THE DRIVE CONSOLE AND READ THE STACK DATA
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
        
        {/* Left: Floppy Disk Storage Box (Col span 5) */}
        <div className="lg:col-span-5 border-[3px] border-zinc-950 rounded-cartoony bg-zinc-50 p-6 md:p-8 shadow-cartoon flex flex-col justify-between">
          <div>
            <div className="inline-block border-[3px] border-zinc-950 bg-white px-3 py-1 text-xs font-black font-mono shadow-[2.5px_2.5px_0px_#18181b] uppercase tracking-wider mb-6">
              💾 DISK STORAGE BOX
            </div>
            
            {/* Floppy disks shelf grid */}
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              {techCategories.map((cat, idx) => {
                const isSelected = activeCategory === idx
                // Label color helper
                const labelColor = 
                  idx === 0 ? "bg-[#ffeb3b]" : // Yellow
                  idx === 1 ? "bg-[#ff5e36]" : // Orange
                  idx === 2 ? "bg-[#2196f3]" : // Blue
                  "bg-[#4caf50]" // Green

                return (
                  <motion.div
                    key={cat.title}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDiskClick(idx)}
                    className={`relative w-28 h-28 sm:w-32 sm:h-32 bg-zinc-800 border-[3px] border-zinc-950 rounded-lg cursor-pointer transition-shadow select-none ${
                      isSelected 
                        ? "shadow-[1px_1px_0px_#18181b] translate-x-0.5 translate-y-0.5" 
                        : "shadow-[4px_4px_0px_#18181b] hover:shadow-[6px_6px_0px_#18181b]"
                    }`}
                  >
                    {/* Metal slide shutter */}
                    <div className="w-10 h-8 bg-zinc-300 border-b-2 border-r-2 border-zinc-950 absolute top-0 left-6 rounded-b flex items-center justify-center select-none font-mono text-[7px] text-zinc-500 font-extrabold">
                      ||||
                    </div>

                    {/* Paper Label */}
                    <div className="w-[85%] h-[55%] bg-white border-2 border-zinc-950 absolute bottom-1.5 left-1/2 -translate-x-1/2 p-1.5 flex flex-col justify-between overflow-hidden rounded-sm">
                      {/* Top colored stripe */}
                      <div className={`w-full h-2.5 border-b border-zinc-950 ${labelColor}`} />
                      
                      {/* Disk text label */}
                      <div className="font-mono text-[9px] font-black text-zinc-900 leading-tight uppercase tracking-tighter text-center mt-1 truncate">
                        {cat.title.split(" ")[0]}
                      </div>
                    </div>

                    {/* Write-protect notch */}
                    <div className="w-3.5 h-3.5 bg-zinc-950 border-t border-l border-zinc-800 absolute bottom-1.5 right-1.5 rounded-sm" />
                    
                    {/* Selected LED indicator on disk */}
                    {isSelected && (
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyber-green rounded-full animate-ping" />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="mt-8 font-mono text-[10px] text-zinc-500 font-bold border-t border-zinc-200 pt-4">
            * Disket fisik mewakili pembagian logis tech stack Bimo Satriaji. Silakan masukkan disket untuk memuat rincian pustaka.
          </div>
        </div>

        {/* Right: CRT Terminal Reader Console (Col span 7) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          {/* Drive Slot Panel */}
          <div className="border-[3px] border-zinc-950 rounded-cartoon bg-zinc-900 p-4 shadow-cartoon flex items-center justify-between gap-4">
            <span className="text-zinc-400 font-mono text-xs font-black uppercase tracking-wider">FLOPPY DRIVE A:</span>
            
            {/* Floppy Slot Graphic */}
            <div className="flex-1 max-w-[240px] h-9 bg-black border-2 border-zinc-850 rounded relative flex items-center justify-center overflow-hidden shadow-[inset_0px_2px_4px_rgba(0,0,0,0.9)]">
              {/* Inserted disk shadow */}
              <AnimatePresence>
                {activeCategory !== null && (
                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    className="absolute inset-0 bg-zinc-800 border-b-4 border-zinc-950 flex items-center justify-center"
                  >
                    <span className="text-zinc-500 font-mono text-[9px] tracking-widest uppercase font-black">DISK MOUNTED</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="w-[85%] h-1 bg-zinc-950 border border-zinc-800 rounded" />
            </div>

            {/* LED Status Light */}
            <div className="flex items-center gap-2 select-none">
              <span className="text-[9px] font-mono text-zinc-400 font-extrabold">STATUS</span>
              <div className={`w-3.5 h-3.5 rounded-full border-2 border-zinc-950 shadow-[1px_1px_0px_rgba(0,0,0,0.4)] ${
                loadingDisk 
                  ? "bg-cyber-orange animate-pulse" 
                  : activeCategory !== null 
                    ? "bg-cyber-green" 
                    : "bg-zinc-800"
              }`} />
            </div>
          </div>

          {/* CRT Screen Display */}
          <div className="border-[3px] border-zinc-950 rounded-cartoony bg-zinc-950 p-6 md:p-8 shadow-cartoon relative overflow-hidden flex-1 flex flex-col justify-between h-[360px] select-text">
            {/* CRT Screen scanline overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-10" />
            <div className="absolute inset-0 bg-radial-crt pointer-events-none z-10 opacity-40" />

            {/* Monitor Contents */}
            <div className="font-mono text-xs text-green-400 z-20 flex flex-col gap-2 h-full overflow-y-auto scrollbar-thin">
              {activeCategory === null ? (
                // Initial State
                <div className="h-full flex flex-col items-center justify-center text-center p-6 select-none animate-pulse">
                  <p className="text-sm font-black tracking-wider">💾 SYSTEM HALTED</p>
                  <p className="text-[10px] text-zinc-500 mt-2 font-bold uppercase">PLEASE INSERT A STACK DISKETTE TO INITIATE BOOT SEQUENCE</p>
                </div>
              ) : loadingDisk ? (
                // Loading State
                <div className="flex flex-col gap-1.5">
                  {consoleLog.map((line, lIdx) => (
                    <div key={lIdx} className="typing-line">{line}</div>
                  ))}
                  <div className="animate-pulse mt-2">Reading drive sectors... [ \ ]</div>
                </div>
              ) : (
                // Loaded State
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <p className="text-zinc-400 border-b border-green-500/30 pb-2 mb-3 font-black select-none">
                    DISK A:\{techCategories[activeCategory].title.toUpperCase().replace(" & ", "_")}
                  </p>

                  <div className="space-y-4 flex-1">
                    {techCategories[activeCategory].skills.map((skill) => {
                      // Generate random rating bars (e.g. 80% = 8 blocks, 2 spaces)
                      const totalBlocks = 10
                      const filled = 8 // Standard rating representation
                      const empty = totalBlocks - filled
                      const barGraphic = "█".repeat(filled) + "░".repeat(empty)

                      return (
                        <div key={skill.name} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 border-b border-dashed border-green-500/10 pb-2.5">
                          <div>
                            <span className="text-white font-black text-sm">{skill.name}</span>
                            <span className="text-[10px] text-zinc-400 block sm:inline sm:ml-3">
                              ({skill.desc})
                            </span>
                          </div>
                          <span className="text-green-300 font-bold font-mono tracking-widest shrink-0 self-end sm:self-start">
                            {barGraphic} 80%
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <p className="text-[10px] text-zinc-500 mt-6 border-t border-green-500/30 pt-2 font-black select-none">
                    [READ COMPLETE] sectors_loaded=4/4. PRESS ANOTHER DISK TO RE-MOUNT.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

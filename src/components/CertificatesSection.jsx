import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiAward } from "react-icons/fi"
import certificates from "../data/certificates"
import profilePic from "../assets/profile/profile2.png"

// === RETRO CLICK SOUND ===
const playClickSound = () => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = "sine"
    osc.frequency.setValueAtTime(850, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08)
    gain.gain.setValueAtTime(0.04, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.08)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.08)
  } catch (e) {}
}

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null)

  const handleOpen = (cert) => {
    playClickSound()
    setSelectedCert(cert)
  }

  const handleClose = () => {
    playClickSound()
    setSelectedCert(null)
  }

  return (
    <section id="certificates" className="px-6 md:px-20 py-24 bg-zinc-100 border-b-4 border-zinc-950">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-14">
        <div className="font-mono text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 select-none">
          [ 📜 SEC_04 // ACCREDITATIONS ]
        </div>
        <h2 className="section-title uppercase tracking-tighter text-5xl md:text-7xl font-black text-zinc-950">
          Certifications & <span className="bg-[#4ade80] px-4 border-[3px] border-zinc-950 inline-block rotate-[1deg] shadow-cartoon">Credentials</span>
        </h2>
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs font-mono mt-4">
          ★ EXAMINE REPOSITORIES OF PROFESSIONAL ACCREDITATIONS & SECURITY CLEARANCES
        </p>
      </div>

      {/* Certificates Dossier Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? -1 : 1 }}
            onClick={() => handleOpen(cert)}
            className="relative bg-[#faf7ee] border-[3px] border-zinc-950 rounded-cartoony p-6 shadow-cartoon hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-200 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Paperclip graphic */}
            <div className="absolute top-2 right-4 text-2xl select-none opacity-80 rotate-12">📎</div>

            <div>
              {/* Vintage stamp label */}
              <div className="flex justify-between items-start mb-6 gap-2 select-none">
                <span className="font-mono text-[9px] font-black tracking-widest text-zinc-400">
                  DEPT_OF_ACCREDITATION //
                </span>
                
                <span className="text-[9px] font-mono font-black text-green-600 bg-green-100 border border-green-500 px-2 py-0.5 rounded shadow-[1px_1px_0px_#16a34a]">
                  ✓ SECURE
                </span>
              </div>

              {/* Certificate Title */}
              <h3 className="text-2xl font-black text-zinc-950 tracking-tight leading-snug mb-3">
                {cert.title.toUpperCase()}
              </h3>

              <p className="text-zinc-600 text-xs font-semibold leading-relaxed mb-6 font-mono">
                {cert.description}
              </p>
            </div>

            {/* Bottom dossier file tab details */}
            <div className="border-t border-dashed border-zinc-950/20 pt-4 flex items-center justify-between font-mono text-[10px] text-zinc-500 font-bold">
              <span>ISSUER: {cert.issuer.split(" (")[0]}</span>
              <span className="text-[#ff5e36] font-black group-hover:underline flex items-center gap-1">
                EXAMINE FILE &gt;
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ID clearance badge Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/70 backdrop-blur-sm px-6 py-10"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-zinc-900 text-zinc-100 rounded-cartoon p-6 md:p-8 border-4 border-zinc-950 shadow-brutalist overflow-y-auto max-h-[95vh] flex flex-col justify-between"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-zinc-950 border-3 border-zinc-950 p-2 rounded-md bg-white hover:bg-cyber-yellow shadow-[2px_2px_0px_#18181b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#18181b] transition-all cursor-pointer z-30"
              >
                <FiX size={20} className="stroke-[3px]" />
              </button>

              <div>
                <h4 className="text-zinc-500 font-mono text-[9px] font-black tracking-widest mb-4 uppercase">
                  :: LEVEL 3 ACCESS ONLY // CREDENTIAL_PREVIEW
                </h4>

                {/* The Security clearance Badge ID card */}
                <div className="relative bg-zinc-50 border-4 border-zinc-950 p-5 rounded-lg text-zinc-950 overflow-hidden shadow-cartoon">
                  
                  {/* Header bar */}
                  <div className="bg-zinc-950 text-white p-3 -mx-5 -mt-5 flex justify-between items-center border-b-4 border-zinc-950 mb-5 select-none font-mono">
                    <span className="text-xs font-black tracking-widest uppercase">LICENSED DEV CARD</span>
                    <span className="text-[9px] text-[#4ade80] font-bold">STATUS: VERIFIED</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-left">
                    
                    {/* Left: Pixelized profile photo */}
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 border-3 border-zinc-950 bg-white shadow-[2px_2px_0px_#18181b] overflow-hidden rounded relative select-none">
                        <img
                          src={profilePic}
                          alt="Bimo Photo"
                          className="w-full h-full object-cover grayscale contrast-125"
                          draggable={false}
                        />
                        {/* Polaroid overlay grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
                      </div>
                      <span className="font-mono text-[8px] text-zinc-400 font-black mt-2 select-none">ID: SATRIAJI_B</span>
                    </div>

                    {/* Right: Key-Value Stats info */}
                    <div className="flex-1 space-y-2.5 font-mono text-xs w-full">
                      <div>
                        <span className="text-zinc-400 text-[9px] block leading-none mb-0.5">HOLDER_NAME</span>
                        <span className="font-black text-sm text-zinc-950">BIMO SATRIAJI</span>
                      </div>
                      
                      <div>
                        <span className="text-zinc-400 text-[9px] block leading-none mb-0.5">ACCREDITATION</span>
                        <span className="font-black text-zinc-900 uppercase text-[11px] leading-tight block">
                          {selectedCert.title}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-zinc-400 text-[9px] block leading-none mb-0.5">ISSUING_BODY</span>
                          <span className="font-extrabold text-zinc-900 text-[10px] block">
                            {selectedCert.issuer.split(" (")[0]}
                          </span>
                        </div>
                        <div>
                          <span className="text-zinc-400 text-[9px] block leading-none mb-0.5">ISSUED_DATE</span>
                          <span className="font-extrabold text-zinc-900 text-[10px] block">{selectedCert.date.toUpperCase()}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-zinc-400 text-[9px] block leading-none mb-0.5">CREDENTIAL_ID</span>
                        <span className="font-extrabold text-zinc-800 text-[10px] select-all block">
                          {selectedCert.credentialId}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stamp graphic showing APPROVED */}
                  <div className="absolute bottom-4 right-4 border-4 border-dashed border-green-600 text-green-600 rounded font-black text-xl font-mono px-4 py-1.5 uppercase select-none z-20 shadow-[2px_2px_0px_rgba(22,163,74,0.2)] bg-white/60 backdrop-blur-[0.5px] rotate-[-15deg]">
                    ★ APPROVED ★
                  </div>

                  {/* Shiny circular Hologram seal */}
                  <div className="absolute top-12 right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-500 opacity-20 border border-white/50 select-none hidden sm:block shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                </div>

                {/* Scanned Document Section */}
                <div className="mt-6 space-y-6">
                  {selectedCert.images.map((img, idx) => (
                    <div key={idx} className="border-3 border-zinc-950 rounded-lg overflow-hidden bg-white shadow-cartoon relative group">
                      <div className="bg-zinc-950 text-white px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-wider flex justify-between items-center select-none">
                        <span>SCANNED DOCUMENT PREVIEW - PAGE {idx + 1}</span>
                        <span className="text-[#4ade80]">✓ VERIFIED</span>
                      </div>
                      
                      <div className="relative p-2 flex flex-col items-center justify-center bg-zinc-100 min-h-[180px]">
                        <img
                          src={img}
                          alt={`${selectedCert.title} Page ${idx + 1}`}
                          className="max-w-full h-auto rounded select-none"
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                        
                        {/* Download button */}
                        <div className="mt-4 w-full flex justify-end">
                          <a
                            href={img}
                            download={`Bimo_Satriaji_Certificate_${selectedCert.title.replace(/\s+/g, "_")}_Page_${idx + 1}.jpg`}
                            className="inline-flex items-center gap-2 bg-zinc-950 text-white border-2 border-zinc-950 px-4 py-2 rounded font-mono font-extrabold text-[10px] shadow-[2px_2px_0px_#4ade80] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#4ade80] active:translate-y-0 active:shadow-[1px_1px_0px_#4ade80] transition-all cursor-pointer"
                          >
                            📥 DOWNLOAD PAGE {idx + 1}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

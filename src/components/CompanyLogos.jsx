import { motion } from "framer-motion"


import teh from "../assets/logos/tehnuri.png"
import atmi from "../assets/logos/logoatmi.png"
import sw from "../assets/logos/sw.png"
import uns from "../assets/logos/uns.png"
import upitra from "../assets/logos/logokampus.png"
import ahs from "../assets/logos/ahs.png"


const companies = [
  { name: "Teh Cap Burung Nuri", logo: teh },
  { name: "Institut Teknologi Atma Mitra", logo: atmi },
  { name: "Klinik Seger Waras", logo: sw },
  { name: "Universitas Sebelas Maret", logo: uns },
  { name: "Universitas Pignatelli Triputra", logo: upitra },
  { name: "Alam Hijau Selaras", logo: ahs },
]

export default function CompanyLogos() {
  return (
    <section className="px-6 md:px-20 py-12 bg-white border-b-4 border-zinc-950">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-xs font-black uppercase tracking-widest text-zinc-500 mb-8 font-mono"
      >
        ★ Trusted by institutions I’ve worked with
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="flex flex-wrap justify-center items-center gap-6"
      >
        {companies.map((company) => (
          <motion.div
            key={company.name}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white border-3 border-zinc-950 px-6 py-3 rounded-cartoon shadow-cartoon hover:-translate-y-0.5 hover:shadow-cartoony transition transform duration-200 select-none flex items-center justify-center h-16 w-48"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-full max-w-full object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

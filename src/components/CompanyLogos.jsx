import { motion } from "framer-motion"


import teh from "../assets/logos/tehcapburungnuri.png"
import atmi from "../assets/logos/logoatmi.png"
import sw from "../assets/logos/sw.png"
import uns from "../assets/logos/uns.png"


const companies = [
  { name: "Teh Cap Burung Nuri", logo: teh },
  { name: "Institut Teknologi Atma Mitra", logo: atmi },
  { name: "Klinik Seger Waras", logo: sw },
  { name: "Universitas Sebelas Maret", logo: uns },
 
]

export default function CompanyLogos() {
  return (
    <section className="px-10 md:px-20 py-16 bg-white border-t border-zinc-100">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-sm text-zinc-500 mb-8"
      >
        Trusted by institutions I’ve worked with
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="flex flex-wrap justify-center items-center gap-10"
      >
        {companies.map((company) => (
          <motion.img
            key={company.name}
            src={company.logo}
            alt={company.name}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="h-10 md:h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
          />
        ))}
      </motion.div>
    </section>
  )
}

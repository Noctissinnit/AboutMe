import asean1 from "../assets/certificate/Asean Foundation_page-0001.jpg"
import asean2 from "../assets/certificate/Asean Foundation_page-0002.jpg"
import codeOceans from "../assets/certificate/Sertifikat Code Oceans.jpg"

const certificates = [
  {
    id: 1,
    title: "ASEAN Foundation - Digital Literacy",
    issuer: "ASEAN Foundation",
    date: "Oktober 2024",
    credentialId: "AF-DL-2024-001 & 002",
    description: "Sertifikat kompetensi tingkat regional ASEAN untuk literasi digital, analisis data, dan kecakapan analitis (termasuk kurikulum evaluasi).",
    tech: ["Data Analytics", "Information Tech"],
    images: [asean1, asean2],
    color: "bg-cyber-yellow"
  },
  {
    id: 2,
    title: "Code Oceans - Modern Web Development",
    issuer: "Code Oceans Indonesia",
    date: "Agustus 2024",
    credentialId: "CO-WD-2024-998",
    description: "Pelatihan pemrograman web praktis mencakup dasar rekayasa frontend dan perancangan website responsif.",
    tech: ["Web Development", "HTML5", "CSS3", "JavaScript"],
    images: [codeOceans],
    color: "bg-[#ff5e36]" // cyber-orange
  }
]

export default certificates

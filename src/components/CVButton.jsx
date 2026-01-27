import { Download } from "lucide-react"

export default function CVButton({ variant = "primary" }) {
  const base =
    "inline-flex items-center gap-2 rounded-cartoony font-bold transition-all active:scale-95 transform"

  const styles = {
    primary:
      "bg-primary text-white px-8 py-3 cartoon-shadow hover:scale-110 hover:-translate-y-1",
    outline:
      "border-3 border-primary text-primary px-8 py-3 hover:bg-primary hover:text-white cartoon-shadow transform hover:scale-110 hover:-translate-y-1",
  }

  return (
    <a
      href="/cv/Bimo_Satriaji_CV_Web_Developer.pdf"
      download
      className={`${base} ${styles[variant]}`}
    >
      <Download size={18} />
      Download CV
    </a>
  )
}

import { Download } from "lucide-react"

export default function CVButton({ variant = "primary" }) {
  const base =
    "inline-flex items-center gap-2 rounded-lg font-semibold transition-transform active:scale-95"

  const styles = {
    primary:
      "bg-primary text-white px-6 py-3 soft-shadow hover:scale-105",
    outline:
      "border border-primary text-primary px-6 py-3 hover:bg-primary hover:text-white",
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

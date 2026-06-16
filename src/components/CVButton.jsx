import { Download } from "lucide-react"

export default function CVButton({ variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-cartoon font-extrabold border-3 border-zinc-950 shadow-cartoon hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-cartoony active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#18181b] transition-all transform duration-150 select-none cursor-pointer"

  const styles = {
    primary:
      "bg-cyber-yellow text-zinc-950 px-6 py-3",
    outline:
      "bg-white text-zinc-950 px-6 py-3 hover:bg-cyber-yellow",
  }

  return (
    <a
      href="/cv/Bimo_Satriaji_CV_Web_Developer.pdf"
      download
      className={`${base} ${styles[variant]}`}
    >
      <Download size={18} className="stroke-[3px]" />
      <span>Download CV</span>
    </a>
  )
}

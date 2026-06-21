import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import CVButton from "./CVButton"
import logoImage from "../assets/logo3.png"

const links = [
  { id: "home", label: "Home", type: "scroll" },
  { id: "stack", label: "Stack", type: "scroll" },
  { id: "projects", label: "Projects", type: "scroll" },
  { id: "experience", label: "Experience", type: "scroll" },
  { id: "certificates", label: "Certificates", type: "scroll" },
  { id: "contact", label: "Contact", type: "scroll" },
  { id: "about", label: "About", type: "route" },
]

export default function Navbar() {
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const location = useLocation()

  /* ======================
   * Scroll detection
   * ====================== */
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ======================
   * Active section observer
   * ====================== */
  useEffect(() => {
    if (location.pathname !== "/") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    links
      .filter((link) => link.type === "scroll")
      .forEach((link) => {
        const section = document.getElementById(link.id)
        if (section) observer.observe(section)
      })

    return () => observer.disconnect()
  }, [location.pathname])

  /* ======================
   * Highlight About page
   * ====================== */
  useEffect(() => {
    if (location.pathname === "/about") {
      setActive("about")
    }
  }, [location.pathname])


  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      hasScrolled 
        ? "bg-white border-b-3 border-zinc-950 shadow-cartoon py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="flex justify-between items-center px-6 md:px-20">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={logoImage} 
            alt="Bimo.dev" 
            className="h-10 w-auto border-2 border-zinc-950 rounded-lg p-1 bg-white shadow-[2px_2px_0px_#18181b]"
          />
          <span className="font-extrabold text-xl tracking-tight font-display hidden sm:inline text-zinc-950">BIMO.DEV</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 text-sm">
          {links.map((link) => (
            <li key={link.id}>
              {link.type === "scroll" ? (
                <a
                  href={`/#${link.id}`}
                  className={`border-2 px-3 py-1.5 font-extrabold rounded-cartoon transition-all duration-150 block ${
                    active === link.id
                      ? "bg-cyber-yellow text-zinc-950 border-zinc-950 shadow-[2px_2px_0px_#18181b]"
                      : "bg-transparent text-zinc-700 border-transparent hover:border-zinc-950 hover:bg-zinc-100 hover:text-zinc-950"
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `border-2 px-3 py-1.5 font-extrabold rounded-cartoon transition-all duration-150 block ${
                      isActive
                        ? "bg-cyber-yellow text-zinc-950 border-zinc-950 shadow-[2px_2px_0px_#18181b]"
                        : "bg-transparent text-zinc-700 border-transparent hover:border-zinc-950 hover:bg-zinc-100 hover:text-zinc-950"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CV Button */}
        <div className="hidden md:block">
          <CVButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-950 border-3 border-zinc-950 p-2 rounded-cartoon bg-white shadow-[2px_2px_0px_#18181b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#18181b] transition-all"
        >
          {open ? <X size={24} className="stroke-[3px]" /> : <Menu size={24} className="stroke-[3px]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-3 border-zinc-950 px-6 py-6 shadow-cartoon flex flex-col gap-6">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.id}>
                {link.type === "scroll" ? (
                  <a
                    href={`/#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`border-2 px-4 py-2 font-extrabold rounded-cartoon transition-all duration-150 block ${
                      active === link.id
                        ? "bg-cyber-yellow text-zinc-950 border-zinc-950 shadow-[2px_2px_0px_#18181b]"
                        : "bg-transparent text-zinc-700 border-transparent hover:border-zinc-950 hover:bg-zinc-50"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to="/about"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `border-2 px-4 py-2 font-extrabold rounded-cartoon transition-all duration-150 block ${
                        isActive
                          ? "bg-cyber-yellow text-zinc-950 border-zinc-950 shadow-[2px_2px_0px_#18181b]"
                          : "bg-transparent text-zinc-700 border-transparent hover:border-zinc-950 hover:bg-zinc-50"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <CVButton />
        </div>
      )}
    </nav>
  )
}

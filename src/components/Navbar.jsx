import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import CVButton from "./CVButton"
import logoImage from "../assets/logo2.png"

const links = [
  { id: "home", label: "Home", type: "scroll" },
  { id: "projects", label: "Projects", type: "scroll" },
  { id: "experience", label: "Experience", type: "scroll" },
  { id: "contact", label: "Contact", type: "scroll" },
  { id: "about", label: "About", type: "route" },
]

export default function Navbar() {
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)
  const location = useLocation()

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        
        {/* Logo */}
        <img 
        src={logoImage} 
        alt="Bimo.dev" 
        className="h-20 w-auto"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <li key={link.id}>
              {link.type === "scroll" ? (
                <a
                  href={`/#${link.id}`}
                  className={`nav-link ${
                    active === link.id
                      ? "text-primary font-semibold"
                      : "text-zinc-600 hover:text-black"
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-zinc-600 hover:text-black"
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
          className="md:hidden text-zinc-800"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur px-6 pb-6 border-t border-zinc-200">
          <ul className="flex flex-col gap-4 mb-6">
            {links.map((link) => (
              <li key={link.id}>
                {link.type === "scroll" ? (
                  <a
                    href={`/#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`block py-2 ${
                      active === link.id
                        ? "text-primary font-semibold"
                        : "text-zinc-600"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to="/about"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-zinc-600"
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

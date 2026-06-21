import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import CompanyLogos from "./components/CompanyLogos"
import TechStackSection from "./components/TechStackSection"
import CertificatesSection from "./components/CertificatesSection"
import ServicesAndProcess from "./components/ServicesAndProcess"

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <CompanyLogos />
              <TechStackSection />
              <ServicesAndProcess />
              <Projects />
              <Experience />
              <CertificatesSection />
              <Contact />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

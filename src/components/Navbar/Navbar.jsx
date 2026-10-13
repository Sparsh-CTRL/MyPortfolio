import { useEffect, useState } from "react"
import "./Navbar.css"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >

      <div className="nav-container">

        <div className="nav-logo">
          Sparsh
        </div>

        <div className="nav-links">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
         <a href="#contact">Contact</a>


        </div>

        <div className="nav-right">

          <a
            href="https://github.com/Sparsh-CTRL"
            target="_blank"
            className="nav-btn"
          >
            Github →
          </a>
           <a
            href="#contact" 
            target="_blank"
            className="nav-btn-cv"
          >
            Contact →
          </a>

        </div>

      </div>

    </nav>

  )
}
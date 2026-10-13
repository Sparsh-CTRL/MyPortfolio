import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import "./Certificates.css"

const certificates = [
  { title: "Programming in Java", issuer: "LPU / neoColab / iamNEO", date: "May 2026", image: "/certificates/programming-java.png" },
  { title: "AI-Powered Performance Ads", issuer: "Google Ads", date: "September 2026", image: "/certificates/google-ads.png" },
  { title: "Core Java", issuer: "Cipher Schools", date: "May 2026", image: "/certificates/core-java.png" },
  { title: "Database Management System Part - 1", issuer: "Infosys Springboard", date: "July 2026", image: "/certificates/infosys-dbms.png" },
  { title: "Data Structure and Algorithm", issuer: "LPU / neoColab / iamNEO", date: "June 2026", image: "/certificates/data-structures.png" }
]

export default function Certificates() {
  const ref = useRef(null)
  const [active, setActive] = useState(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })

  return (
    <section id="certificates" className="cert-section" ref={ref}>
      
      <div className="cert-stage">

        <div className="cert-header">
          <span className="cert-tag">CERTIFICATIONS</span>
          <h2 className="cert-title">
            Things I've studied deeply.
          </h2>
        </div>

        <div className="cert-stack">

          {certificates.map((cert, index) => {

            // FINAL POSITIONS (spread)
            const positions = [
            { x: -440, y: 0 },
            { x: -220, y: 0 },
            { x: 0, y: 0 },
            { x: 220, y: 0 },
            { x: 440, y: 0 }
            ]

            // INITIAL STACK (center)
            const startX = 0
            const startY = index * 8

            const x = useTransform(
              scrollYProgress,
              [0, 0.5],
              [startX, positions[index].x]
            )

            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [startY, positions[index].y]
            )

            const rotate = useTransform(
              scrollYProgress,
              [0, 1],
              [-6 + index * 4, 0]
            )

            const scale = useTransform(
              scrollYProgress,
              [0, 1],
              [0.9, 1]
            )

            return (
              <motion.div
                key={index}
                className="cert-card"
                style={{ x, y, rotate, scale, zIndex: 10 - index }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActive(cert)}
              >
                <img src={cert.image} alt={`${cert.title} certificate`} />
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer} · {cert.date}</p>
                </div>
              </motion.div>
            )
          })}

        </div>
      </div>

      {/* MODAL */}
      {active && (
        <motion.div
          className="cert-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActive(null)} role="presentation"
        >
          <motion.div
            className="cert-modal-content"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="cert-close" onClick={() => setActive(null)} aria-label="Close certificate">×</button>
            <img src={active.image} alt={`${active.title} certificate`} />
            <h2>{active.title}</h2>
            <p>{active.issuer}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
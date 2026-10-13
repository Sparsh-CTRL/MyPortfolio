
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring
} from "framer-motion";

import { useRef, useState, useEffect } from "react";
import "./Hero.css";

function useTypewriter(text, speed = 40) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput("");
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setOutput(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return output;
}

export default function Hero() {
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 20
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 20
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const progress = useTransform(
    scrollYProgress,
    [0, 0.6],
    [0, 1]
  );

  const yText = useTransform(progress, [0, 1], [120, 0]);
  const opacityText = useTransform(progress, [0, 0.4], [0, 1]);

  const terminalX = useTransform(progress, [0, 1], [200, 0]);
  const terminalScale = useTransform(progress, [0, 1], [0.8, 1]);
  const terminalOpacity = useTransform(
    progress,
    [0, 0.4],
    [0, 1]
  );

  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.05],
    [1, 0]
  );

  const scrollHintY = useTransform(
    scrollYProgress,
    [0, 0.05],
    [0, -20]
  );

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    rotateX.set(
      -(e.clientY - rect.top - rect.height / 2) / 20
    );

    rotateY.set(
      (e.clientX - rect.left - rect.width / 2) / 20
    );
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const typedName = useTypewriter("Hi, I'm Sparsh.", 40);

  const words = [
    "web apps.",
    "experiences.",
    "solutions."
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  const typedWord = useTypewriter(words[roleIndex], 40);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const terminalLines = [
    "$ whoami",
    "Sparsh Gupta",
    "$ role",
    "Aspiring Full Stack Developer",
    "$ loading portfolio...",
    "✓ Ready to explore"
  ];

  const [terminalOutput, setTerminalOutput] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= terminalLines.length) return;

    const timeout = setTimeout(() => {
      const full = terminalLines[lineIndex];

      if (charIndex < full.length) {
        setCurrentLine(prev => prev + full[charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTerminalOutput(prev => [...prev, full]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex(prev => prev + 1);
      }
    }, 20);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex]);

  return (
    <section className="hero-section" ref={ref}>
      <div className="hero-scroll">
        <div className="hero-stage">
          <div className="hero-grid">

            <div className="hero-left">

              <motion.div
                className="hero-pill"
                style={{ y: yText, opacity: opacityText }}
              >
                <span className="hero-dot" />
                Aspiring Full Stack Developer
              </motion.div>

              <motion.h1
                className="hero-title"
                style={{ y: yText, opacity: opacityText }}
              >
                {typedName}
              </motion.h1>

              <motion.h1
                className="hero-outline"
                style={{ y: yText, opacity: opacityText }}
              >
                I build{" "}
                <span className="dynamic-word">
                  {typedWord}
                </span>
              </motion.h1>

              <motion.p
                className="hero-desc"
                style={{ y: yText, opacity: opacityText }}
              >
                I'm Sparsh Gupta, a Computer Science student
                at Lovely Professional University, passionate
                about full-stack development, responsive
                interfaces, and building practical software
                solutions.
              </motion.p>

              <motion.div
                className="hero-buttons"
                style={{ y: yText, opacity: opacityText }}
              >
                <a
                  className="btn-primary"
                  href="#projects"
                >
                  View Projects →
                </a>

                <a
                  className="btn-secondary"
                  href="/Sparsh-Gupta-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume ↗
                </a>
              </motion.div>

              <motion.div
                className="hero-stats"
                style={{ y: yText, opacity: opacityText }}
              >
                <div className="stat">
                  <span className="stat-number">2</span>
                  <span className="stat-label">
                    Featured Projects
                  </span>
                </div>

                <div className="stat">
                  <span className="stat-number">5</span>
                  <span className="stat-label">
                    Certificates
                  </span>
                </div>
              </motion.div>

            </div>

            <div className="hero-right">
              <motion.div
                className="terminal"
                style={{
                  x: terminalX,
                  scale: terminalScale,
                  opacity: terminalOpacity,
                  rotateX: smoothRotateX,
                  rotateY: smoothRotateY,
                  transformPerspective: 1000
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="terminal-header">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="terminal-title">
                    sparsh@portfolio
                  </span>
                </div>

                <div className="terminal-body">
                  {terminalOutput.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}

                  {lineIndex < terminalLines.length && (
                    <p>
                      {currentLine}
                      <span className="cursor" />
                    </p>
                  )}

                  <img
                    src="/sparsh-profile.png"
                    alt="Sparsh Gupta"
                    className="sparsh-portrait"
                  />
                </div>
              </motion.div>
            </div>

          </div>

          <motion.div
            className="scroll-hint"
            style={{
              opacity: scrollHintOpacity,
              y: scrollHintY
            }}
          >
            <span>Scroll to begin</span>
            <div className="scroll-wheel" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

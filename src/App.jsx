import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import ActivityTicker from "./components/ActivityTicker/ActivityTicker"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"
import Certificates from "./components/Certificates/Certificates"
import Timeline from "./components/TimeLine/TimeLine"
import { useState } from "react"
import Loader from "./components/Loader/Loader"
function App() {

    const [loading, setLoading] = useState(true)

  return (
     <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <ActivityTicker />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Timeline />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
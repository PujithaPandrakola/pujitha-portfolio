import VoiceIntro from "./components/VoiceIntro"
import CursorGlow from "./components/CursorGlow"
import ThemeToggle from "./components/ThemeToggle"
import AIChatbot from "./components/AIChatbot"
import { Toaster } from "react-hot-toast"
import Navbar from "./components/Navbar"
import MouseGlow from "./components/MouseGlow"
import ScrollProgress from "./components/ScrollProgress"
import Footer from "./components/Footer"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import GitHubStats from "./sections/GitHubStats"
import Timeline from "./sections/Timeline"
import Contact from "./sections/Contact"

function App() {
  return (

    <div className="relative min-h-screen bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <Toaster position="top-right" />

      <MouseGlow />

      <CursorGlow />

      <ScrollProgress />

      <ThemeToggle />

      <AIChatbot />

      <VoiceIntro />
      
      <div className="relative z-10">

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Timeline />

        <GitHubStats />

        <Contact />

        <Footer />

      </div>

    </div>
  )
}

export default App
import { Typewriter } from "react-simple-typewriter"
import profile from "../assets/profile.png"

import { motion } from "framer-motion"

import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaBrain,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa"

const Hero = () => {

  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center justify-center px-6 pt-24">

      {/* BACKGROUND BLOBS */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"
      ></motion.div>

      {/* MAIN CONTENT */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-cyan-400 text-xl mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-bold text-white leading-tight"
          >
            Pandrakola
            <br />
            Pujitha
          </motion.h1>

          {/* TYPING EFFECT */}

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl text-gray-400 mt-6 h-10"
          >

            <Typewriter
              words={[
                "Aspiring Data Analyst",
                "Data Scientist",
                "Machine Learning Enthusiast",
                "Python Developer",
              ]}

              loop={true}

              cursor

              cursorStyle="|"

              typeSpeed={70}

              deleteSpeed={50}

              delaySpeed={1500}
            />

          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-300 mt-8 leading-8 max-w-xl"
          >
            Passionate about transforming raw data into meaningful
            insights using Python, SQL, Machine Learning,
            and Data Visualization.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 mt-10 flex-wrap"
          >

            {/* VIEW PROJECTS */}

            <a
              href="#projects"
              className="bg-cyan-400 hover:scale-105 transition duration-300 text-black px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-cyan-500/30"
            >  
              View Projects
            </a>

            {/* CONTACT */}

            <a
              href="#contact" 
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 text-white px-8 py-4 rounded-2xl font-semibold"
            
            >
              Contact Me
            </a>

            {/* RESUME */}

            <a

              href="/resume.pdf"

              target="_blank"

              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 text-white px-8 py-4 rounded-2xl font-semibold"
            >
              Resume
            </a>

          </motion.div>

          {/* FLOATING TECH ICONS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 mt-14 text-cyan-400 text-4xl"
          >

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <FaPython />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <FaDatabase />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <FaChartBar />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            >
              <FaBrain />
            </motion.div>

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: 1.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative flex justify-center items-center"
        >

          {/* MAIN GLOW */}

          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

          {/* ORBIT CONTAINER */}

          <div className="relative w-[500px] h-[500px] flex items-center justify-center">

            {/* ROTATING SKILLS */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}

              className="absolute w-full h-full"
            >

              {/* PYTHON */}

              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-900 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                <FaPython />
                Python
              </div>

              {/* SQL */}

              <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-slate-900 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                <FaDatabase />
                SQL
              </div>

              {/* JAVA */}

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-slate-900 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                <FaJava />
                Java
              </div>

              {/* TABLEAU */}

              <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-slate-900 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                <FaChartBar />
                Tableau
              </div>

              {/* EXCEL */}

              <div className="absolute top-20 left-20 bg-slate-900 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                <FaMicrosoft />
                Excel
              </div>

              {/* R */}

              <div className="absolute bottom-20 right-20 bg-slate-900 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                <FaChartBar />
                R
              </div>

              {/* ML */}

              <div className="absolute top-20 right-20 bg-slate-900 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                <FaBrain />
                ML
              </div>

            </motion.div>

            {/* PROFILE IMAGE */}

            <motion.img
              whileHover={{
                scale: 1.05,
              }}

              src={profile}

              alt="profile"

              className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30 z-10"
            />

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero
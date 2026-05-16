import { motion } from "framer-motion"

import {
  FaPython,
  FaJava,
  FaDatabase,
  FaChartBar,
  FaMicrosoft,
  FaBrain,
} from "react-icons/fa"

const skills = [
  {
    name: "Python",
    icon: <FaPython />,
    description:
      "Programming language widely used in data analysis, machine learning, automation, and backend development.",
  },

  {
    name: "SQL",
    icon: <FaDatabase />,
    description:
      "Used for querying, managing, and analyzing structured data from databases.",
  },

  {
    name: "R",
    icon: <FaChartBar />,
    description:
      "Programming language mainly used for statistics, analytics, and data visualization.",
  },

  {
    name: "Java",
    icon: <FaJava />,
    description:
      "Object-oriented programming language used for backend systems and software development.",
  },

  {
    name: "Tableau",
    icon: <FaChartBar />,
    description:
      "Powerful data visualization tool used for dashboards and business insights.",
  },

  {
    name: "Excel",
    icon: <FaMicrosoft />,
    description:
      "Spreadsheet tool used for reporting, analysis, dashboards, and business calculations.",
  },

  {
    name: "Machine Learning",
    icon: <FaBrain />,
    description:
      "Building intelligent predictive systems using data-driven algorithms and models.",
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#020617] px-6 py-28 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-center text-white mb-24"
        >
          Tech Stack
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10">

          {skills.map((skill, index) => (

            <motion.div
              key={index}

              animate={{
                y: [0, -15, 0],
              }}

              transition={{
                duration: 4 + index,
                repeat: Infinity,
              }}

              whileHover={{
                scale: 1.08,
              }}

              className="group relative bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 overflow-hidden cursor-pointer shadow-lg hover:shadow-cyan-500/30 transition duration-500"
            >

              {/* GLOW EFFECT */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-500/10 transition duration-500"></div>

              {/* ICON */}

              <div className="text-6xl text-cyan-400 relative z-10">
                {skill.icon}
              </div>

              {/* NAME */}

              <h2 className="text-3xl font-bold text-white mt-6 relative z-10">
                {skill.name}
              </h2>

              {/* DESCRIPTION */}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="text-gray-300 leading-8 mt-6 relative z-10"
              >
                {skill.description}
              </motion.p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills
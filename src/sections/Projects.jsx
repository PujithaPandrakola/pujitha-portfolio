import Tilt from "react-parallax-tilt"

import { motion } from "framer-motion"

const projects = [

  {
    title: "Telecommunication Churn Prediction",

    description:
      "Predicts customer churn using machine learning models and data analysis techniques.",

    tech:
      "Python • Flask • Machine Learning • Pandas",

    github:
      "https://github.com/PujithaPandrakola/telecom-churn-prediction",

    demo:
      "https://telecom-churn-prediction-37ifdsn9qs3fqzehrbkl95.streamlit.app/",
  },

  {
    title: "Book Recommendation System",

    description:
      "Recommendation engine that suggests books based on user interests and similarity analysis.",

    tech:
      "Python • Recommendation System • Streamlit",

    github:
      "https://github.com/PujithaPandrakola/book-recommendation-system",

    demo:
      "https://book-recommendation-system-nc8pqit5hjajpreughgbu8.streamlit.app/",
  },

  {
    title: "Global Development Cluster Analysis",

    description:
      "Machine learning project that analyzes global development indicators and groups countries into clusters using unsupervised learning techniques.",

    tech:
      "Python • Machine Learning • Clustering • Streamlit • Data Visualization",

    github:
      "https://github.com/PujithaPandrakola/global-development-cluster-analysis",

    demo:
      "https://global-development-cluster-analysis-jhr973y4jk6cuvwkciq2pq.streamlit.app/",
  },

]

const Projects = () => {
  return (

    <section
      id="projects"
      className="min-h-screen bg-[#020617] px-6 py-28"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

          className="text-5xl md:text-6xl font-bold text-center text-white mb-24"
        >
          Featured Projects
        </motion.h1>

        {/* PROJECT GRID */}

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.03}
              transitionSpeed={2500}

              key={index}
            >

              <motion.div

                initial={{ opacity: 0, y: 80 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}

                className="bg-white/5 border border-cyan-400/20 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-cyan-500/30 transition duration-500 h-full"
              >

                {/* TITLE */}

                <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                  {project.title}
                </h2>

                {/* DESCRIPTION */}

                <p className="text-gray-300 leading-8">
                  {project.description}
                </p>

                {/* TECH */}

                <p className="text-cyan-300 mt-6">
                  {project.tech}
                </p>

                {/* BUTTONS */}

                <div className="flex gap-4 mt-10 flex-wrap">

                  <a
                    href={project.github}

                    target="_blank"

                    className="bg-cyan-400 hover:scale-105 transition duration-300 text-black px-6 py-3 rounded-2xl font-semibold"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}

                    target="_blank"

                    className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 text-white px-6 py-3 rounded-2xl font-semibold"
                  >
                    Live Demo
                  </a>

                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects
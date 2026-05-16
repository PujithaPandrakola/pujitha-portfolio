import { motion } from "framer-motion"

const About = () => {
  return (

    <section
      id="about"
      className="min-h-screen bg-[#020617] px-6 py-28"
    >

      <div className="max-w-6xl mx-auto">

        <motion.h1

          initial={{ opacity: 0, y: 80 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-5xl md:text-6xl font-bold text-center text-white mb-24"
        >
          About Me
        </motion.h1>

        <motion.div

          initial={{ opacity: 0, y: 80 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="bg-white/5 border border-cyan-400/20 backdrop-blur-xl rounded-3xl p-10 shadow-lg"
        >

          <p className="text-gray-300 leading-10 text-xl">

            I am an aspiring Data Analyst and Data Scientist passionate about
            transforming raw data into meaningful insights using modern data
            analysis and machine learning techniques.

            <br /><br />

            I enjoy building intelligent systems, interactive dashboards,
            and data-driven applications using Python, SQL, Tableau,
            Machine Learning, and modern web technologies.

            <br /><br />

            My goal is to solve real-world business problems using data,
            creativity, and technology while continuously learning and
            growing in the field of Artificial Intelligence and Analytics.

          </p>

        </motion.div>

      </div>

    </section>
  )
}

export default About
import { motion } from "framer-motion"

const timeline = [

  {
    year: "2021 - 2025",
    title: "B.Tech - Computer Science Engineering",
    place: "Anurag University",
  },

  {
    year: "2025",
    title: "Data Science Intern",
    place: "AI Variant",
  },

  {
    year: "2025",
    title: "Built Machine Learning Projects",
    place: "Churn Prediction • Book Recommendation System",
  },
]

const Timeline = () => {
  return (

    <section
      className="bg-[#020617] px-6 py-28"
    >

      <div className="max-w-5xl mx-auto">

        <motion.h1

          initial={{ opacity: 0, y: 80 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-5xl md:text-6xl font-bold text-center text-white mb-24"
        >
          Journey
        </motion.h1>

        <div className="relative border-l border-cyan-400/30">

          {timeline.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, x: -80 }}

              whileInView={{ opacity: 1, x: 0 }}

              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}

              className="mb-16 ml-10"
            >

              <div className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-[10px]"></div>

              <h2 className="text-cyan-400 text-lg">
                {item.year}
              </h2>

              <h1 className="text-3xl font-bold text-white mt-2">
                {item.title}
              </h1>

              <p className="text-gray-400 mt-3">
                {item.place}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Timeline
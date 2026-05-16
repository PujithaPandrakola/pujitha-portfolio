import { useRef, useState } from "react"

import emailjs from "emailjs-com"

import { motion } from "framer-motion"

import toast from "react-hot-toast"

const Contact = () => {

  const form = useRef()

  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {

    e.preventDefault()

    setLoading(true)

    emailjs.sendForm(

      "service_ndf8txm",

      "template_66knz64",

      form.current,

      "xDNjxJt7y6AGR_WUe"

    )

    .then(() => {

      toast.success("Message Sent Successfully!")

      setLoading(false)

      e.target.reset()

    })

    .catch(() => {

      toast.error("Something went wrong!")

      setLoading(false)

    })
  }

  return (

    <section
      id="contact"
      className="bg-[#020617] px-6 py-28"
    >

      <div className="max-w-4xl mx-auto">

        <motion.h1

          initial={{ opacity: 0, y: 80 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-5xl md:text-6xl font-bold text-center text-white mb-20"
        >
          Contact Me
        </motion.h1>

        <motion.form

          initial={{ opacity: 0, y: 80 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          ref={form}

          onSubmit={sendEmail}

          className="bg-white/5 border border-cyan-400/20 rounded-3xl p-10 backdrop-blur-xl shadow-lg"
        >

          {/* NAME */}

          <input
            type="text"

            name="name"

            placeholder="Your Name"

            required

            className="w-full mb-6 bg-[#0f172a] border border-cyan-400/20 rounded-2xl p-5 text-white outline-none focus:border-cyan-400 transition"
          />

          {/* EMAIL */}

          <input
            type="email"

            name="email"

            placeholder="Your Email"

            required

            className="w-full mb-6 bg-[#0f172a] border border-cyan-400/20 rounded-2xl p-5 text-white outline-none focus:border-cyan-400 transition"
          />

          {/* MESSAGE */}

          <textarea

            name="message"

            rows="6"

            placeholder="Your Message"

            required

            className="w-full mb-6 bg-[#0f172a] border border-cyan-400/20 rounded-2xl p-5 text-white outline-none focus:border-cyan-400 transition"
          ></textarea>

          {/* BUTTON */}

          <button

            type="submit"

            disabled={loading}

            className="bg-cyan-400 hover:scale-105 transition duration-300 text-black px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-cyan-500/20"
          >

            {loading ? "Sending..." : "Send Message"}

          </button>

        </motion.form>

      </div>

    </section>
  )
}

export default Contact
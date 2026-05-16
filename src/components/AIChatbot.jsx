import { useState } from "react"

const AIChatbot = () => {

  const [open, setOpen] = useState(false)

  return (

    <div className="fixed bottom-24 right-8 z-50">

      {/* BUTTON */}

      <button

        onClick={() => setOpen(!open)}

        className="bg-cyan-400 text-black px-5 py-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        AI
      </button>

      {/* CHAT BOX */}

      {open && (

        <div className="mt-4 w-80 bg-[#0f172a] border border-cyan-400/20 rounded-3xl p-6 shadow-2xl">

          <h1 className="text-cyan-400 text-2xl font-bold mb-4">
            AI Assistant
          </h1>

          <p className="text-gray-300 leading-8">
            Hi! I'm Pujitha's AI Portfolio Assistant.
            Feel free to explore projects, skills,
            certifications, and contact details.
          </p>

        </div>

      )}

    </div>
  )
}

export default AIChatbot
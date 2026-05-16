import { useEffect } from "react"

const VoiceIntro = () => {

  useEffect(() => {

    const speak = () => {

      const message = new SpeechSynthesisUtterance(

        "Hello, welcome to Pujitha's portfolio. Explore my projects, skills, and experience."

      )

      message.rate = 1

      message.pitch = 1

      message.volume = 1

      speechSynthesis.speak(message)
    }

    setTimeout(() => {
      speak()
    }, 2000)

  }, [])

  return null
}

export default VoiceIntro
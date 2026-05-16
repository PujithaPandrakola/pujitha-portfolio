import { FaMoon, FaSun } from "react-icons/fa"

import { useTheme } from "../context/ThemeContext"

const ThemeToggle = () => {

  const { darkMode, toggleTheme } = useTheme()

  return (

    <button

      onClick={toggleTheme}

      className="fixed bottom-8 right-8 z-50 bg-cyan-400 text-black p-4 rounded-full shadow-lg hover:scale-110 transition"
    >

      {darkMode ? <FaSun /> : <FaMoon />}

    </button>
  )
}

export default ThemeToggle
import { useEffect, useState } from "react"

const MouseGlow = () => {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])

  return (

    <div
      className="pointer-events-none fixed inset-0 z-0"

      style={{
        background: `
          radial-gradient(
            600px at ${position.x}px ${position.y}px,
            rgba(34,211,238,0.15),
            transparent 80%
          )
        `,
      }}
    />
  )
}

export default MouseGlow
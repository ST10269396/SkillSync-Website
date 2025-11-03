import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, ...options })

  return { ref, isInView }
}

export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return offset
}


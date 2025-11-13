"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY || window.pageYOffset
          const windowHeight = window.innerHeight
          const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          )
          
          // Check if we're near the bottom (within 200px) or if content is shorter than viewport
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 200
          const isContentShort = documentHeight <= windowHeight + 100

          setIsAtBottom(isNearBottom || isContentShort)
          ticking = false
        })
        ticking = true
      }
    }

    // Check on mount and resize
    const checkInitial = () => {
      handleScroll()
      // Also check after a short delay to account for dynamic content
      setTimeout(handleScroll, 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    checkInitial()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed z-50 bottom-0 left-0 w-full h-80 flex justify-center items-center"
          style={{ backgroundColor: "#e78a53" }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div
            className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12"
            style={{ color: "#121113" }}
          >
            <motion.div
              className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ul className="space-y-2">
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#121113" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(18, 17, 19, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#121113")}
                >
                  Home
                </li>
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#121113" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(18, 17, 19, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#121113")}
                >
                  Docs
                </li>
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#121113" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(18, 17, 19, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#121113")}
                >
                  Components
                </li>
              </ul>
              <ul className="space-y-2">
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#121113" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(18, 17, 19, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#121113")}
                >
                  Github
                </li>
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#121113" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(18, 17, 19, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#121113")}
                >
                  Twitter
                </li>
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#121113" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(18, 17, 19, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#121113")}
                >
                  Discord
                </li>
              </ul>
            </motion.div>
            <motion.h2
              className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] font-bold select-none"
              style={{ color: "#121113" }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              JobCracker
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

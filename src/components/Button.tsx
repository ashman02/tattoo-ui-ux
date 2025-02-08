import gsap from "gsap"
import { useRef } from "react"

const Button = () => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const handleHoverBtn = () => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.2,
        ease: "power3.inOut",
      },
    })
    tl.to(
      ".btn-word",
      {
        opacity: 0,
        scaleY: 0,
        stagger: 0.008,
        transformOrigin: "top left",
      },
      "<"
    )
      .to(btnRef.current, {
        color: "var(--foreground)",
        backgroundColor: "var(--primary)",
      })
      .to(
        ".btn-word",
        {
          opacity: 1,
          scaleY: 1,
          stagger: 0.008,
          transformOrigin: "bottom right",
        },
        "<"
      )
  }
  const handleHoverLeaveBtn = () => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.2,
        ease: "power3.inOut",
      },
    })
    tl.to(
      ".btn-word",
      {
        opacity: 0,
        scaleY: 0,
        stagger: 0.008,
        transformOrigin: "bottom left",
      },
      "<"
    )
      .to(btnRef.current, {
        color: "var(--background)",
        backgroundColor: "var(--foreground)",
      })
      .to(
        ".btn-word",
        {
          opacity: 1,
          scaleY: 1,
          stagger: 0.008,
          transformOrigin: "top left",
        },
        "<"
      )
  }
  return (
    <button
      ref={btnRef}
      onMouseEnter={handleHoverBtn}
      onMouseLeave={handleHoverLeaveBtn}
      className="header text-background bg-foreground px-2 py-2 md:px-4 md:py-4 rounded-lg md:rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden"
    >
      {"CONTACT".split("").map((char, index) => (
        <div key={index} className="btn-word origin-bottom-right">
          {char}
        </div>
      ))}
    </button>
  )
}

export default Button

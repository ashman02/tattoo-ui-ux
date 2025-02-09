import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useLenis } from "lenis/react"
import { useNavigate } from "react-router"

const Hero = () => {
  const words = ["Unshakable", "Inspired", "Reborn", "Unshakable"]
  const currentIndexRef = useRef(1)
  const lenis = useLenis()
  const navigate = useNavigate()

  const startAnimation = () => {
    return setInterval(() => {
      if (currentIndexRef.current === words.length - 1) {
        const tl = gsap.timeline()
        tl.to(".header-word", {
          yPercent: currentIndexRef.current * -100,
          duration: 0.8,
          ease: "circ.inOut",
        }).set(".header-word", { yPercent: 0, duration: 0 })
        currentIndexRef.current = 1
      } else {
        gsap.to(".header-word", {
          yPercent: -100 * currentIndexRef.current,
          duration: 0.8,
          ease: "circ.inOut",
        })
        currentIndexRef.current += 1
      }
    }, 2000)
  }

  useEffect(() => {
    const intervalId = startAnimation()
    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useGSAP(() => {
    gsap.to("#hero", {
      scaleY: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power3.inOut",
    })
  }, [])

  const handleClick = () => {
    lenis?.scrollTo('#contact', {
      duration: 4, 
      easing: (t) => 1 - Math.pow(1 - t, 3), 
      immediate: false, 
      lock: true, 
      offset: -50
    })

    navigate("#contact")
  }

  return (
    <section id="hero" className="relative opacity-0 scale-y-0 origin-bottom mx-2">
      <div className="image-container w-full h-[98vh] relative">
        <img
          src="/images/hero-image.jpg"
          alt="hero-section-image"
          className="w-full h-full rounded-2xl object-cover object-[40%]"
        />
        <div className="absolute z-10 w-full h-full bg-[linear-gradient(122deg,_rgba(8,8,8,0)_60%,_rgba(44,39,39,.6)_80%)] md:bg-[linear-gradient(122deg,_rgba(8,8,8,0)_64%,_rgba(44,39,39,.6)_80%)] lg:bg-[linear-gradient(142deg,_rgba(8,8,8,0)_60%,_rgba(44,39,39,.6)_70%)] top-0 rounded-2xl"></div>
      </div>
      <div className="button absolute right-2 md:right-6 lg:right-10 top-2 md:top-6 lg:top-10 z-30">
        <button onClick={handleClick} className="font-semibold px-3 py-1 rounded-lg bg-background hover:bg-background-shade cursor-pointer">
          CONTACT
        </button>
      </div>
      <div className="subheading text-lg lg:text-xl leading-[120%] absolute bottom-12 md:bottom-6 lg:bottom-10 z-20 left-2 md:left-6 lg:left-10 text-background w-[176px] md:w-[278px] lg:w-[368px]">
        Safety for beginners. Mastery for collectors. Magic for cover-ups.
      </div>
      <div className="main absolute z-20 right-2 md:right-6 lg:right-10 bottom-36 md:bottom-6 lg:bottom-10">
        <h1 className="text-primary header text-end w-[276px] md:w-[410px] lg:w-[596px] uppercase">
          Art That Makes You{" "}
          <div className="overflow-hidden h-[56px] md:h-[72px] lg:h-[104px]">
            <span>
              {words.map((w, i) => (
                <div className="header-word" key={i}>
                  {w}
                </div>
              ))}
            </span>
          </div>
        </h1>
      </div>
    </section>
  )
}

export default Hero

import { useGSAP } from "@gsap/react"
import Button from "./Button"
import gsap from "gsap"
import { useRef } from "react"
import { useLenis } from "lenis/react"
import { useNavigate } from "react-router"

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis()
  const navigate = useNavigate()
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add(
      {
        isDesktop: "(min-width : 1024px)",
        isTablet: "(min-width : 768px) and (max-width : 1023px)",
        isMobile: "(max-width : 767px)",
      },
      (context) => {
        const isMobile = context.conditions?.isMobile as boolean
        gsap.to(".about-word", {
          opacity: 1,
          scaleY: 1,
          ease: "power3.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: isMobile ? "top 20%" : "top 90%",
            end: "+=1000px",
            scrub: 0.1,
          },
        })
      }
    )
  }, [])

 

  const handleClick = () => {
    lenis?.scrollTo('#contact', {
      duration: 2, 
      easing: (t) => 1 - Math.pow(1 - t, 3), 
      immediate: false, 
      lock: true, 
      offset: -50
    })

    navigate("#contact")
  }

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-6 px-2 lg:py-14 flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-6"
    >
      <div className="user-image w-full md:w-[35vw] lg:w-[25vw] min-h-[70vh] md:min-h-[90vh] lg:min-h-[130vh]">
        <img
          src="/images/about-image.jpg"
          alt="user-image"
          className="w-full h-full min-h-[70vh] md:min-h-[90vh] lg:min-h-[130vh] object-cover object-center md:object-[-20rem] lg:object-[-10rem] rounded-lg md:rounded-2xl"
        />
      </div>
      <div className="about-text w-full md:w-[60vw] lg:w-[75vw] flex flex-col justify-between gap-8">
        <h1 className="font-semibold font-heading text-[56px] md:text-[80px] lg:text-[112px] leading-[54px] md:leading-[72px] lg:leading-[104px] tracking-[-2px] flex gap-x-2 md:gap-x-3 lg:gap-x-4 flex-wrap">
          {[
            "With 10 years",
            "of experience,",
            "I specialize in",
            "creating",
            "custom tattoos with",
            "consistent quality,",
            "precision,",
            "and artistry in",
            "every piece.",
          ].map((w, i) => (
            <span
              key={i}
              className="inline-block about-word opacity-0 scale-y-0 origin-top"
            >
              {w}
            </span>
          ))}
        </h1>
        <div>
          <Button text="CONTACT" onClick={handleClick}/>
        </div>
      </div>
    </section>
  )
}

export default About

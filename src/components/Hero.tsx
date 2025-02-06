import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Hero = () => {
  const words = ["Unshakable", "Inspired", "Reborn"]
  const [currentWord, setCurrentWord] = useState(words[0])
  const wordRef = useRef<HTMLSpanElement | null>(null)
  const startAnimation = () => {
    let i = 0
    setInterval(() => {
      if (i === words.length) {
        i = 0
      }
      setCurrentWord(words[i])
      i++
    }, 2000)
  }
  useEffect(() => {
    startAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(wordRef.current, {
      scaleY : 0,
    }).to(wordRef.current, {
      scaleY : 1,
    })
  }, [currentWord])
  return (
    <section className="relative">
      <div className="image-container w-full h-[98vh] relative">
        <img
          src="/images/hero-image.jpg"
          alt="hero-section-image"
          className="w-full h-full rounded-2xl object-cover object-[40%]"
        />
        <div className="absolute z-10 w-full h-full bg-[linear-gradient(122deg,_rgba(8,8,8,0)_60%,_rgba(44,39,39,.6)_80%)] md:bg-[linear-gradient(122deg,_rgba(8,8,8,0)_64%,_rgba(44,39,39,.6)_80%)] lg:bg-[linear-gradient(142deg,_rgba(8,8,8,0)_60%,_rgba(44,39,39,.6)_70%)] top-0 rounded-2xl"></div>
      </div>
      <div className="button absolute right-2 md:right-6 lg:right-10 top-2 md:top-6 lg:top-10">
        <button className="font-semibold px-3 py-1 rounded-lg bg-background hover:bg-background-shade cursor-pointer">
          CONTACT
        </button>
      </div>
      <div className="subheading absolute bottom-12 md:bottom-6 lg:bottom-10 z-20 left-2 md:left-6 lg:left-10 text-background text-lg lg:text-xl leading-[120%] w-[176px] md:w-[278px] lg:w-[368px]">
        Safety for beginners. Mastery for collectors. Magic for cover-ups.
      </div>
      <div className="main absolute z-20 right-2 md:right-6 lg:right-10 bottom-36 md:bottom-6 lg:bottom-10">
        <h1 className="text-primary font-semibold font-heading text-[56px] md:text-[80px] lg:text-[112px] leading-[48px] md:leading-[72px] lg:leading-[104px] tracking-[-2px] [word-spacing:-4px] md:[word-spacing:-8px] lg:[word-spacing:-16px] text-end w-[276px] md:w-[342px] lg:w-[502px]">
          Art That Makes You <span className="inline-block overflow-hidden origin-bottom" ref={wordRef} key={currentWord}>{currentWord}</span>
        </h1>
      </div>
    </section>
  )
}

export default Hero

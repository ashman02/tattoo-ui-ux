import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"
import Testimonial from "./Testimonial"

gsap.registerPlugin(ScrollTrigger)

const images = [
    {
        id : 1,
        path :  "/images/image-1.jpeg"
    },
    {
        id : 2,
        path :  "/images/image-2.jpg"
    },
    {
        id : 3,
        path :  "/images/image-3.jpeg"
    },
    {
        id : 4,
        path :  "/images/image-4.jpeg"
    },
    {
        id : 5,
        path :  "/images/image-5.jpeg"
    },
    {
        id : 6,
        path :  "/images/image-6.jpeg"
    },
]

const Work = () => {
    const imagesContainerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        gsap.to(".work-section", {
            opacity : 1,    
            duration : 0.8,
            ease : "power3.inOut"
        })

        const mm = gsap.matchMedia()
        mm.add(
            {
                isDesktop : "(min-width : 1024px)",
                isTablet : "(min-width : 768px) and (max-width : 1023px)",
                isMobile : "(max-width : 767px)"
            },
            (context) => {
                const isDesktop = context.conditions?.isDesktop as boolean
                const isTablet = context.conditions?.isTablet as boolean
                gsap.to(".images-container", {
                    x : isDesktop ? "-110vw" : isTablet ? "-210vw" : "-512vw",
                    ease : "power3.inOut",
                    duration : 10,
                    scrollTrigger : {
                        trigger : imagesContainerRef.current,
                        scrub : true,
                        start : isDesktop ? "top -25%" : isTablet ? "top -8%" : "top -10%",
                        end : "+=1000px",
                        pin : true
                    }
                })
            }
        )

        
    }, [])
    //w-[359px] md:w-[402px] lg:w-[459px]
  return (
    <section ref={imagesContainerRef} className="work-section my-container opacity-0">
        <h1 className="header uppercase">Recent Work</h1>
        <div className="slider overflow-hidden">
            <div className="images-container w-fit relative flex gap-6">
                {images.map((img) => (
                    <div key={img.id} className="w-[calc(100vw-16px)] md:w-[calc(50vw-22px)] lg:w-[calc(33.33vw-23.5px)] h-[688px] rounded-2xl overflow-hidden">
                        <img src={img.path} alt={`image-${img.id}`} className="w-full h-full rounded-2xl object-center object-cover hover:scale-110 duration-300 ease-in-out transition-all"/>
                    </div>
                ))}
            </div>
        </div>
        <Testimonial testimonial={`“They transformed my shaky idea for a half-sleeve into a jaw-dropping design that still gets compliments years later.”`} name="Daisy Hale" location="Los Angeles, CA" image="/images/user-1.jpg" />
    </section>
  )
}

export default Work

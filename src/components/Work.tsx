import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"

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
                    x : isDesktop ? "-101vw" : isTablet ? "-202vw" : "-511vw",
                    ease : "power3.inOut",
                    duration : 10,
                    scrollTrigger : {
                        trigger : imagesContainerRef.current,
                        scrub : true,
                        pin : true,
                        start : "top 2%",
                        end : "+=1000px",
                        markers : true
                    }
                })
            }
        )

        
    }, [])
    //w-[359px] md:w-[402px] lg:w-[459px]
  return (
    <section className="work-section py-6 lg:py-14 flex flex-col gap-8 md:gap-10 opacity-0">
        <h1 className="header uppercase">Recent Work</h1>
        <div ref={imagesContainerRef} className="slider overflow-hidden">
            <div className="images-container w-fit relative flex gap-6">
                {images.map((img) => (
                    <div key={img.id} className="w-[calc(100vw-16px)] md:w-[calc(50vw-21px)] lg:w-[calc(33vw-16px)] h-[688px] rounded-2xl overflow-hidden">
                        <img src={img.path} alt={`image-${img.id}`} className="w-full h-full rounded-2xl object-center object-cover hover:scale-110 duration-300 ease-in-out transition-all"/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work

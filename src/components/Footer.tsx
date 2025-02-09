import { useLenis } from "lenis/react"
import { useNavigate } from "react-router"

const Footer = () => {
    const lenis = useLenis()
    const navigate = useNavigate()
    const handleClick = () => {
        lenis?.scrollTo('#hero', {
          duration: 4, 
          easing: (t) => 1 - Math.pow(1 - t, 3), 
          immediate: false, 
          lock: true, 
          offset: -50
        })
    
        navigate("#hero")
      }
  return (
    <footer className="bg-foreground text-background px-2 py-2 flex flex-col ap-8 md:gap-10">
      <div className="socials h-[70vh] lg:h-[60vh] pt-2 flex flex-col justify-between items-start flex-wrap lg:flex-row">
        <div className="flex items-center gap-1">
          <a className="social-btn" href="https://www.instagram.com/cforchobar/" target="_blank">
            IG
          </a>
          <a className="social-btn" href="https://www.facebook.com/profile.php?id=61567812032228" target="_blank">
            FB
          </a>
          <a className="social-btn" href="https://www.linkedin.com/in/ashman02" target="_blank">
            LI
          </a>
          <a className="social-btn" href="https://x.com/ashman_002" target="_blank">
            X
          </a>
        </div>
        <span className="px-4 md:px-6 lg:px-8 py-1 text-[18px] md:text-[40px] lg:text-[56px] border-background border-2 rounded-full leading-[120%]">
          SIDHUASHMAN02@GMAIL.COM
        </span>
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row">
        <div className="md:text-2xl">©️ 2025 | Made by Ashman Sidhu</div>
        <div className="md:text-2xl cursor-pointer" onClick={handleClick}>Back to top</div>
      </div>
    </footer>
  )
}

export default Footer

import { RefObject, useRef } from "react"
import Button from "./Button"
import gsap from "gsap"


const Contact = () => {
  const nameRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLDivElement>(null)
  const handleOnFocus = (ref : RefObject<HTMLDivElement>) => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power4.inOut",
      },
    })
    tl.to(ref.current, {
      scaleX: 0,
      transformOrigin: "right",
    }).to(ref.current, {
      scaleX: 1,
      transformOrigin: "left",
    })
  }
  return (
    <section id="contact" className="my-container">
      <h1 className="header uppercase">say hi,</h1>
      <form className="flex flex-col gap-4 md:gap-6">
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="input-style"
            onFocus={() => handleOnFocus(nameRef)}
          />
          <div ref={nameRef} className="w-full h-[1px] bg-foreground-shade name-input" />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your email"
            className="input-style"
            onFocus={() => handleOnFocus(emailRef)}
          />
          <div ref={emailRef} className="w-full h-[1px] bg-foreground-shade email-input" />
        </div>
        <div>
          <textarea
            placeholder="Tattoo description"
            className="input-style"
            onFocus={() => handleOnFocus(descRef)}
          />
          <div ref={descRef} className="w-full h-[1px] bg-foreground-shade description-input" />
        </div>
      </form>
      <div>
        <Button text="SEND" onClick={() => {
          alert("You will be sending soon! don't worry")
        }} />
      </div>
    </section>
  )
}

export default Contact

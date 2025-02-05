const Hero = () => {
  return (
    <section className="relative">
      <div className="image-container w-full h-[98vh] relative">
        <img src="/images/hero-image.jpg" alt="hero-section-image" className="w-full h-full rounded-2xl object-cover"/>
        <div className="absolute w-full h-full bg-[linear-gradient(126deg,_rgba(8,8,8,0)_80%,_rgba(44,39,39,.6)_100%)] top-0 rounded-2xl"></div>
      </div>
      <div className="button absolute right-10 top-10">
        <button className="font-semibold px-3 py-1 rounded-lg bg-background hover:bg-background-shade cursor-pointer">CONTACT</button>
      </div>
    </section>
  )
}

export default Hero

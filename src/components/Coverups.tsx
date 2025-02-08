import { useState } from "react"
import Testimonial from "./Testimonial"

const coverups = [
  {
    id: 0,
    beforePath: "/images/coverup-one-before.jpg",
    afterPath: "/images/coverup-one-after.jpg",
  },
  {
    id: 1,
    beforePath: "/images/coverup-two-before.jpg",
    afterPath: "/images/coverup-two-after.jpg",
  },
]

const Coverups = () => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

    setSliderPosition(percent)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }
  return (
    <section className="my-container">
      <h1 className="header">COVER-UPS</h1>
      <div className="relative w-full" onMouseUp={handleMouseUp}>
        <div
          onMouseMove={handleMouseMove}
          onClick={(e) => {
            setIsDragging(true)
            handleMouseMove(e)
          }}
          onMouseDown={handleMouseDown}
          className="relative w-full aspect-[70/45] lg:aspect-[95/45] overflow-hidden select-none"
        >
          <img
            src={coverups[currentIndex].beforePath}
            alt="before image"
            className="w-full h-full rounded-lg md:rounded-2xl"
            draggable={false}
          />
          <div
            className="absolute top-0 left-0 right-0 w-full h-full aspect-[70/45] lg:aspect-[95/45] overflow-hidden select-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={coverups[currentIndex].afterPath}
              alt="after image"
              className="w-full h-full rounded-lg md:rounded-2xl"
              draggable={false}
            />
          </div>
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-background cursor-ew-resize"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          <div className="absolute bg-background rounded-full w-3 h-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
      <div className="flex gap-4 md:gap-6">
        {coverups.map((image) => (
          <div onClick={() => setCurrentIndex(image.id)} className="w-18 h-18 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]" key={image.id}>
            <img src={image.afterPath} alt="coverup" className={`w-full h-full rounded-lg md:rounded-2xl object-cover object-center ${image.id === currentIndex ? "opacity-75 cursor-auto" : "opacity-100 cursor-pointer"}`}/>
          </div>
        ))}
      </div>
      <div>
        <Testimonial testimonial={`“When I needed a cover-up for an old mistake, they didn’t just hide it—they turned it into my favorite piece.”`} image="/images/user-2.jpeg" name="Jane F" location="New York, USA"/>
      </div>
    </section>
  )
}

export default Coverups

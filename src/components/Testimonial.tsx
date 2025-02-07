interface TestimonialProps {
  testimonial : string
  name : string
  location : string
  image : string
}
const Testimonial = ({testimonial, name, location, image} : TestimonialProps) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 items-center justify-center w-[98%] md:w-[70%] lg:w-[50%] mx-auto">
      <div className="para text-center">{testimonial}</div>
      <div className="user-info flex gap-2 md:gap-3 items-center">
        <div className="img w-6 lg:w-10 h-6 lg:h-10 rounded-full">
          <img src={image} alt="user-image" className="w-full h-full object-cover object-center rounded-full" />
        </div>
        <div className="flex items-center gap-1">
          <div className="name para font-semibold">{name}</div>
          <div className="location para">{location}</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

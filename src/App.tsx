import About from "./components/About"
import Contact from "./components/Contact"
import Coverups from "./components/Coverups"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Work from "./components/Work"


const App = () => {
  return (
    <main className="pt-2 flex flex-col gap-3 lg:gap-4">
      <Hero/>
      <Work/>
      <About/>
      <Coverups/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App

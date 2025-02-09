import About from "./components/About"
import Contact from "./components/Contact"
import Coverups from "./components/Coverups"
import Hero from "./components/Hero"
import Work from "./components/Work"


const App = () => {
  return (
    <main className="py-2 px-2 flex flex-col gap-3 lg:gap-4">
      <Hero/>
      <Work/>
      <About/>
      <Coverups/>
      <Contact/>
      <div className="h-screen"></div>
    </main>
  )
}

export default App

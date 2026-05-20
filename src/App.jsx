import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Univers from './components/Univers'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <main className="bg-forge-black text-forge-light">
      <Navbar />
      <Hero />
      <Univers />
      <About />
      <Contact />
    </main>
  )
}

export default App
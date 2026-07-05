import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Requirements from './components/Requirements'
import Professions from './components/Professions'
import Benefits from './components/Benefits'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Requirements />
        <Professions />
        <Benefits />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Skills } from './components/Skills.jsx'
import { Services } from './components/Services.jsx'
import { Projects } from './components/Projects.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { CustomCursor } from './components/ui/CustomCursor.jsx'
import { WhatsAppFloat } from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-content-primary">
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <WhatsAppFloat />
    </div>
  )
}

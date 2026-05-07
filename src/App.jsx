import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Skills } from './components/Skills.jsx'
import { Services } from './components/Services.jsx'
import { Projects } from './components/Projects.jsx'
import { Branding } from './components/Branding.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { CustomCursor } from './components/ui/CustomCursor.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-content-primary">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="bg-blob left-[-10%] top-[-20%] h-[420px] w-[420px] bg-accent-primary/60 animate-float"
          style={{ animationDuration: '22s' }}
        />
        <div
          className="bg-blob bottom-[-25%] right-[-15%] h-[480px] w-[480px] bg-fuchsia-600/35 animate-float-slow"
          style={{ animationDuration: '28s' }}
        />
      </div>

      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Branding />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

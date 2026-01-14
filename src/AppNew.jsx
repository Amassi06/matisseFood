import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavbarNew from './components/NavbarNew'
import HeroNew from './components/HeroNew'
import ProduitsNew from './components/ProduitsNew'
import CommanderNew from './components/CommanderNew'
import RestaurantsNew from './components/RestaurantsNew'
import FooterNew from './components/FooterNew'

gsap.registerPlugin(ScrollTrigger)

function AppNew() {
  const mainRef = useRef(null)

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div ref={mainRef} style={{ minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      <NavbarNew />
      <main>
        <HeroNew />
        <ProduitsNew />
        <CommanderNew />
        <RestaurantsNew />
      </main>
      <FooterNew />
    </div>
  )
}

export default AppNew

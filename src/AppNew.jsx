import { useEffect, useRef } from 'react'
import NavbarNew from './components/NavbarNew'
import HeroNew from './components/HeroNew'
import HistoireNew from './components/HistoireNew'
import ProduitsNew from './components/ProduitsNew'
import CommanderNew from './components/CommanderNew'
import RestaurantsNew from './components/RestaurantsNew'
import FooterNew from './components/FooterNew'

function AppNew() {
  const mainRef = useRef(null)

  useEffect(() => {
    // Simple smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div ref={mainRef} style={{ minHeight: '100vh' }}>
      <NavbarNew />
      <main>
        <HeroNew />
        <HistoireNew />
        <ProduitsNew />
        <CommanderNew />
        <RestaurantsNew />
      </main>
      <FooterNew />
    </div>
  )
}

export default AppNew

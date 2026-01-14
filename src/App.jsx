import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import FloatingShapes from './components/FloatingShapes'
import Home from './pages/Home'
import Products from './pages/Products'
import Reservation from './pages/Reservation'
import Delivery from './pages/Delivery'
import Franchise from './pages/Franchise'
import Contact from './pages/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [loading, setLoading] = useState(true)
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Connect Lenis to ScrollTrigger
    lenisRef.current.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      lenisRef.current?.destroy()
    }
  }, [])

  return (
    <Router>
      <div className="relative min-h-screen">
        {loading && <Loader />}
        <CustomCursor />
        <FloatingShapes />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<Products />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/livraison" element={<Delivery />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

import Navbar from '@/components/site/Navbar'
import Hero from '@/components/sections/Hero'
import Pain from '@/components/sections/Pain'
import Products from '@/components/sections/Products'
import HowItWorks from '@/components/sections/HowItWorks'
import Dual from '@/components/sections/Dual'
import Evidence from '@/components/sections/Evidence'
import Business from '@/components/sections/Business'
import Privacy from '@/components/sections/Privacy'
import Faq from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-[#FAF6EE]">
      <Navbar />
      <main>
        <Hero />
        <Pain />
        <Products />
        <HowItWorks />
        <Dual />
        <Evidence />
        <Business />
        <Privacy />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

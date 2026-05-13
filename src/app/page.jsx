import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        {/* Divider */}
        <div className="section-divider" />

        <Work />

        {/* Divider */}
        <div className="section-divider" />

        <About />

        {/* Divider */}
        <div className="section-divider" />

        <Contact />
      </main>

      <Footer />
    </>
  )
}

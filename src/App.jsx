import React, { useRef } from 'react'
import heroimg from "./assets/hero.svg"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { motion } from "framer-motion"
import Footer from './components/Footer'
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 }
      }}
    >
      {children}
    </motion.div>
  );
}


const App = () => {
  return (
    <main>
      <Navbar />
      <FadeInWhenVisible>
        <Hero />
        <Partners />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Services />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Pricing />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Testimonials />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>
      <Footer />
    </main>
  )
}

export default App

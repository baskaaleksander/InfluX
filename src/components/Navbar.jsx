import React, { useEffect, useState } from 'react'
import useScreenSize from './useScreenSize';
import { Spin as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";


const navItems = ["Services", "Pricing", "Testimonials"]
const navLinks = navItems.map((link) => {
  return <a href={`#${link}`} key={link}>{link}</a>
})


const Navbar = () => {

  const screenSize = useScreenSize();
  
  return (
    screenSize < 672 ? <NavMobile /> : <NavNormal />
  )
}

const NavNormal = () => {
  
  return (
    <nav className='regular-menu'>
      <span className='brandname'>InfluX</span>
      <div className='nav-items'>
        {navLinks}
        <a href="#Contact"><button className='contact-btn'>Contact us!</button></a>
      </div>
    </nav>
  )
}

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='mobile-menu'>
      <Hamburger classNam='hamburger-menu' direction='right' toggled={isOpen} toggle={setOpen} />
      {isOpen && <div className='menu-open'>
      <AnimatePresence>
        <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              className='nav-mobile-links'
            >
            {navLinks}
            <a href="#Contact"><button className='contact-btn'>Contact us!</button></a>
          </motion.div>
        </AnimatePresence>
        </div>}
    </nav>
  )
}

export default Navbar
